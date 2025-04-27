import { Link } from "react-router-dom";
import EmployeeChart from "./Users/EmployeeChart ";
import { WindowSize } from "../Component/Context/WindowContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function HomewebSite(){
    const window_Size=useContext(WindowSize);
    const windowsize=window_Size.windowSize ;  
     
    return(
        <div className="w-100  d-flex  justify-content-center ">
            <div className=" w-75 d-flex align-items-start justify-content-between flex-wrap fs-3 mt-3  ">
                <Link to='users'>الموظفين
                  {/* <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> */}
                 </Link>
                <Link to='Departments'>الاقسام
                  {/* <FontAwesomeIcon icon={faDepart}></FontAwesomeIcon> */}
                
                </Link>
                <Link to='Leaves'>الاجازات</Link>
                <Link to='payrolls'>المرتبات</Link>
                {windowsize>525 &&
                  <div className="w-100 m-3   " style={{height:'60vh'}}>
                  <EmployeeChart/>
                  </div>
                }
              

            </div>
        </div>
    )
}