import type { FC } from "react";
import styles from './style.module.css'
import { OutfitsPanel } from "@/features/outfits-panel";


export const OutfitsPage: FC = () => {
    return (
        <div className={styles.page}>
            <OutfitsPanel />
        </div>
    )
}