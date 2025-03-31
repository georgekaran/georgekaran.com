import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ArrowRight, MapPin, Phone } from "lucide-react"

export default function Home() {
  return (
      <div className="min-h-screen bg-[#121212] text-white relative overflow-hidden">
        {/* Global background decorative elements */}
        <div className="fixed top-20 right-1/4 w-64 h-64 bg-[#3B82F6]/10 rounded-full blur-3xl"></div>
        <div className="fixed bottom-40 left-1/3 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl"></div>
        <div className="fixed top-1/3 right-10 w-48 h-48 bg-[#3B82F6]/5 rounded-full blur-3xl"></div>
        <div className="fixed bottom-20 left-10 w-72 h-72 bg-[#3B82F6]/5 rounded-full blur-3xl"></div>
        <div className="fixed top-3/4 right-1/4 w-56 h-56 bg-[#3B82F6]/5 rounded-full blur-3xl"></div>

        {/* Navigation */}
        <header className="container mx-auto px-4 py-6 flex justify-between items-center relative z-10">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-all duration-300 hover:drop-shadow-[0_0_4px_rgba(59,130,246,0.5)]"
              >
                <path
                    d="M16 4L4 10V22L16 28L28 22V10L16 4Z"
                    fill="#3B82F6"
                    fillOpacity="0.1"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                />
                <path d="M16 16L4 10" stroke="#3B82F6" strokeWidth="1.5" />
                <path d="M16 16L16 28" stroke="#3B82F6" strokeWidth="1.5" />
                <path d="M16 16L28 10" stroke="#3B82F6" strokeWidth="1.5" />
                <path
                    d="M16 10C14.3431 10 13 11.3431 13 13V19C13 20.6569 14.3431 22 16 22H19"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path d="M16 16H19" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-[#3B82F6] font-bold text-lg">georgekaran</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-white hover:text-[#3B82F6] transition-colors border-b-2 border-[#3B82F6]">
              Home
            </Link>
            <Link href="#about" className="text-white hover:text-[#3B82F6] transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-white hover:text-[#3B82F6] transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-white hover:text-[#3B82F6] transition-colors">
              Contact
            </Link>
          </nav>
          <div />
        </header>

        {/* Hero Section */}
        <section className="container max-w-4xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-sm">
              Software Engineer
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Hi, I&#39;m <span className="text-[#3B82F6]">George</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-md">
              A Software Engineer with {new Date().getFullYear()-2018}+ years of experience in the SaaS industry with strong fundamentals in React,
              TypeScript and Node.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 text-gray-400 text-sm">
              <div className="flex items-center gap-1">
                <MapPin size={16} className="text-[#3B82F6]" />
                <span>São Paulo, Brazil</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone size={16} className="text-[#3B82F6]" />
                <span>+55 51 99955-0056</span>
              </div>
            </div>

            <div className="pt-6">
              <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#3B82F6] text-black px-6 py-3 rounded-full font-medium hover:bg-[#3B82F6]/90 transition-colors"
              >
                Let&#39;s Connect
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 mx-auto md:ml-auto md:mr-0 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#3B82F6]/20">
              <Image
                  src="/profile.jpg"
                  alt="George Karan profile"
                  width={320}
                  height={320}
                  className="object-cover"
                  priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#3B82F6]/20 to-transparent rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-4 mb-16">
              <div className="w-20 h-1 bg-[#3B82F6] rounded-full mt-4 md:mt-6"></div>
              <div>
                <h2 className="text-4xl font-bold mb-6 text-white">About me</h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  Focused on creating web applications with accessibility best practices, always crafting for an amazing
                  developer experience, optimized performance, and assuring code quality through testing.
                </p>
              </div>
            </div>

            <div className="space-y-6 mb-20">
              <p className="text-gray-300 leading-relaxed">
                I&#39;m a Software Engineer with 6+ years of experience in the SaaS industry with strong fundamentals in
                React, TypeScript and Node. I regularly attend web development meetups and contribute to open-source
                projects (Currently maintainer of Ariakit), staying connected with the community and keeping my skills
                sharp and current.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My expertise spans across modern frontend technologies including React, JavaScript, TypeScript, GraphQL,
                and various testing frameworks. I&#39;m passionate about creating accessible, performant web applications with
                excellent developer experience.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I&#39;m fluent in English, Portuguese, and Spanish, which has enabled me to collaborate effectively with
                international teams throughout my career.
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-8 text-center">Experience & Education</h3>

            <div className="relative">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-800"></div>

              <div className="space-y-12">
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                  <div className="md:text-right md:pr-8">
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#3B82F6] rounded-full border-4 border-gray-900"></div>
                    <span className="inline-block px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-sm mb-2">
                    11/2020 - Present
                  </span>
                    <h4 className="text-xl font-bold mb-1">Founding/Lead Frontend Engineer</h4>
                    <p className="text-gray-400 mb-2">Croct, Denver, United States</p>
                    <p className="text-gray-300">
                      Architected and led the development of the company&#39;s main product platform, working closely with the
                      CEO, who serves over 1,000 active users monthly. Developed essential features on the Croct&#39;s B2B
                      SaaS, including a Content Management System (CMS), real-time dashboards, and audience segmentation
                      tools.
                    </p>
                  </div>
                  <div className="md:hidden"></div>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                  <div className="md:hidden"></div>
                  <div className="md:pl-8">
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#3B82F6] rounded-full border-4 border-gray-900"></div>
                    <span className="inline-block px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-sm mb-2">
                    08/2020 - 11/2020
                  </span>
                    <h4 className="text-xl font-bold mb-1">Software Engineer</h4>
                    <p className="text-gray-400 mb-2">Santander (Via DBC), Brazil</p>
                    <p className="text-gray-300">
                      Partnered closely with the software architect to design and refine microservices for each feature.
                      Achieved over 90% code coverage through comprehensive unit tests using Mocha and Chai, reducing the
                      defects in production. Collaborated with international teams in Mexico and Spain to integrate APIs.
                    </p>
                  </div>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                  <div className="md:text-right md:pr-8">
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#3B82F6] rounded-full border-4 border-gray-900"></div>
                    <span className="inline-block px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-sm mb-2">
                    11/2018 - 08/2020
                  </span>
                    <h4 className="text-xl font-bold mb-1">Software Engineer</h4>
                    <p className="text-gray-400 mb-2">BIMachine, Brazil</p>
                    <p className="text-gray-300">
                      Developed and maintained the BIMachine B2B SaaS application using React integrated with Java and the
                      Spring framework, managing more than $11 billion in customer revenue and more 11k active users. Led
                      the frontend migration for the Planning application from JSF to React to modernize the user
                      experience.
                    </p>
                  </div>
                  <div className="md:hidden"></div>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                  <div className="md:hidden"></div>
                  <div className="md:pl-8">
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#3B82F6] rounded-full border-4 border-gray-900"></div>
                    <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm mb-2">
                    02/2016 - 12/2021
                  </span>
                    <h4 className="text-xl font-bold mb-1">Bachelor of Software Engineer</h4>
                    <p className="text-gray-400 mb-2">Universidade do Vale do Taquari, Brazil</p>
                    <p className="text-gray-300">Leave of Absence - 95% completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container mx-auto px-4 py-20 relative z-10">
          <div className="flex flex-col md:flex-row items-start gap-4 mb-12">
            <div className="w-20 h-1 bg-[#3B82F6] rounded-full mt-4 md:mt-6"></div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">Featured Projects</h2>
              <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                A selection of my work that showcases my expertise in software development and accessibility.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl overflow-hidden group hover:bg-gray-800/50 transition-colors border border-gray-800/50">
              <div className="h-48 bg-gray-800/50 relative overflow-hidden">
                <Image
                    src={`/ariakit.png`}
                    alt="Ariakit Project"
                    width={400}
                    height={200}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Ariakit</h3>
                <p className="text-gray-400 mb-4">
                  Open-source project focused on building accessible UI components for React applications. Currently
                  serving as a maintainer, contributing to web accessibility standards.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-xs">React</span>
                  <span className="px-2 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-xs">TypeScript</span>
                  <span className="px-2 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-xs">Accessibility</span>
                </div>
                <Link
                    href="https://github.com/ariakit/ariakit"
                    target="_blank"
                    className="inline-flex items-center text-[#3B82F6] hover:underline"
                >
                  View Project
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl overflow-hidden group hover:bg-gray-800/50 transition-colors border border-gray-800/50">
              <div className="h-48 bg-gray-800/50 relative overflow-hidden">
                <Image
                    src={`/croct-site.png`}
                    alt="Croct CMS Project"
                    width={400}
                    height={200}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Croct CMS</h3>
                <p className="text-gray-400 mb-4">
                  Led the development of a Content Management System for Croct&#39;s B2B SaaS platform, enabling non-technical
                  users to create and manage personalized content.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-xs">React</span>
                  <span className="px-2 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-xs">GraphQL</span>
                  <span className="px-2 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-xs">Relay</span>
                </div>
                <Link href="https://croct.com" className="inline-flex items-center text-[#3B82F6] hover:underline">
                  View Project
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl overflow-hidden group hover:bg-gray-800/50 transition-colors border border-gray-800/50">
              <div className="h-48 bg-gray-800/50 relative overflow-hidden">
                <Image
                    src={`/design-system.png`}
                    alt="Design System Project"
                    width={400}
                    height={200}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Design System</h3>
                <p className="text-gray-400 mb-4">
                  Built and led the development of a comprehensive design system, establishing a consistent visual and
                  functional language across applications.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-xs">React</span>
                  <span className="px-2 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-xs">Storybook</span>
                  <span className="px-2 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-xs">CSS-in-JS</span>
                </div>
                <Link href="https://app.croct.com" className="inline-flex items-center text-[#3B82F6] hover:underline">
                  View Project
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="container mx-auto px-4 py-20 relative z-10">
          <div className="flex flex-col md:flex-row items-start gap-4 mb-12">
            <div className="w-20 h-1 bg-[#3B82F6] rounded-full mt-4 md:mt-6"></div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">Skills</h2>
              <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                Technical expertise and proficiencies I&#39;ve developed throughout my career.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50">
              <h3 className="text-xl font-bold mb-4 text-[#3B82F6]">Frontend</h3>
              <ul className="space-y-2 text-gray-300">
                <li>React</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>GraphQL</li>
                <li>Relay</li>
                <li>Apollo</li>
                <li>Next.JS</li>
                <li>CSS-in-JS</li>
                <li>Emotion</li>
                <li>Tailwind</li>
              </ul>
            </div>

            <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50">
              <h3 className="text-xl font-bold mb-4 text-[#3B82F6]">Testing</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Jest</li>
                <li>React Testing Library</li>
                <li>Cucumber</li>
                <li>Cypress</li>
                <li>Playwright</li>
                <li>Unit Testing</li>
                <li>Chai</li>
                <li>Mocha</li>
                <li>Storybook</li>
              </ul>
            </div>

            <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50">
              <h3 className="text-xl font-bold mb-4 text-[#3B82F6]">Backend</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Node.JS</li>
                <li>SQL</li>
                <li>Postgres</li>
                <li>MongoDB</li>
                <li>Java</li>
                <li>Spring Framework</li>
                <li>Go</li>
                <li>Full-Stack</li>
                <li>Webpack</li>
                <li>CI/CD</li>
              </ul>
            </div>

            <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50">
              <h3 className="text-xl font-bold mb-4 text-[#3B82F6]">Languages & Other</h3>
              <ul className="space-y-2 text-gray-300">
                <li>English (Professional)</li>
                <li>Portuguese (Native)</li>
                <li>Spanish (Professional)</li>
                <li>Git</li>
                <li>GitHub Actions</li>
                <li>OOP</li>
                <li>Design Systems</li>
                <li>Developer Experience</li>
                <li>Accessibility (a11y)</li>
                <li>Performance Optimization</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-4 mb-12">
              <div className="w-20 h-1 bg-[#3B82F6] rounded-full mt-4 md:mt-6"></div>
              <div>
                <h2 className="text-4xl font-bold mb-6 text-white">Let&#39;s Connect</h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  I&#39;m always open to discussing new projects, opportunities, or collaborations. Feel free to reach out!
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
              <a
                  href="mailto:georgekaran12@gmail.com"
                  className="flex items-center gap-3 bg-gray-900/30 backdrop-blur-sm hover:bg-gray-800/50 p-4 rounded-xl transition-colors border border-gray-800/50"
              >
                <Mail className="text-[#3B82F6]" />
                <span>georgekaran12@gmail.com</span>
              </a>
              <a
                  href="https://github.com/georgekaran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-gray-900/30 backdrop-blur-sm hover:bg-gray-800/50 p-4 rounded-xl transition-colors border border-gray-800/50"
              >
                <Github className="text-[#3B82F6]" />
                <span>github.com/georgekaran</span>
              </a>
              <a
                  href="https://linkedin.com/in/georgekaranmueller"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-gray-900/30 backdrop-blur-sm hover:bg-gray-800/50 p-4 rounded-xl transition-colors border border-gray-800/50"
              >
                <Linkedin className="text-[#3B82F6]" />
                <span>linkedin.com/in/georgekaran</span>
              </a>
            </div>

            <div className="text-center">
              <Link
                  href="https://drive.google.com/file/d/1wL6sNDsPOLMBveUaW2lWdfx0VJGozt4b/view?usp=sharing"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-[#3B82F6] text-black px-8 py-3 rounded-full font-medium hover:bg-[#3B82F6]/90 transition-colors"
              >
                Download Resume
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800/50 py-8 relative z-10">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} George Karan Kommers Mueller. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a
                  href="https://github.com/georgekaran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#3B82F6]"
              >
                <Github size={20} />
              </a>
              <a
                  href="https://linkedin.com/in/georgekaranmueller"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#3B82F6]"
              >
                <Linkedin size={20} />
              </a>
              <a href="mailto:georgekaran12@gmail.com" className="text-gray-400 hover:text-[#3B82F6]">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </footer>
      </div>
  )
}

