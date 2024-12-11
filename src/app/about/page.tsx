import type { Metadata } from "next";
import { Users, Target, Award, Star, Check, TrendingUp, AlertCircle, ThumbsUp, Zap } from 'lucide-react';
import PageContainer from "@/components/Layouts/PageContainer";

export const metadata: Metadata = {
  title: "About Us - BestGadgetPro | Your Trusted Tech Review Source",
  description: "Learn about BestGadgetPro's mission to help millions make confident tech purchasing decisions through in-depth reviews and expert analysis.",
};

const stats = [
  {
    number: "500K+",
    label: "Monthly Readers",
    icon: <Users className="w-5 h-5" />
  },
  {
    number: "1000+",
    label: "Product Reviews",
    icon: <Star className="w-5 h-5" />
  },
  {
    number: "98%",
    label: "Accuracy Rate",
    icon: <Target className="w-5 h-5" />
  },
  {
    number: "24/7",
    label: "Expert Support",
    icon: <AlertCircle className="w-5 h-5" />
  }
];

const values = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Data-Driven Reviews",
    description: "Our reviews are based on extensive testing and real-world usage, providing accurate and reliable information."
  },
  {
    icon: <Check className="w-6 h-6" />,
    title: "Unbiased Analysis",
    description: "We maintain strict editorial independence and make our revenue through transparent affiliate partnerships."
  },
  {
    icon: <ThumbsUp className="w-6 h-6" />,
    title: "User-Focused",
    description: "Every review and comparison is crafted with our readers' needs and technical expertise levels in mind."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Always Current",
    description: "Tech moves fast, and so do we. Our content is regularly updated to reflect the latest developments."
  }
];

export default function AboutPage() {
  return (
    <PageContainer>
      <div className="min-h-screen bg-white mt-10 my-32">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-24 rounded-lg px-4">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 bg-blue-500 opacity-20 blur-3xl"></div>
          </div>
          <div className="mx-auto relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Guiding Your Tech Decisions
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                BestGadgetPro helps millions of people make confident tech purchasing decisions through comprehensive reviews, detailed comparisons, and expert insights.
              </p>
              <div className="inline-flex items-center space-x-2 bg-blue-600/10 px-4 py-2 rounded-full">
                <Award className="w-5 h-5 text-blue-400" />
                <span className="text-blue-300">Tech Excellence Award Winner 2024</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 relative -mt-12">
          <div className="mx-auto">
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg border">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                BestGadgetPro was founded with a clear mission: to cut through the noise in tech reviews. We believe that making tech decisions shouldn't be overwhelming. Through rigorous testing, expert analysis, and clear communication, we help our readers find the perfect tech products for their needs and budget.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4 p-6 bg-white rounded-xl border hover:shadow-md transition-shadow">
                  <div className="text-blue-600">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our team consists of passionate tech experts, experienced reviewers, and industry professionals who are dedicated to bringing you the most accurate and helpful tech reviews.
              </p>
              <div className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700">
                <Users className="w-5 h-5" />
                <a href="/team" className="font-medium">View Our Full Team</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-blue-600 rounded-lg px-4">
          <div className="mx-auto">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-blue-100 mb-8">
                Have questions about our review process? Want to collaborate? We'd love to hear from you.
              </p>
              <a
                href="mailto:contact@bestgadgetpro.com"
                className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}