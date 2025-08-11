import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import bgImage from "../assets/img/papibg3.webp";
import mobileImage from "../assets/img/mobilebg4.webp";
import "../fonts/fonts.css";

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
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
        {/* Background image - no animation delay */}
        <picture>
          {/* Mobile first */}
          <source
            srcSet={mobileImage}
            media="(max-width: 640px)"
            type="image/webp"
          />
          <source srcSet={bgImage} type="image/webp" />
          <img
            src={bgImage}
            alt="Photography background"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            width="1920"
            height="1080"
          />
        </picture>

        {/* Content */}
        <div className="relative h-full flex items-center justify-start text-left text-white px-4 sm:px-8 md:px-16 lg:px-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Mobile Text */}
            <h1 className="block sm:hidden text-[2.8rem] leading-[1.1] font-bold mb-4 font-body-bold whitespace-pre-line">
              Freeze{"\n"}Time.{"\n"}Frame{"\n"}Emotions.{"\n"}Feel{"\n"}
              Forever.
            </h1>

            {/* Desktop Text */}
            <h1 className="hidden sm:block text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight font-body-bold">
              Freeze Time. <br /> Frame Emotions. <br /> Feel Forever.
            </h1>

            <p className="text-[1.6rem] sm:text-xl mb-6 sm:mb-8 leading-relaxed font-body-bold text-left">
              Turning your memories into timeless art
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 w-full sm:w-auto">
              <Link
                to="/gallery"
                className="inline-block w-full sm:w-auto bg-white border-2 border-white text-black px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold text-center font-body-bold"
              >
                View Gallery
              </Link>
              <Link
                to="/contact"
                className="inline-block w-full sm:w-auto bg-black border-2 border-black text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-body-bold text-center"
              >
                Book a Session
              </Link>
            </div>
          </motion.div>
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
              With over six years of experience behind the lens and three years
              working professionally, I’ve had the privilege of capturing
              everything from intimate moments to grand celebrations.
              Photography, for me, is more than just taking pictures — it’s
              about telling your story with honesty, creativity, and intention.
              Whether it’s a portrait session, lifestyle shoot, or your wedding
              day, I bring a calm, thoughtful energy to every shoot, making sure
              you feel comfortable, seen, and celebrated. When you book me,
              you’re not just getting a photographer — you’re getting someone
              who’s fully invested in your vision and who knows how to bring it
              to life with style and heart.
            </p>
          </motion.div>

          {/* Portfolio Gallery */}
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
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="overflow-hidden rounded-lg"
              >
                <LazyLoadImage
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  effect="blur"
                  width="100%"
                  height="auto"
                  className="w-full object-cover transition-all duration-500 ease-in-out hover:scale-105 rounded-lg"
                  // Serve smaller sizes based on screen width
                  srcSet={`${src}?w=400 400w, ${src}?w=800 800w`}
                  sizes="(max-width: 768px) 50vw, 25vw"
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
