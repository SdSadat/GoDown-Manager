import React from 'react';

const ItemDetails = ({ item }) => {
  if (!item) {
    return <div>Select an item to see details</div>;
  }

  return (
    <div className="item-details">
      <h2>{item.name}</h2>
      <img src={item.image_url} alt={item.name} />
      
      <table className="item-table">
        <tbody>
          <tr>
            <td><strong>Category:</strong></td>
            <td>{item.category}</td>
          </tr>
          <tr>
            <td><strong>Quantity:</strong></td>
            <td>{item.quantity}</td>
          </tr>
          <tr>
            <td><strong>Price:</strong></td>
            <td>${item.price}</td>
          </tr>
          <tr>
            <td><strong>Status:</strong></td>
            <td>{item.status}</td>
          </tr>
          <tr>
            <td><strong>Brand:</strong></td>
            <td>{item.brand}</td>
          </tr>
          {item.attributes && Object.keys(item.attributes).map((key) => (
            <tr key={key}>
              <td><strong>{key}:</strong></td>
              <td>{item.attributes[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
};

export default ItemDetails;
