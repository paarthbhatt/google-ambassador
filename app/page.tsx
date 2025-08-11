"use client"

import { useState, useEffect } from "react"
import {
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Clock,
  X,
  Sun,
  Moon,
  Award,
  Users,
  Briefcase,
  Shield,
  GitBranch,
  Building,
  Trophy,
  Star,
  Code,
  Zap,
  Target,
} from "lucide-react"

// Contact Modal Component
function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl transform animate-scale-in">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Let's Connect!</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <Mail className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700 dark:text-gray-300">paarthbhatt37@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <Phone className="w-5 h-5 text-green-600" />
            <span className="text-gray-700 dark:text-gray-300">+91 8920948990</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <MapPin className="w-5 h-5 text-red-600" />
            <span className="text-gray-700 dark:text-gray-300">New Delhi, INDIA</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <Clock className="w-5 h-5 text-yellow-600" />
            <span className="text-gray-700 dark:text-gray-300">Available immediately</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Enhanced Header Component
function Header({
  isContactOpen,
  setIsContactOpen,
  isPitchOpen,
  setIsPitchOpen,
  isDarkMode,
  setIsDarkMode,
}: {
  isContactOpen: boolean
  setIsContactOpen: (open: boolean) => void
  isPitchOpen: boolean
  setIsPitchOpen: (open: boolean) => void
  isDarkMode: boolean
  setIsDarkMode: (mode: boolean) => void
}) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Google Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:rotate-12 transition-transform duration-300">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6" />
            </div>
          </div>

          {/* Centered Name */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-red-500 to-green-600 bg-clip-text text-transparent">
              Parth Bhatt
            </h1>
          </div>

          {/* Right Side - Dark Mode Toggle & Hire Me */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setIsContactOpen(true)}
              className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 hover:from-blue-700 hover:via-red-600 hover:to-yellow-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              HIRE ME
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

// Certifications Section
function CertificationsSection() {
  const certifications = [
    {
      icon: Shield,
      iconColor: "text-blue-500",
      bgGradient: "from-blue-400 to-blue-600",
      title: "Junior Cybersecurity Analyst Career Path",
      issuer: "Cisco",
      date: "2025",
      description:
        "Comprehensive cybersecurity training covering threat detection, incident response, and security analysis",
    },
    {
      icon: Star,
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
      icon: Users,
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
    <section
      id="certifications"
      className="py-12 px-6 bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-green-600 to-red-600 bg-clip-text text-transparent">
              Professional Certifications
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Validated expertise in cutting-edge technologies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500 card-3d overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.bgGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              <div
                className={`relative w-14 h-14 bg-gradient-to-br ${cert.bgGradient} rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}
              >
                <cert.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                {cert.title}
              </h3>
              <p className="text-md text-gray-600 dark:text-gray-300 mb-1">{cert.issuer}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{cert.date}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {cert.description}
              </p>

              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 dark:group-hover:border-blue-400 transition-all duration-500"></div>
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
    <section id="achievements" className="py-12 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-600 via-yellow-600 to-green-600 bg-clip-text text-transparent">
              Key Achievements
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Transforming ideas into impactful solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500 card-3d overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${achievement.bgGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              <div
                className={`relative w-16 h-16 bg-gradient-to-br ${achievement.bgGradient} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}
              >
                <achievement.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-purple-600 transition-colors duration-300">
                {achievement.title}
              </h3>
              <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold mb-2">{achievement.subtitle}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{achievement.issuer}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{achievement.date}</p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {achievement.description}
              </p>

              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-200 dark:group-hover:border-purple-400 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Enhanced Footer with updated social links
function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 dark:from-gray-900 dark:via-black dark:to-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Let's Connect & Innovate Together
          </h3>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:paarthbhatt37@gmail.com"
              className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/parth-bhatt-07bb36310/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/paarthbhatt"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <GitBranch className="w-4 h-4" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href="https://x.com/thatsparthbhatt"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-700 to-black hover:from-black hover:to-gray-800 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Target className="w-4 h-4" />
              <span className="text-sm font-medium">X</span>
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-4">© 2025 Parth Bhatt • Ready to innovate with Google</p>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isPitchOpen, setIsPitchOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      {/* Header */}
      <Header
        isContactOpen={isContactOpen}
        setIsContactOpen={setIsContactOpen}
        isPitchOpen={isPitchOpen}
        setIsPitchOpen={setIsPitchOpen}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      {/* Hero Section */}
      <HeroSection isPitchOpen={isPitchOpen} setIsPitchOpen={setIsPitchOpen} />

      {/* Main Content */}
      <main>
        <CertificationsSection />
        <AchievementsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

function HeroSection({
  isPitchOpen,
  setIsPitchOpen,
}: { isPitchOpen: boolean; setIsPitchOpen: (open: boolean) => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Enhanced Google-themed Animated Background */}
      <div className="absolute inset-0">
        {/* Floating Code Elements */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute top-20 left-10 text-blue-500 font-mono text-sm animate-bounce">
            {"<GoogleAmbassador />"}
          </div>
          <div className="absolute top-40 right-20 text-red-500 font-mono text-sm animate-bounce delay-1000">
            {"function innovate() {}"}
          </div>
          <div className="absolute bottom-40 left-20 text-green-500 font-mono text-sm animate-bounce delay-2000">
            {'const future = "AI"'}
          </div>
          <div className="absolute bottom-20 right-10 text-yellow-500 font-mono text-sm animate-bounce delay-3000">
            {'import { success } from "google"'}
          </div>
        </div>

        {/* Geometric Grid Pattern */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(66, 133, 244, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(66, 133, 244, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Floating Google Orbs with enhanced animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-red-400 to-red-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-20 w-36 h-36 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-gradient-to-br from-green-400 to-green-600 rounded-full blur-3xl animate-pulse delay-3000"></div>
        </div>

        {/* Interactive Mouse Gradient */}
        <div className="absolute inset-0 opacity-30"></div>

        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-32 left-1/4 animate-float">
            <Code className="w-8 h-8 text-blue-500" />
          </div>
          <div className="absolute top-48 right-1/4 animate-float delay-1000">
            <Sparkles className="w-6 h-6 text-yellow-500" />
          </div>
          <div className="absolute bottom-48 left-1/3 animate-float delay-2000">
            <Zap className="w-7 h-7 text-red-500" />
          </div>
          <div className="absolute bottom-32 right-1/3 animate-float delay-3000">
            <Briefcase className="w-8 h-8 text-green-500" />
          </div>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <div className="mb-6">
            <div className="inline-block p-4 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20 mb-6">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Cybersecurity Expert • AI Enthusiast • Innovation Leader
              </span>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 transform hover:scale-105 transition-transform duration-500">
            <span className="bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-gradient">
              Hello, Google!
            </span>
            <br />
            <span className="text-gray-800 dark:text-white">I'm </span>
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Parth Bhatt
            </span>
          </h1>

          <p className="text-xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-delayed leading-relaxed">
            Your next <span className="text-blue-600 font-semibold">Student Ambassador</span>, ready to innovate with{" "}
            <span className="text-red-500 font-semibold">Google</span> &{" "}
            <span className="text-purple-600 font-semibold">Gemini AI</span>
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium">
              🏆 CodeNest 2025 Winner
            </div>
            <div className="px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-700 dark:text-green-300 text-sm font-medium">
              🛡️ Cybersecurity Certified
            </div>
            <div className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-700 dark:text-purple-300 text-sm font-medium">
              🚀 Smart City Developer
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => setIsPitchOpen(true)}
            className="group px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 hover:from-blue-700 hover:via-purple-700 hover:to-red-700 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500 flex items-center gap-3"
          >
            <Sparkles className="w-6 h-6 group-hover:animate-spin" />
            My Pitch
          </button>
        </div>
      </div>
    </section>
  )
}
