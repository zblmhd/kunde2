import { NextResponse, type NextRequest } from 'next/server';
import { createBooking } from '@/lib/store';

// Public endpoint — no auth required (visitors submit bookings)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const name = (body.name ?? '').trim();
    const phone = (body.phone ?? '').trim();
    const symptoms = (body.symptoms ?? '').trim();

    if (!name || !phone || !symptoms) {
      return NextResponse.json(
        { error: 'Name, phone, and symptoms are required' },
        { status: 400 },
      );
    }

    // Validate US phone: 10 digits after stripping formatting
    const digits = phone.replace(/\D/g, '');
    if (digits.length !== 10 && !(digits.length === 11 && digits.startsWith('1'))) {
      return NextResponse.json(
        { error: 'Invalid US phone number' },
        { status: 400 },
      );
    }

    const booking = await createBooking({
      name,
      phone,
      email: (body.email ?? '').trim(),
      clinic: (body.clinic ?? '').trim(),
      symptoms,
      preferredDate: (body.preferredDate ?? '').trim(),
      preferredTime: (body.preferredTime ?? '').trim(),
    });

    return NextResponse.json({ ok: true, id: booking.id }, { status: 201 });
  } catch (err) {
    console.error('Booking error:', err);
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 },
    );
  }
}
