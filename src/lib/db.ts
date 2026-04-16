// Supabase server-side client (service_role key — server only, never in browser).
// Used exclusively by API routes and Server Actions in /app/api/admin/**.
// Never import this in client components or pages — it would leak the service key.

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error(
    'Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables. ' +
      'Copy .env.example to .env.local and fill in the values.',
  );
}

// Singleton — module-level so it is reused across hot reloads in dev.
export const db = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { persistSession: false },
  global: {
    fetch: (url: RequestInfo | URL, options?: RequestInit) =>
      fetch(url, { ...options, cache: 'no-store' }),
  },
});
