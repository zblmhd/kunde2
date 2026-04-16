// Quick database setup script - creates missing tables via Supabase REST API
// Usage: node scripts/setup-db.mjs

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://qdatsbsgcmkmijfsjhjt.supabase.co';
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SERVICE_KEY) {
  // Read from .env.local
  const fs = await import('fs');
  const envContent = fs.readFileSync('.env.local', 'utf8');
  const match = envContent.match(/SUPABASE_SERVICE_ROLE_KEY=(.+)/);
  if (!match) {
    console.error('Cannot find SUPABASE_SERVICE_ROLE_KEY');
    process.exit(1);
  }
  process.env.SUPABASE_SERVICE_ROLE_KEY = match[1].trim();
}

const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
const headers = {
  'apikey': key,
  'Authorization': `Bearer ${key}`,
  'Content-Type': 'application/json',
  'Prefer': 'return=minimal',
};

// Check if table exists by trying to query it
async function tableExists(table) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?select=id&limit=0`, { headers });
  return res.status !== 404;
}

// We can't run raw SQL via REST API, but we can create records
// to test table existence. If tables don't exist, we need to use
// the supabase CLI or dashboard.

const bookingsExist = await tableExists('bookings');
const subscribersExist = await tableExists('subscribers');

console.log('bookings table:', bookingsExist ? 'EXISTS' : 'MISSING');
console.log('subscribers table:', subscribersExist ? 'EXISTS' : 'MISSING');

if (!bookingsExist || !subscribersExist) {
  console.log('\nPlease run the following SQL in Supabase Dashboard → SQL Editor:');
  console.log('File: supabase/migrations/002_bookings_subscribers.sql');
  process.exit(1);
}

console.log('\nAll tables ready!');
