"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full fixed top-0 z-50 bg-[#F875AA] text-white font-semibold">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Image
                        src="/img/logo.png"
                        alt="MamaSafe Logo"
                        width={32}
                        height={32}
                    />
                    <span className="text-lg font-bold">MamaSafe</span>
                </div>

                <div className="hidden md:flex space-x-6">
                    <a href="#tentang" className="hover:underline">
                        Home
                    </a>
                    <a href="#tentang" className="hover:underline">
                        Tentang
                    </a>
                    <a href="#fitur" className="hover:underline">
                        Pendampingan
                    </a>
                    <a href="#demo" className="hover:underline">
                        Fitur
                    </a>
                    <a href="#artikel" className="hover:underline">
                        Artikel
                    </a>
                    <a href="#kontak" className="hover:underline">
                        Kontak
                    </a>
                </div>

                <div className="flex space-x-2">
                    <Link
                        href="/login"
                        className="bg-white text-[#F875AA] px-4 py-1 rounded-md text-sm"
                    >
                        Login
                    </Link>
                    <Link
                        href="/register"
                        className="border border-white text-white px-4 py-1 rounded-md text-sm"
                    >
                        Daftar
                    </Link>
                </div>
            </div>
        </nav>
    );
}
