import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
              <h1 className="font-opensans text-4xl md:text-6xl font-bold mb-6">
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
                Turning your memories into timeless art
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
                  className="inline-block m-8 bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
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
                  to="/gallery"
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Gallery
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome!</h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're so glad you're here. We're passoinate about capturing
              genuine moments and turning them into lasting memories. Whether
              you're planning a wedding, updating your portraits, or celebrating
              life's milestones, we're here to make sure every photo reflects
              the real you. Our goal is to create a comfortable, personalized
              experience--so you not only your photos but enjoy the process too.
              Let's create something beautiful together!
            </p>
          </motion.div>

          {/* Portfolio Gallery Collage */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "/images/collage1.jpeg",
              "/images/collage2.jpeg",
              "/images/collage3.jpg",
              "/images/collage4.jpg",
              "/images/collage5.JPG",
              "/images/collage6.JPG",
              "/images/collage7.jpg",
              "/images/collage8.jpg",
              "/images/collage9.jpg",
              "/images/collage10.jpg",
              "/images/collage11.JPG",
              "/images/collage12.JPG",
              "/images/collage13.jpeg",
              "/images/collage14.jpeg",
              "/images/collage15.jpeg",
              "/images/collage16.jpeg",
              "/images/collage17.JPG",
              "/images/collage18.JPG",
            ].map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="overflow-hidden rounded-lg"
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full object-cover transition-all duration-500 ease-in-out hover:scale-105 rounded-lg"
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
