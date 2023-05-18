import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let selectedIndex = 0;

  // EventHandler
  const handleClick = (event: MouseEvent) => console.log(event);

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
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
