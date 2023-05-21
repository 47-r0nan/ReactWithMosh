import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: ListGroupProps) {
  // State Hook (used to say this variable will change)
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // React only allows one component in parentheses
  return (
    <>
      {/*This is a comment in a fragment*/}
      <h1>{heading}</h1>
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
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
