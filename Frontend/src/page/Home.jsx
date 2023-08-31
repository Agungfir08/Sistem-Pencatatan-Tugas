/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import Task from "../component/Task";
import "flowbite";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className=" mt-2.5 mr-6 flex justify-between">
        <h1 className="font-bold text-2xl">Sistem Pengingat Tugas</h1>
        <div className="flex flex-row gap-2">
          <button
            className="p-2 border-solid border-2 border-[#28a745] hover:bg-[#28a745] group"
            type="button"
            onClick={() => setShowModal(true)}>
            <svg
              className="w-4 h-4 group-hover:stroke-white stroke-[#28a745]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>

          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdownFilter"
            data-dropdown-offset-skidding="-25"
            className="p-2 border-solid border-2 border-[#28a745] hover:bg-[#28a745] group"
            type="button">
            {/* <Select className="mx-2 py-2 px-4 border-solid border-2 border-green-400 hover:bg-[#28a745] group"> */}
            <svg
              className="w-4 h-4 group-hover:stroke-white stroke-[#28a745]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 18">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.85 1.1A1.99 1.99 0 0 0 17.063 0H2.937a2 2 0 0 0-1.566 3.242L6.99 9.868 7 14a1 1 0 0 0 .4.8l4 3A1 1 0 0 0 13 17l.01-7.134 5.66-6.676a1.99 1.99 0 0 0 .18-2.09Z"
              />
            </svg>
            {/* <Option>Material Tailwind HTML</Option>
                        <Option>Material Tailwind React</Option>
                        <Option>Material Tailwind Vue</Option>
                        <Option>Material Tailwind Angular</Option>
                        <Option>Material Tailwind Svelte</Option>
                      </Select> */}
          </button>
          <div
            id="dropdownFilter"
            class="z-10 hidden bg-white divide-y divide-gray-100 border border-gray-200 rounded-lg shadow w-auto ">
            <ul
              class="py-2 text-sm text-gray-700 "
              aria-labelledby="dropdownDefaultButton">
              <li>
                <a
                  href="#"
                  class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 ">
                  <span class="font-semibold ">by Status</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 ">
                  <span class="font-semibold">by Date</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {showModal ? (
          <>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                    <h3 className="text-2xl font-bold">Tugas</h3>
                    <button
                      className="bg-transparent border-0 text-black float-right"
                      onClick={() => setShowModal(false)}>
                      <span className="text-black h-6 w-6 text-xl">x</span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <form className="w-full max-w-lg">
                      <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full px-3 mb-6 md:mb-0">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="title">
                            Title
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            type="text"
                            placeholder="Add title"
                          />
                          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="date">
                            Date
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="date"
                            placeholder="Set date"
                          />
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="time">
                            Time
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="time"
                            placeholder="Set time"
                          />
                        </div>
                      </div>

                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="description">
                            Description
                          </label>
                          <textarea
                            rows={4}
                            className="block p-2.5 w-full text-sm text-gray-500 bg-gray-200 rounded-lg border border-gray-300 leading-tight focus:outline-none focus:bg-white"
                            defaultValue={""}
                            type="text"
                            placeholder="Add description"
                          />
                          {/* <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Add description" /> */}
                          {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-[#28a745] background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => setShowModal(false)}>
                      Close
                    </button>
                    <button
                      className="text-white bg-[#28a745] active:ring-2 active:ring-[#28a745] active:bg-white active:text-[#28a745] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => setShowModal(false)}>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
      <div className="flex flex-wrap">
        <Task />
        <Task />
      </div>
    </>
  );
}
