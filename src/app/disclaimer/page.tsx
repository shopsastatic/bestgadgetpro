import type { Metadata } from "next";
import { AlertTriangle, FileWarning, ExternalLink, ShieldAlert, BadgeInfo, Scale, MessageCircle, Banknote } from 'lucide-react';
import PageContainer from "@/components/Layouts/PageContainer";

export const metadata: Metadata = {
    title: "Disclaimer - BestGadgetPro",
    description: "Important disclaimers regarding the use of BestGadgetPro's tech reviews, recommendations, and content.",
};

const sections = [
    {
        id: "general",
        icon: <AlertTriangle className="w-6 h-6" />,
        title: "General Disclaimer",
        content: `The information provided on BestGadgetPro is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.`
    },
    {
        id: "reviews",
        icon: <Scale className="w-6 h-6" />,
        title: "Review Process",
        content: `Our review process includes:

    • Hands-on testing of products when possible
    • Research from multiple reliable sources
    • Professional expertise and experience
    • Regular updates to reflect new information
    
    However, product experiences may vary based on individual circumstances, usage patterns, and specific needs.`
    },
    {
        id: "affiliates",
        icon: <Banknote className="w-6 h-6" />,
        title: "Affiliate & Advertising",
        content: `BestGadgetPro is a participant in various affiliate advertising programs designed to provide a means for sites to earn advertising fees by advertising and linking to retail partners.

    • We may earn commissions from qualifying purchases
    • Affiliate relationships don't influence our opinions
    • All affiliate partnerships are disclosed
    • Pricing and availability may vary`
    },
    {
        id: "accuracy",
        icon: <BadgeInfo className="w-6 h-6" />,
        title: "Content Accuracy",
        content: `While we make every effort to ensure the accuracy of our content:

    • Tech specifications may change
    • Prices and availability are subject to variation
    • Features may differ by region or model
    • Software updates may affect functionality
    • Manufacturer policies may change`
    },
    {
        id: "third-party",
        icon: <ExternalLink className="w-6 h-6" />,
        title: "Third-Party Content",
        content: `Our website may contain links to external websites or include content from third parties:

    • We don't control third-party content
    • External links are provided for convenience
    • We're not responsible for external content
    • Users should review third-party terms
    • External site security is not guaranteed`
    },
    {
        id: "liability",
        icon: <ShieldAlert className="w-6 h-6" />,
        title: "Limitation of Liability",
        content: `In no event shall BestGadgetPro be liable for any:

    • Direct or indirect losses
    • Business losses or damages
    • Data loss or corruption
    • Personal injury related to product use
    • Financial decisions based on our content`
    }
];

export default function DisclaimerPage() {
    return (
        <PageContainer>
            <div className="container min-h-screen bg-gradient-to-b from-gray-50 to-white mt-10 mb-32">
                {/* Header Section */}
                <section className="bg-gradient-to-b from-red-900 to-red-800 text-white py-16 rounded-lg">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
                                <FileWarning className="w-5 h-5" />
                                <span className="text-sm">Important Notice</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Website Disclaimer
                            </h1>
                            <p className="text-xl text-red-100">
                                Please read this disclaimer carefully before using our tech review services.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Alert Banner */}
                <div className="relative -mt-8">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg border p-6">
                            <div className="flex gap-4 items-start">
                                <div className="p-3 bg-red-50 rounded-lg">
                                    <AlertTriangle className="w-6 h-6 text-red-600" />
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-900 mb-2">
                                        Important Information
                                    </h2>
                                    <p className="text-gray-600">
                                        The content provided on BestGadgetPro is for informational purposes only. Always conduct your own research and due diligence before making any tech-related decisions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="mx-auto px-0 md:px-4 py-12">
                    <div className="max-w-4xl mx-auto">
                        {/* Content Sections */}
                        <div className="space-y-12">
                            {sections.map((section) => (
                                <section
                                    key={section.id}
                                    id={section.id}
                                    className="scroll-mt-8"
                                >
                                    <div className="flex gap-4 items-start">
                                        <div className="p-3 bg-gray-50 rounded-lg">
                                            <div className="text-gray-600">
                                                {section.icon}
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

                        {/* Contact Section */}
                        <div className="mt-16">
                            <div className="bg-gray-50 rounded-xl p-6">
                                <div className="flex gap-4 items-start">
                                    <MessageCircle className="w-6 h-6 text-gray-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                            Questions About This Disclaimer?
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            If you have any questions about our disclaimer policy, please contact our legal team.
                                        </p>
                                        <a
                                            href="mailto:legal@bestgadgetpro.com"
                                            className="text-blue-600 hover:text-blue-700 font-medium"
                                        >
                                            legal@bestgadgetpro.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Last Updated */}
                        <div className="mt-8 text-center text-sm text-gray-500">
                            This disclaimer was last updated on December 10, 2022
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
}