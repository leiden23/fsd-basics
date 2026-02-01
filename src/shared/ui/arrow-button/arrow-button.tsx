import clsx from "clsx";
import type { ButtonHTMLAttributes, FC } from "react";
import styles from './style.module.css'

type ArrowButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant: 'rounded-left' | 'rounded-right' | 'triangle-left' | 'triangle-right';
    color?: 'white' | 'gray'
}

export const ArrowButton: FC<ArrowButtonProps> = ({variant, color, className, children, ...props}) => {
    return (
        <button {...props} className={clsx(styles.button, styles[variant], styles[color], className)}>
            {children}
        </button>
    )
}