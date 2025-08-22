'use client'
import React from 'react'

const TestimonialsSection = () => {
       
  const Testimonials = [
    {
      "name": "Emily Johnson",
      "position": "Creative Director, Skyline Agency",
      "location": "New York, USA",
      "photo": "https://plus.unsplash.com/premium_photo-1677368597077-009727e906db?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "rating": 5,
      "message": "NextomStudio delivered beyond expectations. Their UI/UX design work helped us modernize our brand presence and increased customer retention significantly."
    },
    {
      "name": "Michael Thompson",
      "position": "Co-Founder, GrowthGrid Inc.",
      "location": "San Francisco, USA",
      "photo": "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "rating": 5,
      "message": "Vipul and the team were incredibly responsive and creative. They brought fresh ideas to the table and executed everything with precision and speed."
    },
    {
      "name": "Sarah Miller",
      "position": "Head of Product, Apex HealthTech",
      "location": "Chicago, USA",
      "photo": "https://images.unsplash.com/photo-1610387694365-19fafcc86d86?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "rating": 4,
      "message": "The design and development support from NextomStudio was instrumental in launching our new digital platform on time. Highly recommend them!"
    },
    {
      "name": "David Walker",
      "position": "CTO, NovaFinTech",
      "location": "Austin, USA",
      "photo": "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "rating": 5,
      "message": "Excellent communication, top-notch code quality, and creative visuals. NextomStudio is our go-to for anything design-related."
    },
    {
      "name": "Jessica Lee",
      "position": "Marketing Manager, PureNest Organics",
      "location": "Los Angeles, USA",
      "photo": "https://images.unsplash.com/photo-1701096351544-7de3c7fa0272?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "rating": 4,
      "message": "Loved working with Vipul’s team. They understood our brand's essence and translated it into a clean, elegant website that customers love."
    },
    {
      "name": "Christopher Adams",
      "position": "Founder, CodeCraft Studios",
      "location": "Seattle, USA",
      "photo": "https://plus.unsplash.com/premium_photo-1661488774517-94ecf6cc58ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "rating": 5,
      "message": "As a developer myself, I appreciated the technical depth of their frontend work. NextomStudio is highly reliable and scalable."
    },
    {
      "name": "Olivia Martinez",
      "position": "COO, EverGreen Living",
      "location": "Denver, USA",
      "photo": "https://plus.unsplash.com/premium_photo-1677368597430-5f4325d93edc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "rating": 5,
      "message": "Their user-focused design improved our site conversions by over 35%. Smooth collaboration and excellent results!"
    },
    {
      "name": "Daniel Roberts",
      "position": "VP of Sales, JetWave Logistics",
      "location": "Miami, USA",
      "photo": "https://images.unsplash.com/photo-1562788869-4ed32648eb72?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "rating": 4,
      "message": "NextomStudio helped us create a professional online presence. The site is fast, modern, and effective for lead generation."
    }
  ]

  return (
     <section className="bg-black py-16 overflow-hidden">
      {/* <h2 className="text-3xl font-bold text-center mb-12"> </h2> */}
       <h2 className="text-3xl md:text-4xl font-bold text-white max-w-6xl text-center mb-10 mx-auto">
           What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Clients </span> Say
          </h2>
      <div className="group relative w-full overflow-x-hidden max-w-6xl mx-auto">
        <div
          className="flex w-max animate-marquee group-hover:[animation-play-state:paused] space-x-6 px-4"
        >
          {[...Testimonials, ...Testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 w-80 shrink-0 hover:shadow-lg transition"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <h3 className="text-md font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                  <p className="text-xs text-gray-400">{testimonial.location}</p>
                </div>
              </div>
                 <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967h4.174c.969 0 1.371 1.24.588 1.81l-3.38 2.455 1.287 3.966c.3.922-.755 1.688-1.54 1.118L10 13.348l-3.38 2.455c-.784.57-1.838-.196-1.539-1.118l1.287-3.966-3.38-2.455c-.783-.57-.38-1.81.588-1.81h4.174l1.286-3.967z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-sm my-4">"{testimonial.message}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection