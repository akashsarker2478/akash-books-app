import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 py-16 px-4">
      <div className="card w-full max-w-3xl bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-4xl font-bold mb-4 text-center">About Our Platform</h2>
        <p className="text-gray-700 mb-4 text-justify">
          Welcome to our platform! We provide high-quality books and resources 
          for learners, enthusiasts, and professionals alike. Our mission is to 
          make knowledge accessible and enjoyable for everyone.
        </p>
        <p className="text-gray-700 mb-4 text-justify">
          Explore our collection, read reviews, and find the perfect books to 
          enhance your skills and knowledge. We are committed to offering 
          a user-friendly experience and supporting your journey of learning.
        </p>
        <div className="flex justify-center">
          <button className="btn btn-primary mt-4 w-40">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
