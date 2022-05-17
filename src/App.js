import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Cursos from "./pages/cursos/Cursos";
import CursosLista from "./pages/cursos/CursosLista";
import CursosForm from "./pages/cursos/CursosForm";
import Disciplinas from "./pages/disciplinas/Disciplinas";
import DisciplinasLista from "./pages/disciplinas/DisciplinasLista";
import ProfessoresForm from "./pages/professores/ProfessoresForm";
import AlunosForm from "./pages/alunos/AlunosForm";
import TurmasForm from "./pages/Turmas/TurmasForm";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>

            <Route path="/cursos" element={<Cursos />} />
            <Route path="/professores" element={<ProfessoresForm />} />
            <Route path="/cursos" element={<CursosLista />} />
            <Route path="/disciplinas" element={<DisciplinasLista />} />
            <Route path="/disciplinas/create" element={<Disciplinas />} />
            <Route path="/alunos" element={<AlunosForm />} />
            <Route path="/turmas" element={<TurmasForm />} />
            
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
