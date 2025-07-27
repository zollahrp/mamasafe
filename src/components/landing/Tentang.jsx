"use client";
import React from "react";

export default function Tentang() {
    return (
        <section
            id="tentang"
            className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-16"
        >
            <h2 className="relative inline-block text-2xl md:text-3xl font-semibold mb-8 text-black">
                Tentang
                <span className="absolute left-0 -bottom-1 w-full h-1 bg-pink-400 rounded-full" />
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-8">
                <strong>MamaSafe.id</strong> adalah inovasi teknologi berbasis kecerdasan buatan (AI)
                yang dirancang untuk mendampingi ibu hamil sebelum, saat, dan setelah persalinan.
                Platform ini hadir sebagai solusi digital untuk meningkatkan keselamatan, kenyamanan,
                dan kesadaran kesehatan maternal secara menyeluruh.
            </p>

            <div className="w-full flex justify-center">
                <div className="w-full max-w-xl aspect-video rounded-xl overflow-hidden shadow-lg">
                    <video
                        controls
                        poster="/video-thumbnail.jpg"
                        className="w-full h-full object-cover"
                    >
                        <source src="/video-demo.mp4" type="video/mp4" />
                        Browser kamu tidak mendukung pemutaran video.
                    </video>
                </div>
            </div>
        </section>
    );
}
