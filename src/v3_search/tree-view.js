import React from "react";
import { useTreeState } from "./TreeContext";

const TreeNode = ({ node }) => {
  const { dispatch } = useTreeState();
  return (
    <div
      className="tree-node"
      style={{ color: node.isHighlight ? "#059200" : "initial", fontWeight: node.isHighlight ? "500" : "200"}}
    >
      {node.children && (
        <button
          onClick={() =>
            dispatch({
              type: "TOGGLE_NODE",
              id: node.id,
              isExpanded: !node.isExpanded
            })
          }
          className="toggle-icon"
        >
          {node.isExpanded ? <i class="fa-regular fa-circle-up"></i> : <i class="fa-regular fa-circle-down"></i>}
        </button>
      )}
      <span>{node.name}</span>
      {node.isExpanded && <TreeView data={node?.children} />}
    </div>
  );
};

const TreeView = ({ data }) => {
  return (
    <div className="tree-view">
      {data?.map((node) => (
        <TreeNode key={node.id} node={node} />
      ))}
    </div>
  );
};

export default TreeView;
