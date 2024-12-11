import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock, MessageSquare, AlertCircle } from 'lucide-react';
import PageContainer from "@/components/Layouts/PageContainer";

export const metadata: Metadata = {
    title: "Contact Us - BestGadgetPro",
    description: "Get in touch with BestGadgetPro's team for any questions, partnerships, or support needs.",
};

const contactMethods = [
    {
        icon: <Mail className="h-6 w-6" />,
        title: "Email Us",
        description: "Our team typically responds within 24 hours",
        contact: "support@bestgadgetpro.com",
        actionText: "Send an email"
    }
];

const departments = [
    {
        name: "Editorial Team",
        email: "editorial@bestgadgetpro.com",
        description: "For content collaborations and review requests"
    },
    {
        name: "Business Development",
        email: "partnerships@bestgadgetpro.com",
        description: "For partnership and advertising opportunities"
    },
    {
        name: "Technical Support",
        email: "support@bestgadgetpro.com",
        description: "For website issues and technical assistance"
    }
];

export default function ContactPage() {
    return (
        <PageContainer>
            <div className="container min-h-screen bg-gray-50 mt-10 mb-32">
                <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 rounded-lg">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
                            <p className="text-gray-300 text-lg">
                                Have a question or feedback? We're here to help. Choose the best way to reach us.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="container mx-auto px-4 py-12">
                    <div className="grid md:grid-cols-1 gap-8 max-w-xl mx-auto -mt-16">
                        {contactMethods.map((method, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-sm p-6 relative overflow-hidden group hover:shadow-md transition-shadow"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                                <div className="relative">
                                    <div className="flex justify-center gap-2 items-center mb-4">
                                        <div className="text-blue-600">{method.icon}</div>
                                        <h3 className="text-xl font-semibold text-gray-900 text-center">{method.title}</h3>
                                    </div>
                                    <p className="text-gray-500 text-sm mb-4 text-center">{method.description}</p>
                                    <div className="text-gray-900 font-medium mb-4 text-center">{method.contact}</div>
                                    <a
                                        href="mailto:support@bestgadgetpro.com"
                                        className="items-center text-blue-600 hover:text-blue-700 font-medium block text-center w-full"
                                    >
                                        {method.actionText}
                                        <span className="ml-2">→</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mx-auto px-0 md:px-4 py-12">
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                            <div className="p-4 md:p-8">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                                placeholder="John"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Department
                                        </label>
                                        <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors">
                                            <option value="">Select a department</option>
                                            {departments.map((dept, index) => (
                                                <option key={index} value={dept.name}>{dept.name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            rows={4}
                                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                            placeholder="How can we help you?"
                                        />
                                    </div>

                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <AlertCircle className="w-4 h-4" />
                                        <span>We typically respond within 24-48 hours</span>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </PageContainer>
    );
}