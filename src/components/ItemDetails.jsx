import React from 'react';

const ItemDetails = ({ item }) => {
  if (!item) {
    return <div>Select an item to see details</div>;
  }

  return (
    <div className="item-details">
      <h2>{item.name}</h2>
      <img src={item.image_url} alt={item.name} />
      <p>Category: {item.category}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Price: ${item.price}</p>
      <p>Status: {item.status}</p>
      <p>Brand: {item.brand}</p>
      {item.attributes &&
        Object.keys(item.attributes).map((key) => (
          <p key={key}>
            {key}: {item.attributes[key]}
          </p>
        ))}
    </div>
  );
};

export default ItemDetails;
