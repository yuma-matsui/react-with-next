import cc from "classcat";
import React, { DOMAttributes } from "react";

export default function Button({
  label,
  color = false,
  onClick,
}: {
  label: string;
  color?: boolean;
  onClick: DOMAttributes<HTMLButtonElement>["onClick"];
}) {
  return (
    <button
      type="button"
      className={cc({
        "text-red-500": color,
      })}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
