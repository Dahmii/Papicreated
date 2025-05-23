import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Masonry from "react-masonry-css";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { portfolioImages } from "../../src/data/portfolioImages";

const Portfolio = () => {
  const images = portfolioImages;
  const categories = [
    "All",
    ...Array.from(new Set(images.map((img) => img.category))),
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages = images.filter(
    (image) => selectedCategory === "All" || image.category === selectedCategory
  );

  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1,
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (prev) => (prev! - 1 + filteredImages.length) % filteredImages.length
      );
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! + 1) % filteredImages.length);
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover some of our favorite moments — beautifully curated into
              collections that tell stories with light, color, and emotion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Description Above Categories */}
      <div className="text-center max-w-2xl mx-auto mt-10 text-gray-600">
        <p>
          Click on any image to dive deeper into the story — including shoot
          location, style, and inspiration behind each moment.
        </p>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => {
                setSelectedCategory(category);
                setSelectedIndex(null);
              }}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-black text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex -ml-4 w-auto"
          columnClassName="pl-4 bg-clip-padding"
        >
          {filteredImages.map((image, index) => (
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
                src={filteredImages[selectedIndex].url}
                alt={filteredImages[selectedIndex].title}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="mt-4 text-white">
                <h3 className="text-2xl font-semibold mb-2">
                  {filteredImages[selectedIndex].title}
                </h3>
                <p className="text-gray-300 mb-2">
                  {filteredImages[selectedIndex].location}
                </p>
                <p className="text-gray-400 text-sm italic">
                  {filteredImages[selectedIndex].description}
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

export default Portfolio;
