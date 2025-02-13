"use client";

import Carousel from "./Carousel";

const Home = () => {
  return (
    <div>
      <Carousel />
      <h1 className="text-4xl">Welcome to Our Wedding!</h1>
      <button className="mt-4 p-3 bg-red-500 text-white rounded hover:bg-red-600">
        Logout
      </button>
    </div>
  );
};

export default Home;
