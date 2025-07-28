"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setEmailError("");

        if (!email.includes("@") || !email.includes(".")) {
            setEmailError("Email tidak valid");
            setIsLoading(false);
            return;
        }

        try {
            const data = {
                "email": email,
                "emailVisibility": true,
                "name": name,
                "password": password,
                "passwordConfirm": password
            };

            const record = await pb.collection('users').create(data);
            
            // (optional) send email verification
            await pb.collection('users').requestVerification(email);
            
            alert("Registrasi berhasil! Silakan cek email untuk verifikasi.");
            
            // Reset form
            setName("");
            setEmail("");
            setPassword("");
            
        } catch (error) {
            console.error('Registration error:', error);
            if (error.data?.email) {
                setEmailError("Email sudah digunakan");
            } else {
                alert("Gagal melakukan registrasi. Silakan coba lagi.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleRegister = () => {
        alert("Fitur daftar dengan Google belum diaktifkan.");
        // TODO: Integrasi Google OAuth dengan PocketBase
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 via-white to-blue-100 px-4">
            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white/30 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden">
                <div className="relative hidden md:block">
                    <Image
                        src="/img/auth.jpg"
                        alt="Ilustrasi"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-pink-500 mb-6 text-center">Daftar Akun</h1>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                disabled={isLoading}
                                placeholder="Nama lengkap"
                                className="w-full px-4 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 disabled:opacity-50"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={isLoading}
                                placeholder="Email aktif"
                                className={`w-full px-4 py-2 text-black border ${emailError ? "border-red-400" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 disabled:opacity-50`}
                            />
                            {emailError && <p className="text-sm text-red-500 mt-1">{emailError}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Kata Sandi</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                disabled={isLoading}
                                placeholder="********"
                                className="w-full px-4 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 disabled:opacity-50"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-md font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? "Mendaftar..." : "Daftar"}
                        </button>

                        <p className="text-sm text-center text-gray-600">
                            Sudah punya akun?{" "}
                            <Link href="/masuk" className="text-pink-500 hover:underline">
                                Masuk di sini
                            </Link>
                        </p>

                        <div className="text-center">
                            <button
                                type="button"
                                onClick={handleGoogleRegister}
                                disabled={isLoading}
                                className="w-full border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                <Image
                                    src="/google-icon.png"
                                    alt="Google"
                                    width={20}
                                    height={20}
                                />
                                <span className="text-black">Daftar dengan Google</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
