import { defineConfig } from '@prisma/config';
import dotenv from 'dotenv';

// Load environment variables for the Prisma CLI
dotenv.config({ path: '.env.local' });

const databaseUrl = process.env.DATABASE_URL + "&pgbouncer=true";

if (!databaseUrl) {
  throw new Error("DATABASE_URL must be defined in the environment.");
}

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    url: databaseUrl,
  }
});
