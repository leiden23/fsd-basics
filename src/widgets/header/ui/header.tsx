import type { FC } from "react"
import styles from './style.module.css'
import { Column } from "../../../shared/ui/column"


export const Header: FC = () => {
    return (
        <Column gap={65} className={styles.header} >
            <h1>outfitly</h1>
            <Column gap={20}>
                <div>Генерация</div>
                <div>Гардероб</div>
                <div>Образы</div>
                <div>О проекте</div>
            </Column>
        </Column>
    )
}