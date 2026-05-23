"use client";

import { motion, type Variants, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps extends Omit<HTMLMotionProps<"div">, "variants"> {
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  amount?: number;
}

const offset = (direction: Direction, distance: number) => {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
    default:
      return {};
  }
};

/**
 * Reveal editorial: fade + slide sutil al entrar al viewport.
 */
export function Reveal({
  direction = "up",
  delay = 0,
  duration = 0.7,
  distance = 24,
  once = true,
  amount = 0.2,
  className,
  children,
  ...rest
}: RevealProps) {
  const variants: Variants = {
    hidden: { opacity: 0, ...offset(direction, distance) },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
