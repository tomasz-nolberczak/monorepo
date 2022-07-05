import * as React from "react";
export const Button = ({
  clickHandler,
}: {
  clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button onClick={(event) => (clickHandler ? clickHandler(event) : null)}>
      Order pizza
    </button>
  );
};
