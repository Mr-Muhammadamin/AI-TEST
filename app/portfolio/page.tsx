import Link from "next/link";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React, Next.js, and Node.js backend with payment integration.",
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "Stripe"],
      image: "/placeholder-ecommerce.jpg",
      year: 2023,
      client: "Retail Innovations Inc."
    },
    {
      id: 2,
      title: "Data Analytics Dashboard",
      description: "Interactive business intelligence dashboard with real-time data visualization and predictive analytics.",
      technologies: ["Python", "Django", "React", "D3.js", "PostgreSQL"],
      image: "/placeholder-dashboard.jpg",
      year: 2023,
      client: "DataInsight Corp"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Cross-platform mobile banking application with secure authentication and transaction features.",
      technologies: ["React Native", "Node.js", "Firebase", "AWS"],
      image: "/placeholder-mobile.jpg",
      year: 2022,
      client: "FinTech Solutions"
    },
    {
      id: 4,
      title: "Machine Learning Pipeline",
      description: "Automated ML pipeline for predictive maintenance in manufacturing with TensorFlow and PyTorch.",
      technologies: ["Python", "TensorFlow", "PyTorch", "Docker", "Kubernetes"],
      image: "/placeholder-ml.jpg",
      year: 2023,
      client: "Industrial AI Systems"
    },
    {
      id: 5,
      title: "API Integration Platform",
      description: "Enterprise-grade API gateway for seamless integration between legacy systems and modern applications.",
      technologies: ["Node.js", "Express", "GraphQL", "Apollo", "MongoDB"],
      image: "/placeholder-api.jpg",
      year: 2022,
      client: "Enterprise Connect"
    },
    {
      id: 6,
      title: "Real-time Analytics System",
      description: "Scalable real-time analytics platform processing millions of events per second.",
      technologies: ["Go", "Kafka", "Elasticsearch", "Redis", "Docker"],
      image: "/placeholder-analytics.jpg",
      year: 2023,
      client: "StreamData Analytics"
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
              <Link href="/about" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition">About</Link>
              <Link href="/portfolio" className="text-blue-600 dark:text-blue-400 font-semibold">Portfolio</Link>
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
                Our Portfolio
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Explore our diverse range of successful projects across web development, data analysis, mobile applications, and AI solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {projects.map((project) => (
                <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200 dark:border-gray-700">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
                    <div className="text-center p-4">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-900">
                    <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                      <span>Client: {project.client}</span>
                      <span>Year: {project.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Approach</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Innovative Solutions</h3>
                  <p className="text-gray-600 dark:text-gray-400">We leverage cutting-edge technologies to deliver solutions that drive real business value and competitive advantage.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Client-Centric Focus</h3>
                  <p className="text-gray-600 dark:text-gray-400">Every project is tailored to your specific needs, ensuring optimal results and maximum return on investment.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Quality Excellence</h3>
                  <p className="text-gray-600 dark:text-gray-400">We maintain the highest standards of code quality, performance, and security in every project we deliver.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Let&apos;s collaborate to create innovative solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition shadow-lg hover:shadow-xl">
                Get in Touch
              </Link>
              <Link href="/about" className="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg transition border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl">
                Learn About Us
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