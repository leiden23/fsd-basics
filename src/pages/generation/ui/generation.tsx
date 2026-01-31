import type { FC } from "react";
import styles from './style.module.css'
import { Column } from "../../../shared/ui/column";
import { Card } from "../../../shared/ui/card";
import { Button } from "../../../shared/ui/button";
import { Row } from "../../../shared/ui/row";
import { ArrowButton } from "../../../shared/ui/arrow-button";

export const GenerationPage: FC = () => {
    return (
        <div className={styles.page}>
            <Column style={{marginLeft: '516px'}} gap={38} alignItems="center">
                <Column style={{ marginTop: '144px' }} gap={28}>
                    <Row gap={10} alignItems="center">
                        <ArrowButton variant="triangle-left"/>
                        <Card width={180} height={120} />
                        <ArrowButton variant="triangle-right"/>
                    </Row>
                    <Row gap={10} alignItems="center">
                        <ArrowButton variant="triangle-left"/>
                        <Card width={180} height={120} />
                        <ArrowButton variant="triangle-right"/>
                    </Row>
                    <Row gap={10} alignItems="center">
                        <ArrowButton variant="triangle-left"/>
                        <Card width={180} height={120} />
                        <ArrowButton variant="triangle-right"/>
                    </Row>
                </Column>
                <Button variant="outlined-gray" size="medium">Генерация</Button>
            </Column>
        </div>
    )
}