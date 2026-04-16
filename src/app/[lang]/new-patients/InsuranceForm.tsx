'use client';

import { useState } from 'react';

interface Props {
  locale: 'zh' | 'en';
}

function formatUSPhone(value: string): string {
  const digits = value.replace(/\D/g, '');
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
}

function isValidUSPhone(value: string): boolean {
  const digits = value.replace(/\D/g, '');
  return digits.length === 10;
}

export function InsuranceForm({ locale }: Props) {
  const zh = locale === 'zh';
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const labels = zh
    ? {
        name: '姓名',
        email: '电子邮件',
        dob: '出生日期',
        plan: '保险计划',
        memberId: '保险会员编号',
        phone: '电话',
        source: '您是怎么知道我们的？',
        submit: '提交保险查询',
        sourceOptions: ['Google 搜索', '朋友介绍', '社交媒体', '其他'],
        plans: ['UHC', 'NYSHIP', 'Empire BlueCross BlueShield', 'Aetna', 'Oxford', 'Cigna', '其他'],
        success: '我们已收到您的保险查询，坤德团队将在 24 小时内与您联络确认福利。',
        phoneInvalid: '请输入有效的美国电话号码（10位数字）',
        phonePlaceholder: '(xxx) xxx-xxxx',
        submitting: '提交中...',
        submitError: '提交失败，请稍后重试或直接拨打 888-251-4088。',
      }
    : {
        name: 'Full Name',
        email: 'Email',
        dob: 'Date of Birth',
        plan: 'Insurance Plan',
        memberId: 'Member ID',
        phone: 'Phone',
        source: 'How did you hear about us?',
        submit: 'Verify My Insurance (Free)',
        sourceOptions: ['Google Search', 'Friend Referral', 'Social Media', 'Other'],
        plans: ['UHC', 'NYSHIP', 'Empire BlueCross BlueShield', 'Aetna', 'Oxford', 'Cigna', 'Other'],
        success:
          "Thanks! We received your insurance inquiry and our team will get back to you within 24 hours.",
        phoneInvalid: 'Please enter a valid US phone number (10 digits)',
        phonePlaceholder: '(xxx) xxx-xxxx',
        submitting: 'Submitting...',
        submitError: 'Submission failed. Please try again or call 888-251-4088.',
      };

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    const formatted = formatUSPhone(e.target.value);
    setPhone(formatted);
    if (phoneError && isValidUSPhone(formatted)) {
      setPhoneError('');
    }
  }

  function handlePhoneBlur() {
    if (phone && !isValidUSPhone(phone)) {
      setPhoneError(labels.phoneInvalid);
    } else {
      setPhoneError('');
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isValidUSPhone(phone)) {
      setPhoneError(labels.phoneInvalid);
      return;
    }

    setSubmitting(true);
    setError('');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      phone: phone.replace(/\D/g, ''),
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      dateOfBirth: (form.elements.namedItem('dob') as HTMLInputElement).value,
      insuranceCompany: (form.elements.namedItem('plan') as HTMLSelectElement).value,
      memberId: (form.elements.namedItem('memberId') as HTMLInputElement).value,
      groupNumber: '',
      notes: (form.elements.namedItem('source') as HTMLSelectElement).value,
    };

    try {
      const res = await fetch('/api/insurance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('fail');
      setSubmitted(true);
    } catch {
      setError(labels.submitError);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-cream border border-primary/30 rounded-lg p-6 text-center">
        <p className="text-body-lg">{labels.success}</p>
      </div>
    );
  }

  return (
    <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
      <Field label={labels.name} required>
        <input
          type="text"
          required
          name="name"
          className="w-full h-11 px-3 border border-border rounded-md bg-white"
        />
      </Field>
      <Field label={labels.email} required>
        <input
          type="email"
          required
          name="email"
          className="w-full h-11 px-3 border border-border rounded-md bg-white"
        />
      </Field>
      <Field label={labels.dob} required>
        <input
          type="date"
          required
          name="dob"
          className="w-full h-11 px-3 border border-border rounded-md bg-white"
        />
      </Field>
      <Field label={labels.phone} required>
        <input
          type="tel"
          required
          name="phone"
          value={phone}
          onChange={handlePhoneChange}
          onBlur={handlePhoneBlur}
          placeholder={labels.phonePlaceholder}
          className={`w-full h-11 px-3 border rounded-md bg-white ${phoneError ? 'border-red-500' : 'border-border'}`}
        />
        {phoneError && (
          <p className="text-red-600 text-xs mt-1">{phoneError}</p>
        )}
      </Field>
      <Field label={labels.plan} required>
        <select
          required
          name="plan"
          className="w-full h-11 px-3 border border-border rounded-md bg-white"
          defaultValue=""
        >
          <option value="" disabled>
            {zh ? '请选择...' : 'Select...'}
          </option>
          {labels.plans.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </Field>
      <Field label={labels.memberId} required>
        <input
          type="text"
          required
          name="memberId"
          className="w-full h-11 px-3 border border-border rounded-md bg-white"
        />
      </Field>
      <Field label={labels.source} required className="md:col-span-2">
        <select
          required
          name="source"
          className="w-full h-11 px-3 border border-border rounded-md bg-white"
          defaultValue=""
        >
          <option value="" disabled>
            {zh ? '请选择...' : 'Select...'}
          </option>
          {labels.sourceOptions.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </Field>

      {error && (
        <div className="md:col-span-2">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={submitting}
          className="w-full h-12 rounded-lg bg-primary hover:bg-primary-dark text-white text-lg font-bold shadow-md transition-colors disabled:opacity-60"
        >
          {submitting ? labels.submitting : labels.submit}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  required,
  children,
  className,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className ?? ''}`}>
      <span className="block text-sm font-semibold mb-1.5 text-[color:var(--color-text)]">
        {label} {required && <span className="text-red-600">*</span>}
      </span>
      {children}
    </label>
  );
}
