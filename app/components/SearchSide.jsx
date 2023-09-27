import React from "react";

const SearchSide = () => {
  return (
    <div className=" relative h-screen w-[70vw] max-md:w-screen max-md:h-[40vh] max-sm:h-[50vh] searchside justify-center items-center flex ">
      <img
        src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
        alt="loading"
        className="w-full h-full opacity-90 contrast-100"
      />

      {/* find box */}

      <div className=" absolute top-[40vh] m-auto w-[40vw] h-[25vh] shadow-2xl rounded-xl z-[200] max-md:w-[60%] max-md:top-[10vh] p-2 bgcolor flex items-center justify-center  ">
        <form className="flex flex-col justify-center items-center gap-7 w-full">
          <div className="w-[60%] h-[35px] max-sm:w-full max-md:w-[90%] max-sm:h-[35px] bg-white  rounded-md flex items-center justify-center text-white">
            <input
              className=" bg-blue-600 placeholder:text-white text-[16px]   w-[95%] h-[29px] outline-none pl-1 max-sm:text-[12px] "
              type="text"
              placeholder="Search location"
            />
          </div>
          <div className="bg-white w-[60%] max-sm:w-full  max-md:w-[90%] flex items-center justify-center h-[35px] hover:bg-transparent rounded-md">
            <button className="bg-blue-600 w-[97%] text-white hover:bg-blue-800 h-[29px] max-sm:text-[12px]">
              Find
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchSide;
