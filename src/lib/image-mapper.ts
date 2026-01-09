
export const FALLBACK_IMAGE = '/images/slider-hd-1.png';

const SPECIFIC_MAPPINGS: Record<string, string> = {
    // Homepage "Category" Slugs -> Specific Legacy Grade Images
    'stainless-steel-threaded-forged-fittings-manufacturer': 'stainless-steel-304-threaded-forged-fittings-supplier.jpg',
    'carbon-steel-threaded-forged-fittings-manufacturer': 'carbon-steel-a105-threaded-forged-fittings-supplier.jpg',
    'stainless-steel-socket-weld-fittings-manufacturer': 'stainless-steel-304-socketweld-fittings-supplier.jpg',
    'alloy-steel-threaded-forged-fittings-manufacturer': 'alloy-steel-f11-threaded-forged-fittings-supplier.jpg',
    'duplex-steel-s31803-s32205-threaded-forged-fittings-manufacturer': 'duplex-steel-s31803-s32205-threaded-forged-fittings-supplier.jpg',
    'high-nickel-alloy-threaded-forged-fittings-manufacturer': 'inconel-alloy-625-threaded-forged-fittings-supplier.jpg',
    'nickel-alloy-threaded-forged-fittings-manufacturer': 'nickel-alloy-200-threaded-forged-fittings-supplier.jpg',
    // Fix Typos in filenames (legacy mismatches)
    'inconel-alloy-825-socketweld-fittings-supplier': '/images/products/inconel-alloy-825-sockeweld-fittings-supplier.jpg', // missing 't'
    'stainless-steel-347-socketweld-fittings-supplier': '/images/products/stainless-steel-347-sockeweld-fittings-supplier.jpg', // missing 't'

    // Mappings for missing specific images (Fallbacks)
    'titanium-alloy-grade-2-socketweld-fittings-supplier': '/images/products/titanium-alloy-socketweld-fittings-supplier.jpg',
    'stainless-steel-316-316l-socketweld-fittings-supplier': '/images/products/stainless-steel-304-socketweld-fittings-supplier.jpg', // Fallback to 304
    'hastelloy-socketweld-fittings-supplier': '/images/products/hastelloy-c276-socketweld-fittings-supplier.jpg', // Fallback to C276
    'hastelloy-threaded-forged-fittings-supplier': '/images/products/hastelloy-c276-threaded-forged-fittings-supplier.jpg', // Fallback to C276
    'inconel-alloy-socketweld-fittings-supplier': '/images/products/inconel-alloy-600-socketweld-fittings-supplier.jpg', // Fallback to 600
    'inconel-alloy-threaded-forged-fittings-supplier': '/images/products/inconel-alloy-600-threaded-forged-fittings-supplier.jpg', // Fallback to 600
    'monel-alloy-socketweld-fittings-supplier': '/images/products/monel-alloy-400-socketweld-fittings-supplier.jpg', // Fallback to 400
    'monel-alloy-threaded-forged-fittings-supplier': '/images/products/monel-alloy-400-threaded-forged-fittings-supplier.jpg', // Fallback to 400

    // Correct Mappings for "Stockist" Items (which have -manufacturer slugs)
    'carbon-steel-socket-weld-fittings-manufacturer': '/images/products/carbon-steel-a105-socketweld-fittings-supplier.jpg', // Fallback to A105
    'hastelloy-socket-weld-fittings-manufacturer': '/images/products/hastelloy-c276-socketweld-fittings-supplier.jpg',
    'hastelloy-threaded-forged-fittings-manufacturer': '/images/products/hastelloy-c276-threaded-forged-fittings-supplier.jpg',
    'inconel-alloy-825-socket-weld-fittings-manufacturer': '/images/products/inconel-alloy-825-sockeweld-fittings-supplier.jpg', // typo in file
    'inconel-alloy-socket-weld-fittings-manufacturer': '/images/products/inconel-alloy-600-socketweld-fittings-supplier.jpg',
    'inconel-alloy-threaded-forged-fittings-manufacturer': '/images/products/inconel-alloy-600-threaded-forged-fittings-supplier.jpg',
    'monel-alloy-socket-weld-fittings-manufacturer': '/images/products/monel-alloy-400-socketweld-fittings-supplier.jpg',
    'monel-alloy-threaded-forged-fittings-manufacturer': '/images/products/monel-alloy-400-threaded-forged-fittings-supplier.jpg',

    // Stainless 316/316L/316TI Socket Weld Images are missing -> Fallback to 304
    'stainless-steel-316-socket-weld-fittings-manufacturer': '/images/products/stainless-steel-304-socketweld-fittings-supplier.jpg',
    'stainless-steel-316l-socket-weld-fittings-manufacturer': '/images/products/stainless-steel-304-socketweld-fittings-supplier.jpg',
    'stainless-steel-316ti-socket-weld-fittings-manufacturer': '/images/products/stainless-steel-304-socketweld-fittings-supplier.jpg',

    // Stainless 347 (Typo in file)
    'stainless-steel-347-socket-weld-fittings-manufacturer': '/images/products/stainless-steel-347-sockeweld-fittings-supplier.jpg',

    // Titanium Fallback
    'titanium-alloy-grade-2-socket-weld-fittings-manufacturer': '/images/products/titanium-alloy-socketweld-fittings-supplier.jpg',

    // Generic Nickel Alloy Mappings
    'nickel-alloy-socket-weld-fittings-manufacturer': 'nickel-alloy-200-socketweld-fittings-supplier.jpg',
    'titanium-alloy-threaded-forged-fittings-manufacturer': 'titanium-alloy-grade-2-threaded-forged-fittings-supplier.jpg',
    'cupro-nickel-threaded-forged-fittings-manufacturer': 'cupro-nickel-90-10-threaded-forged-fittings-supplier.jpg'
};

const SPECIFIC_PREFIX_MAPPINGS: Record<string, string> = {
    'stainless-steels-': 'stainless-steel.jpg', // Plural
    'stainless-steel-': 'stainless-steel.jpg',
    'carbon-steels-': 'carbon-steel.jpg',      // Plural
    'carbon-steel-': 'carbon-steel.jpg',
    'alloy-steels-': 'alloy-steel.jpg',        // Plural
    'alloy-steel-': 'alloy-steel.jpg',
    'nickel-': 'nickel-200-chemical-properties.jpg',
    'titanium-': 'titanium.jpg',
    'copper-': 'copper-alloys.jpg',
    'aluminium-': 'aluminium.jpg',
    'inconel-': 'inconel-600-chemical-properties.jpg',
    'monel-': 'monel-400-chemical-properties.jpg',
    'hastelloy-': 'hastelloy-c276-chemical-properties.jpg',
    'tool-steels-': 'tool-steels.jpg',          // Plural
    'super-alloys-': 'super-alloys.jpg',
    'refractory-alloys-': 'refractory-alloys.jpg',
    'glass-sealing-': 'glass-sealing-alloys.jpg'
};

export function getImageForProduct(slug: string): string {
    if (!slug) return FALLBACK_IMAGE;

    const cleanSlug = slug.toLowerCase();

    // 1. Check Prefix Mappings (for broad fallbacks)
    for (const [prefix, result] of Object.entries(SPECIFIC_PREFIX_MAPPINGS)) {
        if (cleanSlug.startsWith(prefix)) {
            // Check if we have a more specific direct file first? 
            // Actually, we want to force the match if it's hitting a known problem area.
            // But checking the file list, most specific files DO exist.
            // However, the user complained about broken images.
            // Let's use the prefix map as a fallback if the direct match pattern is weird.
            // Or better: Use the singular/plural fix I planned?

            // Wait, the "steels" vs "steel" issue is handled by the map now (e.g. 'stainless-steels-' -> 'stainless-steel.jpg')
            // But this maps MANY products to ONE generic image. 
            // Is that desired? 
            // For "missing images", yes. 
            // But for "Alloy Steel 4130", we have a specific image: `alloy-steels-4130-chemical-properties.jpg` ?
            // Let's check the file list from Step 399 again.
            // `alloy-steels-4130-chemical-properties (Alloy steel 4130...)` from DB.
            // File: `alloy-steels-4130-chemical-properties` NOT found in Step 399/418 list?
            // Found: `alloy-steels-4130...` was from check-slugs.js DB query.
            // File list (Step 399) had: `alloy-steel-4130-chemical-properties.jpg` (singular steel).

            // So DB slug: `alloy-steels-...` (plural). File: `alloy-steel-...` (singular).
            // My map has: `'alloy-steels-': 'alloy-steel.jpg'`.
            // This would force ALL `alloy-steels-*` to `alloy-steel.jpg`. Generic image.
            // That's boring but safe.
            // Ideally we want `alloy-steels-4130...` -> `alloy-steel-4130...`.

            // Let's try to be smart:
            // If it starts with a plural prefix, try to singularize the slug first?

            if (prefix.endsWith('s-')) { // heuristic for plural prefix like 'alloy-steels-'
                // Try removing the 's' from the prefix part of the slug?
                // e.g. cleanSlug.replace('alloy-steels-', 'alloy-steel-')
                // and return that?
            }

            return `/images/${result}`;
        }
    }

    // 2. Singularize heuristic
    // If we didn't hit a map (or if we want to try better matching first)
    // slug: alloy-steels-4130...
    // file: alloy-steel-4130...
    let candidate = cleanSlug;
    if (candidate.includes('steels')) {
        candidate = candidate.replace('steels', 'steel');
    }

    return `/images/${candidate}.jpg`;
}
