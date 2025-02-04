"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, FileText } from "lucide-react"
import type React from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Events", href: "#events" },
    { name: "Awards", href: "#awards" },
    { name: "Location", href: "#location" },
    { name: "Coordinators", href: "#coordinators" },
    // { name: "Guidelines", href: "#", icon: FileText },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 80 // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    if (isOpen) setIsOpen(false)
  }

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm py-4 sticky top-0 z-50 border-b border-purple-500/20">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x"
        >
          ADDICT 2K25
        </Link>
        <div className="hidden lg:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`hover:text-purple-400 transition-all duration-300 flex items-center space-x-1 group relative
                ${activeSection === item.href.replace("#", "") ? "text-purple-400" : "text-gray-300"}
              `}
            >
              {item.icon && <item.icon size={18} className="group-hover:animate-bounce" />}
              <span className="group-hover:animate-pulse">{item.name}</span>
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full
                ${activeSection === item.href.replace("#", "") ? "w-full" : "w-0"}
              `}
              ></span>
            </Link>
          ))}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScqm_Oi-qGq32Kre7419TWZN5e_5AQi2G61GU6_pRtcVjdKwg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-medium transition-all bg-purple-600 rounded-md hover:bg-purple-700 group"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">Register</span>
          </a>
        </div>
        <button className="lg:hidden text-gray-300 hover:text-purple-400 transition-colors" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="lg:hidden absolute left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-purple-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300
                  ${
                    activeSection === item.href.replace("#", "")
                      ? "bg-purple-500/20 text-purple-400"
                      : "text-gray-300 hover:bg-purple-500/10 hover:text-purple-400"
                  }
                `}
              >
                {item.icon && <item.icon size={18} />}
                <span>{item.name}</span>
              </Link>
            ))}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScqm_Oi-qGq32Kre7419TWZN5e_5AQi2G61GU6_pRtcVjdKwg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-base font-medium bg-purple-600 hover:bg-purple-700 transition-colors text-white text-center"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

