import { type FC, type HTMLAttributes } from "react";
import clsx from 'clsx';
import styles from './style.module.css';

type RowProps = HTMLAttributes<HTMLDivElement> & {
    gap?: number;
    height?: string | number;
    width?: string | number;
    justifyContent?: 'flex-end' | 'flex-start' | 'center' | 'space-between';
    alignItems?: 'flex-end' | 'flex-start' | 'center';
}

export const Row: FC<RowProps> = ({gap, children, width, height, style, justifyContent, alignItems, ...props}) => {
    return (
        <div {...props} style={{gap, height, width, justifyContent, alignItems, ...style}} className={clsx(styles.div, props.className)}>
            {children}
        </div>
    )
}



// - сделать компоненты Row, Column которые представляют из себя ряд и колонку,
// принимают children, gap (расстояние между элементами children в number) 
// и должны содержать еще дефолтные пропсы типа onClick, style, className и тд, разместить компоненты по FSD
