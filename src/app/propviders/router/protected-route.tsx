import type { FC } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "@/entities/user/model/model";

export const ProtectedRoute: FC<{ children: React.ReactNode }> = ({children}) => {
    const { user } = useUser();
    if (!user) return <Navigate to={'/reg'}/>
    return (
        <>
            {children}
        </>
    )
}
