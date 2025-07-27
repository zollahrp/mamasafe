'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fitur = [
    {
        title: 'Smart Timeline Kehamilan',
        desc: 'Pantau perkembangan janin mingguan.',
        img: '/img/timeline.jpg',
    },
    {
        title: 'Voice Mode',
        desc: 'Edukasi via audio untuk ibu dengan keterbatasan literasi.',
        img: '/img/voice.jpg',
    },
    {
        title: 'Simulasi Tanda Bahaya',
        desc: 'Deteksi risiko kehamilan dengan ilustrasi visual.',
        img: '/img/simulasi.jpg',
    },
    {
        title: 'Checklist Persiapan',
        desc: 'Persiapan lengkap untuk persalinan.',
        img: '/img/checklist.jpg',
    },
];

export default function FiturUtama() {
    return (
        <section id="fitur" className="max-w-screen-xl py-16 px-4 md:px-10 lg:px-20 bg-white">
            <h2 className="relative inline-block text-2xl md:text-3xl font-semibold mb-8 text-black">
                Fitur MamaSafe
                <span className="absolute left-0 -bottom-1 w-full h-1 bg-pink-400 rounded-full" />
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {fitur.map((item, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white p-4 rounded-xl shadow-lg border border-pink-300 hover:shadow-pink-400/50 transition-shadow"
                    >
                        <div className="w-full h-55 relative rounded-lg overflow-hidden mb-4">
                            <Image
                                src={item.img}
                                alt={item.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="text-md font-semibold text-black mb-1 text-center">
                            {item.title}
                        </h3>
                        <p className="text-sm text-gray-700 text-center">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
