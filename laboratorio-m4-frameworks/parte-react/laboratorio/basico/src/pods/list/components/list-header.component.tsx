import React from "react";

export const ListHeader: React.FC = () => {
  return (
    <div className="user-list-header">
      <span className="user-list-column first-column">Avatar</span>
      <span className="user-list-column second-column">Id</span>
      <span className="user-list-column third-column">Name</span>
    </div>
  );
};
