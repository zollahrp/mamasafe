import Link from "next/link";
import {
    Facebook,
    Linkedin,
    Twitter,
    Instagram
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white text-gray-700 mt-16">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-200">
                {/* Navigasi */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Navigasi</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-pink-500">Home</a></li>
                        <li><a href="#" className="hover:text-pink-500">Tentang</a></li>
                        <li><a href="#" className="hover:text-pink-500">Pendampingan</a></li>
                        <li><a href="#" className="hover:text-pink-500">Fitur Artikel</a></li>
                        <li><a href="#" className="hover:text-pink-500">Kontak</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Apa yang Kami Lakukan</h3>
                    <p className="text-sm text-gray-600">
                        MamaSafe hadir sebagai solusi perlindungan ibu dan bayi dengan pendekatan teknologi cerdas. Kami menggabungkan fitur monitoring, edukasi, dan komunitas dalam satu aplikasi yang mudah digunakan dan menyenangkan.
                    </p>
                </div>

                <div className="text-right">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Hubungi Kami</h3>
                    <ul className="text-sm space-y-2 text-gray-600">
                        <li>mamasafe.id@gmail.com</li>
                        <li>+62 812-3456-7890</li>
                        <li><a href="#" className="hover:text-pink-500">Facebook</a></li>
                        <li><a href="#" className="hover:text-pink-500">LinkedIn</a></li>
                        <li><a href="#" className="hover:text-pink-500">Twitter</a></li>
                        <li><a href="#" className="hover:text-pink-500">Instagram</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-2 mb-2 md:mb-0">
                    <img src="/img/logo.png" alt="MamaSafe Logo" className="w-6 h-6" />
                    <span className="font-bold text-pink-500">MamaSafe</span>
                </div>

                <div className="text-center">
                    © {new Date().getFullYear()} MamaSafe. All Rights Reserved.
                </div>

                <div className="flex gap-4">
                    <a href="#"><Facebook size={20} /></a>
                    <a href="#"><Linkedin size={20} /></a>
                    <a href="#"><Twitter size={20} /></a>
                    <a href="#"><Instagram size={20} /></a>
                </div>
            </div>
        </footer>
    );
}
