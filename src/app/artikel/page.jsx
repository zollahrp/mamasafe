"use client"

import Footer from "@/components/landing/Footer"
import { useState } from "react"
import { FaHeart, FaShare, FaRegHeart, FaRegShareSquare, FaRegBookmark, FaFilter } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/landing/Navbar"
import PocketBase from 'pocketbase'

export default function ArticlePage() {
    const [activeCategory, setActiveCategory] = useState("Kelahiran")

    const categories = ["Kelahiran", "Pasca Kelahiran", "Nutrisi"]

    const featuredArticle = {
        id: 1,
        title: "Perjalanan Kehamilan Trimester demi Trimester: Panduan untuk Calon Ibu",
        excerpt:
            "Memahami perubahan yang terjadi selama kehamilan sangat penting bagi ibu hamil dan keluarga agar dapat memberikan dukungan maksimal di setiap fase.",
        image: "/placeholder.svg?height=300&width=400",
        author: "Lucy Hiddleston",
        readTime: "4min read",
        timeAgo: "2 hours ago",
        category: "Trending",
        likes: 0,
        shares: 0,
    }

    const articles = [
        {
            id: 1,
            title: "Perjalanan Kehamilan Trimester demi Trimester: Panduan untuk Calon Ibu",
            excerpt:
                "Memahami perubahan yang terjadi selama kehamilan sangat penting bagi ibu hamil dan keluarga agar dapat memberikan dukungan maksimal di setiap fase.",
            image: "/placeholder.svg?height=200&width=300",
            author: "Lucy Hiddleston",
            readTime: "4min read",
            timeAgo: "2 hours ago",
            category: "Kelahiran",
            likes: 28,
            shares: 72,
        },
        {
            id: 2,
            title: "Pemulihan Pasca Persalinan: Masa Nifas yang Sering Diabaikan",
            excerpt:
                "Masa nifas adalah periode pemulihan penting bagi ibu setelah melahirkan, baik secara fisik maupun mental.",
            image: "/placeholder.svg?height=200&width=300",
            author: "Caroline Casey",
            readTime: "4min read",
            timeAgo: "4 hours ago",
            category: "Pasca Kelahiran",
            likes: 18,
            shares: 12,
        },
        {
            id: 3,
            title: "1000 Hari Pertama Kehidupan: Fondasi Masa Depan Anak",
            excerpt:
                "Periode 1000 hari pertama, dimulai sejak masa kehamilan hingga anak berusia 2 tahun, merupakan masa krusial bagi tumbuh kembang anak.",
            image: "/placeholder.svg?height=200&width=300",
            author: "Lucy Hiddleston",
            readTime: "4min read",
            timeAgo: "5 hours ago",
            category: "Nutrisi",
            likes: 28,
            shares: 72,
        },
        {
            id: 4,
            title: "1000 Hari Pertama Kehidupan: Fondasi Masa Depan Anak",
            excerpt:
                "Periode 1000 hari pertama, dimulai sejak masa kehamilan hingga anak berusia 2 tahun, merupakan masa krusial bagi tumbuh kembang anak.",
            image: "/placeholder.svg?height=200&width=300",
            author: "Lucy Hiddleston",
            readTime: "4min read",
            timeAgo: "5 hours ago",
            category: "Nutrisi",
            likes: 28,
            shares: 72,
        },
        {
            id: 5,
            title: "1000 Hari Pertama Kehidupan: Fondasi Masa Depan Anak",
            excerpt:
                "Periode 1000 hari pertama, dimulai sejak masa kehamilan hingga anak berusia 2 tahun, merupakan masa krusial bagi tumbuh kembang anak.",
            image: "/placeholder.svg?height=200&width=300",
            author: "Lucy Hiddleston",
            readTime: "4min read",
            timeAgo: "5 hours ago",
            category: "Nutrisi",
            likes: 28,
            shares: 72,
        },
    ];

    const editorsPicks = [
        {
            id: 6,
            title: "Serological surveys are being conducted to test for coronavirus antibodies. How useful are they?",
            excerpt:
                "The authorities are hoping to find that a substantial proportion of the population has already been infected with the virus - and so is immune.",
            image: "/placeholder.svg?height=100&width=150",
            category: "SCIENCE",
        },
        {
            id: 7,
            title: "Making a mark in Asia: East Bengal's 2003 Asean Cup win – a defining moment for Indian club football",
            excerpt:
                "Beating some of the finest teams from South Asia, East Bengal became the first Indian club to win an officially recognised Asian football tournament.",
            image: "/placeholder.svg?height=100&width=150",
            category: "SPORTS",
        },
    ]

    return (
        <div className="min-h-screen bg-gray-50 mt-14">
            {/* Header */}
            <Navbar />
            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Artikel</h1>
                {/* Featured Article */}
                <div className="mb-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="relative">
                            <img
                                src="https://www.prohance.in/wp-content/uploads/2023/03/Do-Women-Have-a-Choice-in-Their-Pregnancy-Care-International-Womens-Day-2022-Banner-updated-768x452.jpg"
                                alt={featuredArticle.title}
                                width={400}
                                height={300}
                                className="rounded-lg object-cover w-full shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                            />
                        </div>
                        <div className="space-y-4 flex flex-col justify-between h-90">
                            <div>
                                <div className="flex flex-row justify-between mb-2">
                                    <span className="inline-block font-bold text-pink-600 pr-3 py-1 rounded-full text-sm">
                                        {featuredArticle.category}
                                    </span>
                                    <div className="flex items-center space-x-4 text-gray-500">
                                        <FaRegHeart className="h-4 w-4 hover:scale-110 transition-transform duration-200 ease-in-out" />
                                        <FaRegShareSquare className="h-4 w-4 hover:scale-110 transition-transform duration-200 ease-in-ou" />
                                        <FaRegBookmark className="h-4 w-4 hover:scale-110 transition-transform duration-200 ease-in-ou" />
                                    </div>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 leading-tight">{featuredArticle.title}</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{featuredArticle.excerpt}</p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <span>{featuredArticle.timeAgo}</span>
                                <span>By {featuredArticle.author}</span>
                                <span>{featuredArticle.readTime}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Category Tabs */}
                <div className="flex space-x-1 mb-8 border-b">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-3 font-medium transition-colors ${activeCategory === category
                                ? "text-pink-600 border-b-2 border-pink-600"
                                : "text-gray-600 hover:text-gray-900"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                    <div className="ml-auto flex items-center space-x-2">
                        <button className="p-2 hover:bg-gray-100 rounded">
                            <FaFilter className="h-3 w-3 text-gray-600" />
                        </button>
                    </div>
                </div>

                {/* Articles by Category */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {articles
                        .filter((article) => article.category === activeCategory)
                        .map((article) => (
                            <div
                                key={article.id}
                                className="bg-white rounded-lg overflow-hidden shadow-xl hover:scale-102 transition-transform duration-300 ease-in-out cursor-pointer"
                            >
                                <div className="relative">
                                    <Image
                                        src={article.image || "/placeholder.svg"}
                                        alt={article.title}
                                        width={300}
                                        height={200}
                                        className="w-full h-48 object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                        <span>{article.timeAgo}</span>
                                        <span>By {article.author}</span>
                                        <span>{article.readTime}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <button className="flex items-center space-x-1 text-gray-500 hover:text-pink-600 hover:scale-110 transition-transform duration-200 ease-in-out">
                                                <FaRegHeart className="h-4 w-4" />
                                                <span>{article.likes}</span>
                                            </button>
                                            <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 hover:scale-110 transition-transform duration-200 ease-in-out">
                                                <FaRegShareSquare className="h-4 w-4" />
                                                <span>{article.shares}</span>
                                            </button>
                                        </div>
                                        <button className="text-gray-500 hover:text-gray-700 hover:scale-110 transition-transform duration-200 ease-in-out">
                                            <FaRegBookmark className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>

                {/* View More Button */}
                <div className="text-center mb-12">
                    <button className="px-6 py-2 text-pink-600 border border-pink-600 rounded hover:bg-pink-50 transition-colors">
                        VIEW MORE
                    </button>
                </div>

                {/* Editor's Picks */}
                <div>
                    <div className="flex items-center space-x-2 mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">{"Editor's Picks"}</h2>
                        <svg className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {editorsPicks.map((article) => (
                            <div
                                key={article.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                            >
                                <div className="flex">
                                    <div className="relative w-32 h-24 flex-shrink-0">
                                        <Image
                                            src={article.image || "/placeholder.svg"}
                                            alt={article.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <span className="absolute top-2 left-2 text-xs bg-pink-500 text-white px-2 py-1 rounded">
                                            {article.category}
                                        </span>
                                    </div>
                                    <div className="flex-1 p-4">
                                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm">{article.title}</h3>
                                        <p className="text-gray-600 text-xs line-clamp-2">{article.excerpt}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
