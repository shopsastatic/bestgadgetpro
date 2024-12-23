'use client'
import React, { useState } from 'react';
import { Star, Check, X, Info, ChevronDown, ChevronRight } from 'lucide-react';

const ProdCard = () => {
    return (
        <div className="w-full max-w-[1000px] mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header Section with Image and Main Info */}
            <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    {/* Image Container */}
                    <div className="relative w-40 h-40 mx-auto sm:mx-0 flex-shrink-0">
                        <img
                            src="https://img.bestreviewsradar.com/image/upload/c_scale,w_160,h_160/f_auto,q_auto/primaltek-15-commercial-grade-vacuum-sealer-user-friendly-for-food-preservation-sous-vide-28-vacuum.jpg?_i=AA"
                            alt="Gaming Headset"
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <span className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs font-medium">
                            Best Seller
                        </span>
                    </div>

                    {/* Main Info */}
                    <div className="flex-1">
                        <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">
                                    SteelSeries Arctis Nova Pro Wireless Gaming Headset
                                </h1>
                                {/* Quick Features */}
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {[
                                        'Active Noise Cancelling',
                                        'Wireless',
                                        'USB-C',
                                        'Multi-Device'
                                    ].map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className='text-base my-3'>
                                    The SteelSeries Arctis Nova Pro Wireless represents the pinnacle of gaming audio. Featuring advanced Active Noise Cancellation, premium audio drivers, and an innovative dual-battery system. Perfect for extended gaming sessions with its comfortable design and versatile connectivity options.
                                </p>
                            </div>
                            <div className="flex items-center space-x-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        className="w-4 h-4 text-yellow-400 fill-current"
                                    />
                                ))}
                                <span className="ml-1 text-base text-gray-600">5.0</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Specs Grid */}
            <div className="px-4 sm:px-6 py-4 bg-gray-50">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: 'Connection', value: 'Wireless' },
                        { label: 'Battery', value: '40h' },
                        { label: 'Driver', value: '40mm' },
                        { label: 'Weight', value: '338g' }
                    ].map((spec) => (
                        <div key={spec.label} className="text-center">
                            <p className="text-sm text-gray-500">{spec.label}</p>
                            <p className="font-medium text-base">{spec.value}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Details Section */}
            <div className="p-4 sm:p-6 border-t border-gray-200">
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Pros and Cons */}
                    <div>
                        <h2 className="text-lg font-semibold mb-3">Pros & Cons</h2>

                        {/* Pros */}
                        <div className="space-y-2 mb-3">
                            {[
                                'Premium build quality',
                                'Active noise-cancelling',
                                'Long battery life'
                            ].map((pro) => (
                                <div key={pro} className="flex items-center space-x-2">
                                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                                    <p className="text-base text-gray-600">{pro}</p>
                                </div>
                            ))}
                        </div>

                        {/* Cons */}
                        <div className="space-y-2">
                            {[
                                'Premium price point',
                                'Software required'
                            ].map((con) => (
                                <div key={con} className="flex items-center space-x-2">
                                    <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                                    <p className="text-base text-gray-600">{con}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tech Specs */}
                    <div>
                        <h2 className="text-lg font-semibold mb-3">Technical Specs</h2>
                        <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                            {[
                                { label: 'Frequency', value: '10-40,000 Hz' },
                                { label: 'Driver', value: '40mm Neodymium' },
                                { label: 'Connection', value: '2.4GHz / BT' },
                                { label: 'Battery', value: '40+ hours' },
                                { label: 'Charging', value: 'USB-C' },
                                { label: 'Weight', value: '338g' }
                            ].map((spec) => (
                                <div key={spec.label}>
                                    <dt className="text-[13px] text-gray-500">{spec.label}</dt>
                                    <dd className="text-base">{spec.value}</dd>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="mt-6">
                    <h2 className="text-lg font-semibold mb-2">Description</h2>
                    <p className="text-base text-gray-600 leading-relaxed">
                        The SteelSeries Arctis Nova Pro Wireless represents the pinnacle of gaming audio.
                        Featuring advanced Active Noise Cancellation, premium audio drivers, and an innovative
                        dual-battery system. Perfect for extended gaming sessions with its comfortable design
                        and versatile connectivity options. The SteelSeries Arctis Nova Pro Wireless represents the pinnacle of gaming audio.
                        Featuring advanced Active Noise Cancellation, premium audio drivers, and an innovative
                        dual-battery system. Perfect for extended gaming sessions with its comfortable design
                        and versatile connectivity options.
                    </p>
                </div>
            </div>
        </div>
    );
};

// Layout 1: Magazine Style with Sticky Image
const MagazineCard = () => {
    return (
        <div className="w-full max-w-[1000px] mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
                {/* Left Column with Sticky Image */}
                <div className="w-full md:w-1/3 bg-gray-50 p-4 md:p-6 md:sticky md:top-0 md:h-screen">
                    {/* Image Container - Centered on mobile */}
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto">
                        <img
                            src="https://img.bestreviewsradar.com/image/upload/c_scale,w_160,h_160/f_auto,q_auto/primaltek-15-commercial-grade-vacuum-sealer-user-friendly-for-food-preservation-sous-vide-28-vacuum.jpg?_i=AA"
                            alt="Product"
                            className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                        <span className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs font-medium">
                            Best Seller
                        </span>
                    </div>

                    {/* Rating - Flex row on mobile */}
                    <div className="mt-4 md:mt-6 flex justify-center items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                        <span className="ml-1 text-base text-gray-600">5.0</span>
                    </div>

                    {/* Quick Specs - Grid on mobile, stack on desktop */}
                    <div className="mt-4 md:mt-6 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1 gap-2 md:space-y-3 md:gap-0">
                        {[
                            { label: 'Connection', value: 'Wireless' },
                            { label: 'Battery', value: '40h' },
                            { label: 'Driver', value: '40mm' },
                            { label: 'Weight', value: '338g' }
                        ].map((spec) => (
                            <div key={spec.label} className="text-center p-2 bg-white rounded-lg shadow-sm">
                                <p className="text-sm md:text-base text-gray-500">{spec.label}</p>
                                <p className="font-medium text-sm md:text-base">{spec.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column with Content */}
                <div className="w-full md:w-2/3 p-4 md:p-6">
                    <div className="space-y-4 md:space-y-6">
                        {/* Header */}
                        <div>
                            <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                                SteelSeries Arctis Nova Pro Wireless Gaming Headset
                            </h1>
                            <div className="flex flex-wrap gap-2">
                                {['Active Noise Cancelling', 'Wireless', 'USB-C', 'Multi-Device'].map((tag) => (
                                    <span key={tag} className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Description Panel */}
                        <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                The SteelSeries Arctis Nova Pro Wireless represents the pinnacle of gaming audio.
                                Featuring advanced Active Noise Cancellation, premium audio drivers, and an innovative
                                dual-battery system. Perfect for extended gaming sessions with its comfortable design
                                and versatile connectivity options.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                            {/* Pros and Cons Panel */}
                            <div className="bg-white p-3 md:p-4 rounded-lg border border-gray-100">
                                <h2 className="text-base md:text-lg font-semibold mb-3">Pros & Cons</h2>
                                <div className="space-y-2 mb-3">
                                    {['Premium build quality', 'Active noise-cancelling', 'Long battery life'].map((pro) => (
                                        <div key={pro} className="flex items-center space-x-2">
                                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                                            <p className="text-sm md:text-base text-gray-600">{pro}</p>
                                        </div>
                                    ))}
                                    {['Premium price point', 'Software required'].map((con) => (
                                        <div key={con} className="flex items-center space-x-2">
                                            <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                                            <p className="text-sm md:text-base text-gray-600">{con}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Technical Specs Panel */}
                            <div className="bg-white p-3 md:p-4 rounded-lg border border-gray-100">
                                <h2 className="text-base md:text-lg font-semibold mb-3">Technical Specs</h2>
                                <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                                    {[
                                        { label: 'Frequency', value: '10-40,000 Hz' },
                                        { label: 'Driver', value: '40mm Neodymium' },
                                        { label: 'Connection', value: '2.4GHz / BT' },
                                        { label: 'Battery', value: '40+ hours' },
                                        { label: 'Charging', value: 'USB-C' },
                                        { label: 'Weight', value: '338g' }
                                    ].map((spec) => (
                                        <div key={spec.label}>
                                            <dt className="text-xs md:text-[13px] text-gray-500">{spec.label}</dt>
                                            <dd className="text-sm md:text-base">{spec.value}</dd>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TabStyleCard = () => {
    return (
        <div className="w-full max-w-[1000px] mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header with Image and Title */}
            <div className="relative h-auto min-h-[300px] sm:h-48 md:h-64 bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/40 to-transparent">
                    <div className="flex min-h-full items-center p-4 md:p-6">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6 space-y-4 sm:space-y-0 w-full">
                            {/* Image - Centered on mobile */}
                            <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0">
                                <img
                                    src="https://img.bestreviewsradar.com/image/upload/c_scale,w_160,h_160/f_auto,q_auto/primaltek-15-commercial-grade-vacuum-sealer-user-friendly-for-food-preservation-sous-vide-28-vacuum.jpg?_i=AA"
                                    alt="Product"
                                    className="w-full h-full object-cover rounded-lg shadow-lg"
                                />
                                <span className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs font-medium">
                                    Best Seller
                                </span>
                            </div>

                            {/* Title and Tags - Center aligned on mobile */}
                            <div className="text-white text-center sm:text-left flex-1">
                                <h1 className="text-xl sm:text-2xl font-bold mb-2">
                                    SteelSeries Arctis Nova Pro Wireless Gaming Headset
                                </h1>
                                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                                    <div className="flex items-center space-x-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                                        ))}
                                        <span className="ml-1 text-sm md:text-base">5.0</span>
                                    </div>
                                    <div className="hidden sm:block h-4 w-px bg-white/30" />
                                    <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                                        {['Wireless', 'ANC', 'USB-C'].map((tag) => (
                                            <span key={tag} className="px-2 py-1 bg-white/10 rounded-full text-xs">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Tabs */}
            <div className="p-4 md:p-6">
                {/* Quick Specs Bar */}
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-around mb-6 md:mb-8 p-3 md:p-4 bg-gray-50 rounded-lg">
                    {[
                        { label: 'Connection', value: 'Wireless' },
                        { label: 'Battery', value: '40h' },
                        { label: 'Driver', value: '40mm' },
                        { label: 'Weight', value: '338g' }
                    ].map((spec, idx) => (
                        <React.Fragment key={spec.label}>
                            <div className="px-2 md:px-4 text-center py-2">
                                <p className="text-xs md:text-sm text-gray-500">{spec.label}</p>
                                <p className="font-medium text-sm md:text-base">{spec.value}</p>
                            </div>
                            {idx < 3 && <div className="hidden sm:block w-px h-12 bg-gray-200" />}
                        </React.Fragment>
                    ))}
                </div>

                {/* Three Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                    {/* Overview Column */}
                    <div className="lg:col-span-2 space-y-4 md:space-y-6">
                        <div>
                            <h2 className="text-base md:text-lg font-semibold mb-3">Overview</h2>
                            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                The SteelSeries Arctis Nova Pro Wireless represents the pinnacle of gaming audio.
                                Featuring advanced Active Noise Cancellation, premium audio drivers, and an innovative
                                dual-battery system. Perfect for extended gaming sessions with its comfortable design
                                and versatile connectivity options.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                            {['Multi-Device Support', 'Active Noise Cancelling', 'Premium Audio', 'Long Battery Life'].map((feature) => (
                                <div key={feature} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                                    <span className="text-sm md:text-base">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Specs Column */}
                    <div className="space-y-4 md:space-y-6">
                        {/* Pros and Cons Panel */}
                        <div>
                            <h2 className="text-base md:text-lg font-semibold mb-3">Pros & Cons</h2>
                            <div className="space-y-2">
                                {['Premium build quality', 'Active noise-cancelling', 'Long battery life'].map((pro) => (
                                    <div key={pro} className="flex items-center space-x-2">
                                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                                        <p className="text-sm md:text-base text-gray-600">{pro}</p>
                                    </div>
                                ))}
                                {['Premium price point', 'Software required'].map((con) => (
                                    <div key={con} className="flex items-center space-x-2">
                                        <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                                        <p className="text-sm md:text-base text-gray-600">{con}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Technical Specs */}
                        <div>
                            <h2 className="text-base md:text-lg font-semibold mb-3">Technical Specs</h2>
                            <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
                                {[
                                    { label: 'Frequency', value: '10-40,000 Hz' },
                                    { label: 'Driver', value: '40mm Neodymium' },
                                    { label: 'Connection', value: '2.4GHz / BT' },
                                    { label: 'Battery', value: '40+ hours' },
                                    { label: 'Charging', value: 'USB-C' },
                                    { label: 'Weight', value: '338g' }
                                ].map((spec) => (
                                    <div key={spec.label} className="flex justify-between py-2 border-b last:border-0 border-gray-200">
                                        <dt className="text-xs md:text-[13px] text-gray-500">{spec.label}</dt>
                                        <dd className="text-sm md:text-base font-medium">{spec.value}</dd>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TimelineCard = () => {
    // Define color classes for stats
    const statColors = {
        connection: "bg-purple-50 text-purple-700",
        battery: "bg-green-50 text-green-700",
        driver: "bg-orange-50 text-orange-700",
        weight: "bg-blue-50 text-blue-700"
    };

    // Quick stats data
    const quickStats = [
        { label: 'Connection', value: 'Wireless', colorClass: statColors.connection },
        { label: 'Battery', value: '40h', colorClass: statColors.battery },
        { label: 'Driver', value: '40mm', colorClass: statColors.driver },
        { label: 'Weight', value: '338g', colorClass: statColors.weight }
    ];

    // Features data for timeline
    const features = [
        { feature: 'Premium Wireless', desc: 'Low-latency wireless connection' },
        { feature: 'Active Noise Cancelling', desc: 'Advanced noise reduction' },
        { feature: 'USB-C Fast Charging', desc: 'Quick charging capability' },
        { feature: 'Multi-Device Support', desc: 'Connect to multiple sources' }
    ];

    // Technical specs data
    const technicalSpecs = [
        { label: 'Frequency Response', value: '10-40,000 Hz' },
        { label: 'Driver Size', value: '40mm Neodymium' },
        { label: 'Connection Type', value: '2.4GHz / Bluetooth' },
        { label: 'Battery Life', value: '40+ hours' },
        { label: 'Charging Port', value: 'USB-C' },
        { label: 'Weight', value: '338g' }
    ];

    // Pros and Cons data
    const pros = [
        'Premium build quality and materials',
        'Active noise-cancelling performance',
        'Long battery life with hot-swap'
    ];

    const cons = [
        'Premium price point',
        'Software required for advanced features'
    ];

    return (
        <div className="w-full max-w-[1000px] mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 md:px-6 py-3 md:py-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <h1 className="text-xl md:text-2xl font-bold text-white text-center sm:text-left">
                        SteelSeries Arctis Nova Pro
                    </h1>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-4 h-4 text-yellow-300 fill-current" />
                            ))}
                            <span className="ml-2 text-white">5.0</span>
                        </div>
                        <span className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">
                            Best Seller
                        </span>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-12 gap-6 p-4 md:p-6">
                {/* Left Timeline */}
                <div className="md:col-span-4 lg:col-span-3 space-y-6">
                    {/* Product Image */}
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto md:mx-0">
                        <img
                            src="https://img.bestreviewsradar.com/image/upload/c_scale,w_160,h_160/f_auto,q_auto/primaltek-15-commercial-grade-vacuum-sealer-user-friendly-for-food-preservation-sous-vide-28-vacuum.jpg?_i=AA"
                            alt="Product"
                            className="w-full h-full object-cover rounded-lg shadow-md"
                        />
                    </div>

                    {/* Quick Features Timeline */}
                    <div className="relative pl-6 space-y-6">
                        {/* Timeline Line */}
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-blue-200" />

                        {features.map((item, index) => (
                            <div key={index} className="relative">
                                {/* Timeline Dot */}
                                <div className="absolute -left-[1.35rem] w-3 h-3 rounded-full bg-blue-500" />
                                <div className="bg-blue-50 rounded-lg p-3">
                                    <span className="text-sm font-medium text-blue-700">{item.feature}</span>
                                    <p className="text-xs text-blue-600 mt-1 opacity-75">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Content */}
                <div className="md:col-span-8 lg:col-span-9">
                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                        {quickStats.map((stat) => (
                            <div
                                key={stat.label}
                                className={`rounded-lg p-3 text-center ${stat.colorClass}`}
                            >
                                <p className="text-xs opacity-75">{stat.label}</p>
                                <p className="font-semibold text-sm sm:text-base">{stat.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Description */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                            The SteelSeries Arctis Nova Pro Wireless represents the pinnacle of gaming audio.
                            Featuring advanced Active Noise Cancellation, premium audio drivers, and an innovative
                            dual-battery system. Perfect for extended gaming sessions with its comfortable design
                            and versatile connectivity options.
                        </p>
                    </div>

                    {/* Pros/Cons and Specs */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {/* Pros & Cons Section */}
                        <div className="space-y-4">
                            <h2 className="font-semibold flex items-center gap-2 text-gray-900">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                Pros & Cons
                            </h2>
                            <div className="space-y-4">
                                {/* Pros */}
                                <div className="space-y-2">
                                    {pros.map((pro) => (
                                        <div key={pro} className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5" />
                                            <span className="text-sm text-gray-600">{pro}</span>
                                        </div>
                                    ))}
                                </div>
                                {/* Cons */}
                                <div className="space-y-2">
                                    {cons.map((con) => (
                                        <div key={con} className="flex items-start gap-2">
                                            <X className="w-4 h-4 text-red-500 mt-0.5" />
                                            <span className="text-sm text-gray-600">{con}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Technical Specs */}
                        <div>
                            <h2 className="font-semibold mb-4 flex items-center gap-2 text-gray-900">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                Technical Specs
                            </h2>
                            <div className="bg-gray-50 rounded-lg p-4">
                                <div className="space-y-3">
                                    {technicalSpecs.map((spec) => (
                                        <div key={spec.label} className="flex justify-between text-sm py-1 border-b border-gray-200 last:border-0">
                                            <span className="text-gray-600">{spec.label}</span>
                                            <span className="font-medium text-gray-900">{spec.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ModernCard = () => {
    return (
        <div className="w-full max-w-[1000px] mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header Section */}
            <div className="p-6 border-b">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                    {/* Image */}
                    <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                        <img
                            src="https://img.bestreviewsradar.com/image/upload/c_scale,w_160,h_160/f_auto,q_auto/primaltek-15-commercial-grade-vacuum-sealer-user-friendly-for-food-preservation-sous-vide-28-vacuum.jpg?_i=AA"
                            alt="Product"
                            className="w-full h-full object-cover rounded-lg border border-gray-100"
                        />
                        <span className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                            Best Seller
                        </span>
                    </div>

                    {/* Title & Rating */}
                    <div className="text-center md:text-left flex-1">
                        <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                            SteelSeries Arctis Nova Pro
                        </h1>
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
                            <div className="flex items-center">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-4 h-4 text-orange-400 fill-current" />
                                ))}
                                <span className="ml-2 text-gray-600">5.0</span>
                            </div>
                            <div className="flex gap-2">
                                {['Wireless', 'ANC', 'USB-C'].map((tag) => (
                                    <span
                                        key={tag}
                                        className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm md:text-base">
                            Premium wireless gaming headset featuring advanced noise cancellation and
                            high-fidelity audio for an immersive gaming experience.
                        </p>
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 border-b">
                {[
                    { label: 'Connection', value: 'Wireless' },
                    { label: 'Battery Life', value: '40h' },
                    { label: 'Driver Size', value: '40mm' },
                    { label: 'Weight', value: '338g' }
                ].map((stat, idx) => (
                    <div
                        key={stat.label}
                        className={`p-4 text-center ${idx < 2 ? 'border-b sm:border-b-0' : ''} 
              ${idx % 2 === 0 ? 'border-r' : ''}`}
                    >
                        <p className="text-gray-500 text-sm">{stat.label}</p>
                        <p className="font-medium text-gray-900">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Main Content */}
            <div className="p-6 space-y-8">
                {/* Features Grid */}
                <div>
                    <h2 className="text-lg font-semibold mb-4 text-gray-900">Key Features</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { title: 'Premium Audio', desc: 'High-fidelity sound with custom drivers' },
                            { title: 'Active ANC', desc: 'Advanced noise-cancellation technology' },
                            { title: 'Dual Wireless', desc: 'Bluetooth and 2.4GHz connections' },
                            { title: 'Long Battery', desc: '40+ hours of continuous playback' }
                        ].map((feature) => (
                            <div
                                key={feature.title}
                                className="p-4 rounded-lg border border-gray-100 hover:border-orange-200 transition-colors"
                            >
                                <h3 className="font-medium text-gray-900 mb-1">{feature.title}</h3>
                                <p className="text-sm text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pros & Cons */}
                <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                        <h2 className="text-lg font-semibold mb-4 text-gray-900">Pros</h2>
                        <div className="space-y-3">
                            {[
                                'Premium build quality and materials',
                                'Excellent noise-cancelling performance',
                                'Long battery life with hot-swap feature'
                            ].map((pro) => (
                                <div key={pro} className="flex items-start gap-2">
                                    <Check className="w-4 h-4 text-orange-500 mt-1" />
                                    <span className="text-gray-600">{pro}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-4 text-gray-900">Cons</h2>
                        <div className="space-y-3">
                            {[
                                'Premium price point',
                                'Software required for advanced features'
                            ].map((con) => (
                                <div key={con} className="flex items-start gap-2">
                                    <X className="w-4 h-4 text-orange-500 mt-1" />
                                    <span className="text-gray-600">{con}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Technical Specs */}
                <div>
                    <h2 className="text-lg font-semibold mb-4 text-gray-900">Technical Specifications</h2>
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                        {[
                            { label: 'Frequency Response', value: '10-40,000 Hz' },
                            { label: 'Driver Type', value: '40mm Neodymium' },
                            { label: 'Connection', value: '2.4GHz / Bluetooth' },
                            { label: 'Battery Life', value: '40+ hours' },
                            { label: 'Charging Port', value: 'USB-C Fast Charge' },
                            { label: 'Weight', value: '338g' }
                        ].map((spec) => (
                            <div key={spec.label} className="flex justify-between py-2 border-b border-gray-100">
                                <span className="text-gray-600">{spec.label}</span>
                                <span className="font-medium text-gray-900">{spec.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const LightProductCard = () => {
    return (
        <div className="w-full max-w-[1000px] mx-auto bg-white text-gray-900 rounded-lg overflow-hidden shadow-lg">
            <div className="p-4 md:p-6">
                {/* Product Header */}
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Image */}
                    <div className="w-[160px] h-[160px] mx-auto md:mx-0">
                        <img
                            src="https://img.bestreviewsradar.com/image/upload/c_scale,w_160,h_160/f_auto,q_auto/primaltek-15-commercial-grade-vacuum-sealer-user-friendly-for-food-preservation-sous-vide-28-vacuum.jpg?_i=AA"
                            alt="Gaming Headset"
                            className="w-full h-full object-cover rounded-lg border border-gray-200"
                        />
                    </div>

                    {/* Title and Rating */}
                    <div className="flex-1">
                        <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                            AceZone A-Spire Gaming Headset
                        </h1>
                        <div className="flex items-center gap-2 mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                            ))}
                            <span className="text-gray-600 ml-2">5.0</span>
                        </div>
                        <p className="text-gray-600 text-sm md:text-base">
                            This AceZone A-Spire is a gaming headset designed with esports competitors in mind. Equipped from a combination of active and passive noise cancellation, gamers can focus on performing their best. The A-Spire enhances footsteps in FPS titles while reducing sounds that can mask vital audio cues. Ensuring that communication with teammates remains reliable, the A-Spire microphone drowns out all outside noise with noise suppression algorithms. This AceZone headset can connect to sources wireless through Bluetooth, via analog audio cable, or USB-C.
                        </p>
                    </div>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 text-sm">
                    {[
                        { label: 'Microphone', value: 'Noise cancelling' },
                        { label: 'Compatibility', value: 'PC, Xbox, PS5, Mobile' },
                        { label: 'Brand', value: 'AceZone' },
                        { label: 'Noise Cancellation', value: 'Active, Passive' },
                        { label: 'Weight', value: '275 g' },
                        { label: 'Battery Life', value: '35 hours' },
                        { label: 'Frequency Response', value: '20 Hz - 20,000 Hz' },
                        { label: 'Driver', value: '40 mm' }
                    ].map((spec) => (
                        <div key={spec.label} className="flex justify-between bg-gray-50 p-3 rounded border border-gray-200">
                            <span className="text-gray-600">{spec.label}</span>
                            <span className="text-gray-900 font-medium">{spec.value}</span>
                        </div>
                    ))}
                </div>

                {/* Pros and Cons */}
                <div className="mt-6 space-y-4">
                    {/* Pros */}
                    <div className="space-y-2">
                        <h2 className="text-lg font-semibold text-gray-900">Pros</h2>
                        <div className="space-y-2">
                            {[
                                'Effective combination of passive and active noise cancelling',
                                'Amplifies sound effects that provide audio cues',
                                'Comfortable and secure fit'
                            ].map((pro) => (
                                <div key={pro} className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <span className="text-gray-600">{pro}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Cons */}
                    <div className="space-y-2">
                        <h2 className="text-lg font-semibold text-gray-900">Cons</h2>
                        <div className="space-y-2">
                            {[
                                'Bluetooth is the only wireless option',
                                'Design lacks modern styling'
                            ].map((con) => (
                                <div key={con} className="flex items-start gap-2">
                                    <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                                    <span className="text-gray-600">{con}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Buy Button - Centered */}
                <div className="mt-6 flex justify-center">
                    <a
                        href="#"
                        className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded transition-colors"
                    >
                        $250 at Amazon
                    </a>
                </div>
            </div>
        </div>
    );
};

const DarkProductCard = () => {
    return (
        <div className="w-full max-w-[1000px] mx-auto bg-gray-900 text-gray-100 rounded-lg overflow-hidden">
            <div className="p-4 md:p-6">
                {/* Product Header */}
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Image */}
                    <div className="w-[160px] h-[160px] mx-auto md:mx-0">
                        <img
                            src="https://img.bestreviewsradar.com/image/upload/c_scale,w_160,h_160/f_auto,q_auto/primaltek-15-commercial-grade-vacuum-sealer-user-friendly-for-food-preservation-sous-vide-28-vacuum.jpg?_i=AA"
                            alt="Gaming Headset"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>

                    {/* Title and Rating */}
                    <div className="flex-1">
                        <h1 className="text-xl md:text-2xl font-bold mb-3">AceZone A-Spire Gaming Headset</h1>
                        <div className="flex items-center gap-2 mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                            ))}
                            <span className="text-gray-300 ml-2">5.0</span>
                        </div>
                        <p className="text-gray-400 text-sm md:text-base">
                            This AceZone A-Spire is a gaming headset designed with esports competitors in mind. Equipped from a combination of active and passive noise cancellation, gamers can focus on performing their best. The A-Spire enhances footsteps in FPS titles while reducing sounds that can mask vital audio cues. Ensuring that communication with teammates remains reliable, the A-Spire microphone drowns out all outside noise with noise suppression algorithms. This AceZone headset can connect to sources wireless through Bluetooth, via analog audio cable, or USB-C.
                        </p>
                    </div>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 text-sm">
                    {[
                        { label: 'Microphone', value: 'Noise cancelling' },
                        { label: 'Compatibility', value: 'PC, Xbox, PS5, Mobile' },
                        { label: 'Brand', value: 'AceZone' },
                        { label: 'Noise Cancellation', value: 'Active, Passive' },
                        { label: 'Weight', value: '275 g' },
                        { label: 'Battery Life', value: '35 hours' },
                        { label: 'Frequency Response', value: '20 Hz - 20,000 Hz' },
                        { label: 'Driver', value: '40 mm' }
                    ].map((spec) => (
                        <div key={spec.label} className="flex justify-between bg-gray-800 p-3 rounded">
                            <span className="text-gray-400">{spec.label}</span>
                            <span className="text-gray-200">{spec.value}</span>
                        </div>
                    ))}
                </div>

                {/* Pros and Cons */}
                <div className="mt-6 space-y-4">
                    {/* Pros */}
                    <div className="space-y-2">
                        <h2 className="text-lg font-semibold">Pros</h2>
                        <div className="space-y-2">
                            {[
                                'Effective combination of passive and active noise cancelling',
                                'Amplifies sound effects that provide audio cues',
                                'Comfortable and secure fit'
                            ].map((pro) => (
                                <div key={pro} className="flex items-start gap-2">
                                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <span className="text-gray-300">{pro}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Cons */}
                    <div className="space-y-2">
                        <h2 className="text-lg font-semibold">Cons</h2>
                        <div className="space-y-2">
                            {[
                                'Bluetooth is the only wireless option',
                                'Design lacks modern styling'
                            ].map((con) => (
                                <div key={con} className="flex items-start gap-2">
                                    <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                                    <span className="text-gray-300">{con}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Buy Button - Centered */}
                <div className="mt-6 flex justify-center">
                    <a
                        href="#"
                        className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded transition-colors"
                    >
                        $250 at Amazon
                    </a>
                </div>
            </div>
        </div>
    );
};

// Main component
const ProductCards = () => {
    return (
        <div className="container space-y-8 md:space-y-12 p-4 md:p-6">
            <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Main Layout</h2>
                <ProdCard />
            </div>

            <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Timeline Style Layout</h2>
                <TimelineCard />
            </div>

            <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Modern Style Layout</h2>
                <ModernCard />
            </div>

            <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Magazine Style Layout</h2>
                <MagazineCard />
            </div>

            <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Tab Style Layout</h2>
                <TabStyleCard />
            </div>

            <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Tab Style Layout</h2>
                <LightProductCard />
            </div>

            <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Tab Style Layout</h2>
                <DarkProductCard />
            </div>
        </div>
    );
};

export default ProductCards;