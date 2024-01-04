import Admin from "../../admin/Admin";
import KrimStatistika from "../components/KrimStatistika/KrimStatistika";
import UsernamePage from "../components/UsernamePage/UsernamePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Konfiguratsiyasi from "../components/Konfiguratsiyasi/Konfiguratsiyasi";
import MashinalaxrStatistika from "../components/MashinalarStatistika/MashinalarStatistika";

const Index = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/sign" element={<Admin />} />
          <Route path="/MashinalarStatistika" element={<MashinalaxrStatistika />}/>
          <Route path="/KrimStatistika" element={<KrimStatistika />}/>
          <Route path="/Konfiguratsiyasi" element={<Konfiguratsiyasi />}/>
        </Routes>
        <UsernamePage />
      </Router>
    </div>
  );
};

export default Index;
