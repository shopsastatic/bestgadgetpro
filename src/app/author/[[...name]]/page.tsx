import { print } from "graphql/language/printer";
import { notFound } from "next/navigation";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { AuthorQuery } from "./AuthorQuery";
import type { Metadata } from "next";
import { Twitter, Linkedin, Mail, Star, Award, Calendar, Newspaper } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import PageContainer from "@/components/Layouts/PageContainer";
import { formatDate } from "@/utils/formatDate";

const expertiseAreas = [
    "Gaming Hardware",
    "Mobile Devices",
    "Display Technology",
    "PC Components",
    "Audio Equipment",
    "Benchmarking"
];

const achievements = [
    {
        icon: <Award className="w-5 h-5" />,
        title: "Best Tech Reviewer 2023",
        description: "Tech Excellence Awards"
    },
    {
        icon: <Star className="w-5 h-5" />,
        title: "100+ In-Depth Reviews",
        description: "Publishing Excellence"
    },
    {
        icon: <Calendar className="w-5 h-5" />,
        title: "5+ Years Experience",
        description: "Tech Journalism"
    }
];

const formatEmailName = (fullName: any) => {
    const firstName = fullName.split(' ')[0].toLowerCase();

    return firstName
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-zA-Z0-9]/g, '');
};


export const metadata: Metadata = {
    title: "John Smith - Tech Reviewer at BestGadgetPro",
    description: "Learn more about John Smith, our senior tech reviewer specializing in smartphones, laptops, and gaming gear.",
};


export default async function Author({ params }: { params: { name: any } }) {
    if (!params.name) return notFound();

    const authorSlug = params.name.join("/");

    try {
        const { user } = await fetchGraphQL<any>(print(AuthorQuery), {
            slug: authorSlug,
        });
        const expertise = user?.expert?.areasOfExpertise?.split("\r\n")

        if (!user) return notFound();
        return (
            <PageContainer>
                <div className="container min-h-screen bg-gray-50 mt-10 mb-32">
                    {/* Hero Section */}
                    <section className="bg-gradient-to-b from-gray-900 to-gray-800 pt-20 pb-32 rounded-lg">
                        <div className="container mx-auto px-4">
                            <div className="max-w-6xl mx-auto">
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                                    {/* Author Image */}
                                    <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
                                        <Image
                                            src={user?.ncUserMeta?.featuredImage?.node?.sourceUrl || user?.ncUserMeta?.backgroundImage?.node?.sourceUrl || "/"}
                                            alt={user?.name}
                                            width={192}
                                            height={192}
                                            className="object-cover"
                                        />
                                    </div>
                                    {/* Author Info */}
                                    <div className="text-center md:text-left text-white">
                                        <h1 className="text-4xl font-bold mb-4">{user?.name}</h1>
                                        <p className="text-xl text-gray-300 mb-4">{user?.ncUserMeta?.ncBio ?? "Senior Tech Reviewer & Editor"}</p>
                                        <p className="text-gray-400 max-w-2xl mb-6">
                                            {user?.description ?? `${user?.name} specializing in gaming hardware and mobile technology, bringing professional expertise in tech journalism. Delivering detailed reviews and analyses to help readers make informed tech decisions`}
                                        </p>
                                        {/* Social Links */}
                                        <div className="flex justify-center md:justify-start gap-4">
                                            <a href="#" className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors">
                                                <Twitter className="w-5 h-5" />
                                            </a>
                                            <a href="#" className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors">
                                                <Linkedin className="w-5 h-5" />
                                            </a>
                                            <a href="#" className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors">
                                                <Mail className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Stats Section */}
                    <section className="relative -mt-16">
                        <div className="container mx-auto px-4">
                            <div className="max-w-6xl mx-auto">
                                <div className="bg-white rounded-xl shadow-lg p-8">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        {achievements.map((achievement, index) => (
                                            <div key={index} className="flex items-start gap-4">
                                                <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                                                    {achievement.icon}
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                                                    <p className="text-gray-500 text-sm">{achievement.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Main Content */}
                    <div className="mx-auto px-0 md:px-4 py-16">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Left Column */}
                                <div className="lg:col-span-2 space-y-12">
                                    {/* About Section */}
                                    <section>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-6">About {user?.name}</h2>
                                        <div className="prose prose-gray max-w-none">
                                            <p className="text-gray-600">
                                                {user?.name} is a seasoned tech reviewer with a passion for cutting-edge technology. His journey in tech journalism began over 5 years ago, and since then, he has become one of BestGadgetPro's most trusted voices in gaming hardware and mobile technology reviews.
                                            </p>
                                            <p className="text-gray-600 mt-4">
                                                With a background in computer science and years of hands-on experience testing the latest tech products, {user?.name} brings both technical expertise and real-world perspective to his reviews. His detailed analysis and unbiased recommendations have helped countless readers make informed purchasing decisions.
                                            </p>
                                        </div>
                                    </section>

                                    {/* Recent Articles */}
                                    <section>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Articles</h2>
                                        <div className="space-y-6">
                                            {user?.posts?.nodes.map((article: any, index: any) => (
                                                <article key={index} className="bg-white rounded-xl overflow-hidden border hover:shadow-lg transition-shadow">
                                                    <Link href={"/" + article.slug} className="flex flex-col md:flex-row group p-4">
                                                        <div className="relative flex-shrink-0">
                                                            <Image
                                                                src={article?.featuredImage?.node?.sourceUrl ?? "/"}
                                                                alt={article?.featuredImage?.node?.altText ?? ""}
                                                                width={160}
                                                                height={160}
                                                                className="rounded-lg object-cover w-40 h-40 mb-5 md:mb-0"
                                                            />
                                                            <span className="absolute top-2 left-2 px-2 py-1 bg-black/70 text-white text-xs rounded-full">
                                                                {article.category ?? ""}
                                                            </span>
                                                        </div>
                                                        <div className="flex-1 pl-0 md:pl-6">
                                                            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                                                                <Calendar className="w-4 h-4" />
                                                                <time dateTime={formatDate(article.date, true)}>{formatDate(article.date, true)}</time>
                                                            </div>
                                                            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                                                                {article.title}
                                                            </h3>
                                                            {article?.excerpt && (
                                                                <p className="text-gray-600 line-clamp-2 text-sm">
                                                                    {article?.excerpt}
                                                                </p>
                                                            )}
                                                            <div className="mt-4 flex items-center gap-2 text-blue-600 font-medium text-sm">
                                                                Read Review
                                                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </article>
                                            ))}
                                        </div>
                                    </section>
                                </div>

                                {/* Right Column */}
                                <div className="space-y-8">
                                    {/* Expertise */}
                                    <div className="bg-white p-6 rounded-lg border">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Areas of Expertise</h3>
                                        {expertise?.length > 0 ? (
                                            <div className="flex flex-wrap gap-2">
                                                {expertise.map((area: any, index: any) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                                                    >
                                                        {area.trim()}
                                                    </span>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="flex flex-wrap gap-2">
                                                {expertiseAreas.map((area, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                                                    >
                                                        {area}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Contact Card */}
                                    <div className="bg-blue-50 p-6 rounded-lg">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Get in Touch</h3>
                                        <p className="text-gray-600 mb-4">
                                            Have questions about my reviews or need tech advice? Feel free to reach out.
                                        </p>
                                        <a
                                            href={`mailto:${formatEmailName(user?.name)}@bestgadgetpro.com`}
                                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                                        >
                                            <Mail className="w-4 h-4" />
                                            {formatEmailName(user?.name)}@bestgadgetpro.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainer>
        );
    } catch (error) {
        console.error('Error fetching author:', error);
        return notFound();
    }
}