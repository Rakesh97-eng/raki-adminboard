import { Navbar } from "../navbar/navbar";
import { DashboardHome } from "../dashboardhome/dashboardhome";
import "./dashboard.css";
import Header from "../header/header";
import { useContext, useEffect } from "react";
import { Navcontext } from "../../context/navcontext";

const Dashboard = () => {
    const {value} = useContext(Navcontext);
    console.log("check",value);
    
   
  return (
    <>
      <Header />
     <div className="dashboardcontain">
     {value&& <div style={{ width: "13%",transitionDelay:"4s" }}>
          <Navbar />
        </div>}
        <div style={{ width: "100%",backgroundColor:"#F4F5F6" }}>
          <DashboardHome />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
