import React from "react";
import Banner from "../components/Banner/Banner";
import FeaturedDoc from "../components/FeaturedDoc/FeaturedDoc";

const Home = () => {
  return (
    <div className="">
      {/* <Banner /> */}
      <h2>Featured Doctors</h2>
      <div className="w-[400px] h-[700px] bg-amber-400">
        <FeaturedDoc />
      </div>
    </div>
  );
};

export default Home;
