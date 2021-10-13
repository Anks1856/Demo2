import React from "react";

export default function Close() {
  const MenuToggle = () => {
    const toggleClass = document.getElementById("Admin-Wrapper");
    if (toggleClass?.classList.contains("Skew-Wrapper")) {
      toggleClass?.classList.remove("Skew-Wrapper");
    } else {
      toggleClass?.classList.add("Skew-Wrapper");
    }
  };

  return (
    <div className="Close-btn">
      <div className="Close" onClick={() => MenuToggle()}>
        <i className="fas fa-times" title="close"></i>
        <i className="fas fa-bars" title="opne"></i>
      </div>
    </div>
  );
}
