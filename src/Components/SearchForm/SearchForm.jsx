const SearchForm = () => {
  return (
    <form className="flex items-stretch max-w-[29.375rem] w-full mx-auto">
      <input
        className="border border-[#DEDEDE] p-4 rounded-l-default grow"
        type="text"
        placeholder="Search here...."
      />
      <button className="py-4 px-7 bg-primary text-white rounded-r-default">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
