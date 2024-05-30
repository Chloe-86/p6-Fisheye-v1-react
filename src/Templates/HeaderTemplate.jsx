import React from "react";

const HeaderTemplate = ({ logo, nav }) => {
  return (
    <header>
      <h1>
        {logo}
      </h1>
      {nav && (
        <nav>
          {nav}
        </nav>
      )}
    </header>
  );
};

export default HeaderTemplate;