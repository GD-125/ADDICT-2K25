import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 animate-gradient-x">
              ADDICT 2K25
            </h3>
            <p className="text-gray-400">Innovate, Create, Dominate</p>
          </div>
          <div className="flex space-x-4">
            {[
              { icon: Facebook, href: "https://www.facebook.com/groups/pacetpollachi/" },
              { icon: Twitter, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Linkedin, href: "https://www.linkedin.com/company/p-a-college-of-engineering-and-technology-coimbatore" },
            ].map((social, index) => (
              <a key={index} href={social.href} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
                <div className="relative flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full transform transition duration-500 hover:scale-110 hover:rotate-12">
                  <social.icon size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-400">
            Designed and Developed by Dept. of{" "}
            <span className="relative inline-block group">
              <span className="relative inline-block px-2 font-bold">
                <span className="absolute inset-0 bg-gradient-to-r from-[#4485ff] to-[#3fff93] opacity-25 blur-lg filter group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative bg-gradient-to-r from-[#4485ff] to-[#3fff93] bg-clip-text text-transparent animate-pulse">
                  INFORMATION
                </span>
              </span>{" "}
              <span className="relative inline-block px-2 font-bold">
                <span className="absolute inset-0 bg-gradient-to-r from-[#3fff93] to-[#4485ff] opacity-25 blur-lg filter group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative bg-gradient-to-r from-[#3fff93] to-[#4485ff] bg-clip-text text-transparent animate-pulse">
                  TECHNOLOGY
                </span>
              </span>
            </span>
          </p>
        </div>
        <div className="mt-4 text-center text-gray-400">
          <p>&copy; 2025 ADDICT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

