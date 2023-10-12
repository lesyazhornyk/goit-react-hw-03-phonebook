const Filter = ({ findByName }) => {
  return (
    <>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        onChange={e => findByName(e.target.value)}
      />
    </>
  );
};

export default Filter;
