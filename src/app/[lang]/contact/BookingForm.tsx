'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { clinics } from '@/data/clinics';

interface Props {
  locale: 'zh' | 'en';
}

export function BookingForm({ locale }: Props) {
  const zh = locale === 'zh';
  const [submitted, setSubmitted] = useState(false);

  const L = zh
    ? {
        name: '姓名',
        phone: '电话',
        email: '邮箱',
        clinic: '希望就诊分店',
        symptoms: '症状 / 初步描述',
        best: '最佳联系时间',
        submit: '提交预约请求',
        success:
          '已收到您的预约请求，坤德团队会在 24 小时内与您联络确认时段。',
      }
    : {
        name: 'Full Name',
        phone: 'Phone',
        email: 'Email',
        clinic: 'Preferred Clinic',
        symptoms: 'Your symptoms or reason for visit',
        best: 'Best time to reach you',
        submit: 'Request an Appointment',
        success:
          "Thanks — we received your request and will reach out within 24 hours.",
      };

  if (submitted) {
    return (
      <div className="bg-cream border border-primary/30 rounded-lg p-6 text-center">
        <p className="text-body-lg">{L.success}</p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-4 md:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <label className="block">
        <span className="block text-sm font-semibold mb-1.5">
          {L.name} <span className="text-red-600">*</span>
        </span>
        <input
          required
          name="name"
          className="w-full h-11 px-3 border border-border rounded-md bg-white"
        />
      </label>
      <label className="block">
        <span className="block text-sm font-semibold mb-1.5">
          {L.phone} <span className="text-red-600">*</span>
        </span>
        <input
          type="tel"
          required
          name="phone"
          className="w-full h-11 px-3 border border-border rounded-md bg-white"
        />
      </label>
      <label className="block">
        <span className="block text-sm font-semibold mb-1.5">{L.email}</span>
        <input
          type="email"
          name="email"
          className="w-full h-11 px-3 border border-border rounded-md bg-white"
        />
      </label>
      <label className="block">
        <span className="block text-sm font-semibold mb-1.5">
          {L.clinic} <span className="text-red-600">*</span>
        </span>
        <select
          required
          name="clinic"
          className="w-full h-11 px-3 border border-border rounded-md bg-white"
          defaultValue=""
        >
          <option value="" disabled>
            {zh ? '请选择...' : 'Select...'}
          </option>
          {clinics.map((c) => (
            <option key={c.slug} value={c.slug}>
              {zh ? c.shortZh : c.shortEn}
            </option>
          ))}
        </select>
      </label>
      <label className="block md:col-span-2">
        <span className="block text-sm font-semibold mb-1.5">
          {L.symptoms} <span className="text-red-600">*</span>
        </span>
        <textarea
          required
          name="symptoms"
          rows={4}
          className="w-full px-3 py-2 border border-border rounded-md bg-white"
        />
      </label>
      <label className="block md:col-span-2">
        <span className="block text-sm font-semibold mb-1.5">{L.best}</span>
        <input
          name="best"
          placeholder={zh ? '例如：工作日下午' : 'e.g. weekday afternoons'}
          className="w-full h-11 px-3 border border-border rounded-md bg-white"
        />
      </label>
      <div className="md:col-span-2">
        <Button size="lg" className="w-full">
          {L.submit}
        </Button>
      </div>
    </form>
  );
}
