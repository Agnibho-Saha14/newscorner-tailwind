import React from "react";

const Navbar = ({ setCategory }) => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          


          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <span className="bg-white text-black font-bold px-2 py-1 rounded text-xl">NewsCorner</span>
            </div>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {["Technology", "Business", "Health", "Science", "Sports", "Entertainment"].map((category) => (
                  <div
                    key={category}
                    onClick={() => setCategory(category.toLowerCase())}
                    className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    {category}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {["Technology", "Business", "Health", "Science", "Sports", "Entertainment"].map((category) => (
            <div
              key={category}
              onClick={() => setCategory(category.toLowerCase())}
              className="cursor-pointer block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
