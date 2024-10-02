// CHANGES: passHref and legacyBehavior props are added to the Link component

import React from "react";
import { default as NextLink } from "next/link";
import {
  link,
  type LinkProps as LinkVariants,
  type TextAlignProp,
  type TextWeightProp,
} from "@tailus/themer";

type LinkSize = LinkVariants["size"];
type LinkVariant = LinkVariants["variant"];
type LinkIntent = LinkVariants["intent"];
type LinkVisited = LinkVariants["visited"];
type LinkSizeProp =
  | LinkSize
  | {
      initial?: LinkSize;
      sm?: LinkSize;
      md?: LinkSize;
      lg?: LinkSize;
      xl?: LinkSize;
      xxl?: LinkSize;
    };

type LinkVariantProp =
  | LinkVariant
  | {
      initial?: LinkVariant;
      sm?: LinkVariant;
      md?: LinkVariant;
      lg?: LinkVariant;
      xl?: LinkVariant;
      xxl?: LinkVariant;
    };

type LinkIntentProp =
  | LinkIntent
  | {
      initial?: LinkIntent;
      sm?: LinkIntent;
      md?: LinkIntent;
      lg?: LinkIntent;
      xl?: LinkIntent;
      xxl?: LinkIntent;
    };

type LinkVisitedProp =
  | LinkVisited
  | {
      initial?: LinkVisited;
      sm?: LinkVisited;
      md?: LinkVisited;
      lg?: LinkVisited;
      xl?: LinkVisited;
      xxl?: LinkVisited;
    };

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  size?: LinkSizeProp;
  align?: TextAlignProp;
  weight?: TextWeightProp;
  variant?: LinkVariantProp;
  intent?: LinkIntentProp;
  visited?: LinkVisitedProp;
  passHref?: boolean;
  legacyBehavior?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  size,
  weight,
  align,
  variant,
  intent,
  visited,
  children,
  className,
  passHref,
  legacyBehavior,
  ...props
}) => {
  return (
    <NextLink
      href={props.href as any}
      passHref={passHref}
      legacyBehavior={legacyBehavior}
      className={link({
        size,
        variant,
        visited,
        intent,
        weight,
        align,
        className,
      })}
      {...props}
    >
      {children}
    </NextLink>
  );
};
