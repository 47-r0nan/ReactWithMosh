function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  // React only allows one component in parentheses
  return (
    <>
      {/*This is a comment in a fragment*/}
      <h1>List:</h1>
      {/*items.length === 0 ? <p>No items found</p> : null
      ^^This is the same as below*/}
      {items.length == 0 && <p>No items found</p>}
      <ul className="list-group">
        {/*everything needs a key property (id)*/}
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
