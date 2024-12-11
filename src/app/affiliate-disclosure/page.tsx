import type { Metadata } from "next";
import { DollarSign, HandCoins, Heart, ShieldCheck, Link2, AlertCircle, CircleDollarSign, Building, Scale } from 'lucide-react';
import PageContainer from "@/components/Layouts/PageContainer";

export const metadata: Metadata = {
    title: "Affiliate Disclosure - BestGadgetPro",
    description: "Learn about how BestGadgetPro maintains transparency in our affiliate partnerships while providing honest tech reviews.",
};

const sections = [
    {
        id: "overview",
        icon: <HandCoins className="w-6 h-6" />,
        title: "Affiliate Partnerships",
        content: `BestGadgetPro participates in various affiliate programs that allow us to earn commissions through links to retailer websites. When you click on these links and make a purchase, we may receive a commission at no additional cost to you.

    Our primary affiliate partnerships include:
    • Amazon Associates Program
    • Best Buy Affiliate Program
    • B&H Photo Affiliate Program
    • Other major tech retailers`
    },
    {
        id: "editorial",
        icon: <Heart className="w-6 h-6" />,
        title: "Editorial Independence",
        content: `Our commitment to honest, unbiased reviews remains our top priority:

    • Affiliate partnerships never influence our opinions or ratings
    • Products are thoroughly tested regardless of affiliate status
    • Negative aspects are always disclosed when found
    • Review scores are based solely on product merit
    • We recommend products we truly believe in`
    },
    {
        id: "transparency",
        icon: <ShieldCheck className="w-6 h-6" />,
        title: "Transparency Commitment",
        content: `We believe in full transparency with our readers:

    • Affiliate links are clearly marked
    • Commission structures don't affect product rankings
    • We disclose all material relationships with brands
    • Our testing methods are openly shared
    • Revenue model is clearly explained`
    },
    {
        id: "link-identification",
        icon: <Link2 className="w-6 h-6" />,
        title: "Identifying Affiliate Links",
        content: `Our affiliate links are identified in the following ways:

    • "Buy Now" buttons include affiliate disclosure
    • Text links marked with an asterisk (*)
    • Disclosure statements at the beginning of articles
    • Clear labeling in price comparison tables
    • Hover tooltips on affiliate links`
    }
];

export default function AffiliateDisclosure() {
    return (
        <PageContainer>
            <div className="container min-h-screen bg-gradient-to-b from-gray-50 to-white mt-10 mb-32">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-b from-blue-900 to-blue-800 text-white py-16 md:py-24 overflow-hidden rounded-lg">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-400 rounded-full blur-3xl opacity-20"></div>
                    </div>
                    <div className="mx-auto px-0 md:px-4 relative">
                        <div className="max-w-3xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
                                <CircleDollarSign className="w-5 h-5" />
                                <span>Affiliate Partnership Disclosure</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                How We Make Money
                            </h1>
                            <p className="text-xl text-blue-100 mb-8">
                                Complete transparency about our affiliate partnerships and how they support our mission to provide comprehensive tech reviews.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Commitment Banner */}
                <section className="relative -mt-8">
                    <div className="mx-auto px-0 md:px-4">
                        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg border p-6 md:p-8">
                            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                                        <Scale className="w-8 h-8 text-blue-600" />
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-2">Our Fair Review Promise</h2>
                                    <p className="text-gray-600">
                                        While we may earn commissions through affiliate links, our reviews are always based on thorough testing and honest evaluation. Your trust is our top priority.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <div className="mx-auto px-0 md:px-4 py-12">
                    <div className="max-w-4xl mx-auto">
                        {/* Content Sections */}
                        <div className="space-y-12 md:space-y-16">
                            {sections.map((section) => (
                                <section
                                    key={section.id}
                                    id={section.id}
                                    className="scroll-mt-8"
                                >
                                    <div className="flex flex-col md:flex-row items-start gap-6">
                                        <div className="flex-shrink-0">
                                            <div className="p-3 bg-blue-50 rounded-lg">
                                                <div className="text-blue-600">
                                                    {section.icon}
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                                {section.title}
                                            </h2>
                                            <div className="prose prose-gray max-w-none">
                                                <p className="text-gray-600 whitespace-pre-line">
                                                    {section.content}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            ))}
                        </div>

                        {/* Additional Information */}
                        <div className="mt-16 space-y-8">
                            <div className="bg-gray-50 border rounded-xl p-6 md:p-8">
                                <div className="flex flex-col md:flex-row items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <Building className="w-6 h-6 text-gray-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            Company Partnerships
                                        </h3>
                                        <p className="text-gray-600">
                                            BestGadgetPro maintains partnerships with leading tech brands and retailers. These relationships help us provide early access to products for review, but never influence our final opinions or ratings.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Section */}
                            <div className="bg-blue-50 rounded-xl p-6 md:p-8">
                                <div className="flex flex-col md:flex-row items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <AlertCircle className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            Questions About Our Affiliate Program?
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            If you have any questions about our affiliate partnerships or how we maintain editorial independence, please contact our partnership team.
                                        </p>
                                        <a
                                            href="mailto:partnerships@bestgadgetpro.com"
                                            className="text-blue-600 hover:text-blue-700 font-medium"
                                        >
                                            partnerships@bestgadgetpro.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Note */}
                        <div className="mt-8 text-center text-sm text-gray-500">
                            This disclosure is effective as of December 10, 2022 and applies to all content on BestGadgetPro.
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
}