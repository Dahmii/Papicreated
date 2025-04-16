import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Camera, Heart, Award } from "lucide-react";

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
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-1000 hover:scale-100"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80)",
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Let's tell your story through the lens
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
                Capturing life's precious moments with artistry and emotion
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              custom={2}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/contact"
                className="inline-block bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book a Session
              </a>
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
              Crafting Visual Stories Since way back
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With over a decade of experience, we specialize in creating
              timeless photographs that capture the essence of your special
              moments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Camera className="h-10 w-10" />,
                title: "Professional Equipment",
                description:
                  "Using top-of-the-line gear to ensure the highest quality results",
              },
              {
                icon: <Heart className="h-10 w-10" />,
                title: "Passionate Approach",
                description:
                  "Every shoot is handled with creativity, care, and attention to detail",
              },
              {
                icon: <Award className="h-10 w-10" />,
                title: "Award Winning",
                description:
                  "Recognized internationally for exceptional photography",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeInUp}
                custom={index + 1}
                whileHover={{ y: -10 }}
                className="text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block p-4 bg-white rounded-full mb-4 shadow-md"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
