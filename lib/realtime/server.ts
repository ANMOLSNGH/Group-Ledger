import { Liveblocks } from "@liveblocks/node";

const secret = process.env.LIVEBLOCKS_SECRET_KEY;

let liveblocksClient: Liveblocks | null = null;

if (secret) {
  try {
    liveblocksClient = new Liveblocks({ secret });
  } catch (error) {
    console.warn("LIVEBLOCKS_SECRET_KEY is invalid. Realtime features disabled.");
    console.debug(error);
  }
} else {
  console.warn("LIVEBLOCKS_SECRET_KEY is not set. Realtime features disabled.");
}

export const liveblocks = liveblocksClient;
