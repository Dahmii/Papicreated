import { useState } from "react";
import { motion } from "framer-motion";
import Masonry from "react-masonry-css";

const Portfolio = () => {
  const categories = ["All", "Weddings", "Portraits", "Travel", "Editorial"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80",
      category: "Weddings",
      title: "Summer Wedding",
      location: "Tuscany, Italy",
      year: "2023",
    },
    {
      url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      category: "Portraits",
      title: "Natural Light Portrait",
      location: "New York, USA",
      year: "2023",
    },
    {
      url: "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?auto=format&fit=crop&q=80",
      category: "Editorial",
      title: "Fashion Editorial",
      location: "Paris, France",
      year: "2023",
    },
    {
      url: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&q=80",
      category: "Travel",
      title: "Mountain Landscape",
      location: "Swiss Alps",
      year: "2023",
    },
    // Add more images as needed
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
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedCategory === category
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
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
              className="relative cursor-pointer group overflow-hidden"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-xl font-semibold">{image.title}</h3>
                  <p className="text-sm">{image.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </Masonry>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full">
            <img
              src={selectedImage}
              alt="Selected photograph"
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
