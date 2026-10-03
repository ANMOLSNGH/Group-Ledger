import { NextResponse } from 'next/server';
import { getOptionalUserId } from '@/lib/auth';
import { getLedgersForUser, createLedger } from '@/lib/ledger';
import { createLedgerSchema } from '@/lib/schema';

export async function GET() {
  try {
    const userId = await getOptionalUserId();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const ledgers = await getLedgersForUser(userId);
    return NextResponse.json(ledgers);
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const userId = await getOptionalUserId();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const body = await request.json();
    const parsed = createLedgerSchema.safeParse(body);
    
    if (!parsed.success) {
      return NextResponse.json({ 
        error: "Validation failed", 
        details: parsed.error.format() 
      }, { status: 400 });
    }

    const ledger = await createLedger(userId, { 
      name: parsed.data.name, 
      type: parsed.data.type 
    });
    return NextResponse.json(ledger, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
