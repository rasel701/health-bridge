import getAllHealthPost from "@/fetchData/allHealthPost";
import Link from "next/link";
import React from "react";

const HealthPost = async () => {
  const healthPosts = await getAllHealthPost();
  console.log(healthPosts);
  return (
    <div>
      <div className="p-6">
        <h2 className="text-3xl font-bold text-center mb-15">
          All Health Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {healthPosts.map((post) => (
            <div
              key={post._id}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition duration-300 ease-in-out"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-3">{post.shortDescription}</p>
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>Category: {post.category}</span>
                <span>Date: {post.date}</span>
              </div>
              <p className="text-gray-500 text-sm mb-4">By: {post.user}</p>
              <Link
                href={`/healthPosts/${post._id}`}
                className="btn btn-sm btn-primary w-full"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthPost;
