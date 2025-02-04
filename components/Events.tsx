"use client"

import { Code, FileText, Lightbulb, PenTool, Puzzle, Download, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"

const events = [
  {
    name: "Paper Presentation",
    icon: FileText,
    guidelineUrl: "/guidelines/paper_presentation.pdf",
    location: "Seminar Hall - 1, Ground Floor",
    coordinators: [
      { name: "Ramya S IV-CSE", phone: "+1234567890" },
      { name: "Kiran J III-CSE", phone: "+1987654321" },
      { name: "kavibharathi P III-IT", phone: "+1234567890" },
      { name: "Yashika P III-AI&DS", phone: "+1234567890" },
    ],
  },
  {
    name: "Project Contest",
    icon: Lightbulb,
    guidelineUrl: "/guidelines/project_contest.pdf",
    location: "Project Lab, First Floor",
    coordinators: [
      { name: "Abdul Nazeer M IV-CSE", phone: "+1122334455" },
      { name: "Santhosh Kumar P III-CSE", phone: "+1567890123" },
      { name: "Girija L III-IT", phone: "+1234567890" },
      { name: "Aishwarya S III-AI&DS", phone: "+1234567890" },
    ],
  },
  {
    name: "Code Debugging",
    icon: Code,
    guidelineUrl: "/guidelines/code_debugging.pdf",
    location: "Computer Lab - 2, Second Floor",
    coordinators: [
      { name: "Dhanush Kumar S IV-CSE", phone: "+1234509876" },
      { name: "Aravind Kumar S III-CSE", phone: "+1654321098" },
      { name: "Swathi T III-IT", phone: "+1234567890" },
      { name: "Vigneshwaran S III-AI&DS", phone: "+1234567890" },
    ],
  },
  {
    name: "Quiz",
    icon: Puzzle,
    guidelineUrl: "/guidelines/quiz.pdf",
    location: "Smart Class Room - 1, Third Floor",
    coordinators: [
      { name: "Sivaranjani N IV-CSE", phone: "+1112223333" },
      { name: "Mohammed Faizal III-CSE", phone: "+1444555666" },
      { name: "Janani B III-IT", phone: "+1234567890" },
      { name: "Akshaykeerthi A V III-AI&DS", phone: "+1234567890" },
    ],
  },
  {
    name: "Poster Design",
    icon: PenTool,
    guidelineUrl: "/guidelines/poster_design.pdf",
    location: "Design Studio, Ground Floor",
    coordinators: [
      { name: "Ragavandran K IV-CSE", phone: "+1777888999" },
      { name: "Mohammed Safiq III-CSE", phone: "+1000111222" },
      { name: "Harthika III-IT", phone: "+1234567890" },
      { name: "Dhana Shankar P S III-AI&DS", phone: "+1234567890" },
    ],
  },
]

const Events = () => {
  return (
    <section id="events" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-purple-400 animate-pulse">Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={event.name}
              className="bg-gray-700 rounded-lg p-6 flex flex-col items-center transform transition duration-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <event.icon size={48} className="mb-4 text-purple-500 animate-bounce" />
              <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
              <p className="text-gray-300 text-center mb-4">
                Showcase your skills in {event.name.toLowerCase()} and win exciting prizes!
              </p>
              <div className="mb-4">
                <button
                  onClick={() => window.open(event.guidelineUrl, "_blank")}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors flex items-center"
                >
                  <Download size={18} className="mr-2" />
                  Guidelines
                </button>
              </div>
              <div className="mt-4 w-full">
                <h4 className="text-lg font-semibold mb-2 text-purple-400">Coordinators</h4>
                {event.coordinators.map((coordinator, index) => (
                  <div key={index} className="flex justify-between items-center mb-2">
                    <span>{coordinator.name}</span>
                    <div className="flex space-x-2">
                      <a
                        href={`tel:${coordinator.phone}`}
                        className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-colors transform hover:scale-110"
                      >
                        <Phone size={20} />
                      </a>
                      <a
                        href={`https://wa.me/${coordinator.phone}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-colors transform hover:scale-110"
                      >
                        <MessageCircle size={20} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 w-full">
                <h4 className="text-lg font-semibold mb-2 text-purple-400">Location</h4>
                <p className="text-gray-300 mb-4">{event.location}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScqm_Oi-qGq32Kre7419TWZN5e_5AQi2G61GU6_pRtcVjdKwg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-3 rounded-full transition-colors inline-block animate-pulse hover:animate-none"
          >
            Register for Events
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Events

