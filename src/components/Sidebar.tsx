import Link from 'next/link';
import { Phone, Mail, ChevronRight, Menu, ChevronDown } from 'lucide-react';

export default function Sidebar() {
    return (
        <aside className="w-full h-full">
            {/* Sticky Container - Valid relative to parent height */}
            <div className="sticky top-24 space-y-6">

                {/* Categories Widget - Accordion Style */}
                <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-100 dark:border-slate-800 overflow-hidden">
                    <div className="p-4 border-b border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-800/50">
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white flex items-center gap-2">
                            <Menu size={18} className="text-blue-600" />
                            Categories
                        </h3>
                    </div>

                    <div className="p-2 space-y-1">
                        {/* Define Groups */}
                        {[
                            {
                                title: 'Steel Grades',
                                items: ['Stainless Steel', 'Carbon Steel', 'Alloy Steel', 'Duplex Steel', 'Tool Steel']
                            },
                            {
                                title: 'Special Alloys',
                                items: ['Inconel', 'Monel', 'Hastelloy', 'Super Alloys']
                            },
                            {
                                title: 'Non-Ferrous',
                                items: ['Aluminium', 'Copper Alloys', 'Titanium']
                            }
                        ].map((group) => (
                            <div key={group.title} className="border border-gray-100 dark:border-slate-800 rounded-lg overflow-hidden">
                                <details className="group" open>
                                    <summary className="flex items-center justify-between p-3 cursor-pointer bg-gray-50 dark:bg-slate-800/60 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors select-none">
                                        <span className="font-semibold text-sm text-gray-800 dark:text-gray-200">{group.title}</span>
                                        <ChevronDown size={16} className="text-gray-400 group-open:rotate-180 transition-transform" />
                                    </summary>
                                    <div className="p-2 bg-white dark:bg-slate-900 space-y-1">
                                        {group.items.map((category) => (
                                            <Link
                                                key={category}
                                                href={`/products?category=${encodeURIComponent(category)}`}
                                                className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
                                            >
                                                <span>{category}</span>
                                                <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" />
                                            </Link>
                                        ))}
                                    </div>
                                </details>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Enquiry Form */}
                <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg border border-slate-700 relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-20 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-600 opacity-10 blur-xl rounded-full translate-y-1/2 -translate-x-1/2" />

                    <h3 className="font-bold text-lg text-white mb-5 flex items-center gap-2 relative z-10">
                        <Mail size={18} className="text-blue-400" /> Request Quote
                    </h3>

                    <form className="space-y-4 relative z-10">
                        <input type="text" placeholder="Name" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-500 text-white backdrop-blur-sm" />
                        <input type="email" placeholder="Email" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-500 text-white backdrop-blur-sm" />
                        <input type="tel" placeholder="Phone" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-500 text-white backdrop-blur-sm" />
                        <textarea placeholder="Requirements..." rows={3} className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-500 text-white backdrop-blur-sm resize-none"></textarea>

                        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 text-sm flex items-center justify-center gap-2 group">
                            Send Enquiry <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="mt-6 pt-5 border-t border-slate-800 relative z-10">
                        <div className="space-y-3">
                            <a href="tel:+919892171042" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <Phone size={14} />
                                </div>
                                <span className="text-sm font-medium">+91-9892171042</span>
                            </a>
                            <a href="mailto:enquiry@metalministry.in" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <Mail size={14} />
                                </div>
                                <span className="text-sm font-medium">enquiry@metalministry.in</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

