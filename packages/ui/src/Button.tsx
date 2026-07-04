import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => (
  <button className={styles.btn} {...props}>
    {children}
  </button>
);

export default Button;