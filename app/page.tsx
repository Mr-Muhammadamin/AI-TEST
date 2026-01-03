export default function Home() {
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
              <a href="#services" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition">Services</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition">Skills</a>
              <a href="#expertise" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition">Expertise</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                Building Digital Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
                For <span className="text-blue-600 dark:text-blue-400 font-semibold">Programmers</span> & <span className="text-purple-600 dark:text-purple-400 font-semibold">Data Analysts</span>
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                Expert software development, data analysis, and technical consulting services to transform your ideas into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition shadow-lg hover:shadow-xl">
                  Get Started
                </a>
                <a href="#services" className="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg transition border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Our Services
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Comprehensive solutions for all your technical needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border border-blue-200 dark:border-blue-800 hover:shadow-xl transition">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Web Development</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Full-stack web applications using modern frameworks like React, Next.js, Node.js, and more.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl border border-purple-200 dark:border-purple-800 hover:shadow-xl transition">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Data Analysis</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Transform raw data into actionable insights using Python, R, SQL, and advanced analytics tools.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl border border-green-200 dark:border-green-800 hover:shadow-xl transition">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Mobile Apps</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl border border-orange-200 dark:border-orange-800 hover:shadow-xl transition">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Machine Learning</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  AI and ML solutions including predictive models, NLP, computer vision, and deep learning applications.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl border border-red-200 dark:border-red-800 hover:shadow-xl transition">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Database Design</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Scalable database architecture and optimization for SQL and NoSQL databases.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 rounded-xl border border-indigo-200 dark:border-indigo-800 hover:shadow-xl transition">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Data Visualization</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Interactive dashboards and visualizations using D3.js, Tableau, Power BI, and custom solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Technical Skills
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Expertise across modern technologies and frameworks
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6 flex items-center">
                  <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Programming Languages
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {['JavaScript/TypeScript', 'Python', 'Java', 'C++', 'Go', 'Rust', 'PHP', 'Ruby'].map((skill) => (
                    <div key={skill} className="flex items-center space-x-2 p-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-900 dark:text-white font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-6 flex items-center">
                  <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Data Analysis Tools
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Python (Pandas)', 'R', 'SQL', 'Excel', 'Tableau', 'Power BI', 'Apache Spark', 'Jupyter'].map((skill) => (
                    <div key={skill} className="flex items-center space-x-2 p-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-900 dark:text-white font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-6 flex items-center">
                  <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Frameworks & Libraries
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {['React/Next.js', 'Node.js/Express', 'Django/Flask', 'Spring Boot', 'TensorFlow', 'PyTorch', 'Vue.js', 'Angular'].map((skill) => (
                    <div key={skill} className="flex items-center space-x-2 p-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-900 dark:text-white font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-6 flex items-center">
                  <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                  Databases & Cloud
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'AWS', 'Google Cloud', 'Azure', 'Docker/K8s'].map((skill) => (
                    <div key={skill} className="flex items-center space-x-2 p-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span className="text-gray-900 dark:text-white font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="expertise" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Areas of Expertise
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Specialized knowledge to drive your projects forward
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl text-white shadow-xl">
                <h3 className="text-3xl font-bold mb-4">For Programmers</h3>
                <ul className="space-y-3">
                  {[
                    'Full-stack web application development',
                    'RESTful API design and implementation',
                    'Microservices architecture',
                    'DevOps and CI/CD pipelines',
                    'Cloud infrastructure management',
                    'Code review and optimization',
                    'Technical documentation',
                    'Agile/Scrum methodologies'
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <svg className="w-6 h-6 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl text-white shadow-xl">
                <h3 className="text-3xl font-bold mb-4">For Data Analysts</h3>
                <ul className="space-y-3">
                  {[
                    'Statistical analysis and modeling',
                    'Data mining and ETL processes',
                    'Business intelligence dashboards',
                    'Predictive analytics',
                    'A/B testing and experimentation',
                    'Data quality and governance',
                    'Report automation',
                    'Machine learning integration'
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <svg className="w-6 h-6 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let&apos;s collaborate to bring your ideas to life with cutting-edge technology and data-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:contact@techhub.com" className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 font-semibold rounded-lg transition shadow-lg hover:shadow-xl">
                Email Us
              </a>
              <a href="#services" className="px-8 py-4 bg-transparent hover:bg-white/10 text-white font-semibold rounded-lg transition border-2 border-white shadow-lg hover:shadow-xl">
                View Services
              </a>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">10+</div>
                <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
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
