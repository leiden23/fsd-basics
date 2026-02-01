import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GenerationPage } from "@/pages/generation"
import { Header } from "@/widgets/header"
import { WardrobePage } from "@/pages/wardrobe"


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<GenerationPage/>} />
                <Route path="/generation" element={<GenerationPage/>} />
                <Route path="/wardrobe" element={<WardrobePage/>} />
                {/* <Route path="/images" element={<WardrobePage/>} />
                <Route path="/about" element={<WardrobePage/>} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default App