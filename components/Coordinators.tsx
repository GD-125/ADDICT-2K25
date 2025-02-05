import { Phone, MessageCircle } from "lucide-react"

const coordinators = [
  { name: "Kanakaraj M", role: "Secretary, CSE", phone: "919865850899" },
  { name: "Ragavandran K", role: "Event Coordinator Head, CSE", phone: "917604810145" },
  { name: "Gayathri D", role: "Secretary, IT", phone: "919025684725" },
  { name: "Manosakthi T", role: "Secretary, AI&DS", phone: "919361043465" },
]

const Coordinators = () => {
  return (
    <section id="coordinators" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-purple-400 animate-pulse">Coordinators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coordinators.map((coordinator) => (
            <div
              key={coordinator.name}
              className="bg-gray-800 rounded-lg p-6 flex flex-col items-center transform transition duration-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-white">{coordinator.name[0]}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{coordinator.name}</h3>
              <p className="text-purple-400 mb-4">{coordinator.role}</p>
              <div className="flex space-x-4">
                <a
                  href={`tel:+${coordinator.phone}`}
                  className="group relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl"
                >
                  <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-purple-500 rounded-full blur-md ease"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-blue-500 rounded-full blur-md"></span>
                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                  </span>
                  <span className="relative text-white">
                    <Phone size={24} />
                  </span>
                </a>
                <a
                  href={`https://wa.me/${coordinator.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl"
                >
                  <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-green-500 rounded-full blur-md ease"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-teal-500 rounded-full blur-md"></span>
                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-cyan-500 rounded-full blur-md"></span>
                  </span>
                  <span className="relative text-white">
                    <MessageCircle size={24} />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Coordinators

