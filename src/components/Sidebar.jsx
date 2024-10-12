import React, { useState, useEffect } from 'react';
import { getGodowns, getChildGoDowns } from '../api';
import TreeNode from './TreeNode';

const Sidebar = ({ setSelectedItem }) => {
  const [godowns, setGodowns] = useState([]);

  useEffect(() => {
    const fetchGodowns = async () => {
      const response = await getGodowns();
      const godownList = response.data;

      const godownMap = {};
        godownList.forEach((godown) => {
            godown.children = [];
            godownMap[godown.id] = godown;
        });

        const rootGodowns = [];
        godownList.forEach((godown) => {
            if (godown.parent_id) {
                godownMap[godown.parent_id].children.push(godown);
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
