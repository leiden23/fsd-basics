import type { FC } from "react"
import styles from './style.module.css'
import { Column } from "../../../shared/ui/column"
import { NavLink } from "react-router-dom"


export const Header: FC = () => {
    return (
        <Column gap={65} className={styles.header} width={254} alignItems={"center"} >
            <h1 className={styles.logo}>outfitly</h1>
            <Column gap={20}>
                <NavLink to='/generation' className={styles.link}>Генерация</NavLink>
                <NavLink to='/wardrobe' className={styles.link}>Гардероб</NavLink>
                <NavLink to='/images' className={styles.link}>Образы</NavLink>
                <NavLink to='/about' className={styles.link}>О проекте</NavLink>
            </Column>
        </Column>
    )
}