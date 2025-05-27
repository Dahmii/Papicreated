import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Masonry from "react-masonry-css";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { portfolioImages } from "../../src/data/portfolioImages";

const Lifestyle = () => {
  const images = portfolioImages.filter((img) => img.category === "Lifestyle");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1,
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! + 1) % images.length);
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Lifestyle</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Step into the beauty of everyday moments — candid, relaxed, and
              full of personality. This collection captures real life in its
              most authentic and artful form.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <div className="text-center max-w-2xl mx-auto mt-10 text-gray-600">
        {/* <p>
          Click on any image to dive deeper into the story — including shoot
          location, style, and inspiration behind each moment.
        </p> */}
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex -ml-4 w-auto"
          columnClassName="pl-4 bg-clip-padding"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <div
                className="relative cursor-pointer group overflow-hidden rounded-lg"
                onClick={() => setSelectedIndex(index)}
              >
                <motion.img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-auto transition-transform duration-500"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center p-6"
                >
                  <div className="text-white text-center">
                    <h3 className="text-xl font-semibold mb-2">
                      {image.title}
                    </h3>
                    <p className="text-sm opacity-80">{image.location}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 0.8, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
              <img
                src={images[selectedIndex].url}
                alt={images[selectedIndex].title}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="mt-4 text-white">
                <h3 className="text-2xl font-semibold mb-2">
                  {images[selectedIndex].title}
                </h3>
                <p className="text-gray-300 mb-2">
                  {images[selectedIndex].location}
                </p>
                <p className="text-gray-400 text-sm italic">
                  {images[selectedIndex].description}
                </p>
                <p className="mt-4 text-sm text-gray-400">
                  Swipe. Pause. Feel the story behind each shot — because every
                  frame holds more than just a picture.
                </p>
              </div>
              <div className="absolute inset-y-0 left-0 flex items-center px-2">
                <button
                  onClick={handlePrev}
                  className="text-white hover:text-gray-300"
                >
                  <ArrowLeft className="h-8 w-8" />
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center px-2">
                <button
                  onClick={handleNext}
                  className="text-white hover:text-gray-300"
                >
                  <ArrowRight className="h-8 w-8" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Lifestyle;
