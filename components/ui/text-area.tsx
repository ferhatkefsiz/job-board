import React from "react"
import { form, type InputProps } from "@tailus/themer"

export interface TextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size">,
    InputProps {
  error?: boolean
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      className,
      variant = "mixed",
      fancy = false,
      size = "md",
      error,
      ...props
    },
    forwardedRef,
  ) => {
    const { input, textarea } = form()

    if ((variant === "bottomOutlined" || variant === "plain") && fancy) {
      throw Error(
        "Fancy is not supported with the bottomOutlined or plain variant !",
      )
    }

    return (
      <textarea
        ref={forwardedRef as React.RefObject<HTMLTextAreaElement>}
        className={input({
          variant,
          fancy,
          size,
          className: `min-h-[80px] py-2 ${className} ${error && "border-danger-500 bg-danger-100/40 focus:outline-danger-500 dark:border-danger-400 dark:bg-danger-800/20 dark:focus:outline-danger-400"}`,
        })}
        {...props}
      />
    )
  },
)

export default Textarea
