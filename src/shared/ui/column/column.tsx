import type { FC, HTMLAttributes } from "react"
import clsx from "clsx"
import styles from './style.module.css'

type ColumnProps = HTMLAttributes<HTMLDivElement> & {
    gap?: number;
    width?: string | number;    
    height?: string | number;
    justifyContent?: 'flex-end' | 'flex-start' | 'center' | 'space-between';
    alignItems?: 'flex-end' | 'flex-start' | 'center';
}

export const Column: FC<ColumnProps> = ({gap, children, style, width, height, justifyContent, alignItems, ...props}) => {
    return (
        <div {...props} style={{gap, width, height, justifyContent, alignItems, ...style}} className={clsx(styles.div, props.className)}>
            {children}
        </div>
    )
}
