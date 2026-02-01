import { Card } from "@/shared"
import type { CSSProperties, FC } from "react"

type WardrobeCardProps = {
    imageSrc?: string;
    style?: CSSProperties;
    className?: string;
}

export const WardrobeCard: FC<WardrobeCardProps> = ({ imageSrc, ...props }) => {
    return (
        <Card {...props} width={153} height={103} justifyContent="center" alignItems="center" >
            <img src={imageSrc} alt="Карточка с одеждой"/>
        </Card>
    )
}