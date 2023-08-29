import React from "react";

export default function Register() {
  return (
    <section class="bg-gray-50">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-xl shadow md:mt-0 sm:max-w-md xl:p-0 ">
          <div class="bg-white shadow-xl rounded-xl p-6 space-y-4 md:space-y-6 sm:p-8">
            <div class="flex justify-center">
              <h1 class="text-4xl font-bold text-black-900">Register</h1>
            </div>
            <form class="space-y-3.5" action="#">
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
                  required=""
                />
              </div>
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-black-900">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  placeholder="Enter your name"
                  required=""
                />
              </div>
              <div>
                <label
                  for="gender"
                  class="block mb-2 text-sm font-medium text-black-900">
                  Gender
                </label>
                <select
                  id="gender"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent">
                  <option value="" disabled selected>
                    Select your gender
                  </option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
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
                  required=""
                />
              </div>
              <div>
                <label
                  for="confirm-password"
                  class="block mb-2 text-sm font-medium text-black-900">
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="Enter your confirm password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  required=""
                />
              </div>
              <button
                type="submit"
                class="w-full text-white bg-green-400 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Register
              </button>
              <div class="flex justify-center">
                <p class="text-sm font-light text-gray-500">
                  Already have an account?{" "}
                  <a
                    href="#"
                    class="font-medium text-green-400 hover:underline">
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
