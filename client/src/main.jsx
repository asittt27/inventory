import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Budget from "./Content/isa/Budget.jsx";
import Kip_Pis from "./Content/isa/Kpi_Pis.jsx";
import Audit from "./Content/isa/Audit.jsx";
import Rfc_vendor from "./Content/isa/Rfc_vendor.jsx";
import VendorRepair from "./Content/isa/VendorRepair.jsx";
import License from "./Content/isa/License.jsx";
import Audit1 from "./Content/isa/Audit1.jsx";
import Audit2 from "./Content/isa/Audit2.jsx";
import LoginForm from "./LoginForm.jsx";

import Pc from "./Content/pc/Pc.jsx";
import Dc from "./Content/dc/Dc.jsx";
import Telnet from "./Content/telnet/Telnet.jsx";
import Cab from "./Content/cab/Cab.jsx";
import Help from "./Content/help/Help.jsx";
import OtherDocuments from "./Content/otherdocuments/OtherDocuments.jsx";
import Project from "./Content/project/Project.jsx";
import Sop_Cp from "./Content/sop_cp/Sop_Cp.jsx";
import SurveyFbAveris from "./Content/survey/SurveyFbAveris.jsx";
import Login from "./Login.jsx";

import "./index.css";


createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      {/* Route ISA */}
      <Route path='/budget' element={<Budget/>}/>
      <Route path='/kpi_pis' element={<Kip_Pis/>}/>
      <Route path='/audit' element={<Audit/>}/>
      <Route path='/rfc_vendor' element={<Rfc_vendor/>}/>
      <Route path='/vendor_repair' element={<VendorRepair/>}/>
      <Route path='/license' element={<License/>}/>
      <Route path='/audit1' element={<Audit1/>}/>
      <Route path='/audit2' element={<Audit2/>}/>
      {/* End Of Route ISA */}

      <Route path='/pc' element={<Pc/>}/>
      <Route path='/dc' element={<Dc/>}/>
      <Route path='/telnet' element={<Telnet/>}/>
      <Route path='/cab' element={<Cab/>}/>
      <Route path='/help' element={<Help/>}/>
      <Route path='/OtherDocuments' element={<OtherDocuments/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/sop_cp' element={<Sop_Cp/>}/>
      <Route path='/SurveyFeedbackAveris' element={<SurveyFbAveris/>}/>
      <Route path='/' element={<LoginForm/>}/>
   
    </Routes>
  </Router>
)
