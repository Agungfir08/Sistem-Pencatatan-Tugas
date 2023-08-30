import React from "react";

export default function Task() {
  const Dropdown = () => {
    <div class="flex flex-col">
      <ul>
        <li>Done</li>
        <li>Delete</li>
      </ul>
    </div>;
  };
  return (
    <div class="flex justify-around flex-col w-80 h-52 p-6 bg-white border border-gray-200 rounded-lg shadow me-3 mt-5">
      <div class="flex justify-between items-center ">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 truncate w-32">
          Title adfafasfjasfhj asdfasfjaks asdfafa asdfas
        </h5>
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          data-dropdown-offset-skidding="-25"
          data-dropdown-offset-distance="5"
          class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 rounded-lg p-1.5"
          type="button">
          <svg
            className="w-5 h-5 text-gray-900 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 4 15">
            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
          </svg>
        </button>
        <div
          id="dropdown"
          class="z-10 hidden bg-white divide-y divide-gray-100 border border-gray-200 rounded-lg shadow w-auto ">
          <ul
            class="py-2 text-sm text-gray-700 "
            aria-labelledby="dropdownDefaultButton">
            <li>
              <a
                href="#"
                class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 ">
                <svg
                  className="w-5 h-5 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 21 21">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7.418 17.861 1 20l2.139-6.418m4.279 4.279 10.7-10.7a3.027 3.027 0 0 0-2.14-5.165c-.802 0-1.571.319-2.139.886l-10.7 10.7m4.279 4.279-4.279-4.279m2.139 2.14 7.844-7.844m-1.426-2.853 4.279 4.279"
                  />
                </svg>
                <span class="font-semibold ">Edit</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 ">
                <svg
                  className="w-5 h-5 text-gray-800 stroke-[#28a745] "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m7 10 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <span class="font-semibold text-[#28a745]">Done</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 ">
                <svg
                  className="w-5 h-5 text-gray-800 stroke-red-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
                  />
                </svg>
                <span class="font-semibold text-red-600">Delete</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="flex items-center ">
        <p class="font-normal text-gray-700 max-h-24 flex items-start line-clamp-4">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
      <p class="font-normal text-gray-700 flex justify-end">24-08-2023</p>
    </div>
  );
}
