import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Camera, Heart, Award } from "lucide-react";
import { Link } from "react-router-dom";
import bgImage from "../assets/img/papiwelcome.jpg";

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    }),
  };

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    }),
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-no-repeat scale-105 transition-transform duration-1000 hover:scale-100"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
        </motion.div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-3xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              custom={0}
              className="overflow-hidden"
            >
              <h1 className="font-korinna text-4xl md:text-6xl font-bold mb-6">
                Freeze Time. Frame Emotions. Feel Forever.
              </h1>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              custom={1}
              className="overflow-hidden"
            >
              <p className="text-xl mb-8">
                Capturing authentic moments through the lens — from timeless
                portraits to candid stories.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              custom={2}
              className="space-x-4"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  to="/contact"
                  className="inline-block bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Book a Session
                </Link>
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  to="/portfolio"
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Portfolio
                </Link>
              </motion.span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section ref={ref} className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            custom={0}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Story Through the Lens
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              With over a decade behind the lens, we turn fleeting moments into
              visual stories that last a lifetime. Whether it's a glowing sunset
              engagement shoot or the quiet joy in a newborn's yawn, each frame
              is a tribute to real, human connection. Rooted in creativity and
              refined by experience, our work is defined by natural light,
              emotional depth, and genuine storytelling.
            </p>
          </motion.div>

          {/* Portfolio Gallery Collage */}
          <div className="mt-12 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {[
              "/images/collage1.jpeg",
              "/images/collage2.JPG",
              "/images/collage3.JPG",
              "/images/collage4.jpeg",
              "/images/collage5.JPG",
              "/images/collage6.JPG",
              "/images/collage7.JPG",
              "/images/collage8.JPG",
              "/images/collage9.jpeg",
              "/images/collage10.jpeg",
              "/images/collage11.JPG",
              "/images/collage12.JPG",
              "/images/collage13.JPG",
              "/images/collage14.JPG",
              "/images/collage15.jpeg",
              "/images/collage16.JPG",
              "/images/collage8.JPG",
            ].map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="overflow-hidden rounded-lg break-inside-avoid"
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-in-out hover:scale-105 rounded-lg"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
