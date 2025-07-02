import { Link } from "react-router-dom";

const categories = [
  "Weddings",
  "Portrait",
  "Lifestyle",
  "Engagement",
  "Events",
  "Family",
];

const Gallery = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <ul className="space-y-12 text-center">
          {categories.map((category) => (
            <li
              key={category}
              className="text-5xl sm:text-5xl text-gray-500 hover:text-black transition duration-300"
            >
              <Link to={`/${category.toLowerCase()}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Gallery;
