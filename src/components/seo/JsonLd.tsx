interface Props {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
}

/**
 * Inline JSON-LD <script> tag.
 * Safe because JSON.stringify escapes </script> when we pass the data object.
 */
export function JsonLd({ data }: Props) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
