import React, { ReactNode } from "react";
import classnames from "classnames";

export type TextProps = {
  children?: ReactNode;
  className?: string;
  variant?: "sm" | "med";
  variantStyleMapping?: { [variant in Required<TextProps>["variant"]]: string };
};

/**
 * Styled text to display.
 * @param `children` - The text to display.
 * @param `className` - Available for additional styling.
 * @param `variant` - The text variant to use.
 * @param `variantStyleMapping` - A mapping of text variants to their respective styles.
 */
export const Text: React.FC<TextProps> = ({
  children,
  className,
  variant = "med",
  variantStyleMapping = {
    sm: classnames("text-gray-500", "text-xs"),
    med: classnames("text-gray-800", "text-sm"),
  },
}) => (
  <p className={classnames(className, variantStyleMapping[variant])}>
    {children}
  </p>
);
