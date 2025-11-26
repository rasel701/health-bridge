"use client";

import { UserAuthContext } from "@/AuthContext/AuthContext";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const LoginComponent = () => {
  const { googleLogin, loginUser } = useContext(UserAuthContext);
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";
  const router = useRouter();
  console.log(redirect);

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

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, password });
    loginUser(email, password).then((res) => {
      console.log(res.user);
      if (res.user) {
        toast.success("User login successfully !");
      }

      setTimeout(() => {
        router.push(redirect);
      }, 2000);
    });
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Welcome Back 👋
          </h2>

          <p className="text-center text-gray-500 mb-6">
            Login to your account
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full input input-bordered rounded-lg"
                name="email"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full input input-bordered rounded-lg"
                name="password"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="btn btn-primary w-full rounded-lg text-lg"
            >
              Login
            </button>
          </form>
          <div className="flex justify-center items-center my-5 mb-4">
            <button onClick={handleGooglelogin} className="btn ">
              <FcGoogle />
              <span>Login with Google</span>
            </button>
          </div>

          {/* Footer */}
          <p className="text-center mt-6 text-gray-600">
            Don't have an account?{" "}
            <Link
              href={`/register?redirect=${redirect}`}
              className="text-blue-600 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
