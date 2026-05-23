"use client";

import { motion, type Variants, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface StaggerProps extends HTMLMotionProps<"div"> {
  staggerDelay?: number;
  initialDelay?: number;
  amount?: number;
}

/**
 * Contenedor que escalona la entrada de sus hijos directos.
 * Cada hijo debe ser un <StaggerItem /> o un <motion.div> con variants compatibles.
 */
export function Stagger({
  staggerDelay = 0.12,
  initialDelay = 0,
  amount = 0.2,
  className,
  children,
  ...rest
}: StaggerProps) {
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function StaggerItem({
  className,
  children,
  ...rest
}: HTMLMotionProps<"div">) {
  return (
    <motion.div variants={itemVariants} className={cn(className)} {...rest}>
      {children}
    </motion.div>
  );
}
