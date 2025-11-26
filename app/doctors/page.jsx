import getAllDoctorsInfo from "@/fetchData/allDoctors";
import React from "react";
import FeaturedDoc from "../components/FeaturedDoc/FeaturedDoc";

const AllDoctors = async () => {
  const doctors = await getAllDoctorsInfo();

  const handleSearchDoctor = async (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    console.log(search);
  };

  return (
    <div>
      <h2 className=" text-2xl font-bold text-center my-8 text-gray-600">
        All Doctors{" "}
      </h2>
      <div className="flex justify-center my-6">
        <form className="w-full flex justify-center">
          <input
            type="text"
            placeholder="Search doctor or specialization..."
            name="search"
            className="input input-bordered w-1/2"
          />
          <button type="submit" className="btn btn-primary ml-2">
            Search
          </button>
        </form>
      </div>
      <FeaturedDoc doctors={doctors} />
    </div>
  );
};

export default AllDoctors;
