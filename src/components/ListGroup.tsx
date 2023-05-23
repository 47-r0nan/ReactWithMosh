import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // const message = items.length === 0 ? <p>no item found</p> : null

  // const getMessage = () => { return items.length === 0 ? <p>no item found</p> : null}
  // Event Handler
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>no item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            // onClick={() => console.log(item, index)}
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
