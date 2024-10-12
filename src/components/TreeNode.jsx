import React, { useState } from 'react';
import { getItemsByGodown } from '../api';

const TreeNode = ({ node, setSelectedItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);

  const toggleOpen = async () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      const response = await getItemsByGodown(node.id);
      setItems(response.data);
    }
  };

  return (
    <div className="tree-node">
      <div onClick={toggleOpen} className="tree-node-header">
        {node.name} {isOpen ? '[-]' : '[+]'}
      </div>
      {isOpen && (
        <div className="tree-node-children">
          {items.length > 0 ? (
            items.map((item) => (
              <div key={item.item_id} onClick={() => setSelectedItem(item)}>
                {item.name}
              </div>
            ))
          ) : (
            <p>No items available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
