import Link from "next/link";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <nav className="flex justify-between w-full bg-red-700 pl-20 pr-20 pt-4 pb-4 sticky top-0 shadow-xl">
                <h4 className="text-slate-200 text-lg font-bold uppercase tracking-wide">Machado Lab Challenge</h4>
                <section>
                    <Link
                        href="/farm"
                        className="text-slate-200 hover:text-slate-50 hover:underline cursor-pointer mr-5"
                    >
                        Farm Details
                    </Link>
                    <Link
                        href="/movement"
                        className="text-slate-200 hover:text-slate-50 hover:underline cursor-pointer mr-5"
                    >
                        Movement Data
                    </Link>
                </section>
            </nav>
            <section className="flex justify-center w-full h-auto  bg-slate-50 pt-3 pb-8">
                <div style={{ width: '80%', margin: '2em' }}>
                    {children}
                </div>
            </section>
        </div>
    )
}