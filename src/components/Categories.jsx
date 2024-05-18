import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className=" basis-80 bg-white shadow p-8  h-screen flex flex-col justify-evenly">
      <form className="flex items-center max-w-sm mx-auto">
        {/* <label htmlFor="simple-search" className="sr-only">
        Search
      </label> */}
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
              />
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#60101F] focus:border-[#60101F] block w-full ps-10 p-2.5  dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#60101F] "
            placeholder="Search branch name..."
            required
          />
        </div>
        <button
          type="submit"
          className="p-2.5 ms-2 text-sm font-medium text-white bg-[#60101F] rounded-lg border border-white hover:bg-red-900  focus:outline-none focus:ring-red-900  dark:bg-[rgba(96,16,31,0.96)] dark:hover:[#60101F] "
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>

      <div className=" border-t-[1px]  py-10 flex flex-col gap-2 ">
        <h1 className=" text-2xl tracking-wide ">Product Categories</h1>
        <ul className="list-disc  flex flex-col gap-2">
          <li>
            <Link className=" text-neutral-600"> Clothing</Link>
          </li>
          <li>
            <Link className=" text-neutral-600">Electronics</Link>
          </li>
          <li>
            <Link className=" text-neutral-600">Jwelries</Link>
          </li>
        </ul>
      </div>
      <div className=" border-t-[1px]  py-10 flex flex-col gap-4 ">
        <h1 className=" text-2xl tracking-wide ">Gender Categories</h1>
        <ul className="list-disc  flex flex-col gap-2">
          <li>
            <Link className=" text-neutral-600">Women's Fashion</Link>
          </li>
          <li>
            <Link className=" text-neutral-600">Men's Fashion</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Categories;