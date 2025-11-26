import SingleDoctorInfoDoctoresInfo from "@/fetchData/singleDoctorInfo";
import Image from "next/image";
import React from "react";

const SingleDcotorsInfo = async ({ params }) => {
  const { id } = await params;
  const doctor = await SingleDoctorInfoDoctoresInfo(id);
  console.log(doctor);

  return (
    <div>
      <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg">
        {/* Doctor Image */}
        <div className="flex justify-center">
          <img
            className="w-[300px] h-[300px] md:w-[500px] object-cover"
            src={doctor?.image}
            alt=""
          />
        </div>

        {/* Doctor Info */}
        <div className="mt-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">{doctor.name}</h1>
          <p className="text-xl font-semibold text-blue-600 mt-1">
            {doctor.specialization}
          </p>
        </div>

        {/* Contact Info */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div>
            <h3 className="font-semibold">Email:</h3>
            <p>{doctor.email}</p>
          </div>
          <div>
            <h3 className="font-semibold">Contact:</h3>
            <p>{doctor.contact}</p>
          </div>
          <div>
            <h3 className="font-semibold">Address:</h3>
            <p>{doctor.address}</p>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6 text-gray-600">
          <h3 className="font-semibold text-lg mb-2">About Doctor:</h3>
          <p>{doctor.description}</p>
        </div>

        {/* Optional button */}
        <div className="mt-6 flex justify-center">
          <button className="btn btn-primary">Book Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default SingleDcotorsInfo;
