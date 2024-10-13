import React, { useState } from "react";
import "./ItemDetails.css";

const ItemDetails = ({ item }) => {
  if (!item) {
    return <div>Select an item to see details</div>;
  }
  const [isPortrait, setIsPortrait] = useState(false);

  const toggleMode = () => {
    setIsPortrait(!isPortrait);
  };

  return (
    <>
      <div
        className={isPortrait ? "item-details-portrait" : "item-details-card"}
      >
        <div className="item-header">
          <div className="item-title">
            <h2>{item.name}</h2>
            <button onClick={toggleMode} className="toggle-btn">
              {isPortrait ? "Normal View" : "Portrait View"}
            </button>
          </div>
        </div>
        <div className="item-image-wrapper">
          <img src={item.image_url} alt={item.name} />
        </div>
        <div className="item-info">
          <table className="item-table">
            <tbody>
              <tr>
                <td>Category:</td>
                <td>{item.category}</td>
              </tr>
              <tr>
                <td>Quantity:</td>
                <td>{item.quantity}</td>
              </tr>
              <tr>
                <td>Price:</td>
                <td>${item.price}</td>
              </tr>
              <tr>
                <td>Status:</td>
                <td>
                  <span className={`status-label ${item.status.toLowerCase()}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
              <tr>
                <td>Brand:</td>
                <td>{item.brand}</td>
              </tr>
              {item.attributes &&
                Object.keys(item.attributes).map((key) => (
                  <tr key={key}>
                    <td>{key}:</td>
                    <td>{item.attributes[key]}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
