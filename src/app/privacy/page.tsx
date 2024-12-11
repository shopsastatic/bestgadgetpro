import type { Metadata } from "next";
import { ScrollText, Shield, Bell, Database, Share2, Mail, Lock, Scale, Key } from 'lucide-react';
import Link from 'next/link';
import PageContainer from "@/components/Layouts/PageContainer";

export const metadata: Metadata = {
  title: "Privacy Policy - BestGadgetPro",
  description: "Learn how BestGadgetPro protects your privacy and handles your information when using our tech review and comparison services.",
};

const sections = [
  {
    id: "collection",
    icon: <ScrollText className="w-6 h-6" />,
    title: "Information We Collect",
    content: `We collect specific information to enhance your experience on BestGadgetPro and provide accurate tech reviews:

    • Basic user information when you subscribe to our newsletter or leave comments
    • Technical data to optimize our review platform for your device
    • Usage patterns to understand which tech reviews and comparisons are most helpful
    • Feedback and communications when you interact with our review team`
  },
  {
    id: "usage",
    icon: <Database className="w-6 h-6" />,
    title: "How We Use Your Information",
    content: `Your information helps us improve BestGadgetPro's tech review services:

    • Deliver personalized tech recommendations based on your interests
    • Send you exclusive deals and important product updates
    • Improve our review accuracy and comparison tools
    • Ensure authentic reviews and prevent spam`
  },
  {
    id: "protection",
    icon: <Shield className="w-6 h-6" />,
    title: "Data Protection",
    content: `We implement robust security measures to protect your data:

    • End-to-end encryption for sensitive data
    • Regular security audits and assessments
    • Strict access controls and authentication
    • Continuous monitoring for potential threats`
  },
  {
    id: "sharing",
    icon: <Share2 className="w-6 h-6" />,
    title: "Information Sharing",
    content: `We are committed to protecting your privacy and only share information when:

    • Required by law or legal process
    • Necessary for service providers to process data on our behalf
    • You have given explicit consent
    • It's necessary to protect rights and safety`
  },
  {
    id: "rights",
    icon: <Scale className="w-6 h-6" />,
    title: "Your Rights",
    content: `You have several rights regarding your personal data:

    • Access your personal information
    • Request correction of inaccurate data
    • Request deletion of your data
    • Opt-out of marketing communications
    • Export your data in a portable format`
  },
  {
    id: "cookies",
    icon: <Key className="w-6 h-6" />,
    title: "Cookies and Tracking",
    content: `We use cookies and similar technologies to:

    • Remember your preferences
    • Analyze site traffic and usage
    • Personalize content and ads
    • Improve site functionality and performance`
  }
];

export default function PrivacyPolicyPage() {
  return (
    <PageContainer>
      <div className="container min-h-screen bg-gradient-to-b from-gray-50 to-white mt-10 mb-32">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 text-blue-600 mb-2">
                <Lock className="w-8 h-8" />
                <span className="text-sm font-medium uppercase tracking-wider">Privacy Policy</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Protecting Your Privacy
              </h1>
              <p className="text-lg text-gray-600">
                Last updated: December 10, 2022
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
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
                  <Mail className="w-6 h-6 text-blue-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Questions about our Privacy Policy?
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">
                  If you have any questions about how BestGadgetPro handles your information or our privacy practices, our dedicated Privacy Team is here to help.
                </p>
                <a
                  href="mailto:privacy@bestgadgetpro.com"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  privacy@bestgadgetpro.com
                </a>
              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-8 text-center text-sm text-gray-500">
              This privacy policy is effective as of December 10, 2022. BestGadgetPro reserves the right to update this policy to reflect changes in our practices and services. We encourage you to review this policy periodically.
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}