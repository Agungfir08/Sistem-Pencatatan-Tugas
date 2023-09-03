import { useEffect, useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

export default function Profile() {
  const [userData, setUserData] = useState({});

  function getProfile() {
    axios.get("https://task-be-ashy.vercel.app/profile").then((res) => {
      setUserData(res.data.data[0]);
    });
  }

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <>
      <div className=" ml-72 mt-2.5 mr-6">
        <h1 className="font-bold text-2xl">Profile Settings</h1>
        <div className="flex justify-center mt-6">
          <img
            className="w-52 h-52 rounded-full object-center border border-gray-500"
            src={userData.profile_img}
          />
        </div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3">
              <div class="flex items-center space-x-4">
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-semibold text-gray-700 ">Name</p>
                  <p class=" text-lg font-bold text-gray-900 ">
                    {userData.name}
                  </p>
                </div>
                <button
                  class="inline-flex items-center text-sm text-gray-500 underline"
                  type="button">
                  Edit
                </button>
              </div>
            </li>
            <li class="py-3 ">
              <div class="flex items-center space-x-4">
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-semibold text-gray-700 ">Email</p>
                  <p class=" text-lg font-bold text-gray-900 ">
                    {userData.email}
                  </p>
                </div>
                <button
                  class="inline-flex items-center text-sm text-gray-500 underline"
                  type="button">
                  Edit
                </button>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-semibold text-gray-700 ">Gender</p>
                  <p class=" text-lg font-bold text-gray-900 ">
                    {userData.gender}
                  </p>
                </div>
                <button
                  class="inline-flex items-center text-sm text-gray-500 underline"
                  type="button">
                  Edit
                </button>
              </div>
            </li>
            <li />
          </ul>
        </div>
      </div>
    </>
  );
}
