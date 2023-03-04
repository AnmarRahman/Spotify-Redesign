import { useState } from "react";
import Search from "./Search.jsx";

function Body() {
  const [search, setSearch] = useState("");
  return (
    <div className="bg-black ml-24 py-4 space-y-8 md:max-w-6xl flex-grow md:mr-5">
      <Search search={search} setSearch={setSearch} />
    </div>
  );
}

export default Body;
