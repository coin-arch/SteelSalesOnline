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

async function updateImagePaths() {
    console.log('Fetching posts to update image paths...');

    // SIMPLIFIED APPROACH: Fetch all posts and filter in memory
    const { data: posts, error } = await supabase
        .from('post')
        .select('id, content, structured_content')
        .eq('company_id', COMPANY_ID);

    if (error) {
        console.error('Error fetching posts:', error);
        return;
    }

    console.log(`Found ${posts.length} posts. Checking for /img/ paths...`);
    let fixedCount = 0;

    for (const post of posts) {
        let changed = false;
        let newContent = post.content;
        let newStructuredContent = post.structured_content;

        // 1. Update HTML Content
        if (newContent) {
            // Regex to match src="img/ or src="/img/
            const regex = /src=["']\/?img\/([^"']+)["']/g;
            if (regex.test(newContent)) {
                newContent = newContent.replace(regex, 'src="/images/$1"');
                changed = true;
            }

            // Also check for href="img/ if images are linked
            const hrefRegex = /href=["']\/?img\/([^"']+)["']/g;
            if (hrefRegex.test(newContent)) {
                newContent = newContent.replace(hrefRegex, 'href="/images/$1"');
                changed = true;
            }
        }

        // 2. Update Structured Content (JSON)
        if (newStructuredContent && Array.isArray(newStructuredContent)) {
            // Recursive function to walk the JSON tree
            const updateJSON = (node) => {
                let modified = false;
                if (!node) return false;

                if (typeof node === 'object') {
                    for (const key in node) {
                        if (typeof node[key] === 'string') {
                            // Check specifically for known image fields or content strings
                            if (node[key].includes('/img/') || node[key].startsWith('img/')) {
                                const original = node[key];
                                const updated = original.replace(/(\/)?img\//g, '/images/');
                                if (updated !== original) {
                                    node[key] = updated;
                                    modified = true;
                                }
                            }
                        } else if (typeof node[key] === 'object') {
                            if (updateJSON(node[key])) modified = true;
                        }
                    }
                } else if (Array.isArray(node)) {
                    node.forEach(child => {
                        if (updateJSON(child)) modified = true;
                    });
                }
                return modified;
            };

            if (updateJSON(newStructuredContent)) {
                changed = true;
            }
        }

        if (changed) {
            const { error: updateError } = await supabase
                .from('post')
                .update({
                    content: newContent,
                    structured_content: newStructuredContent
                })
                .eq('id', post.id);

            if (updateError) {
                console.error(`Error updating post ${post.id}:`, updateError);
            } else {
                fixedCount++;
                process.stdout.write('.');
            }
        }
    }

    console.log(`\nFixed image paths in ${fixedCount} posts.`);
}

updateImagePaths();
