import { Link } from "react-router-dom";

export default function Category({ name }) {
  return (
    <Link to={`/category/${name}`}>
      <div className="bg-white m-2 p-4 flex flex-col justify-around items-center cursor-pointer rounded-xl w-32  h-32 shadow">
        <div>
          <i className="fa fa-anchor text-3xl"></i>
        </div>
        <div className="hover:text-blue-400 font-serif text-lg break-words text-center ">
          {name}
        </div>
      </div>
    </Link>
  );
}
