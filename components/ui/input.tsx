import React from "react";
import { form, type InputProps as InputVariants } from "@tailus/themer";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    InputVariants {
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = "mixed",
      fancy = false,
      className,
      size = "md",
      error,
      ...props
    },
    forwardedRef
  ) => {
    const { input } = form();

    if ((variant === "bottomOutlined" || variant === "plain") && fancy) {
      throw Error(
        "Fancy is not supported with the bottomOutlined or plain variant !"
      );
    }

    return (
      <input
        ref={forwardedRef}
        className={input({
          variant,
          fancy,
          size,
          className: `${className} ${
            error &&
            "border border-danger-200 dark:border-danger-500 bg-danger-50 dark:bg-danger-500/10 focus:outline-danger-500"
          }
          `,
        })}
        {...props}
      />
    );
  }
);
