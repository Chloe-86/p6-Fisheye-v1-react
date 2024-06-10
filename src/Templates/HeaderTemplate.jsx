import React from "react";

const HeaderTemplate = ({ logo, nav }) => {
  return (
    <header role="banner">
      <div >
        {logo}
      </div>
      {nav && (
        <>
          {nav}
        </>
      )}
    </header>
  );
};

export default HeaderTemplate;