import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export default function Login() {
  const { login } = useAuth();
  let navigate = useNavigate();
  const [data, setData] = useState({
    email: undefined,
    password: undefined,
  });

  function handleChange(e) {
    setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  useEffect(() => {
    console.log(data);
  }, [data]);

  function submit(e) {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post(
        "https://task-be-ashy.vercel.app/login",
        {
          email: data.email,
          password: data.password,
        },
        config
      )
      .then((res) => {
        const dataUser = {
          id: res.data.id,
          name: res.data.name,
          token: res.data.token,
        };
        login(dataUser);
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <section class="bg-gray-50">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-xl shadow md:mt-0 sm:max-w-md xl:p-0 ">
          <div class="bg-white shadow-xl rounded-xl p-6 space-y-4 md:space-y-6 sm:p-8">
            <div class="flex justify-center">
              <h1 class="text-4xl font-bold text-black-900">Login</h1>
            </div>
            <form class="space-y-4 md:space-y-6" onSubmit={submit}>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-black-900">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  placeholder="Enter your email"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-black-900">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  onChange={handleChange}
                />
              </div>
              <div class="flex justify-end">
                <a
                  href="#"
                  class="text-sm font-medium text-primary-500 hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                type={"submit"}
                class="w-full text-white bg-green-400 hover:bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Login
              </button>
              <div class="flex justify-center">
                <p class="text-sm font-light text-gray-500">
                  Dont have an account?{" "}
                  <Link
                    to="/register"
                    class="font-medium text-green-400 hover:underline">
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
