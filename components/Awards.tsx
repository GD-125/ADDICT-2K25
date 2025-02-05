import { Trophy } from "lucide-react"

const Awards = () => {
  return (
    <section id="awards" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-gray-900 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/stars.svg')] bg-repeat animate-twinkle"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center text-purple-400 animate-pulse">Awards</h2>
        <div className="flex justify-center items-center">
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-8 flex flex-col items-center transform transition duration-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 animate-float">
            <Trophy size={64} className="mb-4 text-yellow-400 animate-bounce" />
            <h3 className="text-3xl font-semibold mb-2 text-purple-300">Prize Pool</h3>
            <p className="text-5xl font-bold text-yellow-400 animate-pulse">₹50,000</p>
            <div className="mt-4 text-center">
              <p className="text-gray-300">Exciting prizes await the winners!</p>
              <p className="text-gray-300">Don't miss your chance to win big!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Awards

