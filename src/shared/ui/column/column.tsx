import type { FC } from "react"

type ColumnProps = {
    gap: number;
    children: React.ReactNode;
    
}

export const Column: FC<ColumnProps> = ({gap, children}) => {
    return (
        <div style={{marginTop: gap}}>
            {children}
        </div>
    )
}

// - сделать компоненты Row, Column которые представляют из себя ряд и колонку,
// принимают children, gap (расстояние между элементами children в number) 
// и должны содержать еще дефолтные пропсы типа onClick, style, className и тд, разместить компоненты по FSD
