import Admin from "../../admin/Admin";
import KrimStatistika from "../components/KrimStatistika/KrimStatistika";
import UsernamePage from "../components/UsernamePage/UsernamePage";
import Konfiguratsiyasi from "../components/Konfiguratsiyasi/Konfiguratsiyasi";
import MashinalaxrStatistika from "../components/MashinalarStatistika/MashinalarStatistika";
import NotFound from "../components/NotFound/NotFound";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/sign" element={<Admin />} />
          <Route
            path="/MashinalarStatistika"
            element={<MashinalaxrStatistika />}
          />
          <Route path="/KrimStatistika" element={<KrimStatistika />} />
          <Route path="/Konfiguratsiyasi" element={<Konfiguratsiyasi />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/" element={<UsernamePage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Index;
