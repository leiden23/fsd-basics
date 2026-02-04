import type { FC } from "react"
import { Card } from "@/shared";

type OutfitsCardProps = {
    children?: React.ReactNode;
    rotate?: number;
    className?: string;
}

export const OutfitsCard: FC<OutfitsCardProps> = ({rotate, className, children}) => {
    return (
        <div style={{rotate: `${rotate}deg`}} className={className}>
            <Card width={148} height={192}>
                {children}
            </Card>
        </div>
    )
}