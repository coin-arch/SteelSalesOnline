'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

interface Cell {
    text: string;
    tag: 'td' | 'th';
    rowSpan?: number;
    colSpan?: number;
    align?: string;
}

interface ModernDataGridProps {
    rows: Cell[][];
}

export default function ModernDataGrid({ rows }: ModernDataGridProps) {
    const [searchTerm, setSearchTerm] = useState('');

    if (!rows || rows.length === 0) return null;

    let headerRows = rows.filter(row => row.some(cell => cell.tag === 'th'));
    let bodyRows = rows.filter(row => !row.some(cell => cell.tag === 'th'));

    // FALLBACK: If no explicit <th>, assume first row is header
    if (headerRows.length === 0 && rows.length > 0) {
        headerRows = [rows[0]];
        bodyRows = rows.slice(1);
    }

    // FIX: Edge case for "GRADES :" table layout
    // If the first header cell is "GRADES :", and likely misformatted by legacy HTML
    if (
        headerRows.length > 0 &&
        headerRows[0].length > 1 &&
        headerRows[0][0].text.trim().toUpperCase().includes('GRADES')
    ) {
        const originalHeader = headerRows[0];

        // Extract "GRADES" as the main column header
        const gradesLabel = originalHeader[0].text.replace(':', '').trim();

        // Construct the "real" first data row from the misaligned header cells
        const shiftedRowData = originalHeader.slice(1).map(c => ({ ...c, tag: 'td' } as Cell));

        // Insert this new row at the top of the body
        bodyRows = [shiftedRowData, ...bodyRows];

        // Re-construct the Header Row: [GRADES, SPECIFICATION]
        // We assume 2nd column is Specification if not named, or spanning
        headerRows = [[
            { ...originalHeader[0], text: gradesLabel, colSpan: 1, rowSpan: 1 },
            {
                text: "SPECIFICATION / STANDARDS",
                tag: 'th',
                colSpan: 10, // Span remaining
                align: 'left'
            } as Cell
        ]];
    }

    // FIX: Filter Logic for both Standard and Header-Only (Legacy) Tables
    // Legacy tables often use <th> for ALL cells (Key-Value pairs), resulting in 0 bodyRows.
    // Logic: If we have body rows, filter them. If NOT, but we have header rows, filter the header rows (treating them as data).

    let rowsToFilter = bodyRows;
    let isHeaderOnlyTable = false;

    if (bodyRows.length === 0 && headerRows.length > 0) {
        // Treat as Header-Only Data Table
        rowsToFilter = headerRows;
        isHeaderOnlyTable = true;
    }

    const filteredRows = rowsToFilter.filter(row =>
        row.some(cell => cell.text.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    // Determine what to render
    // If it's a standard table, we render filteredBodyRows in tbody.
    // If it's header-only, we render filteredRows in tbody (because we treat them as data).
    const displayedBodyRows = isHeaderOnlyTable ? filteredRows : filteredRows;

    // For the "thead", if it's header-only, we might want to hide the original thead 
    // to avoid duplication if we are re-rendering them in tbody?
    // Actually, usually these Key-Value tables don't have a "Head", they are just a list.
    // So if isHeaderOnlyTable, we might skip rendering the separate <thead> block entirely.
    const displayedHeaderRows = isHeaderOnlyTable ? [] : headerRows;

    return (
        <div className="rounded-xl shadow-lg border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 my-8 overflow-hidden">
            {/* Search Bar */}
            <div className="p-4 border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/50 flex items-center gap-3">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search data..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-transparent border-none outline-none w-full text-gray-700 dark:text-gray-200 placeholder-gray-500 font-medium"
                />
            </div>

            {/* Table Container */}
            <div className="overflow-x-auto custom-scrollbar">
                <table className="w-full text-left border-collapse min-w-[600px] lg:min-w-full">
                    {displayedHeaderRows.length > 0 && (
                        <thead>
                            {displayedHeaderRows.map((row, rIndex) => (
                                <tr key={`h-${rIndex}`} className="bg-gray-100 dark:bg-slate-800 border-b border-gray-300 dark:border-slate-600">
                                    {row.map((cell, cIndex) => (
                                        <th
                                            key={`h-${rIndex}-${cIndex}`}
                                            colSpan={cell.colSpan}
                                            rowSpan={cell.rowSpan}
                                            className={`
                                    p-3 text-xs font-bold tracking-wider text-gray-800 dark:text-gray-100 uppercase 
                                    border-r border-gray-300 dark:border-slate-600 last:border-r-0 align-middle
                                    ${cell.align === 'center' ? 'text-center' : 'text-left'}
                                `}
                                        >
                                            {cell.text}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                    )}
                    <tbody>
                        <AnimatePresence>
                            {displayedBodyRows.map((row, rIndex) => (
                                <motion.tr
                                    key={`b-${rIndex}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    layout
                                    className={`transition-colors border-b border-gray-200 dark:border-slate-700 ${rIndex % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-gray-50 dark:bg-slate-900/40'} hover:bg-blue-50 dark:hover:bg-blue-900/20`}
                                >
                                    {row.map((cell, cIndex) => (
                                        <td
                                            key={`b-${rIndex}-${cIndex}`}
                                            colSpan={cell.colSpan}
                                            rowSpan={cell.rowSpan}
                                            className={`
                        p-4 text-sm text-gray-700 dark:text-gray-300 align-top
                        border-r border-gray-200 dark:border-slate-700 last:border-r-0 whitespace-normal break-words max-w-xs
                        ${cell.align === 'center' ? 'text-center' : 'text-left'}
                    `}
                                        >
                                            {cell.text}
                                        </td>
                                    ))}
                                </motion.tr>
                            ))}
                        </AnimatePresence>
                        {displayedBodyRows.length === 0 && searchTerm ? (
                            <tr>
                                <td colSpan={100} className="p-8 text-center text-gray-400">
                                    No match found for "{searchTerm}"
                                </td>
                            </tr>
                        ) : null}
                    </tbody>
                </table>
            </div>

            {/* Only show footer if there is actual data or a search term is active */}
            {(displayedBodyRows.length > 0 || searchTerm) && (
                <div className="p-2 bg-gray-100 dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700 text-xs text-center text-gray-500 font-medium">
                    {displayedBodyRows.length} records found
                </div>
            )}
        </div>
    );
}
