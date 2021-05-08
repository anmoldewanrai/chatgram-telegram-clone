import { useEffect, useRef } from "react";

const SearchBar = () => {
  const SearchBox = useRef();

  useEffect(() => {
    SearchBox.current.focus();
  }, []);

  return (
    <div className="search-bar">
      <form className="input-form">
        <input
          type="text"
          className="search-box"
          ref={SearchBox}
          autoFocus
          placeholder="Search"
        />
      </form>
    </div>
  );
};

export default SearchBar;
