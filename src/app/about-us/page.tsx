import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Users, Globe, Clock, Target, Rocket } from 'lucide-react';

export default function AboutUsPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 font-[var(--font-outfit)]">
            {/* Hero Section - Industrial Dark Theme */}
            <div className="relative bg-slate-900 text-white py-28 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black opacity-90" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-sm mb-6 block animate-fade-in-up">The Metal Ministry Legacy</span>
                    <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 leading-tight animate-fade-in-up delay-100 tracking-tight">
                        Forging <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Excellence</span> <br /> Since Inception
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up delay-200">
                        Dedicated to precision manufacturing and global supply of high-pressure forged fittings and flanges.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-24 space-y-24">

                {/* Legacy Content Match */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">About Company</h2>
                        <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Metal Ministry Inc.</h3>
                        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-justify font-light">
                            <p>
                                <strong>Metal Ministry Inc.</strong> is a leading ISO 9001-2015 Manufacturer & Stockholder of products in grades of Stainless Steel, Duplex & Super Duplex Steel, Nickel Alloys, Copper Alloys, Titanium Alloys, Aluminium Alloys, Carbon & Alloy Steels, Tool Steels & other Aerospace and Marine grades such as PH series Steel, MO series Steel, Mumetal, Invar & Kovar, Maraging Steels etc.
                            </p>

                            <p>
                                We are into Fabrication of Precision Components, Fasteners, Tank Heads, Valves, and various products as per customer requirements, designs or Drawings. We are your one stop solution for all your metal Product needs. We look forward that you allow us to enter your organisation to supply the products you need and we assure you we will be at your doors with our best products and after sales Services.
                            </p>

                            <div className="mt-8 space-y-8">
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-xl border-l-4 border-blue-600 pl-4">What We Manufacture?</h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-base">
                                        {[
                                            "Pipe Fittings", "Instrumentation Fittings", "Flanges & Fasteners", "Valves",
                                            "Gaskets", "Refractory Anchors", "Pharma Fittings", "Stainless Steel Railing & Accessories",
                                            "Forged & Precision CNC Components"
                                        ].map(item => (
                                            <li key={item} className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-xl border-l-4 border-green-500 pl-4">What We Stock & Supply?</h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-base">
                                        {[
                                            "Strips, Sheets, Plates & Coils", "Seamless & Welded Pipes", "Capillary Pipes & Tubing",
                                            "Round, Hex, Square Bars", "Angles & Channels"
                                        ].map(item => (
                                            <li key={item} className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-xl border-l-4 border-purple-500 pl-4">Fabricated Manufacturing Jobs</h4>
                                    <ul className="space-y-3 text-base text-gray-700 dark:text-gray-300">
                                        {[
                                            "Piping components / Instrumentation fittings",
                                            "Aerospace & Defence Forged components",
                                            "Discs / Tubes / Rivets / springs",
                                            "Manifold valves / Ball valves",
                                            "Sheet metal components",
                                            "Metal / Jacketed / Spiral wound Gaskets",
                                            "Spray Nozzles",
                                            "Nuts, Bolts & Studs",
                                            "CNC, VMC or Lathe machined components",
                                            "Stainless Steel Tanks",
                                            "Stainless steel Utensils"
                                        ].map(item => (
                                            <li key={item} className="flex items-start gap-3 hover:translate-x-1 transition-transform">
                                                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2.5 shrink-0 shadow-sm" />
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative group sticky top-32">
                        <div className="absolute inset-0 bg-blue-600 rounded-3xl transform rotate-3 opacity-10 group-hover:rotate-6 transition-transform duration-500"></div>
                        <div className="relative bg-gray-100 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-2xl h-[600px]">
                            <Image
                                src="/images/vision.jpg"
                                alt="Metal Ministry Workshop"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>

                            <div className="absolute bottom-0 left-0 p-10 text-white">
                                <h4 className="text-3xl font-bold mb-3">Quality Assurance</h4>
                                <p className="text-gray-200 text-lg font-light tracking-wide">ISO 9001:2015 Certified<br />Excellence in every component.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grades Strip */}
                <div className="bg-gray-50 dark:bg-slate-900 p-8 rounded-2xl border border-gray-100 dark:border-slate-800">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Material Grades</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
                        <div className="space-y-2">
                            <strong className="block text-blue-600">High Nickel Alloys</strong>
                            <p>Nickel 200/201, Monel 400/K500, Inconel 600/625/718, Hastelloy C276.</p>
                        </div>
                        <div className="space-y-2">
                            <strong className="block text-blue-600">Titanium & Aluminium</strong>
                            <p>Titanium Gr 1, 2, 5, 7. Aluminium 2024, 6061, 7075.</p>
                        </div>
                        <div className="space-y-2">
                            <strong className="block text-blue-600">Stainless & Duplex</strong>
                            <p>304, 316, 317L, 321, 904L, SMO 254. Duplex 2205, Super Duplex 32760.</p>
                        </div>
                        <div className="space-y-2">
                            <strong className="block text-blue-600">Exotic Alloys</strong>
                            <p>Tantalum, Niobium, Invar, Kovar, Maraging Steel, MuMetal.</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* CTA Section */}
            <div className="bg-slate-900 text-white py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/20" />
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-4xl font-bold mb-6">Ready to work with us?</h2>
                    <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
                        Get in touch for a competitive quote or technical consultation.
                    </p>
                    <Link href="/contact-us" className="inline-block bg-white text-slate-900 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:scale-105">
                        Get Quotation
                    </Link>
                </div>
            </div>
        </div>
    );
}
