import type { FC } from "react"
import styles from './style.module.css'
import { WardrobeCard } from "@/entities/clothes/wardrobe-card"
import { ArrowButton, Button, Column, Row } from "@/shared"

export const WardrobePanel: FC = () => {
    const array = Array(16).fill({
        title: 'mock clothes',
        src: '/img/arrow-left.svg'
    });
    
    return (
        <Column gap={25}>
            <div className={styles.cardsContainer}>
                {array.map((i) => (
                    <WardrobeCard className={styles.item} imageSrc={i.src} />
                ))}
            </div>

            <Row gap={29} justifyContent="center">
                <Button variant="outlined-gray" size="medium">Добавить</Button>
                <Row gap={10}>
                    <ArrowButton variant="rounded-left" color="gray" />
                    <ArrowButton variant="rounded-right" color="gray" />
                </Row>
                <Button variant="outlined-gray" size="medium">Удалить</Button>
            </Row>
        </Column>
    )
}