import type { Metadata } from "next";
import { Scale, AlertCircle, FileText, Shield, Star, MessageCircle, CreditCard, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
import PageContainer from "@/components/Layouts/PageContainer";

export const metadata: Metadata = {
    title: "Terms of Service - BestGadgetPro",
    description: "Read our terms of service to understand your rights and responsibilities when using BestGadgetPro's tech review platform.",
};

const sections = [
    {
        id: "acceptance",
        icon: <FileText className="w-6 h-6" />,
        title: "Terms Acceptance",
        content: `By accessing and using BestGadgetPro's services, you agree to be bound by these Terms of Service. Please read them carefully before using our platform.

    These terms apply to all visitors, users, and contributors to our tech review platform. If you disagree with any part of these terms, you should discontinue use of our services immediately.`
    },
    {
        id: "content-guidelines",
        icon: <Star className="w-6 h-6" />,
        title: "Content Guidelines",
        content: `Our content guidelines ensure high-quality tech reviews and discussions:

    • All reviews must be based on actual product experience
    • Affiliate relationships must be clearly disclosed
    • No misleading or false information about products
    • No spam, harassment, or promotional content
    • No plagiarized or copyrighted content without permission
    
    We reserve the right to remove content that violates these guidelines.`
    },
    {
        id: "user-responsibilities",
        icon: <AlertCircle className="w-6 h-6" />,
        title: "User Responsibilities",
        content: `As a user of BestGadgetPro, you agree to:

    • Provide accurate information in your reviews and comments
    • Maintain the security of your account credentials
    • Not engage in any activity that disrupts our services
    • Respect other users and their opinions
    • Not attempt to access restricted areas of the platform`
    },
    {
        id: "intellectual-property",
        icon: <Shield className="w-6 h-6" />,
        title: "Intellectual Property",
        content: `All content on BestGadgetPro, including but not limited to:

    • Reviews and articles
    • Images and videos
    • Graphics and logos
    • Website design and code
    
    Are protected by copyright and other intellectual property rights owned by BestGadgetPro or its licensors.`
    },
    {
        id: "comments-reviews",
        icon: <MessageCircle className="w-6 h-6" />,
        title: "Comments & Reviews",
        content: `When posting comments or reviews on BestGadgetPro:

    • You retain ownership of your content
    • You grant us a license to use and display your content
    • You are responsible for your content's accuracy
    • We may moderate or remove inappropriate content
    • We encourage constructive and respectful discussions`
    },
    {
        id: "affiliate-disclosure",
        icon: <LinkIcon className="w-6 h-6" />,
        title: "Affiliate Disclosure",
        content: `BestGadgetPro participates in affiliate programs:

    • We earn commissions from qualifying purchases
    • Our recommendations are based on genuine product testing
    • Affiliate relationships don't influence our reviews
    • All affiliate links are clearly marked
    • Commission rates vary by product and retailer`
    },
    {
        id: "payment-terms",
        icon: <CreditCard className="w-6 h-6" />,
        title: "Payment Terms",
        content: `For any premium services or features:

    • All payments are processed securely
    • Prices are listed in USD unless otherwise specified
    • Refunds are handled according to our refund policy
    • Subscriptions can be canceled at any time
    • Price changes will be notified in advance`
    }
];

export default function TermsPage() {
    return (
        <PageContainer>
            <div className="container min-h-screen bg-gradient-to-b from-gray-50 to-white mt-10 mb-32">
                {/* Header */}
                <div className="bg-white border-b">
                    <div className="mx-auto px-0 md:px-4 py-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex items-center gap-3 text-blue-600 mb-2">
                                <Scale className="w-8 h-8" />
                                <span className="text-sm font-medium uppercase tracking-wider">Terms of Service</span>
                            </div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                Our Terms & Conditions
                            </h1>
                            <p className="text-lg text-gray-600">
                                Last updated: December 10, 2022
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mx-auto px-0 md:px-4 py-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Quick Navigation */}
                        <div className="bg-white rounded-xl shadow-sm border p-6 mb-12">
                            <h2 className="text-xl font-semibold mb-4">Quick Navigation</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {sections.map((section) => (
                                    <Link
                                        key={section.id}
                                        href={`#${section.id}`}
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                                    >
                                        <div className="text-blue-600 transition-transform group-hover:scale-110">
                                            {section.icon}
                                        </div>
                                        <span className="text-gray-600 group-hover:text-gray-900">
                                            {section.title}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Content Sections */}
                        <div className="space-y-16">
                            {sections.map((section) => (
                                <section
                                    key={section.id}
                                    id={section.id}
                                    className="scroll-mt-8"
                                >
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="p-3 bg-blue-50 rounded-lg">
                                            <div className="text-blue-600">
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
                        <div className="mt-16 border-t pt-8">
                            <div className="bg-blue-50 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <AlertCircle className="w-6 h-6 text-blue-600" />
                                    <h2 className="text-xl font-semibold text-gray-900">
                                        Questions about our Terms?
                                    </h2>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    If you have any questions about our Terms of Service, please contact our Legal Team for clarification.
                                </p>
                                <a
                                    href="mailto:legal@bestgadgetpro.com"
                                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                                >
                                    legal@bestgadgetpro.com
                                </a>
                            </div>
                        </div>

                        {/* Footer Note */}
                        <div className="mt-8 text-center text-sm text-gray-500">
                            These Terms of Service are effective as of December 10, 2022. BestGadgetPro reserves the right to modify these terms at any time. Changes will be posted here with an updated effective date.
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
}