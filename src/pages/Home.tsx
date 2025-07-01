import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Link } from "react-router-dom";
import bgImage from "../assets/img/papibg3.jpg";
import mobileImage from "../assets/img/papiwelcome.jpg";
import "../fonts/fonts.css";

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
            className="absolute inset-0 bg-cover bg-no-repeat transition-transform duration-1000 hover:scale-100"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "100%",
              backgroundPosition: "right center",
            }}
          >
            {/* <div className="absolute inset-0 bg-black/50" /> */}
          </div>

          {/* Mobile background */}
          <div
            className="absolute inset-0 block sm:hidden bg-no-repeat"
            style={{
              backgroundImage: `url(${mobileImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* <div className="absolute inset-0 bg-black/50" /> */}
          </div>
        </motion.div>
        <div className="relative h-full flex items-center justify-start text-left text-white px-4 sm:px-8 md:px-16 lg:px-40">
          <div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              custom={0}
              className="overflow-hidden"
            >
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight font-body-bold"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.6)" }}
              >
                Freeze Time. <br /> Frame Emotions. <br /> Feel Forever.
              </h1>
              {/* <h1 className="font-opensans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Frame Emotions.
              </h1>
              <h1 className="font-opensans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Feel Forever.
              </h1> */}
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              custom={1}
              className="overflow-hidden"
            >
              <p
                className="text-lg sm:text-xl mb-6 sm:mb-8 leading-relaxed font-body-bold"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.6)" }}
              >
                Turning your memories into timeless art
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              custom={2}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  to="/contact"
                  className="inline-block w-full sm:w-auto bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-body-bold transition-colors text-center"
                  style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.6)" }}
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
                  className="inline-block w-full sm:w-auto bg-white border-2 border-white text-black px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold  transition-colors text-center font-body-bold"
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
              "/images/tinified/1.jpg",
              "/images/tinified/2.jpg",
              "/images/tinified/3.jpg",
              "/images/tinified/4.jpg",
              "/images/tinified/5.jpg",
              "/images/tinified/6.jpg",
              "/images/tinified/7.JPG",
              "/images/tinified/8.JPG",
              "/images/tinified/9.jpg",
              "/images/tinified/10.jpg",
              "/images/tinified/11.jpg",
              "/images/tinified/12.jpg",
              "/images/tinified/13.jpg",
              "/images/tinified/14.jpg",
              "/images/tinified/15.jpg",
              "/images/tinified/16.jpg",
              "/images/tinified/17.jpg",
              "/images/tinified/18.jpg",
              "/images/tinified/19.jpg",
              "/images/tinified/20.jpg",
              "/images/tinified/21.jpg",
              "/images/tinified/22.jpg",
              "/images/tinified/23.jpg",
              "/images/tinified/24.jpg",
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
