import React from "react";
import classnames from "classnames";
import { Text } from "./Text";

export type ButtonProps = {
  label: string;
  icon?: JSX.Element;
  onClick: () => void;
};

/**
 * A simple button to enable user interaction.
 * @param `label` - The text to display on the button.
 * @param `icon` - The icon to display on the button.
 * @param `onClick` - The function to call when the button is clicked.
 */
export const Button: React.FC<ButtonProps> = ({ label, icon, onClick }) => {
  return (
    <button
      className={classnames(
        "w-fit",
        "flex",
        "items-center",
        "rounded-md",
        "shadow",
        "px-4",
        "py-2",
        "bg-neutral-50",
        "hover:bg-neutral-100"
      )}
      onClick={onClick}
      tabIndex={0}
    >
      <Text>{label}</Text>

      {icon && (
        <Text
          className={classnames(
            "flex",
            "justify-center",
            "items-center",
            "flex-shrink-0",

            "ml-2"
          )}
        >
          {React.cloneElement(icon, { className: classnames("w-4", "h-4") })}
        </Text>
      )}
    </button>
  );
};
