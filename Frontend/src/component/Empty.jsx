import React from "react";

export default function Empty() {
  return (
    <>
      <div class="py-8 px-4 mx-auto max-w-screen-xl ">
        <div class=" max-w-full text-center flex flex-col justify-center">
          <div>
            <svg
              className=" w-32 h-32 text-gray-500 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20">
              <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
            </svg>
          </div>
          <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 ">
            It's empty here
          </p>
        </div>
      </div>
    </>
  );
}
