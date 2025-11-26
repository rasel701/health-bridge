import getAllDoctorsInfo from "@/fetchData/allDoctors";
import React from "react";
import FeaturedDoc from "../components/FeaturedDoc/FeaturedDoc";

const AllDoctors = async () => {
  const doctors = await getAllDoctorsInfo();

  return (
    <div>
      <h2>All Doctors page</h2>
      <FeaturedDoc doctors={doctors} />
    </div>
  );
};

export default AllDoctors;
