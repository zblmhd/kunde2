import { Button } from './Button';

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
    <section className="bg-header text-white">
      <div className="container-kunde py-16 text-center">
        <h2 className="font-serif text-h2 text-white mb-4">{title}</h2>
        {subtitle && (
          <p className="text-body-lg text-white/80 max-w-3xl mx-auto mb-8">
            {subtitle}
          </p>
        )}
        <div className="flex flex-wrap justify-center gap-4">
          <Button href={primaryHref} variant="primary" size="lg">
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button
              href={secondaryHref}
              variant="secondary"
              size="lg"
              className="!bg-transparent !text-white !border-white hover:!bg-white/10"
            >
              {secondaryLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
