import type { FC } from "react"
import styles from './style.module.css'
import { AboutPanel } from "@/features/about-panel"


export const AboutPage: FC = () => {
    return (
        <div className={styles.page}>
            <AboutPanel/>
        </div>
    )
}