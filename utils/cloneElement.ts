import React from "react"
import { twMerge } from "tailwind-merge"

export function cloneElement(element: React.ReactElement, classNames: string) {
  return React.cloneElement(element, {
    className: twMerge(element.props.className, classNames)
  })
}
