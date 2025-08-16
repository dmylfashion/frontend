import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Questionnaire from './Questionnaire';
import EditorDashboard from './EditorDashboard';
import ClientPortal from './ClientPortal';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Questionnaire />} />
        <Route path="/editor" element={<EditorDashboard />} />
        <Route path="/portal" element={<ClientPortal />} />
      </Routes>
    </Router>
  );
}

export default App;