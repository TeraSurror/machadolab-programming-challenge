import Link from "next/link";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <nav className="flex justify-between w-full bg-red-700 pl-20 pr-20 pt-4 pb-4 sticky top-0 shadow-xl">
                <h4 className="text-slate-200 text-lg font-bold uppercase tracking-wide">Machado Lab Challenge</h4>
                <section>
                    <Link href="/">Farms</Link>
                    <Link href="/">Movement Data</Link>
                </section>
            </nav>
            <section className="flex justify-center w-full h-screen bg-slate-50 pt-8">
                <div style={{ width: '70%', margin: '2em' }}>
                    {children}
                </div>
            </section>
        </div>
    )
}