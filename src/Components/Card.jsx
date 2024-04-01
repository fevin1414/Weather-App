import React from "react";

const Card = ({ Value1, Value2, Value3, Value4, Value5, image }) => {
  return (
    <div className="w-[60%] z-0 flex items-center justify-center">
      <div
        className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        style={{ height: "300px" }}
      >
        <div className="flex flex-col items-center pb-10">
          <div
            className="w-24 h-24 mb-3   flex  items-center justify-center"
            style={{ color: "black" }}
          >
            {image}
          </div>
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {Value1}
          </h5>

          <div className="flex mt-4 md:mt-6">
            {Value2 && (
              <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {Value2}
              </div>
            )}
            {Value3 && (
              <div className="py-2 px-4 ms-2 text-sm font-medium text-white focus:outline-none bg-blue-700 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                {Value3}
              </div>
            )}
          </div>
          <div className="flex mt-4 md:mt-6">
            {Value4 && (
              <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {Value4}
              </div>
            )}
            {Value5 && (
              <div className="py-2 px-4 ms-2 text-sm font-medium text-white focus:outline-none bg-blue-700 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                {Value5}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
