import Image from 'next/image';
import Link from 'next/link';

interface CTABannerProps {
  title: string;
  subtitle?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTABanner({
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTABannerProps) {
  return (
    <section className="kd-cta" aria-label={title}>
      <div className="kd-cta__veil" />

      <div className="kd-container">
        <div className="kd-cta__inner">
          {/* Real clinic logo watermark */}
          <div className="kd-cta__logo">
            <Image
              src="/images/logo/kunde-logo.png"
              alt="坤德中醫養生軒 · Kunde TCM"
              width={260}
              height={72}
              className="kd-cta__logo-img"
            />
          </div>

          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
          <div className="flex flex-wrap justify-center gap-3">
            <Link href={primaryHref} className="kd-btn kd-btn--gold">
              {primaryLabel} →
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link href={secondaryHref} className="kd-btn kd-btn--outline-light">
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
