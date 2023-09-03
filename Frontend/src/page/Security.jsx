import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Security() {
  const navigate = useNavigate();
  const [data, setAllData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setAllData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  function submit(e) {
    e.preventDefault();

    if (data.newPassword !== data.confirmPassword || data === "") {
      return alert("Password not match");
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post(
        "https://task-be-ashy.vercel.app/changePassword",
        {
          oldPass: data.oldPassword,
          newPass: data.newPassword,
        },
        config
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Password changed successfully");
          navigate("/");
        }
      });
  }

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <div className=" ml-72 mt-2.5 mr-6">
        <h1 className="font-bold text-2xl">Security</h1>
        <div className="flex flex-row gap-10 mt-5">
          <div className=" w-1/4">
            <p className=" text-lg font-bold text-gray-900 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-gray-800 group-hover:stroke-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 20">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.5 8V4.5a3.5 3.5 0 1 0-7 0V8M8 12v3M2 8h12a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"
                />
              </svg>
              <span>Change Password</span>
            </p>
          </div>
          <div class="bg-white border border-gray-300 rounded-xl p-4 flex-1">
            <form class="space-y-4 md:space-y-6" onSubmit={submit}>
              <div>
                <label
                  for="oldPassword"
                  class="block mb-2 text-sm font-medium text-black-900">
                  Old password
                </label>
                <input
                  type="password"
                  name="oldPassword"
                  id="oldPassword"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  placeholder="Enter your old password"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  for="newPassword"
                  class="block mb-2 text-sm font-medium text-black-900">
                  New password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  placeholder="Enter your new password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  for="confirmPassword"
                  class="block mb-2 text-sm font-medium text-black-900">
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Enter your confirm password"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  onChange={handleChange}
                />
              </div>
              <div class="flex justify-end">
                <button
                  type="submit"
                  class=" w-40 text-white bg-green-400 hover:bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                  Change password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
