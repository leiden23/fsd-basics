import type { CSSProperties, FC } from "react"
import styles from './style.module.css'
import clsx from "clsx";

type CardProps = {
    width: string | number;
    height: string | number;
    children?: React.ReactNode;
    style?: CSSProperties;
    className?: string;
    justifyContent?: 'flex-end' | 'flex-start' | 'center' | 'space-between';
    alignItems?: 'flex-end' | 'flex-start' | 'center';
}
export const Card: FC<CardProps> = ({children, width, height, alignItems, justifyContent, style, className}) => {
    return (
        <div className={clsx(styles.card, className)} style={{width, height, alignItems, justifyContent, ...style}}>
            {children}
        </div>
    )
}
