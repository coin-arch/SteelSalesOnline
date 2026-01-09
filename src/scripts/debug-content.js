const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function inspectContent() {
    // Search for the specific page shown in screenshot
    // Title is "METAL MINISTRY | ALLOY STEELS"
    const { data: posts, error } = await supabase
        .from('post')
        .select('slug, title, content')
        .ilike('title', '%ALLOY STEELS%')
        .eq('company_id', process.env.NEXT_PUBLIC_COMPANY_ID)
        .limit(1);

    if (error) {
        console.error('Error:', error);
        return;
    }

    if (!posts || posts.length === 0) {
        console.log('No post found matching title.');
        return;
    }

    const post = posts[0];
    console.log(`Found Post: ${post.title} (${post.slug})`);
    console.log('--- CONTENT START ---');
    console.log(post.content.substring(post.content.length - 2000)); // Print last 2000 chars where footer usually is
    console.log('--- CONTENT END ---');
}

inspectContent();
