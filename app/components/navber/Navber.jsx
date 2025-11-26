"use client";
import { UserAuthContext } from "@/AuthContext/AuthContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const Navber = () => {
  const { user, signOutUser } = useContext(UserAuthContext);

  const handlesignOut = () => {
    return signOutUser()
      .then(() => {
        toast.success("signout successfully !");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/healthPosts"}>health-posts</Link>
      </li>
      <li>
        <Link href={"/doctors"}>All Doctors</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-bold normal-case">
            <span className="text-blue-500">Health</span>
            <span className="text-green-500">Bridge</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end dropdown-hover">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt="User Avatar" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="text-lg my-1">{user?.displayName}</li>
                <li>
                  <button
                    onClick={handlesignOut}
                    className="btn btn-primary w-full"
                  >
                    Logout
                  </button>
                </li>
                <li className="text-lg ">
                  <Link href={"/addHealthPost"}>add-health-post</Link>
                </li>
                <li className="text-lg">
                  <Link href={"/myHealthPosts"}>My-health-posts</Link>
                </li>
              </ul>
            </div>
          ) : (
            <button className="btn btn-primary ">
              <Link href={"/login"}>Login</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
