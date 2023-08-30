import React from "react";

export default function Task() {
  return (
    <div class="flex justify-around flex-col w-80 h-52 p-6 bg-white border border-gray-200 rounded-lg shadow">
      <div class="flex justify-between items-center ">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 truncate w-32">
          Title adfafasfjasfhj asdfasfjaks asdfafa asdfas
        </h5>
        <button
          class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 rounded-lg p-1.5"
          type="button">
          <span class="sr-only">Open dropdown</span>
          <svg
            className="w-5 h-5 text-gray-900 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 4 15">
            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
          </svg>
        </button>
      </div>

      <div class="flex items-center ">
        <p class="font-normal text-gray-700 max-h-24 flex items-start line-clamp-4">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order. baby shark du du du, baby shark.
          mommy du du du, mommy du du du.
        </p>
      </div>
      <p class="font-normal text-gray-700 flex justify-end">24-08-2023</p>
    </div>
  );
}
