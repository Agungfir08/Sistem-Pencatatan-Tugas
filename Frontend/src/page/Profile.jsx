import axios from "axios";
import { useEffect, useState } from "react";
axios.defaults.withCredentials = true;
export default function Profile() {
  const [userData, setUserData] = useState({
    name: undefined,
    email: undefined,
    gender: undefined,
    profile_img: undefined,
  });
  function getProfile() {
    axios
      .get("https://task-be-ashy.vercel.app/profile")
      .then((res) => {
        setUserData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
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
            className="w-52 h-52 rounded-full object-center border border-black"
            src={userData.profile_img}
            alt="Rounded avatar"
          />
        </div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3">
              <div class="flex items-center space-x-4">
                <div class="flex-1 min-w-0">
                  <p class="text-sm  text-gray-700 ">Name</p>
                  <p class=" text-sm font-semibold text-gray-900 ">
                    {userData.name}
                  </p>
                </div>
                <div class="inline-flex items-center text-sm text-gray-500 underline">
                  Edit
                </div>
              </div>
            </li>
            <li class="py-3 ">
              <div class="flex items-center space-x-4">
                <div class="flex-1 min-w-0">
                  <p class="text-sm  text-gray-700 ">Email</p>
                  <p class=" text-sm font-semibold text-gray-900 ">
                    {userData.email}
                  </p>
                </div>
                <div class="inline-flex items-center text-sm text-gray-500 underline">
                  Edit
                </div>
              </div>
            </li>
            <li class="py-3 sm:py-4">
              <div class="flex items-center space-x-4">
                <div class="flex-1 min-w-0">
                  <p class="text-sm  text-gray-700 ">Gender</p>
                  <p class=" text-sm font-semibold text-gray-900 ">
                    {userData.gender}
                  </p>
                </div>
                <div class="inline-flex items-center text-sm text-gray-500 underline">
                  Edit
                </div>
              </div>
            </li>
            <li />
          </ul>
        </div>
      </div>
    </>
  );
}
