import { useContext } from "react";
import Category from "./Category";
import * as localStore from "../../utility/services/localStorage/localStore";
import { StateContext } from "../../Context/StateContext";
export default function Categories() {
  useContext(StateContext);
  const categories = localStore.getCategories();

  return (
    <div className=" mt-4 space-y-2 justify-self-center">
      <div className="text-3xl  font-mono font-semibold text-center">
        Featured Category
      </div>
      <div className="text-center font-thin text-lg">
        Get Your Desired Product from Featured Category!
      </div>

      {categories ? (
        <div className="flex flex-wrap justify-center">
          {categories.map((category, id) => (
            <Category key={id} name={category} />
          ))}
        </div>
      ) : (
        <div className="text-center">......</div>
      )}
    </div>
  );
}
