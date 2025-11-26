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
      <div>
        <section className="bg-blue-50 py-16 px-6 flex justify-center">
          <div className="bg-white shadow-xl rounded-2xl p-10 max-w-5xl w-full relative overflow-hidden">
            <div className="absolute -top-10 -right-10 opacity-20">
              <img
                src="https://img.freepik.com/free-vector/abstract-hand-drawn-wavy-lines-background_23-2149113564.jpg"
                alt=""
                className="w-80"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 opacity-20">
              <img
                src="https://img.freepik.com/free-vector/abstract-hand-drawn-wavy-lines-background_23-2149113564.jpg"
                alt=""
                className="w-80"
              />
            </div>

            <h1 className="text-4xl text-center font-extrabold text-blue-700 mb-3 tracking-wide">
              DOCTOR
            </h1>
            <h2 className="text-3xl text-center font-bold text-blue-600 mb-6">
              "PATIENT RELATIONSHIP"
            </h2>

            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Trust and communication are the foundation of medical care.
              Doctors must listen carefully, explain clearly, and build trust
              with each patient.
            </p>

            <div className="flex justify-between items-center mb-10">
              <img
                src="https://img.freepik.com/free-vector/doctor-patient-consultation_52683-39831.jpg"
                className="w-60 rounded-lg"
                alt="doctor and patient"
              />

              <img
                src="https://img.freepik.com/free-vector/sick-woman-lying-bed-illustration_23-2148502951.jpg"
                className="w-48 rounded-lg"
                alt="sick patient"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <span className="text-yellow-500 text-2xl">▶</span>
                <p className="text-gray-700 text-lg font-medium">
                  Builds trust and empathy
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-yellow-500 text-2xl">▶</span>
                <p className="text-gray-700 text-lg font-medium">
                  Patient comfort is essential
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
