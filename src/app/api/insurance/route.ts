import { NextResponse, type NextRequest } from 'next/server';
import { createInsuranceVerification } from '@/lib/store';

// Public endpoint — visitors submit insurance verification requests
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const name = (body.name ?? '').trim();
    const phone = (body.phone ?? '').trim();
    const email = (body.email ?? '').trim();

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Name, phone, and email are required' },
        { status: 400 },
      );
    }

    const verification = await createInsuranceVerification({
      name,
      phone,
      email,
      dateOfBirth: (body.dateOfBirth ?? '').trim(),
      insuranceCompany: (body.insuranceCompany ?? '').trim(),
      memberId: (body.memberId ?? '').trim(),
      groupNumber: (body.groupNumber ?? '').trim(),
      notes: (body.notes ?? '').trim(),
    });

    return NextResponse.json({ ok: true, id: verification.id }, { status: 201 });
  } catch (err) {
    console.error('Insurance verification error:', err);
    return NextResponse.json(
      { error: 'Failed to submit insurance verification' },
      { status: 500 },
    );
  }
}
