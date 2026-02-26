import { useEffect } from "react"
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import { ProtectedRoute } from "./propviders/router/protected-route"
import { supabase } from "@/shared/api/supabase"
import { useUser } from "@/entities/user"
import { AboutPage } from "@/pages/about"
import { GenerationPage } from "@/pages/generation"
import { OutfitsPage } from "@/pages/outfits"
import { RegistrationPage } from "@/pages/registration/ui/registration"
import { AuthorizationPage } from "@/pages/authorization"
import { WardrobePage } from "@/pages/wardrobe"
import { Header } from "@/widgets/header"


const AppLayout = () => (
    <>
        <Header />
        <Outlet />
    </>
)

function App() {
    const { setUser } = useUser()

    useEffect(() => {
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null)
        })
        return () => subscription.unsubscribe()
    }, [setUser])

    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/reg" element={<RegistrationPage />} />
                    <Route path="/auth" element={<AuthorizationPage />} />
                    <Route element={<AppLayout />}>
                        <Route path="/generation" element={<ProtectedRoute><GenerationPage /></ProtectedRoute>} />
                        <Route path="/wardrobe" element={<ProtectedRoute><WardrobePage /></ProtectedRoute>} />
                        <Route path="/outfits" element={<ProtectedRoute><OutfitsPage /></ProtectedRoute>} />
                        <Route path="/about" element={<ProtectedRoute><AboutPage /></ProtectedRoute>} />
                    </Route>
                </Routes>
            </BrowserRouter>
    )
}

export default App