import { Routes, Route } from 'react-router-dom';
import Profiles from './pages/Profiles';
import Home from './pages/Home';
import Detalhes from './pages/Detalhes'; // <-- importe aqui

function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Profiles />} />
            <Route path='/home' element={<Home />} />
            <Route path='/detalhes/:id' element={<Detalhes />} /> {/* rota dinâmica */}
        </Routes>
    );
}

export default MainRoutes;
