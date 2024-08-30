import React from "react";
import { Link } from "react-router-dom";
import {
  Info,
  ArrowLeftFromLine,
  File,
} from "lucide-react";
import Sidebar, { SidebarItem } from "../../components/Sidebar";
import Navbar from "../../components/Navbar";// Import Navbar
import NavbarItem from "../../components/NavbarItem";
function Audit2Component() {
  return (
    <>
      <div className="flex">
        <Sidebar>
          <Link to="/budget">
            <SidebarItem icon={<File size={20} />} text="ISA" active />
          </Link>

          <Link to="/pc">
            <SidebarItem icon={<File size={20} />} text="PC" />
          </Link>

          <Link to="/dc">
            <SidebarItem icon={<File size={20} />} text="DC" />
          </Link>

          <Link to="/telnet">
            <SidebarItem icon={<File size={20} />} text="Telnet" />
          </Link>

          <Link to="/project">
            <SidebarItem icon={<File size={20} />} text="Project" />
          </Link>

          <Link to="/cab">
            <SidebarItem icon={<File size={20} />} text="CAB" />
          </Link>

          <Link to="/sop_cp">
            <SidebarItem icon={<File size={20} />} text="SOP/CP" />
          </Link>

          <Link to="/SurveyFeedbackAveris">
            <SidebarItem
              icon={<File size={20} />}
              text="Survey Feedback Averis"
            />
          </Link>

          <Link to="/OtherDocuments">
            <SidebarItem icon={<File size={20} />} text="Other Documents" />
          </Link>

          <Link to="/help">
            <SidebarItem icon={<Info size={20} />} text="Help" />
          </Link>

          <hr className="my-3" />

          <Link to="/">
            <SidebarItem icon={<ArrowLeftFromLine size={20} />} text="Logout" />
          </Link>
        </Sidebar>

        <div className="flex-1 p-6 main-content">
        <Navbar>
            <Link to ="/budget"><NavbarItem>Budget</NavbarItem></Link>
            <Link to ="/kpi_pis"><NavbarItem>KPI/PIS</NavbarItem></Link>
            <Link to ="/audit"><NavbarItem>Audit</NavbarItem></Link>
            <Link to="/rfc_vendor"><NavbarItem>RFC Vendor</NavbarItem></Link>
            <Link to="/vendor_repair"><NavbarItem>Vendor Repair</NavbarItem></Link>
            <Link to="/license"><NavbarItem>License</NavbarItem></Link>
            <Link to="/audit1"><NavbarItem>Audit 1</NavbarItem></Link>
            <Link to="/audit2"><NavbarItem active={true}>Audit 2</NavbarItem></Link>
          </Navbar>
          <div>
          <hr className="my-3" />
            <Navbar width="w-full">
        <ul className="flex space-x-4 text-white">
          <Link to="/cab">
          <li>Home</li>
          </Link>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </Navbar>
          </div>
        </div>
      </div>
    </>
  );
}

export default Audit2Component;
