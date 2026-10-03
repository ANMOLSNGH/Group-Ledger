import { NextResponse } from 'next/server';
import { getOptionalUserId } from '@/lib/auth';
import { renameLedger, deleteLedger } from '@/lib/ledger';

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ ledgerId: string }> }
) {
  try {
    const userId = await getOptionalUserId();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Await params object before using its properties in Next.js 15+
    const resolvedParams = await params;
    const { ledgerId } = resolvedParams;

    const body = await request.json();
    const name = body.name?.trim();

    if (!name) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }
    
    if (name.length > 50) {
      return NextResponse.json({ error: 'Name must be 50 characters or less' }, { status: 400 });
    }

    const ledger = await renameLedger(ledgerId, userId, name);
    return NextResponse.json(ledger);
  } catch (error: unknown) {
    if (error instanceof Error && error.message === 'Not found or unauthorized') {
      return NextResponse.json({ error: 'Not Found' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ ledgerId: string }> }
) {
  try {
    const userId = await getOptionalUserId();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const resolvedParams = await params;
    const { ledgerId } = resolvedParams;

    await deleteLedger(ledgerId, userId);
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    if (error instanceof Error && error.message === 'Not found or unauthorized') {
      return NextResponse.json({ error: 'Not Found' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
