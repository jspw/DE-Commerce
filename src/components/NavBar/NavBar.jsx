import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="container m-auto bg-white p-4 flex flex-row justify-between  items-center shadow">
      <div className="flex flex-row space-x-2 items-center ">
        <Link to="/">
          <img
            className="rounded-full h-14 w-14 cursor-pointer shadow p-2"
            src="https://avatars.githubusercontent.com/u/17194757?s=200&v=4"
          />
        </Link>
      </div>

      <div className="flex flex-row">
        <input
          className="rounded-tl rounded-bl     border-grey-300 border-l-2 border-t-2 border-b-2 max-w-full	 p-1 focus:border-blue-400 outline-none"
          placeholder=" Search for a product"
        />
        <button className="btn pl-3 pr-3 bg-blue-400 rounded-tr rounded-br">
          <i class="fa fa-search text-xl text-white"></i>
        </button>
      </div>

      <div className="flex flex-row space-x-2 items-center">
        <div>
          <button class="relative flex mt-2">
            <svg class="flex-1 w-8 h-8 fill-current">
              <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
            </svg>
            <span class="absolute right-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
              5
            </span>
          </button>
        </div>
        <div>
          <button className="btn font-medium border-gray-300 border-2 rounded p-2">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
