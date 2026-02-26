import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import { ProtectedRoute } from "./propviders/router/protected-route"
import { GenerationPage } from "@/pages/generation"
import { Header } from "@/widgets/header"
import { WardrobePage } from "@/pages/wardrobe"
import { OutfitsPage } from "@/pages/outfits"
import { AboutPage } from "@/pages/about"
import { RegistrationPage } from "@/pages/registration/ui/registration"
import { AuthorizationPage } from "@/pages/authorization"

const AppLayout = () => (
    <>
        <Header />
        <Outlet />
    </>
)

function App() {

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