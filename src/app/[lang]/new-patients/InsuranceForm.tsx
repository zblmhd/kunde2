'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

interface Props {
  locale: 'zh' | 'en';
}

export function InsuranceForm({ locale }: Props) {
  const zh = locale === 'zh';
  const [submitted, setSubmitted] = useState(false);

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
      };

  if (submitted) {
    return (
      <div className="bg-cream border border-primary/30 rounded-lg p-6 text-center">
        <p className="text-body-lg">{labels.success}</p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-4 md:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        // Stub — wires into /api/insurance-inquiry in Step 6.
        setSubmitted(true);
      }}
    >
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
          className="w-full h-11 px-3 border border-border rounded-md bg-white"
        />
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
      <div className="md:col-span-2">
        <Button size="lg" className="w-full">
          {labels.submit}
        </Button>
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
