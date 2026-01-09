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

async function fixLinks() {
    console.log('Fetching posts to fix links...');
    const { data: posts, error } = await supabase
        .from('post')
        .select('id, content')
        .eq('company_id', COMPANY_ID);

    if (error) {
        console.error('Error fetching posts:', error);
        return;
    }

    console.log(`Found ${posts.length} posts. Checking for broken links...`);
    let fixedCount = 0;

    for (const post of posts) {
        if (!post.content) continue;

        let newContent = post.content;
        let changed = false;

        // Fix /products/about -> /about-us
        if (newContent.includes('href="/products/about"')) {
            newContent = newContent.replace(/href="\/products\/about"/g, 'href="/about-us"');
            changed = true;
        }

        // Fix /products/contact -> /contact-us
        if (newContent.includes('href="/products/contact"')) {
            newContent = newContent.replace(/href="\/products\/contact"/g, 'href="/contact-us"');
            changed = true;
        }

        // Fix index.html or /products/index -> /
        if (newContent.includes('href="index.html"')) {
            newContent = newContent.replace(/href="index.html"/g, 'href="/"');
            changed = true;
        }
        if (newContent.includes('href="/products/index"')) {
            newContent = newContent.replace(/href="\/products\/index"/g, 'href="/"');
            changed = true;
        }

        if (changed) {
            const { error: updateError } = await supabase
                .from('post')
                .update({ content: newContent })
                .eq('id', post.id);

            if (updateError) {
                console.error(`Error updating post ${post.id}:`, updateError);
            } else {
                fixedCount++;
                process.stdout.write('.');
            }
        }
    }

    console.log(`\nFixed links in ${fixedCount} posts.`);
}

fixLinks();
