import React from "react";

const HeaderTemplate = ({ logo, nav }) => {
  return (
    <header>
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