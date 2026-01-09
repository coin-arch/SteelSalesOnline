import { createClient } from '@/lib/supabase';
import { notFound, redirect } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import ContentRenderer from '@/components/content/ContentRenderer';
import { Metadata } from 'next';
import '@/app/legacy-content.css'; // Keep for fallback

// ISR Revalidation
export const revalidate = 3600;

export async function generateStaticParams() {
    const supabase = createClient();
    const { data: posts } = await supabase.from('post').select('slug');
    return posts?.map(({ slug }) => ({ slug })) || [];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const supabase = createClient();
    const { data: post } = await supabase
        .from('post')
        .select('title, meta_title, meta_description, keywords, canonical_url')
        .eq('slug', slug)
        .eq('company_id', process.env.NEXT_PUBLIC_COMPANY_ID!)
        .single();

    if (!post) {
        return {
            title: 'Product Not Found | Metal Ministry Inc.',
        };
    }

    const title = post.meta_title || `${post.title} | Metal Ministry Inc.`;
    const description = post.meta_description || `Premium quality ${post.title} from Metal Ministry Inc. Global exporter of stainless steel, nickel alloys, and duplex steel products.`;
    const url = `https://metalministry.in/products/${slug}`;

    return {
        title,
        description,
        keywords: post.keywords,
        alternates: {
            canonical: post.canonical_url || url,
        },
        openGraph: {
            title,
            description,
            url,
            type: 'article',
            siteName: 'Metal Ministry Inc.',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
        }
    };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const supabase = createClient();
    const { data: post } = await supabase
        .from('post')
        .select('*')
        .eq('slug', slug)
        .eq('company_id', process.env.NEXT_PUBLIC_COMPANY_ID!)
        .single();

    if (!post) {
        notFound();
    }

    // Redirect Legacy "Category" Pages
    // E.g. Title: "METAL MINISTRY| ALLOY STEELS" -> Redirect to /products?category=Alloy Steels
    if (post.title && post.title.toLowerCase().startsWith('metal ministry') && post.title.includes('|')) {
        const parts = post.title.split('|');
        if (parts.length > 1) {
            const categoryCandidate = parts[1].trim();
            // List of broad categories to redirect to
            const knownCategories = [
                'Stainless Steels', 'Carbon Steels', 'Alloy Steels',
                'Inconel', 'Monel', 'Hastelloy', 'Titanium', 'Copper Alloys', 'Aluminium',
                'Duplex Steel', 'Super Alloys', 'Tool Steels'
            ];

            // Simple fuzzy check
            const match = knownCategories.find(c => c.toLowerCase() === categoryCandidate.toLowerCase());
            if (match) {
                redirect(`/products?category=${encodeURIComponent(match)}`);
            }

            // Specific overrides for known bad titles
            if (categoryCandidate.toUpperCase() === 'ALLOY STEELS') redirect(`/products?category=Alloy%20Steel`);
        }
    }


    // Helper to clean legacy HTML content
    const cleanContent = (html: string) => {
        if (!html) return '';
        let cleaned = html;

        // 1. Remove "Quick Enquiry" / Buildify Quote Box
        // Pattern: <div class="buildify_tm_quotebox"> ... </div>
        // This is often a large block.
        cleaned = cleaned.replace(/<div class="buildify_tm_quotebox">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/gi, '');
        // Fallback for just the box if nested differently
        cleaned = cleaned.replace(/<div class="buildify_tm_quotebox">[\s\S]*?<\/div>/gi, '');

        // 2. Remove "About Company" Sections (Footer Leakage)
        // Match <h3>About Company</h3>, OR <div class="footer_section_title">About Company</div>, OR just "About Company" at start of a block
        // We use a broader regex to catch variations
        cleaned = cleaned.replace(/<div class="footer_section_title">[\s\S]*?<\/div>[\s\S]*?<\/li>/gi, '');
        cleaned = cleaned.replace(/(?:<h3>|<div[^>]*>)\s*About Company\s*(?:<\/h3>|<\/div>)[\s\S]*/gi, '');
        // Aggressive fallback: if we see "About Company" followed by "Metal Ministry Inc.", cut it.
        cleaned = cleaned.replace(/About Company[\s\S]*Metal Ministry Inc\.[\s\S]*/gi, '');

        // 3. Remove "Helpful Links" section
        cleaned = cleaned.replace(/(?:<h3>|<div[^>]*>)\s*Helpful Links\s*(?:<\/h3>|<\/div>)[\s\S]*?<\/ul>/gi, '');

        // 4. Remove "Searches related to..." tables if they are just keyword stuffing
        // Use caution, sometimes these are useful, but often ugly. 
        // For now, let's keep them but ensure they don't break layout.

        // 5. Cleanup empty legacy lists and artifacts
        cleaned = cleaned.replace(/<li[^>]*>\s*<\/li>/gi, '');
        cleaned = cleaned.replace(/<ul[^>]*>\s*<\/ul>/gi, '');

        return cleaned;
    };


    const hasStructuredContent = post.structured_content && Array.isArray(post.structured_content) && post.structured_content.length > 0;

    // Apply cleaning
    const finalHtml = cleanContent(post.content);

    return (
        <div className="bg-gray-50 dark:bg-slate-950 min-h-screen py-10 transition-colors duration-300">
            <div className="container mx-auto px-4">

                {/* Breadcrumb */}
                <div className="text-sm text-gray-500 mb-6">
                    <a href="/" className="hover:text-blue-600 transition-colors">Home</a> <span className="mx-2">/</span>
                    <a href="/products" className="hover:text-blue-600 transition-colors">Products</a> <span className="mx-2">/</span>
                    <span className="text-gray-800 dark:text-gray-200 font-medium">{post.title}</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Main Content Area */}
                    <div className="w-full lg:w-3/4 bg-white dark:bg-slate-900 p-8 lg:p-12 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 transition-all duration-300">
                        {hasStructuredContent ? (
                            <ContentRenderer blocks={post.structured_content} />
                        ) : (
                            <div
                                className="legacy-content prose prose-blue dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: finalHtml }}
                            />
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="w-full lg:w-1/4">
                        <Sidebar />
                    </div>

                </div>
            </div>
        </div>
    );
}
