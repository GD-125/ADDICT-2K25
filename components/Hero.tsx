import Link from "next/link"

const Hero = () => {
  return (
    <section className="py-20 text-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-30 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid-repeat-space-4"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold animate-float">
            P.A. College of Engineering and Technology, Pollachi
          </h2>
        </div>
        <p className="text-xl mb-4 animate-fade-in-up">Organized by Dept. of CSE, IT, AI&DS</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 relative">
          <span className="relative inline-block animate-float-slow">
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-50 blur-lg filter"></span>
            <span className="relative">ADDICT</span>
          </span>
          <span className="relative inline-block ml-4 animate-bounce">
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 blur-lg filter"></span>
            <span className="relative text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              2K25
            </span>
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up delay-300">Innovate, Create, Dominate</p>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLScqm_Oi-qGq32Kre7419TWZN5e_5AQi2G61GU6_pRtcVjdKwg/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-3 rounded-full transition-colors inline-block animate-bounce hover:animate-none"
        >
          Register Now
        </Link>
      </div>
    </section>
  )
}

export default Hero

