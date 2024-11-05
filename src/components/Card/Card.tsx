import React, { ReactNode } from "react";
import classnames from "classnames";
import { CardTitleProps, CardTitle } from "./CardTitle";

export type CardProps = {
  children?: ReactNode;
  title?: string;
  className?: string;
};

/**
 * A card to display content.
 * @param `children` - The content to display in the card.
 * @param `title` - The title of the card.
 * @param `className` - Available for additional styling.
 *
 * @inner `Card.Title` - A styled title to be used within the card. Not necessary if `title` is provided.
 * @inner `Card.Title` - `children` - The title text to display.
 */
const Card: React.FC<CardProps> & {
  Title: React.FC<CardTitleProps>;
} = ({ children, title, className }) => {
  return (
    <div
      className={classnames(
        className,
        "rounded-lg",
        "bg-neutral-50",
        "shadow",
        "px-8",
        "py-6",
        title !== undefined &&
          classnames("flex", "flex-col", "space-y-8", "min-w-0")
      )}
    >
      {title !== undefined && <CardTitle>{title}</CardTitle>}
      {children}
    </div>
  );
};

Card.Title = CardTitle;
export default Card;
