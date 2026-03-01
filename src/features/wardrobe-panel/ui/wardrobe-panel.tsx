import { useEffect, useState, type FC } from 'react'
import styles from './style.module.css'
import { WardrobeCard } from "@/entities/clothes/wardrobe-card"
import { ArrowButton, Button, Column, Row } from "@/shared"
import { getClothes } from '@/entities/clothes/api/get-clothes';
import { useUser } from '@/entities/user';

type WardrobePanelProps = {
    onAddClick: () => void;
    onDeleteClick: () => void;
};

type Clothes = {
    id: string;
    user_id: string;
    image_url: string;
    created_at: string;
}

export const WardrobePanel: FC<WardrobePanelProps> = ({onAddClick, onDeleteClick}) => {
    const { user } = useUser();
    const [clothes, setClothes] = useState<Clothes[]>([]);
    
    useEffect(() => {
        const load = async () => {
            const { data } = await getClothes(user!.id)
            setClothes(data ?? [])
        }
        load();
    },[user])

    return (
        <Column gap={25}>
            <div className={styles.cardsContainer}>
                {clothes.map((e) => (
                    <WardrobeCard key={e.id} className={styles.item} imageSrc={e.image_url} />
                ))}
            </div>

            <Row gap={29} justifyContent="center">
                <Button 
                    variant="outlined-gray" 
                    size="medium"
                    onClick={onAddClick}>
                        Добавить
                </Button>
                <Row gap={10}>
                    <ArrowButton variant="rounded-left" color="gray" />
                    <ArrowButton variant="rounded-right" color="gray" />
                </Row>
                <Button 
                    variant="outlined-gray" 
                    size="medium"
                    onClick={onDeleteClick}>    
                        Удалить
                </Button>
            </Row>
        </Column>
    )
}