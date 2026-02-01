import type { FC } from "react"
import styles from './style.module.css'
import { WardrobePanel } from "@/features/wardrobe-panel"

export const WardrobePage: FC = () => {
    return (
        <div className={styles.page} >
            <div className={styles.container}>
                <WardrobePanel />
            </div>
        </div>
    )
}