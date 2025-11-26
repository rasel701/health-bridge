"use client";

import { UserAuthContext } from "@/AuthContext/AuthContext";
import getAddHealthData from "@/fetchData/addHealthData";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";
import { toast } from "react-toastify";

const AddHealthPost = () => {
  const { user, loading } = useContext(UserAuthContext);
  const router = useRouter();
  console.log(user);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login?redirect=/addHealthPost");
    }
  }, [loading, user, router]);

  if (loading) {
    return <p className="text-3xl text-red-600">User Loading...</p>;
  }

  if (!user) return null;

  const handleAddHealth = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const shortDescription = e.target.shortDescription.value;
    const content = e.target.content.value;
    const category = e.target.category.value;
    const image = e.target.image.value;
    console.log({ title, shortDescription, content, category, image });
    const userPost = {
      title,
      shortDescription,
      content,
      date: new Date(),
      image: image || null,
      user: user?.displayName,
      email: user?.email || "rasel70821185@gmail.com",
    };
    const result = await getAddHealthData(userPost);
    console.log(result);
    if (result.insertedId) {
      toast.success("Your health post successfully add !");
      e.target.reset();
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl p-8">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Add Health Post
          </h1>
          <p className="text-center mb-4 text-gray-500">
            Your personal information will remain fully secure, and only the
            doctor responsible for your treatment will be able to access it
          </p>

          <form onSubmit={handleAddHealth} className="space-y-5">
            {/* Title */}
            <div>
              <label className="font-semibold">Post Title</label>
              <input
                type="text"
                name="title"
                placeholder="Enter post title"
                className="input input-bordered w-full mt-1"
              />
            </div>

            {/* Short Description */}
            <div>
              <label className="font-semibold">Short Description</label>
              <input
                type="text"
                name="shortDescription"
                placeholder="Enter a short summary"
                className="input input-bordered w-full mt-1"
              />
            </div>

            {/* Full Content */}
            <div>
              <label className="font-semibold">Full Content</label>
              <textarea
                placeholder="Write full article here..."
                name="content"
                className="textarea 
                textarea-bordered w-full mt-1"
                rows="6"
              ></textarea>
            </div>

            {/* Category */}
            <div>
              <label className="font-semibold">Category</label>
              <select
                name="category"
                className="select select-bordered w-full mt-1"
              >
                <option>Choose Category</option>
                <option value="Health Tips">Health Tips</option>
                <option value="Diet & Nutrition">Diet & Nutrition</option>
                <option value="Mental Health">Mental Health</option>
                <option value="Exercise & Fitness">Exercise & Fitness</option>
                <option value="Disease Awareness">Disease Awareness</option>
              </select>
            </div>

            {/* Image URL */}
            <div>
              <label className="font-semibold">Image URL (optional)</label>
              <input
                type="text"
                name="image"
                placeholder="Enter image URL"
                className="input input-bordered w-full mt-1"
              />
            </div>
            <div>
              <label className="font-semibold">User Name</label>
              <input
                type="text"
                name="name"
                placeholder="user name"
                defaultValue={user?.displayName}
                className="input input-bordered w-full mt-1"
              />
            </div>
            <div>
              <label className="font-semibold">User Email</label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="user email"
                className="input input-bordered w-full mt-1"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary w-full mt-4 text-lg font-semibold"
            >
              Submit Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddHealthPost;
