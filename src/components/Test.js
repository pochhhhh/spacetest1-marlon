import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

const data = [
  { name: "Item A", price: 125 },
  { name: "Item B", price: 230 },
  { name: "Item C", price: 295 },
  { name: "Item D", price: 245 },
  { name: "Item E", price: 900 },
  { name: "Item F", price: 875 },
  { name: "Item G", price: 235 },
  { name: "Item H", price: 400 }
];

const Test = () => {
  let cheapestFiveItems = data.sort((a, b) => a.price - b.price).slice(0, 5);
  let allItems = data.sort((a, b) => a.price - b.price);

  const [showAllItems, setShowAllItems] = useState(false);

  const handleClick = () => setShowAllItems(!showAllItems);

  // useEffect(() => {
  //   console.log("TEST - 1st render only");
  //   console.log(
  //     "data",
  //     data.sort((a, b) => a.price - b.price)
  //   );
  //   console.log("cheapestFiveItems:", cheapestFiveItems);
  // }, []);

  // useEffect(() => {
  //   console.log("showAllItems was changed to:", showAllItems);
  // }, [showAllItems]);

  return (
    <div className="bg-danger">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <ul style={{ padding: 0 }}>
          {!showAllItems
            ? cheapestFiveItems.map(item => (
                <li>
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                  </div>
                </li>
              ))
            : allItems.map(item => (
                <li>
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                  </div>
                </li>
              ))}
        </ul>
        <Button style={{ fontWeight: "bold" }} onClick={handleClick}>
          {!showAllItems ? "View All" : "Collapse"}
        </Button>
      </div>
    </div>
  );
};

export default Test;
