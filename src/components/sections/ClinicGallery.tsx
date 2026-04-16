import Image from 'next/image';
import type { Locale } from '@/lib/i18n';

const photos = [
  { src: '/images/clinic/reception-calligraphy.webp', alt: { zh: '前台', en: 'Reception' } },
  { src: '/images/clinic/waiting-room.webp', alt: { zh: '候诊区', en: 'Waiting area' } },
  { src: '/images/clinic/corridor-plants.webp', alt: { zh: '走廊', en: 'Corridor' } },
  { src: '/images/clinic/treatment-room-1.webp', alt: { zh: '治疗室', en: 'Treatment room' } },
  { src: '/images/clinic/entrance-sign.webp', alt: { zh: '门牌', en: 'Entrance sign' } },
  { src: '/images/clinic/herbal-shelf.webp', alt: { zh: '中药柜', en: 'Herbal display' } },
];

export function ClinicGallery({ locale }: { locale: Locale }) {
  return (
    <section className="py-12 lg:py-16 border-y border-border bg-white">
      <div className="container-kunde">
        <h2 className="font-serif text-h2 text-center mb-8">
          {locale === 'zh' ? '诊所实景' : 'Inside Our Clinic'}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {photos.map((p) => (
            <div key={p.src} className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src={p.src}
                alt={p.alt[locale]}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
