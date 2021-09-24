import * as localStore from "../../utility/services/localStorage/localStore";
import Category from "./Catgeory";
export default function Categories() {
  const categories = localStore.getCategories();

  return (
    <div className="container mt-4 space-y-2">
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
