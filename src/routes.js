import { Routes, Route } from 'react-router-dom';

// Import das páginas
import Profiles from './pages/Profiles';
import Home from './pages/Home';
import Detalhes from './pages/Detalhes';
import Perfil from './pages/Perfil'; // ✅ nova página Perfil

function MainRoutes() {
    return (
        <Routes>
            {/* Tela inicial de perfis */}
            <Route path='/' element={<Profiles />} />

            {/* Tela principal */}
            <Route path='/home' element={<Home />} />

            {/* Tela de detalhes do filme (rota dinâmica) */}
            <Route path='/detalhes/:id' element={<Detalhes />} />

            {/* Página de perfil (botão "Conta") */}
            <Route path='/perfil' element={<Perfil />} />
        </Routes>
    );
}

export default MainRoutes;
