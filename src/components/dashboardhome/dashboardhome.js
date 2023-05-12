import { Doughnut } from "react-chartjs-2";
import LineChart from "../../dashboardcomp/linechart/linechart";
import "./dashboardhome.css";
import DoughChart from "../../dashboardcomp/dougchart/dougchart";
import BarChart from "../../dashboardcomp/barchart.js/barchart";
import Dashtable from "../dashtable.js/dashtable";
import { useDispatch, useSelector } from "react-redux";
import { getApi } from "../../redux/apislice";
import { ApiStore } from "../../redux/apistore";

export const DashboardHome = () => {
  const dispatch  = useDispatch();
  const cart = useSelector(state=>console.log("store",state))
  return (
    <>
       <div className="dashfull" >
      <div className="dashcontains">
        <div className="dashup">
          <div className="dashupin">
            <div className="dashin">
                <div style={{color:"#DF8441",fontWeight:"bold"}}> $30200</div>
                <div className="dashearn">All Earnings</div>

            </div>
            <div>$$</div>
          </div>
          <div className="dashcharge" style={{"backgroundColor":"#DF8441"}}>10%charge on profit</div>
        </div>
        <div className="dashup">
        <div className="dashupin">
            <div className="dashin">
                <div style={{color:"#D94E50",fontWeight:"bold"}}> $30200</div>
                <div className="dashearn">All Earnings</div>

            </div>
            <div>$$</div>
          </div>
          <div className="dashcharge" style={{"backgroundColor":"#D94E50"}}>10%charge on profit</div>
        </div>
        <div className="dashup">
        <div className="dashupin">
            <div className="dashin"> 
                <div style={{color:"#638E4C",fontWeight:"bold"}}> $30200</div>
                <div  className="dashearn">All Earnings</div>

            </div>
            <div>$$</div>
          </div>
          <div className="dashcharge" style={{"backgroundColor":"#638E4C"}}>10%charge on profit</div>
        </div>
        <div className="dashup">
        <div className="dashupin">
            <div className="dashin">
                <div style={{color:"#4B7AD1",fontWeight:"bold"}}> $30200</div>
                <div className="dashearn">All Earnings</div>

            </div>
            <div>$$</div>
          </div>
          <div className="dashcharge" style={{"backgroundColor":"#4B7AD1"}}>10%charge on profit</div>
        </div>
      </div>
      <div className="charts">
        <LineChart/>
        <DoughChart/>
        <BarChart/>
      </div>
      <Dashtable/>
      </div>
      <div>
           {cart}
           <button onClick={()=>dispatch(getApi())}>Purchase</button>
      </div>
    </>
  );
};
