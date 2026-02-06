import type { FC } from "react";
import styles from './style.module.css'
import { AuthorizationForm } from "@/features/authorization-form";

export const AuthorizationPage: FC = () => {
    return (
        <div className={styles.page}>
            <AuthorizationForm/>
        </div>
    )
}

