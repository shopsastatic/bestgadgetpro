import React from 'react';
import { Award, Globe, Shield, Send, Monitor, Camera, Watch, Wind, Box, Phone, Headphones, Fan, PhoneIcon, Smartphone, Home, Speaker } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const SeoContent = () => {
    return (
        <footer className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-12 md:py-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-6 md:w-1/2">
                        <h3 className="text-4xl md:text-5xl font-bold">
                            Your Tech Review Destination
                        </h3>
                        <p className="text-gray-400 text-lg">
                            Delivering comprehensive tech reviews, in-depth comparisons, and expert buying guides backed by rigorous testing and real-world experience. Join over 500,000 tech enthusiasts making smarter decisions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                            />
                            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2">
                                <Send className="w-5 h-5" />
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md">
                            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all group">
                                <div className="relative">
                                    <div className="absolute -inset-1 bg-blue-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition"></div>
                                    <Link href={"/"} className="w-12 h-12 text-blue-500 mb-3 relative transform group-hover:scale-110 transition-transform"></Link>
                                </div>
                                <h3 className="font-semibold mb-2 text-lg text-blue-50">Best Review Platform</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">Tech Excellence Awards 2024 Winner for Outstanding User Experience & Editorial Quality</p>
                            </div>
                            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all group">
                                <div className="relative">
                                    <div className="absolute -inset-1 bg-green-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition"></div>
                                    <Shield className="w-12 h-12 text-green-500 mb-3 relative transform group-hover:scale-110 transition-transform" />
                                </div>
                                <h3 className="font-semibold mb-2 text-lg text-green-50">Trusted Reviews</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">Certified by Consumer Trust Alliance for Authenticity & In-Depth Analysis</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Footer */}
            <div className="bg-gray-900 mt-12">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="font-semibold mb-4">Products</h3>
                            <ul className="space-y-2">
                                <li><Link href="/computers-accessories-34081" className="text-gray-400 hover:text-white">Computers</Link></li>
                                <li><Link href="/headphones-earbuds-96804" className="text-gray-400 hover:text-white">Headphones & Earbuds</Link></li>
                                <li><Link href="/speakers-18917" className="text-gray-400 hover:text-white">Speakers</Link></li>
                                <li><Link href="/television-video-12749" className="text-gray-400 hover:text-white">Television & Video</Link></li>
                                <li><Link href="/video-projectors-18846" className="text-gray-400 hover:text-white">Video Projectors</Link></li>
                                <li><Link href="/health-household" className="text-gray-400 hover:text-white">Health & Household</Link></li>
                                <li><Link href="/pet-supplies" className="text-gray-400 hover:text-white">Pet Supplies</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">About</h3>
                            <ul className="space-y-2">
                                <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                                <li><Link href="/terms-of-service" className="text-gray-400 hover:text-white">Terms</Link></li>
                                <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy</Link></li>
                                <li><Link href="/affiliate-disclosure" className="text-gray-400 hover:text-white">Affiliate Disclosure</Link></li>
                                <li><Link href="/disclaimer" className="text-gray-400 hover:text-white">Disclaimer</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Popular Categories</h3>
                            <div className="grid grid-cols-1 gap-4">
                                <Link href={"/electronics"} className="group cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className="p-1.5 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                                            <Smartphone className="w-4 h-4 text-blue-500" />
                                        </div>
                                        <span className="text-gray-400 group-hover:text-white transition-colors">Electronics</span>
                                    </div>
                                </Link>
                                <Link href={"/computers-accessories-34081"} className="group cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className="p-1.5 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                                            <Monitor className="w-4 h-4 text-blue-500" />
                                        </div>
                                        <span className="text-gray-400 group-hover:text-white transition-colors">Computers</span>
                                    </div>
                                </Link>
                                <Link href={"/home-kitchen"} className="group cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className="p-1.5 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                                            <Home className="w-4 h-4 text-blue-500" />
                                        </div>
                                        <span className="text-gray-400 group-hover:text-white transition-colors">Home & Kitchen</span>
                                    </div>
                                </Link>
                                <Link href={"/camera-photo-34474/"} className="group cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className="p-1.5 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                                            <Camera className="w-4 h-4 text-blue-500" />
                                        </div>
                                        <span className="text-gray-400 group-hover:text-white transition-colors">Cameras</span>
                                    </div>
                                </Link>
                                <Link href={"/speakers-18917"} className="group cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className="p-1.5 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                                            <Speaker className="w-4 h-4 text-blue-500" />
                                        </div>
                                        <span className="text-gray-400 group-hover:text-white transition-colors">Speakers</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between'>
                            <div className="mb-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <Globe className="w-5 h-5 text-blue-500" />
                                    <span>Global Coverage</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Shield className="w-5 h-5 text-green-500" />
                                    <span>Verified Reviews</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 mt-10 md:mt-0">
                                <Link href={"/"} className='block mr-2'>
                                    <Image
                                        src="https://content.bestgadgetpro.com/wp-content/uploads/2024/12/us-logo.webp"
                                        width={28}
                                        height={28}
                                        alt='US Logo BestGadgetPro'
                                    />
                                </Link>
                                <span>United States</span>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400">
                        © 2024 BestGadgetPro. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

const CategoryCard = ({ icon, title }: any) => (
    <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors cursor-pointer">
        <div className="text-blue-500 mb-3">
            {icon}
        </div>
        <h3 className="font-medium">{title}</h3>
    </div>
);

export default SeoContent;