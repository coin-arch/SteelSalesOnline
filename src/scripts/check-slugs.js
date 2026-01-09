const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
const clientEnvPath = path.join(__dirname, '../../.env.local');
const clientEnv = dotenv.config({ path: clientEnvPath }).parsed || {};

const SUPABASE_URL = clientEnv.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = clientEnv.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
const COMPANY_ID = clientEnv.NEXT_PUBLIC_COMPANY_ID || process.env.NEXT_PUBLIC_COMPANY_ID;

if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error('Missing Supabase credentials.');
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function checkSlugs() {
    console.log('Fetching content for alloy-steels-4130-chemical-properties...');
    const { data: posts, error } = await supabase
        .from('post')
        .select('slug, content')
        .eq('company_id', COMPANY_ID)
        .eq('slug', 'alloy-steels-4130-chemical-properties')
        .limit(1);

    if (error) {
        console.error('Error fetching post:', error);
        return;
    }

    if (posts && posts.length > 0) {
        console.log('--- CONTENT PREVIEW ---');
        console.log(posts[0].content.substring(0, 1000));
    } else {
        console.log('Post not found.');
    }
}

checkSlugs();
