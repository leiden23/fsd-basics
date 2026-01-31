import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GenerationPage } from "../pages/generation/ui"
import { Header } from "../widgets/header"


function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<GenerationPage/>} />
                    <Route path="/generation" element={<GenerationPage/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App