import clsx from "clsx";
import type { ButtonHTMLAttributes, FC } from "react"
import styles from './style.module.css'


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant: 'text' | 'filled' | 'outlined';
    color: 'beige' | 'danger' | 'gray' | 'white' | 'none';
    size: 'small' | 'medium' | 'large' | 'none';
    children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({ variant, color = 'none', size = "none", className, children, ...props }) => {
    return (
        <button {...props} className={clsx(styles.button, styles[variant], styles[color], styles[size], className)}>
            {children}
        </button>
    )
}