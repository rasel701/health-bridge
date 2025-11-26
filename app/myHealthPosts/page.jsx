"use client";

import { UserAuthContext } from "@/AuthContext/AuthContext";
import getMyHealthPost from "@/fetchData/myHealthPost";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

const MyHealthPosts = () => {
  const { user } = useContext(UserAuthContext);
  const [myPost, setMyPost] = useState([]);

  useEffect(() => {
    getMyHealthPost(user?.email).then((res) => {
      console.log(res);
      setMyPost(res);
    });
  }, [user?.email]);
  console.log(myPost);

  return (
    <div>
      <div className="min-h-screen p-6 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          My Health Posts
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Title</th>
                <th className="py-3 px-4 text-left">Short Description</th>
                <th className="py-3 px-4 text-left">User</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myPost.map((post) => (
                <tr
                  key={post._id}
                  className="border-b hover:bg-gray-100 transition duration-200"
                >
                  <td className="py-3 px-4">{post.title}</td>
                  <td className="py-3 px-4">{post.shortDescription}</td>
                  <td className="py-3 px-4">{post.user}</td>
                  <td className="py-3 px-4">
                    {new Date(post.date).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4 flex gap-2">
                    <Link
                      href={`/healthPosts/${post?._id}`}
                      className="btn btn-sm btn-primary"
                    >
                      View
                    </Link>
                    <button className="btn btn-sm btn-error">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyHealthPosts;
