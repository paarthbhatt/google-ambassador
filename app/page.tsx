"use client"

import { useState, useEffect } from "react"
import {
  Sparkles,
  Mail,
  Linkedin,
  Github,
  Twitter,
  Menu,
  X,
  Code,
  Rocket,
  Phone,
  MapPin,
  Calendar,
  Trophy,
  BadgeIcon as Certificate,
  Brain,
  Shield,
  GitBranch,
  Award,
  Building,
} from "lucide-react"

// Contact Modal Component
function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 transform animate-fade-in-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let's Connect!
          </h3>
          <p className="text-gray-600">Ready to innovate together</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
            <Mail className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700">paarthbhatt37@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
            <Phone className="w-5 h-5 text-green-600" />
            <span className="text-gray-700">+91 8920948990</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
            <MapPin className="w-5 h-5 text-red-600" />
            <span className="text-gray-700">New Delhi, INDIA</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
            <Calendar className="w-5 h-5 text-purple-600" />
            <span className="text-gray-700">Available for immediate start</span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            Excited to discuss how I can contribute to Google's mission as a Student Ambassador
          </p>
        </div>
      </div>
    </div>
  )
}

// Enhanced Header Component
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          scrolled ? "bg-white/90 backdrop-blur-lg shadow-xl" : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left side - Google Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-700">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6" />
              </div>
            </div>

            {/* Center - Parth Bhatt */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                Parth Bhatt
              </span>
            </div>

            {/* Right side - Hire Me Button */}
            <div className="flex items-center">
              <button
                onClick={() => setShowContactModal(true)}
                className="bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 text-white px-8 py-3 rounded-full hover:shadow-2xl hover:scale-110 transition-all duration-300 font-semibold text-lg shadow-lg"
              >
                HIRE ME
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden absolute top-4 right-6" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col items-center">
              <button
                onClick={() => setShowContactModal(true)}
                className="bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 text-white px-8 py-3 rounded-full hover:shadow-2xl hover:scale-110 transition-all duration-300 font-semibold text-lg shadow-lg"
              >
                HIRE ME
              </button>
            </div>
          </div>
        )}
      </header>
      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </>
  )
}

// Enhanced Hero Section with Google-themed background
function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Google-themed Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-red-50">
        {/* Google Colors Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-40 h-40 bg-red-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-20 w-36 h-36 bg-yellow-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-green-500 rounded-full blur-3xl animate-pulse delay-3000"></div>
        </div>

        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Floating Google-colored Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 animate-float"></div>
        <div className="floating-element absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full opacity-20 animate-float-delayed"></div>
        <div className="floating-element absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full opacity-20 animate-float"></div>
        <div className="floating-element absolute bottom-20 right-10 w-18 h-18 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-20 animate-float-delayed"></div>
      </div>

      <div className="relative z-10 text-center px-6 animate-fade-in-up">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 transform hover:scale-105 transition-transform duration-500">
            <span className="bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              Hello, Google!
            </span>
            <br />
            <span className="text-gray-800">I'm </span>
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Parth Bhatt
            </span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-600 mb-8 animate-fade-in-delayed">
            Your next <span className="text-blue-600 font-semibold">Student Ambassador</span>, ready to innovate with{" "}
            <span className="text-red-500 font-semibold">Google</span> &{" "}
            <span className="text-purple-600 font-semibold">Gemini AI</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 text-white px-8 py-4 rounded-full shadow-2xl hover:shadow-blue-500/25 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-green-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex items-center gap-2">
              <Sparkles className="w-5 h-5 group-hover:animate-spin" />
              My Pitch
              <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </button>

          <button className="group bg-white/80 backdrop-blur-sm text-green-600 px-8 py-4 rounded-full border-2 border-green-200 hover:border-green-400 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              View Certifications
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}

// Certifications Section
function CertificationsSection() {
  const certifications = [
    {
      icon: Certificate,
      iconColor: "text-blue-500",
      bgGradient: "from-blue-400 to-blue-600",
      title: "Junior Cybersecurity Analyst Career Path",
      issuer: "Cisco",
      date: "2025",
      description:
        "Comprehensive cybersecurity training covering threat detection, incident response, and security analysis",
    },
    {
      icon: Brain,
      iconColor: "text-red-500",
      bgGradient: "from-red-400 to-red-600",
      title: "Foundation Level Threat Intelligence Analyst",
      issuer: "arcX",
      date: "2025",
      description:
        "Specialized training in threat intelligence analysis, cyber threat hunting, and security intelligence",
    },
    {
      icon: GitBranch,
      iconColor: "text-purple-500",
      bgGradient: "from-purple-400 to-purple-600",
      title: "GitHub Foundations",
      issuer: "GitHub",
      date: "2025",
      description: "Mastery of version control, collaboration workflows, and open-source development practices",
    },
    {
      icon: Shield,
      iconColor: "text-green-500",
      bgGradient: "from-green-400 to-green-600",
      title: "Pre-Security Certificate",
      issuer: "TryHackMe",
      date: "2025",
      description:
        "Foundational cybersecurity knowledge covering network security, web application security, and digital forensics",
    },
  ]

  return (
    <section id="certifications" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-green-600 to-red-600 bg-clip-text text-transparent">
              Professional Certifications
            </span>
          </h2>
          <p className="text-xl text-gray-600">Validated expertise in cutting-edge technologies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500 card-3d overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.bgGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              <div
                className={`relative w-14 h-14 bg-gradient-to-br ${cert.bgGradient} rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}
              >
                <cert.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                {cert.title}
              </h3>
              <p className="text-md text-gray-600 mb-1">{cert.issuer}</p>
              <p className="text-sm text-gray-500 mb-3">{cert.date}</p>
              <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {cert.description}
              </p>

              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Achievements Section
function AchievementsSection() {
  const achievements = [
    {
      icon: Trophy,
      iconColor: "text-yellow-500",
      bgGradient: "from-yellow-400 to-orange-500",
      title: "Winner – MCA Eagles' CodeNest 2025",
      subtitle: "Top 3 in App Category",
      issuer: "Devpost",
      date: "Feb 2025",
      description:
        "Secured top 3 position in the App Category at MCA Eagles' CodeNest 2025, demonstrating exceptional mobile application development skills and innovative problem-solving.",
    },
    {
      icon: Award,
      iconColor: "text-purple-500",
      bgGradient: "from-purple-400 to-purple-600",
      title: "1st Position – Design Dojo Event",
      subtitle: "Sinusoid Fest Winner",
      issuer: "siNUsoid V8 - NIIT University",
      date: "2025",
      description:
        "Secured 1st position at the Design Dojo Event during Sinusoid Fest, showcasing superior design thinking and creative problem-solving abilities.",
    },
    {
      icon: Building,
      iconColor: "text-blue-500",
      bgGradient: "from-blue-400 to-blue-600",
      title: "Delhi Smart City Command Center",
      subtitle: "Smart City Dashboard Development",
      issuer: "LaunchED Global",
      date: "May 2025",
      description:
        "Developed a comprehensive smart city dashboard for Delhi, featuring real-time and historical urban data visualizations to enhance city management and citizen engagement through data-driven insights.",
    },
  ]

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-600 via-yellow-600 to-green-600 bg-clip-text text-transparent">
              Key Achievements
            </span>
          </h2>
          <p className="text-xl text-gray-600">Transforming ideas into impactful solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500 card-3d overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${achievement.bgGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              <div
                className={`relative w-16 h-16 bg-gradient-to-br ${achievement.bgGradient} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}
              >
                <achievement.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                {achievement.title}
              </h3>
              <p className="text-lg text-purple-600 font-semibold mb-2">{achievement.subtitle}</p>
              <p className="text-sm text-gray-600 mb-1">{achievement.issuer}</p>
              <p className="text-sm text-gray-500 mb-4">{achievement.date}</p>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {achievement.description}
              </p>

              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-200 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Enhanced Footer with updated social links
function Footer() {
  const links = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:paarthbhatt37@gmail.com",
      hoverColor: "hover:text-blue-400",
      bgColor: "from-blue-500 to-cyan-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/parth-bhatt-07bb36310/",
      hoverColor: "hover:text-purple-400",
      bgColor: "from-purple-500 to-pink-500",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/paarthbhatt",
      hoverColor: "hover:text-gray-400",
      bgColor: "from-gray-600 to-gray-800",
    },
    {
      icon: Twitter,
      label: "X (Twitter)",
      href: "https://x.com/thatsparthbhatt",
      hoverColor: "hover:text-blue-400",
      bgColor: "from-blue-500 to-blue-600",
    },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white rounded-t-3xl overflow-hidden">
      {/* Google-themed Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(66, 133, 244, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 25%, rgba(234, 67, 53, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 25% 75%, rgba(251, 188, 4, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(52, 168, 83, 0.3) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
              Let's Connect & Innovate Together
            </span>
          </h3>
          <p className="text-xl text-gray-300">Ready to make an impact with Google and Gemini AI</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex flex-col items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-6 rounded-2xl ${link.hoverColor} transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl`}
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r ${link.bgColor} rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500`}
              >
                <link.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-center">{link.label}</span>

              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-all duration-500"></div>
            </a>
          ))}
        </div>

        <div className="text-center border-t border-white/20 pt-8">
          <p className="text-gray-400 mb-2">© 2024 Parth Bhatt. Crafted with ❤️ and powered by innovation.</p>
          <p className="text-sm text-gray-500">
            Ready to represent Google's mission of organizing the world's information
          </p>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 star-cursor">
      <Header />
      <HeroSection />
      <main>
        <CertificationsSection />
        <AchievementsSection />
      </main>
      <Footer />
    </div>
  )
}
