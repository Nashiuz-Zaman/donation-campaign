// react
import PropTypes from "prop-types";

const SearchForm = ({ setSearchTerm, searchFunc }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        searchFunc();
      }}
      className="flex flex-col md:flex-row items-stretch max-w-[29.375rem] w-full mx-auto gap-4 md:gap-0"
    >
      <input
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        className="border border-[#DEDEDE] p-4 rounded-l-default md:grow rounded-r-default md:rounded-r-none"
        type="text"
        placeholder="Search here...."
      />
      <button className="py-4 px-7 w-max bg-primary mx-auto md:mx-0 text-white rounded-r-default rounded-l-default md:rounded-l-none">
        Search
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
  searchFunc: PropTypes.func.isRequired,
};

export default SearchForm;
