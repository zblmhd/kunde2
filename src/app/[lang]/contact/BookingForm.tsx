'use client';

import { useState, useMemo } from 'react';
import { clinics } from '@/data/clinics';

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

function getDateOptions(): { value: string; label: string }[] {
  const options: { value: string; label: string }[] = [];
  const today = new Date();
  const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  const weekdaysEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  for (let i = 1; i <= 30; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const dow = d.getDay();
    // Skip Sundays (clinic closed)
    if (dow === 0) continue;
    const dateStr = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const labelZh = `${d.getMonth() + 1}月${d.getDate()}日 (${weekdays[dow]})`;
    const labelEn = `${weekdaysEn[dow]}, ${d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`;
    options.push({ value: dateStr, label: labelZh + ' / ' + labelEn });
  }
  return options;
}

export function BookingForm({ locale }: Props) {
  const zh = locale === 'zh';
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const dateOptions = useMemo(() => getDateOptions(), []);

  const L = zh
    ? {
        name: '姓名',
        phone: '电话',
        email: '邮箱',
        clinic: '希望就诊分店',
        symptoms: '症状 / 初步描述',
        date: '期望就诊日期',
        time: '期望就诊时间段',
        submit: '提交预约请求',
        success: '已收到您的预约请求，坤德团队会在 24 小时内与您联络确认时段。',
        selectDate: '请选择日期...',
        selectTime: '请选择时间段...',
        morning: '上午 (9:00 - 12:00)',
        afternoon: '下午 (13:00 - 17:00)',
        selectClinic: '请选择...',
        phoneInvalid: '请输入有效的美国电话号码（10位数字）',
        phonePlaceholder: '(xxx) xxx-xxxx',
        submitting: '提交中...',
        submitError: '提交失败，请稍后重试或直接拨打 888-251-4088。',
      }
    : {
        name: 'Full Name',
        phone: 'Phone',
        email: 'Email',
        clinic: 'Preferred Clinic',
        symptoms: 'Your symptoms or reason for visit',
        date: 'Preferred Date',
        time: 'Preferred Time',
        submit: 'Request an Appointment',
        success: "Thanks — we received your request and will reach out within 24 hours.",
        selectDate: 'Select a date...',
        selectTime: 'Select a time...',
        morning: 'Morning (9:00 AM - 12:00 PM)',
        afternoon: 'Afternoon (1:00 PM - 5:00 PM)',
        selectClinic: 'Select...',
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
      setPhoneError(L.phoneInvalid);
    } else {
      setPhoneError('');
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isValidUSPhone(phone)) {
      setPhoneError(L.phoneInvalid);
      return;
    }

    setSubmitting(true);
    setError('');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      phone: phone.replace(/\D/g, ''),
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      clinic: (form.elements.namedItem('clinic') as HTMLSelectElement).value,
      symptoms: (form.elements.namedItem('symptoms') as HTMLTextAreaElement).value,
      preferredDate: (form.elements.namedItem('preferredDate') as HTMLSelectElement).value,
      preferredTime: (form.elements.namedItem('preferredTime') as HTMLSelectElement).value,
    };

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('fail');
      setSubmitted(true);
    } catch {
      setError(L.submitError);
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-cream border border-primary/30 rounded-lg p-6 text-center">
        <p className="text-body-lg">{L.success}</p>
      </div>
    );
  }

  const inputClass = 'w-full h-11 px-3 border border-border rounded-md bg-white';

  return (
    <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
      <label className="block">
        <span className="block text-sm font-semibold mb-1.5">
          {L.name} <span className="text-red-600">*</span>
        </span>
        <input required name="name" className={inputClass} />
      </label>

      <label className="block">
        <span className="block text-sm font-semibold mb-1.5">
          {L.phone} <span className="text-red-600">*</span>
        </span>
        <input
          type="tel"
          required
          name="phone"
          value={phone}
          onChange={handlePhoneChange}
          onBlur={handlePhoneBlur}
          placeholder={L.phonePlaceholder}
          className={`${inputClass} ${phoneError ? 'border-red-500 focus:ring-red-500' : ''}`}
        />
        {phoneError && (
          <p className="text-red-600 text-xs mt-1">{phoneError}</p>
        )}
      </label>

      <label className="block">
        <span className="block text-sm font-semibold mb-1.5">{L.email}</span>
        <input type="email" name="email" className={inputClass} />
      </label>

      <label className="block">
        <span className="block text-sm font-semibold mb-1.5">
          {L.clinic} <span className="text-red-600">*</span>
        </span>
        <select required name="clinic" className={inputClass} defaultValue="">
          <option value="" disabled>{L.selectClinic}</option>
          {clinics.map((c) => (
            <option key={c.slug} value={c.slug}>
              {zh ? c.shortZh : c.shortEn}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="block text-sm font-semibold mb-1.5">
          {L.date} <span className="text-red-600">*</span>
        </span>
        <select required name="preferredDate" className={inputClass} defaultValue="">
          <option value="" disabled>{L.selectDate}</option>
          {dateOptions.map((d) => (
            <option key={d.value} value={d.value}>
              {zh ? d.label.split(' / ')[0] : d.label.split(' / ')[1]}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="block text-sm font-semibold mb-1.5">
          {L.time} <span className="text-red-600">*</span>
        </span>
        <select required name="preferredTime" className={inputClass} defaultValue="">
          <option value="" disabled>{L.selectTime}</option>
          <option value="morning">{L.morning}</option>
          <option value="afternoon">{L.afternoon}</option>
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
          {submitting ? L.submitting : L.submit}
        </button>
      </div>
    </form>
  );
}
