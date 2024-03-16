import React from "react";

function SeatScreen(): JSX.Element {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "600px",
  };

  const imageStyle: React.CSSProperties = {
    transform: "rotate(-90deg) scale(0.3)",
  };

  return (
    <div style={containerStyle}>
      <img
        src="https://venturebustours.com/images/28_LX_Chart.jpg"
        style={imageStyle}
        alt="Seat Map"
        className="transform rotate-90 scale-50"
      />
    </div>
  );
}

export default SeatScreen;
