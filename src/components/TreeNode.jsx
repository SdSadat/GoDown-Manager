import React, { useState } from "react";
import { getItemsByGodown } from "../api";

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
        {node.name} {isOpen ? "[-]" : "[+]"}
      </div>
      {isOpen && ( // assuming items present only in leaf childrens
        <div className="tree-node-children">
          {node.children.length > 0 ? (
            node.children.map((childNode) => (
              <TreeNode
                key={childNode.id}
                node={childNode}
                setSelectedItem={setSelectedItem}
              />
            ))
          ) : items.length > 0 ? (
            items.map((item) => (
              <div
                key={item.item_id}
                onClick={() => setSelectedItem(item)}
                className="tree-item"
              >
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
