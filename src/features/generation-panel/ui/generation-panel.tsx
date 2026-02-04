import type { FC } from "react"
import styles from './style.module.css'
import { Column } from "@/shared"
import { ClothesScroll } from "@/entities/clothes/clothes-scroll"
import { Button } from "@/shared"

export const GenerationPanel: FC = () => {
    return (
        <Column gap={38} alignItems="center" className={styles.wardrobeContainer}>
            <Column gap={28}>
                <ClothesScroll />
                <ClothesScroll />
                <ClothesScroll />
            </Column>
            <Button variant="outlined-gray" size="medium">Генерация</Button>
        </Column>
    )
}

