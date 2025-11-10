import Link from 'next/link';

export default function About() {
  const skills = [
    { name: 'React & Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Node.js', level: 85 },
    { name: 'UI/UX Design', level: 88 },
    { name: 'SEO Optimization', level: 85 },
    { name: 'E-Commerce', level: 80 },
    { name: 'API Integration', level: 90 },
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0B1F3A] to-[#1a3a5a] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate web developer dedicated to building beautiful, functional websites that drive business growth
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-[#0B1F3A] mb-6">
                My Mission
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                I'm a web developer passionate about creating digital experiences that not only look amazing but also deliver real business results. My mission is to help small businesses, startups, and professionals establish a powerful online presence through custom-built websites.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                With a focus on modern technologies, clean code, and user-centered design, I build websites that are fast, secure, and optimized for success. Every project is an opportunity to solve problems, create value, and help businesses grow.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I believe in transparent communication, fair pricing, and delivering work that exceeds expectations. Your success is my success, and I'm committed to being your long-term partner in your digital journey.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#F4C542] to-[#f5d066] rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4">
                Let's Build Something Amazing
              </h3>
              <p className="text-[#0B1F3A]/80 mb-6">
                Ready to take your business online? Let's discuss your project.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#0B1F3A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0B1F3A]/90 transition-colors duration-200"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#0B1F3A] text-center mb-12">
              My Skills & Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-[#0B1F3A]">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-[#F4C542] to-[#f5d066] h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h2 className="text-3xl font-bold text-[#0B1F3A] text-center mb-12">
              Technologies I Work With
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'React', 'Next.js', 'TypeScript', 'JavaScript',
                'Tailwind CSS', 'Node.js', 'Express', 'MongoDB',
                'PostgreSQL', 'Git', 'GitHub', 'Vercel',
                'Netlify', 'Figma', 'Adobe XD', 'WordPress'
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-[#0B1F3A] text-white px-6 py-2 rounded-full font-medium hover:bg-[#0B1F3A]/90 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0B1F3A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and see how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#F4C542] text-[#0B1F3A] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#F4C542]/90 transition-all duration-200 transform hover:scale-105"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/portfolio"
              className="bg-transparent border-2 border-[#F4C542] text-[#F4C542] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#F4C542] hover:text-[#0B1F3A] transition-all duration-200"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

