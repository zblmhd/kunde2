import { NextResponse, type NextRequest } from 'next/server';
import { addSubscriber } from '@/lib/store';

// Public endpoint — no auth required
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = (body.email ?? '').trim().toLowerCase();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 },
      );
    }

    await addSubscriber(email);
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error('Subscribe error:', err);
    return NextResponse.json(
      { error: 'Failed to subscribe' },
      { status: 500 },
    );
  }
}
