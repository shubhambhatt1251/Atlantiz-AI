
import { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [{
  content: "Atlantiz AI revolutionized my process. It handles admin, so I focus purely on creation. My output soared!",
  author: "Marcus Thorne",
  role: "Creative Director",
  gradient: "from-blue-700 via-indigo-800 to-purple-900",
  backgroundImage: "/background-section1.png"
}, {
  content: "Juggling clients was chaotic. Atlantiz AI brought order and efficiency. Truly indispensable for my consulting business.",
  author: "Sophia Rodriguez",
  role: "Freelance Consultant",
  gradient: "from-indigo-900 via-purple-800 to-orange-500",
  backgroundImage: "/background-section2.png"
}, {
  content: "Atlantiz AI is like an extra team member. Our efficiency dramatically increased, letting us innovate faster. Highly recommend!",
  author: "Liam O'Connell",
  role: "Startup Founder",
  gradient: "from-purple-800 via-pink-700 to-red-500",
  backgroundImage: "/background-section3.png"
}, {
  content: "Implementing Atlantiz AI transformed our workflow completely. It anticipates our needs and automates hours of daily tasks.",
  author: "Dr. Sarah Chen",
  role: "Research Director",
  gradient: "from-orange-600 via-red-500 to-purple-600",
  backgroundImage: "/background-section1.png"
}];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png"
}: TestimonialProps) => {
  return <div className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden" style={{
    backgroundImage: `url('${backgroundImage}')`
  }}>
      <div className="absolute top-0 right-0 w-24 h-24 bg-white z-10"></div>
      
      <div className="relative z-0">
        <p className="text-xl mb-8 font-medium leading-relaxed pr-20">{`"${content}"`}</p>
        <div>
          <h4 className="font-semibold text-xl">{author}</h4>
          <p className="text-white/80">{role}</p>
        </div>
      </div>
    </div>;
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return <section className="py-12 bg-white relative" id="testimonials" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            <span>Testimonials</span>
          </div>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-12 text-left tracking-tight">
          <span className="bg-gradient-to-r from-gray-800 via-orange-600 to-red-600 bg-clip-text text-transparent animate-text-shimmer">
            Hear From Our Valued Users
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} content={testimonial.content} author={testimonial.author} role={testimonial.role} gradient={testimonial.gradient} backgroundImage={testimonial.backgroundImage} />)}
        </div>
      </div>
    </section>;
};

export default Testimonials;
