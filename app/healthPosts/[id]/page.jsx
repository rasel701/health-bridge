import getSinglePost from "@/fetchData/singlePost";
import Link from "next/link";
import React from "react";

const healthPostsDetails = async ({ params }) => {
  const { id } = await params;
  const healthPostDetails = await getSinglePost(id);
  //   console.log(healthPostDetails);
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white w-full max-w-3xl p-8 rounded-lg shadow-lg">
          <Link
            href={"/healthPosts"}
            className="bg-blue-500 px-6 text-white  cursor-pointer rounded-lg text-lg  py-2"
          >
            Back
          </Link>
          {/* Title */}
          <h1 className="text-3xl font-bold mt-6 mb-4 text-gray-800">
            {healthPostDetails.title}
          </h1>

          {/* Short Description */}
          <p className="text-gray-600 mb-6 text-lg">
            {healthPostDetails.shortDescription}
          </p>

          {/* Date & User Info */}
          <div className="flex justify-between items-center mb-6 text-sm text-gray-500">
            <span>
              Date: {new Date(healthPostDetails.date).toLocaleDateString()}
            </span>
            <span>By: {healthPostDetails.user}</span>
          </div>

          {/* Image */}
          {healthPostDetails.image ? (
            <img
              src={healthPostDetails.image}
              alt={healthPostDetails.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
          ) : (
            <div className="w-full h-64 flex items-center justify-center bg-gray-200 rounded-lg mb-6 text-gray-400 text-xl">
              {/* No Image Available */}
              <img
                className="w-full h-full object-cover"
                src="https://img.freepik.com/free-vector/healthy-people-carrying-different-icons_53876-66139.jpg?semt=ais_hybrid&w=740&q=80"
                alt=""
              />
            </div>
          )}

          {/* Full Content */}
          <p className="text-gray-700 text-base mb-6">
            {healthPostDetails.content}
          </p>

          {/* User Email */}
          <p className="text-gray-500 text-sm">
            Contact: {healthPostDetails.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default healthPostsDetails;
