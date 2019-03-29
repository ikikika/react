import React from "react";

const Rainbow = WrappedComponent => {
  // In our normal component, if we wrap our expoert default like
  // export default Rainbow(WrappedComponent);
  // we receive the WrappedComponent as a prop in the hoc

  const colors = ["red", "blue", "green", "yellow"];
  const randomColor = colors[Math.floor(Math.random() * 4)];
  const className = randomColor + "-text";

  return props => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
