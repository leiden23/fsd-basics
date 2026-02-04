import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GenerationPage } from "@/pages/generation"
import { Header } from "@/widgets/header"
import { WardrobePage } from "@/pages/wardrobe"
import { OutfitsPage } from "@/pages/outfits"
import { AboutPage } from "@/pages/about"


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<GenerationPage/>} />
                <Route path="/generation" element={<GenerationPage/>} />
                <Route path="/wardrobe" element={<WardrobePage/>} />
                <Route path="/outfits" element={<OutfitsPage/>} />
                <Route path="/about" element={<AboutPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App