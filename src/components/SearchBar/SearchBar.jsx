import { useHistory } from "react-router";
import ReactSearchAutocomplete from "react-search-autocomplete/dist/components/ReactSearchAutocomplete";
import * as localStore from "../../utility/services/localStorage/localStore";

export default function SearchBar() {
  const history = useHistory();
  const products = localStore.getProducts();

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
