import React from "react";
import classnames from "classnames";

export type HorizontalValueBarProps = { progress: number };

/**
 * A horizontal bar to display a value. Width of bar is 100% of parent container.
 * @param `progress` - The value to display as a percentage.
 */
export const HorizontalValueBar: React.FC<HorizontalValueBarProps> = ({
  progress,
}) => {
  return (
    <div className={classnames("w-full", "flex", "space-x-1", "h-2", "pr-2")}>
      <div
        style={{
          width: `${Math.floor(progress * 100)}%`,
          transition: "width 150ms",
          transitionTimingFunction: "ease-out",
        }}
        className={classnames("bg-sky-600", "rounded-lg")}
      />
      <div
        style={{
          width: `${Math.floor((1 - progress) * 100)}%`,
          transition: "width 150ms",
          transitionTimingFunction: "ease-out",
        }}
        className={classnames("bg-gray-200", "rounded-lg", "w-full")}
      />
    </div>
  );
};
