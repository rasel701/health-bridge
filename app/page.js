import Image from "next/image";
import Banner from "./components/Banner/Banner";
import FeaturedDoc from "./components/FeaturedDoc/FeaturedDoc";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";
import getsixDoctoresInfo from "@/fetchData/sixItemDoctors";

export default async function Home() {
  const doctors = await getsixDoctoresInfo();
  return (
    <div className="">
      <Banner />
      <h2 className="text-3xl font-bold text-center mb-6 my-19">
        Featured Doctors
      </h2>
      <FeaturedDoc doctors={doctors} />
      <ServiceSection />
      <TestimonialSection />
    </div>
  );
}
