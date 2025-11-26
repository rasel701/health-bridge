"use client";
import { UserAuthContext } from "@/AuthContext/AuthContext";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
const RegisterComponent = () => {
  const { registerUser, user, updateUser, googleLogin, setUser } =
    useContext(UserAuthContext);
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";
  const router = useRouter();
  console.log(redirect);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    registerUser(email, password)
      .then((res) => {
        console.log(res.user);
        updateUser(name, photo)
          .then(() => {
            console.log(res.user);
            setUser({ ...res.user, photoURL: photo, displayName: name });
            if (res.user) {
              toast.success("User create successfully !");
            }

            setTimeout(() => {
              router.push(redirect);
            }, 2000);
          })
          .catch((error) => {
            toast.error(error);
          });
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleGooglelogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
        if (res.user) {
          toast.success("google login successfully !");
        }

        setTimeout(() => {
          router.push(redirect);
        }, 2000);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
        <div className="card w-full max-w-md shadow-xl bg-base-100 p-6">
          <h2 className="text-3xl font-bold text-center mb-6">
            Create an Account
          </h2>

          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="input input-bordered w-full"
                name="name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                name="email"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="label">
                <span className="label-text font-medium">
                  Profile Image URL
                </span>
              </label>
              <input
                type="text"
                placeholder="Paste image URL"
                className="input input-bordered w-full"
                name="photo"
              />
            </div>

            {/* Password */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type="password"
                placeholder="Create a password"
                className="input input-bordered w-full"
                name="password"
              />
            </div>

            {/* Button */}
            <button type="submit" className="btn btn-primary w-full mt-2">
              Register
            </button>

            <div className="flex justify-center items-center my-2 mb-4">
              <button onClick={handleGooglelogin} className="btn ">
                <FcGoogle />
                <span>Login with Google</span>
              </button>
            </div>

            {/* Already have account */}
            <p className="text-center text-sm mt-2">
              Already have an account?{" "}
              <Link href="/login" className="text-primary font-semibold">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
