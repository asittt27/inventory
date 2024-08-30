import React from 'react';
import { Link } from 'react-router-dom';
import {
  Info,
  ArrowLeftFromLine,
  File,
} from "lucide-react";
import Sidebar, { SidebarItem } from "../../components/Sidebar";
import Navbar from "../../components/Navbar"; // Import Navbar

function OthersComponent() {
  return (
    <>
      <div className="flex">
        <Sidebar>
          <Link to="/budget">
            <SidebarItem icon={<File size={20} />} text="ISA"  />
          </Link>
          
          <Link to="/pc">
            <SidebarItem icon={<File size={20} />} text="PC" />
          </Link>
          
          <Link to="/dc">
            <SidebarItem icon={<File size={20} />} text="DC" />
          </Link>
          
          <Link to="/telnet">
            <SidebarItem icon={<File size={20} />} text="Telnet"  />
          </Link>
          
          <Link to="/project">
          <SidebarItem icon={<File size={20} />} text="Project"  />
          </Link>
          
          <Link to="/cab">
          <SidebarItem icon={<File size={20} />} text="CAB" />
          </Link>
          
          <Link to="/sop_cp">
          <SidebarItem icon={<File size={20} />} text="SOP/CP" />
          </Link>
          
          <Link to="/SurveyFeedbackAveris">
          <SidebarItem icon={<File size={20} />} text="Survey Feedback Averis"  />
          </Link>
          
          <Link to="/OtherDocuments">
          <SidebarItem icon={<File size={20} />} text="Other Documents" active />
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
          <Navbar /> 
          <div className="content">
            <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
            <p className="mt-4">This is your main content area.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OthersComponent;
