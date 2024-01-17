import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";

import GameBoard from "./components/pages/GameBoard";
import NotFoundPage from "./components/pages/NotFoundPage";


function App() {
    return (
        <div className="App">
            <Header/>
            <div className='content'>
                <Routes>
                    <Route path="/" element={<GameBoard/>}/>
                    <Route path="/*" element={<NotFoundPage/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
