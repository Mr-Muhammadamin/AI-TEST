import Link from "next/link";

export default function About() {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "15+ years in software development and data science. Passionate about building innovative solutions that drive business growth.",
      expertise: ["Software Architecture", "Data Science", "Business Strategy"]
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO & Lead Developer",
      bio: "Full-stack development expert with 12 years experience. Specializes in scalable web applications and cloud infrastructure.",
      expertise: ["Web Development", "Cloud Computing", "DevOps"]
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Data Science Director",
      bio: "Data analytics and machine learning specialist with 10 years experience in predictive modeling and business intelligence.",
      expertise: ["Machine Learning", "Data Visualization", "Statistical Analysis"]
    },
    {
      id: 4,
      name: "David Kim",
      role: "Mobile Development Lead",
      bio: "Mobile application architect with 8 years experience building cross-platform solutions for iOS and Android.",
      expertise: ["React Native", "Flutter", "Mobile UI/UX"]
    }
  ];

  const companyValues = [
    {
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative problem-solving to deliver exceptional results.",
      icon: "💡"
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards of quality in every aspect of our work and client relationships.",
      icon: "⭐"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnership to achieve extraordinary outcomes.",
      icon: "🤝"
    },
    {
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices at all times.",
      icon: "🛡️"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">&lt;/&gt;</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Tech Hub</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition">Home</Link>
              <Link href="/about" className="text-blue-600 dark:text-blue-400 font-semibold">About</Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition">Portfolio</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition">Contact</Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                About Tech Hub
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Empowering businesses through innovative technology solutions and data-driven insights.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Founded in 2015, Tech Hub was born from a passion for technology and a vision to bridge the gap between innovative ideas and practical solutions. What started as a small team of dedicated developers has grown into a comprehensive technology partner serving clients worldwide.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Over the years, we&apos;ve helped hundreds of businesses transform their operations through custom software development, data analytics, and strategic technology consulting. Our journey has been marked by continuous learning, adaptation, and a relentless pursuit of excellence.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Today, we&apos;re proud to be recognized as a trusted partner for businesses seeking to leverage technology for growth, efficiency, and competitive advantage.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Empower Through Technology</h3>
                      <p className="text-gray-600 dark:text-gray-400">We enable businesses to harness the power of technology to solve complex challenges and achieve their goals.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Drive Innovation</h3>
                      <p className="text-gray-600 dark:text-gray-400">We push the boundaries of what&apos;s possible by exploring emerging technologies and creative problem-solving approaches.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Deliver Excellence</h3>
                      <p className="text-gray-600 dark:text-gray-400">We are committed to delivering solutions of the highest quality that exceed our clients&apos; expectations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl p-8 text-white mb-16">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-blue-100">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-blue-100">Happy Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">10+</div>
                  <div className="text-blue-100">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">25+</div>
                  <div className="text-blue-100">Team Members</div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Core Values</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {companyValues.map((value, index) => (
                  <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Meet Our Team</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member) => (
                  <div key={member.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
                      <div className="w-20 h-20 bg-blue-600 dark:bg-blue-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{member.role}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{member.bio}</p>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Why Choose Tech Hub?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Expert Team</h3>
                  <p className="text-gray-600 dark:text-gray-400">Our team consists of highly skilled professionals with diverse expertise across multiple technology domains.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Tailored Solutions</h3>
                  <p className="text-gray-600 dark:text-gray-400">We don&apos;t believe in one-size-fits-all. Every solution we deliver is custom-built to meet your specific business needs.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Proven Results</h3>
                  <p className="text-gray-600 dark:text-gray-400">Our track record speaks for itself. We&apos;ve helped numerous clients achieve measurable business outcomes through technology.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Partner With Us?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Join our growing list of satisfied clients and experience the Tech Hub difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition shadow-lg hover:shadow-xl">
                Get in Touch
              </Link>
              <Link href="/portfolio" className="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg transition border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl">
                View Our Work
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">&lt;/&gt;</span>
              </div>
              <span className="text-lg font-bold">Tech Hub</span>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Tech Hub. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}