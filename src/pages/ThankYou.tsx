import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen px-4">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          🎉 Thank You!
        </h1>
        <p className="text-gray-700 mb-6">
          Your message has been successfully sent. We’ll get back to you
          shortly.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
