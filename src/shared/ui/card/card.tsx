import type { FC } from "react"
import styles from './style.module.css'

type CardProps = {
    width: string | number;
    height: string | number;
    children?: string | number;
}
// полупрозрачная карточка с радиусом 15
export const Card: FC<CardProps> = ({children, width, height}) => {
    return (
        <div className={styles.card} style={{width, height}}>
            {children}
        </div>
    )
}
