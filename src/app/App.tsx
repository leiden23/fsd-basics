import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GenerationPage } from "@/pages/generation"
import { Header } from "@/widgets/header"
import { WardrobePage } from "@/pages/wardrobe"
import { OutfitsPage } from "@/pages/outfits"
import { AboutPage } from "@/pages/about"
import { RegistrationPage } from "@/pages/registration/ui/registration"
import { AuthorizationPage } from "@/pages/authorization"


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/reg" element={<RegistrationPage/>} />
                <Route path="/auth" element={<AuthorizationPage/>} />
            </Routes>
            <Header />
            <Routes>
                <Route path="/generation" element={<GenerationPage/>} />
                <Route path="/wardrobe" element={<WardrobePage/>} />
                <Route path="/outfits" element={<OutfitsPage/>} />
                <Route path="/about" element={<AboutPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App