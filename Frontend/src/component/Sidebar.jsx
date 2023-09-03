import React from "react";
import { NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
axios.defaults.withCredentials = true;

export default function Sidebar() {
  const [cookies, setCookies, removeCookies] = useCookies(["token"]);
  let navigate = useNavigate();
  function deleteToken() {
    axios
      .delete(`https://task-be-ashy.vercel.app/logout`)
      .then(() => {
        removeCookies("token");
        navigate("/login");
      })
      .catch((err) => {
        alert(err);
      });
  }
  return (
    <>
      <aside className="fixed top-0 left-0 w-64 h-screen  shadow-lg">
        <div className="h-full px-3 py-4 overflow-y-auto bg-white">
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink
                to={"/"}
                className="flex items-center p-2 text-[#28a745] rounded-lg hover:bg-[#28a745] group">
                <svg
                  className="w-6 h-6 text-gray-800 group-hover:stroke-white stroke-[#28a745]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"
                  />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap group-hover:text-white">
                  Home
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/notification"}
                className="flex items-center p-2 text-[#28a745] rounded-lg hover:bg-[#28a745] group">
                <svg
                  className="w-6 h-6 text-gray-800 group-hover:stroke-white stroke-[#28a745]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 21">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C15 15.4 15 16 14.462 16H1.538C1 16 1 15.4 1 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 8 3.464ZM4.54 16a3.48 3.48 0 0 0 6.92 0H4.54Z"
                  />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap text-[#28a745] group-hover:text-white">
                  Notification
                </span>
                {/* <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span> */}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/security"}
                className="flex items-center p-2 text-[#28a745] rounded-lg hover:bg-[#28a745] group">
                <svg
                  className="w-6 h-6 text-gray-800 group-hover:stroke-white stroke-[#28a745]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 20">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.5 8V4.5a3.5 3.5 0 1 0-7 0V8M8 12v3M2 8h12a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"
                  />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap text-[#28a745] group-hover:text-white">
                  Security
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/profile"}
                class="flex items-center p-2 text-[#28a745] rounded-lg hover:bg-[#28a745] group">
                <svg
                  className="w-6 h-6 text-gray-800 group-hover:stroke-white stroke-[#28a745]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 11 14H9a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 10 19Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap text-[#28a745] group-hover:text-white">
                  Profile
                </span>
              </NavLink>
            </li>
            <li>
              <button
                onClick={deleteToken}
                type="button"
                class="text-white hover:text-[#28a745] w-full flex justify-center bg-[#28a745] gap-x-2 hover:bg-white hover:ring-2 hover:ring-[#28a745]/75 focus:ring-2 focus:outline-none focus:ring-[#28a745] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 group">
                <svg
                  className="w-6 h-6 text-gray-800 group-hover:stroke-[#28a745] stroke-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
