import React from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
export default function Task({ task }) {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  function deleteTask() {
    axios
      .delete(`https://task-be-ashy.vercel.app/task/${task.id}/delete`)
      .then(window.location.reload(true));
  }

  function doneTask() {
    axios
      .put(
        `https://task-be-ashy.vercel.app/task/${task.id}`,
        {
          is_done: true,
        },
        config
      )
      .then((res) => {
        console.log(res.data.id);
        window.location.reload(true);
      });
  }
  return (
    <div className="flex justify-around flex-col w-80 h-52 p-6 bg-white border border-gray-200 rounded-lg shadow me-5 mb-5">
      <div className="flex justify-between items-center">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 truncate w-[12rem]">
          {task.judul}
        </h5>
        <div>
          <button
            className="inline-flex items-center p-1 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100"
            type="button"
            onClick={doneTask}>
            <svg
              className="w-5 h-5 text-gray-800 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20">
              <path
                stroke={task.is_done ? "#28a745" : "gray"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m7 10 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
          <button
            className="inline-flex items-center p-1 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100"
            type="button"
            onClick={deleteTask}>
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
          </button>
        </div>
      </div>

      <div className="h-24 flex items-center ">
        <p className="font-normal text-gray-700 max-h-24 flex items-start line-clamp-4">
          {task.deskripsi}
        </p>
      </div>
      <p className="font-normal text-gray-700 flex justify-end">
        {task.deadline}
      </p>
    </div>
  );
}
