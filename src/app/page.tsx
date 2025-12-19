'use client';

import Link from 'next/link';
import Image from 'next/image';
import HeroSlider from '@/components/HeroSlider';
import { ArrowRight, Globe, ShieldCheck, Users, Clock } from 'lucide-react';

const PRODUCTS = [
  {
    title: "Lap Joint Flanges",
    desc: "ANSI B16.5, Class 150-2500",
    image: "/images/lap-joint-flanges.jpg",
    link: "/products/stainless-steel-nickel-alloy-duplex-steel-lap-joint-flanges-manufacturer"
  },
  {
    title: "Butt Welded Fittings",
    desc: "Elbow, Tee, Reducer, Cap, Stub Ends",
    image: "/images/butt-weld-pipe-fittings.jpg",
    link: "/products/stainless-steel-buttweld-fittings-manufacturer"
  },
  {
    title: "Cupro Nickel Fitting",
    desc: "Cu-Ni 90/10 & 70/30",
    image: "/images/cupro-nickel-fitting.jpg",
    link: "/products/cupro-nickel-pipe-fittings-manufacturer"
  },
  {
    title: "Copper Pipes",
    desc: "Cupro-Nickel, SMO 254",
    image: "/images/copper_nickel_cuni.jpg",
    link: "/products/copper-nickel-pipes-tubes-manufacturer"
  },
  {
    title: "Plate Flanges",
    desc: "Custom Sizes Available",
    image: "/images/plate_flange.jpg",
    link: "/products/stainless-steel-nickel-alloy-duplex-steel-plate-flanges-manufacturer"
  },
  {
    title: "Titanium Pipe Fitting",
    desc: "Grade 1, 2, 5, 7, 9, 12",
    image: "/images/titanium-pipe-fittings.jpg",
    link: "/products/titanium-pipe-fittings-manufacturer"
  },
  {
    title: "Forged Fittings",
    desc: "Socket Weld, Threaded, Outlets",
    image: "/images/forged-fittings.jpg",
    link: "/products/stainless-steel-forged-fittings-manufacturer"
  },
  {
    title: "Blind Flanges",
    desc: "All Schedules & Pressure Ratings",
    image: "/images/blind-flanges.jpg",
    link: "/products/stainless-steel-nickel-alloy-duplex-steel-blind-flanges-manufacturer"
  },
  {
    title: "Hastelloy Pipe Fitting",
    desc: "C276, C22, B2, B3",
    image: "/images/hastelloy-pipe-fittings.jpg",
    link: "/products/hastelloy-alloy-pipe-fittings-manufacturer"
  },
  {
    title: "Threaded Flanges",
    desc: "NPT, BSPT, BSPP",
    image: "/images/threaded-flanges.jpg",
    link: "/products/stainless-steel-nickel-alloy-duplex-steel-threaded-flanges-manufacturer"
  }
  // Removed Nickel 200/201 to balance grid (Total reduced to 10 + 1 Big = 11? Wait. If user said 'remove 1', that implies 1 was dangling. If I remove 1, 0 dangling?)
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      {/* 1. Hero Slider */}
      <HeroSlider />

      {/* 2. Trust Indicators Strip */}
      <div className="bg-blue-900 text-white py-12 relative overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
          <div className="flex flex-col items-center text-center p-4 group hover:-translate-y-1 transition-transform">
            <Globe className="w-8 h-8 text-blue-400 mb-2 group-hover:text-white transition-colors" />
            <div className="text-4xl font-bold mb-1 text-blue-100">25+</div>
            <div className="text-xs uppercase tracking-widest text-blue-300">Countries Exported</div>
          </div>
          <div className="flex flex-col items-center text-center p-4 border-l border-blue-800 group hover:-translate-y-1 transition-transform">
            <ShieldCheck className="w-8 h-8 text-blue-400 mb-2 group-hover:text-white transition-colors" />
            <div className="text-4xl font-bold mb-1 text-blue-100">ISO</div>
            <div className="text-xs uppercase tracking-widest text-blue-300">9001:2015 Certified</div>
          </div>
          <div className="flex flex-col items-center text-center p-4 border-l border-blue-800 group hover:-translate-y-1 transition-transform">
            <Users className="w-8 h-8 text-blue-400 mb-2 group-hover:text-white transition-colors" />
            <div className="text-4xl font-bold mb-1 text-blue-100">500+</div>
            <div className="text-xs uppercase tracking-widest text-blue-300">Clients Globally</div>
          </div>
          <div className="flex flex-col items-center text-center p-4 border-l border-blue-800 group hover:-translate-y-1 transition-transform">
            <Clock className="w-8 h-8 text-blue-400 mb-2 group-hover:text-white transition-colors" />
            <div className="text-4xl font-bold mb-1 text-blue-100">24/7</div>
            <div className="text-xs uppercase tracking-widest text-blue-300">Support Team</div>
          </div>
        </div>
      </div>

      {/* 3. Company Profile (About Us) - Floating Glass Card */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900 relative">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100 dark:border-slate-700 -mt-32 relative backdrop-blur-sm bg-white/90 dark:bg-slate-800/90">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg shadow-blue-600/20">
              Who We Are
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Metal Ministry Inc.</h2>
              <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-6">
                <p>
                  A Leading Manufacturer & Exporter of Ferrous & Non Ferrous Metals.
                  Incorporated by <strong className="text-blue-600">Mr. Dinesh Chandan</strong>, we have embarked on a
                  never-ending journey to satisfy and maintain long-lasting relationships with our global clientele.
                </p>
                <p>
                  We are a proactive organisation engaged in supplying quality products that meet and exceed specific requirements.
                  From <strong className="text-gray-900 dark:text-white">Stainless Steel Pipes</strong> to <strong className="text-gray-900 dark:text-white">High Nickel Alloys</strong>,
                  we are your trusted partner in precision engineering.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/about-us" className="text-blue-600 font-semibold hover:text-blue-700 hover:underline">Read Our Full Story &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Products Grid - Slide Up Effect */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm block mb-2">Our Catalog</span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Precision Engineered Products</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {/* PREMIER FEATURE: Stainless Steel Pipes */}
            <div className="group md:col-span-2 rounded-2xl overflow-hidden bg-gray-50 dark:bg-slate-900 relative min-h-[350px] hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0">
                <Image
                  src="/images/Stainless-Steel-Pipes.jpg"
                  alt="Stainless Steel Pipes"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4 shadow-lg">BEST SELLER</div>
                <h3 className="text-3xl font-bold text-white mb-2">Stainless Steel Pipes</h3>
                <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md">
                  Premium Seamless & Welded Pipes in 304, 316, 904L grades. Engineered for high pressure and durability.
                </p>
                <Link href="/products/stainless-steel-316-316l-seamless-welded-erw-pipes-tubes-exporter" className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
                  View Range <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </div>

            {/* Other Products */}
            {PRODUCTS.map((product, idx) => (
              <div key={idx} className="group relative rounded-xl overflow-hidden bg-gray-100 dark:bg-slate-800 aspect-[4/3] shadow-md hover:shadow-2xl transition-all duration-500">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-95 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">{product.title}</h3>
                  <p className="text-gray-300 text-xs mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 line-clamp-1">
                    {product.desc}
                  </p>
                  <Link
                    href={product.link}
                    className="inline-flex items-center text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 hover:underline"
                  >
                    View Details <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/products" className="inline-block px-10 py-4 bg-gray-900 dark:bg-slate-800 text-white rounded-full hover:bg-blue-600 transition-colors font-bold tracking-wide shadow-xl hover:shadow-blue-600/30">
              View Complete Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Contact CTA - Enhanced Redesign */}
      <section className="py-28 relative overflow-hidden">
        {/* Deep Industrial Background */}
        <div className="absolute inset-0 p-0 m-0">
          <Image
            src="/images/slider-hd-1.png"
            alt="Background"
            fill
            className="object-cover blur-[2px] brightness-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-slate-900/90 to-blue-900/90 mix-blend-multiply" />
        </div>

        {/* Animated Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-700" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto backdrop-blur-md bg-white/5 rounded-3xl p-8 md:p-14 border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Glass Shine */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none" />

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg tracking-tight">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Elevate</span> Your Project?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              We specialize in <strong className="text-white">bulk orders</strong> and <strong className="text-white">custom specifications</strong>.
              Our engineering team is ready to deliver precision with speed.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link href="/contact-us" className="group relative bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:shadow-blue-500/40 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Get Custom Quote <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12" />
              </Link>

              <div className="flex items-center gap-4 text-white/90">
                <div className="h-12 w-[1px] bg-white/20 hidden sm:block" />
                <div className="text-left">
                  <div className="text-xs uppercase tracking-widest text-blue-300 mb-1">Direct Line</div>
                  <a href="tel:+919892171042" className="text-xl font-bold hover:text-white transition-colors">
                    +91-9892171042
                  </a>
                </div>
              </div>
            </div>

            {/* Decorative Bottom Text */}
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-6 text-sm text-blue-200/60 font-medium uppercase tracking-wider">
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-400 rounded-full" /> Fast Response</span>
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-400 rounded-full" /> Global Delivery</span>
              <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-400 rounded-full" /> ISO Certified</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
