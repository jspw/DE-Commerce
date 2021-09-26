import { useContext, useState } from "react";
import { useHistory } from "react-router";
import ReactSearchAutocomplete from "react-search-autocomplete/dist/components/ReactSearchAutocomplete";
import { ShopContext } from "../../Context/ShopContext";

export default function SearchBar() {
  const { products } = useContext(ShopContext);
  const history = useHistory();

  const [searchedType, setSearchType] = useState("title");

  return (
    <div className="container ml-auto mr-auto mt-4">
      <ReactSearchAutocomplete
        items={products || []}
        fuseOptions={{ keys: ["title", "category"] }}
        onSelect={(e) => {
          history.push(`/product/${e.title}`);
        }}
        autoFocus
        resultStringKeyName="title"
        styling={{
          height: "40px",
          boxShadow: "none",
          placeHolder: "Search",
        }}
      />
    </div>
  );
}
