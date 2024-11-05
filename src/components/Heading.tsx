import React, { ReactNode } from "react";
import classnames from "classnames";

export type HeadingProps = {
  children?: ReactNode;
  variant: "h1" | "h2";
  className?: string;
  variantStyleMapping?: {
    [variant in Required<HeadingProps>["variant"]]: string;
  };
};

/**
 * A styled heading to display text.
 * @param `children` - The text to display.
 * @param `variant` - The heading variant to use.
 * @param `className` - Available for additional styling.
 * @param `variantStyleMapping` - A mapping of heading variants to their respective styles.
 */
export const Heading: React.FC<HeadingProps> = ({
  children,
  variant: HeadingTag,
  className,
  variantStyleMapping = {
    h1: classnames("text-2xl", "text-gray-900"),
    h2: classnames("text-xl", "text-gray-900"),
  },
}) => (
  <HeadingTag
    className={classnames(className, variantStyleMapping[HeadingTag])}
  >
    {children}
  </HeadingTag>
);
