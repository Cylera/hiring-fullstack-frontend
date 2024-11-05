import React from "react";
import { Heading } from "@components";

export type CardTitleProps = { children?: string };

/**
 * A styled title to be used within the card. Not necessary if `title` is provided.
 * @param `children` - The title text to display.
 */
export const CardTitle: React.FC<CardTitleProps> = ({ children }) => (
  <Heading variant="h2">{children}</Heading>
);
