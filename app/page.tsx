import Link from 'next/link';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B1F3A] via-[#0B1F3A] to-[#1a3a5a] text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              We Build Websites That Build Businesses
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              We design, build, and launch high-performance websites — fast, affordable, and custom-tailored to your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#F4C542] text-[#0B1F3A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#F4C542]/90 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Let's Build Your Website
              </Link>
              <Link
                href="/portfolio"
                className="bg-transparent border-2 border-[#F4C542] text-[#F4C542] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#F4C542] hover:text-[#0B1F3A] transition-all duration-200 transform hover:scale-105"
              >
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive web solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Business Websites',
                description: 'Professional websites that represent your brand and drive customer engagement.',
                icon: '🏢',
              },
              {
                title: 'Portfolio Websites',
                description: 'Showcase your work and attract clients with a stunning portfolio site.',
                icon: '🎨',
              },
              {
                title: 'E-Commerce Stores',
                description: 'Full-featured online stores with secure payment processing and inventory management.',
                icon: '🛒',
              },
              {
                title: 'Booking Systems',
                description: 'Streamline appointments and reservations with integrated booking solutions.',
                icon: '📅',
              },
              {
                title: 'Landing Pages',
                description: 'High-converting landing pages designed to turn visitors into customers.',
                icon: '🚀',
              },
              {
                title: 'Custom Solutions',
                description: 'Tailored web applications built to solve your unique business challenges.',
                icon: '⚙️',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#F4C542] transition-all duration-200 transform hover:-translate-y-2 shadow-md hover:shadow-xl"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-[#0B1F3A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0B1F3A]/90 transition-colors duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what satisfied clients have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                business: 'Johnson & Associates',
                role: 'Business Owner',
                content: 'Webs4U transformed our online presence. The website is beautiful, fast, and has significantly increased our leads. The entire process was smooth and professional.',
                rating: 5,
              },
              {
                name: 'Michael Chen',
                business: 'TechStart Inc.',
                role: 'Founder',
                content: 'Working with Webs4U was a game-changer. They understood our vision and delivered beyond expectations. Our new website has helped us attract more clients and grow our business.',
                rating: 5,
              },
              {
                name: 'Emily Rodriguez',
                business: 'Creative Studio',
                role: 'Creative Director',
                content: 'The attention to detail and quality of work is outstanding. Our portfolio website perfectly showcases our work and has brought in several new projects. Highly recommended!',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-200"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#F4C542]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold text-[#0B1F3A]">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Got questions? We've got answers.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'How long does it take to build a website?',
                answer: 'Timeline depends on the complexity of your project. Simple business websites typically take 2-3 weeks, while more complex e-commerce or custom solutions may take 4-6 weeks. We will provide a detailed timeline after discussing your requirements.',
              },
              {
                question: 'What is the typical cost for a website?',
                answer: 'Our pricing starts at R15,999 for starter websites and goes up based on features and complexity. We offer three main packages (Starter, Business, Premium) and can create custom quotes for unique requirements. See our Pricing page for details.',
              },
              {
                question: 'Do you provide hosting and domain services?',
                answer: 'Yes! We can help you set up hosting and configure your domain. We will guide you through the process and ensure everything is properly configured for optimal performance.',
              },
              {
                question: 'Can I update the website myself after it is built?',
                answer: 'Absolutely! We can build your website with a content management system (CMS) that allows you to easily update content, add pages, and manage your site without technical knowledge.',
              },
              {
                question: 'What if I need changes after the website is launched?',
                answer: 'All our plans include a support period with revisions. After launch, we offer maintenance packages for ongoing updates, or you can request changes on a per-project basis.',
              },
              {
                question: 'Do you work with businesses outside your local area?',
                answer: 'Yes! We work with clients worldwide. All communication can be done remotely via email, video calls, and project management tools.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 hover:border-[#F4C542] transition-colors duration-200"
              >
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link
              href="/contact"
              className="inline-block bg-[#0B1F3A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0B1F3A]/90 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#F4C542] to-[#f5d066]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-6">
            Ready to Grow Your Business Online?
          </h2>
          <p className="text-xl text-[#0B1F3A]/80 mb-8">
            Get a free quote and consultation. No obligation, just expert advice.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#0B1F3A] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#0B1F3A]/90 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
