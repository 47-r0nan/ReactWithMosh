function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  // const message = items.length === 0 ? <p>no item found</p> : null

  // const getMessage = () => { return items.length === 0 ? <p>no item found</p> : null}
  const getMessage = () => {
    return items.length === 0 && <p>no item found</p>;
  };

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
