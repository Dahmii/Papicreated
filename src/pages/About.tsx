import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Akanji from "../assets/img/Àkànjí.jpg";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Bride",
      content:
        "Working with Papicreated was an absolute dream. They captured our wedding day perfectly, creating memories that will last a lifetime.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    },
    {
      name: "Michael Chen",
      role: "Corporate Client",
      content:
        "Professional, creative, and incredibly talented. Our company events have never looked better.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    },
    {
      name: "Emma Thompson",
      role: "Model",
      content:
        "The attention to detail and artistic vision is unmatched. Every shoot is a masterpiece.",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80)",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About Me</h1>
            <p className="text-xl">
              Passionate about capturing life's beautiful moments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={Akanji}
                alt="Photographer at work"
                className="rounded-lg shadow-xl w-3/4 mx-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Hi there, I’m Oluwasomidotun (a.k.a) Àkànjí.
              </h2>
              <p className="text-gray-600 mb-6">
                I’m a portrait photographer with over six years of experience
                behind the lens and three years working professionally, I’ve had
                the privilege of capturing everything from intimate moments to
                grand celebrations. Photography, for me, is more than just
                taking pictures — it’s about telling your story with honesty,
                creativity, and intention. Whether it’s a portrait session,
                lifestyle shoot, or your wedding day, I bring a calm, thoughtful
                energy to every shoot, making sure you feel comfortable, seen,
                and celebrated.
              </p>
              <p className="text-gray-600 mb-6">
                When you book me, you’re not just getting a photographer —
                you’re getting someone who’s fully invested in your vision and
                who knows how to bring it to life with style and heart.
              </p>
              {/* <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2">500+</h3>
                  <p className="text-gray-600">Happy Clients</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2">12</h3>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2">50k</h3>
                  <p className="text-gray-600">Photos Taken</p>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section ref={ref} className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Client Testimonials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take my word for it. Here's what my clients have to say
              about their experience working with me.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;
