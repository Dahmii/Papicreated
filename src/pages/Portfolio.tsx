import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Masonry from "react-masonry-css";
import { X } from "lucide-react";

const Portfolio = () => {
  const categories = [
    "All",
    "Weddings",
    "Lifestyle & Portraits",
    "Events",
    "Travel & Landscapes",
    "Studio Sessions",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    title: string;
    location: string;
    description: string;
  } | null>(null);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80",
      category: "Weddings",
      title: "Sunset Ceremony",
      location: "Tuscany, Italy",
      description:
        "A magical moment captured during golden hour as the couple exchanged vows under the Tuscan sun.",
    },
    {
      url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      category: "Lifestyle & Portraits",
      title: "Natural Light Portrait",
      location: "Central Park, NYC",
      description:
        "Embracing the soft morning light to create timeless portraits that capture genuine emotions.",
    },
    {
      url: "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?auto=format&fit=crop&q=80",
      category: "Events",
      title: "Corporate Gathering",
      location: "Downtown Manhattan",
      description:
        "Documenting meaningful connections during an evening of celebration and networking.",
    },
    {
      url: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&q=80",
      category: "Travel & Landscapes",
      title: "Mountain Majesty",
      location: "Swiss Alps",
      description:
        "Capturing the raw beauty of nature in its most pristine form.",
    },
    {
      url: "https://images.unsplash.com/photo-1512288094938-363287817c25?auto=format&fit=crop&q=80",
      category: "Studio Sessions",
      title: "Studio Portrait",
      location: "NYC Studio",
      description:
        "Creating controlled lighting environments to achieve the perfect mood and tone.",
    },
    {
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80",
      category: "Weddings",
      title: "First Dance",
      location: "The Plaza, NYC",
      description:
        "A tender moment between newlyweds as they share their first dance.",
    },
  ];

  const filteredImages = images.filter(
    (image) => selectedCategory === "All" || image.category === selectedCategory
  );

  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1,
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover some of our favorite moments — beautifully curated into
              collections that tell stories with light, color, and emotion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedCategory(category)}
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
                onClick={() => setSelectedImage(image)}
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
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="mt-4 text-white">
                <h3 className="text-2xl font-semibold mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300 mb-2">{selectedImage.location}</p>
                <p className="text-gray-400 text-sm italic">
                  {selectedImage.description}
                </p>
                <p className="mt-4 text-sm text-gray-400">
                  Swipe. Pause. Feel the story behind each shot — because every
                  frame holds more than just a picture.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
