import React, { useState, useEffect } from 'react';
import { getGodowns } from '../api';
import TreeNode from './TreeNode';

const Sidebar = ({ setSelectedItem }) => {
  const [godowns, setGodowns] = useState([]);

  useEffect(() => {
    const fetchGodowns = async () => {
      const response = await getGodowns();
      const godownList = response.data;

      const mapGodown = {};
      godownList.forEach((godown) => {
        godown.children = []; 
        mapGodown[godown.id] = godown;
      });

      const rootGodowns = [];
      godownList.forEach((godown) => {
        if (godown.parent_godown) {
          mapGodown[godown.parent_godown].children.push(godown);
        } else {
          rootGodowns.push(godown);
        }
      });

      setGodowns(rootGodowns);
    };

    fetchGodowns();
  }, []);

  return (
    <div className="sidebar">
      <h3>Godown Locations</h3>
      {godowns.map((godown) => (
        <TreeNode key={godown.id} node={godown} setSelectedItem={setSelectedItem} />
      ))}
    </div>
  );
};

export default Sidebar;
