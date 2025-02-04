import { MapPin } from "lucide-react"

const Location = () => {
  return (
    <section id="location" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-gray-900 opacity-30 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid-repeat-space-4"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center text-purple-400 animate-pulse">Location</h2>
        <div className="flex flex-col md:flex-row items-center justify-center animate-fade-in-up">
          <div className="mb-8 md:mb-0 md:mr-12">
            <MapPin size={64} className="text-purple-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-center">P.A.College of Engineering and Technology</h3>
            <p className="text-gray-300 text-center">
              Pollachi - 642002
              <br />
              Coimbatore
              <br />
              Tamil Nadu
            </p>
            <p className="text-gray-300 text-center mt-4">
              <span className="font-semibold">Date:</span> February 27, 2025
              <br />
              <span className="font-semibold">Time:</span> 9:00 AM - 5:00 PM
            </p>
          </div>
          <div className="w-full md:w-1/2 h-64 md:h-96 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9587.809859848972!2d77.02946939449349!3d10.674201828390357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8379603118171%3A0xaabce92d2cdd4e50!2sP.%20A.%20College%20of%20Engineering%20and%20Technology%20(Autonomous)%2C%20Pollachi%2C%20Coimbatore!5e1!3m2!1sen!2sin!4v1737011929539!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location

