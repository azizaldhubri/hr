 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Dashboard from './pages/Dashboard';
import AddUser from './pages/Users/AddUser';
import './index.css'
import Users from './pages/Users/users'; 
import AddDepartment from './pages/Department/AddDepartment';
import Department from './pages/Department/Departments';
import Salaries from './pages/Users/Salaries'; 
import AddDocument from './pages/Documents/AddDocument';
import LeavesManegment from './pages/Leaves/LeavesManegment';
import Homepage from './pages/Home/HomePage';
import Login from './pages/Auth/Login'; 
import Error403 from './pages/Auth/403';   
import UserUpdate from './pages/Users/UserUpdate';
import Role from './pages/Setting/Role';
import RoleUpdate from './pages/Setting/RoleUpdate';
import ProtectedRoute from './pages/Auth/ProtectedRoute ';
import DepartmentUpdate from './pages/Department/DepartmentUpdate';
import LeavesType from './pages/Leaves/LeavesType';
import AddLeaves from './pages/Leaves/AddLeaves'; 
import LeaveBalancesTable from './pages/Leaves/LeaveBalances';
import EmployeesOnLeave from './pages/Leaves/Leaves';
import LeavesTypeUpdate from './pages/Leaves/LeavesTypeUpdate';
import HomewebSite from './pages/HomewebSite';
import Payrolls from './pages/payrolls/payrolls';
import AddPayroll from './pages/payrolls/AddPayroll';
import Deductions from './pages/payrolls/Deductions';
import Allowances from './pages/payrolls/Allowances';
import ViewDeduction from './pages/payrolls/ViewDeduction';
import ViewAllowances from './pages/payrolls/ViewAllowances';
import Documents from './pages/Documents/Documents';
import UpdateDocument from './pages/Documents/UpdateDocument';
import OrderDocument from './pages/Documents/OrderDocuments';
import DocumentShow from './pages/Documents/DocumentShow';
import Add_Order_Document from './pages/Documents/Add_Order_Document';
import Taskes1 from './pages/Taskes/Taskes1';
import AddTaskes from './pages/Taskes/AddTask'; 
// import EmployeeChart from './pages/Users/EmployeeChart ';
import Register from './pages/Auth/Register';
import Home from './pages/HomeWebSite2';
 
  
 

function App() {
  return (
    <div className='border  body w-100   ' style={{width:'100%'   }}>
        <Router>
        <Routes>

        <Route path='/' element={<Homepage/>}> </Route>       
         
        {/* <Route element={<RequirBack/>}>    */}
            <Route path='/login' element={<Login/>}> </Route>                   
            <Route path='/Register' element={<Register/>}> </Route>
          
        {/* </Route> */}
        {/* <Route path='/auth/google/callback' element={<GOOGLE_CALL_BACK/>}></Route> */}
        <Route path='/*' element={<Error403/>}></Route>      
            <Route   element={<ProtectedRoute permission="dashboard" /> } >  
                <Route path='/dashboard' element={<Dashboard />}>
                      {/* <Route path='/dashboard' element={<HomewebSite/>}></Route>               */}
                      <Route path='/dashboard' element={<Home/>}></Route>              

                      <Route path='users' element={<Users />}></Route>
                      <Route path='users/:id' element={<UserUpdate />}></Route>
                      <Route path='adduser' element={<AddUser />}></Route>                      
                      <Route path='Salaries' element={<Salaries />}></Route>                    
                      {/* <Route path='EmployeeChart' element={<EmployeeChart />}></Route> */}
                                                                      
                                                                  
                      <Route   element={<ProtectedRoute permission="إدارة الإجازات" /> } >
                          <Route path='Leaves' element={<EmployeesOnLeave />}></Route>           
                          <Route path='AddLeaves' element={<AddLeaves />}></Route>
                          <Route path='LeavesType' element={<LeavesType />}></Route>
                          <Route path='LeavesType/:id' element={<LeavesTypeUpdate />}></Route>
                          <Route path='LeaveBalancesTable' element={<LeaveBalancesTable />}></Route>
                          <Route path='LeavesManegment' element={<LeavesManegment />}></Route>
                      </Route>
                  

                        {/* إدارة الاقسام */}
                        <Route   element={<ProtectedRoute permission="إدارة الاقسام" /> } >  
                            <Route path='departments' element={<Department />}></Route>
                            <Route path='departments/:id' element={<DepartmentUpdate />}></Route>
                            <Route path='AddDepartment' element={<AddDepartment />}></Route>
                            <Route path='AddDocument' element={<AddDocument />}></Route>            
                        </Route>

                        <Route   element={<ProtectedRoute permission="إدارة المرتبات" /> } >  
                            <Route path='payrolls' element={<Payrolls />}></Route>
                            <Route path='Deductions' element={<Deductions/>}></Route>
                            <Route path='Allowances' element={<Allowances/>}></Route>
                            <Route path='AddPayroll' element={<AddPayroll />}></Route>
                            <Route path='ViewDeduction' element={<ViewDeduction />}></Route>
                            <Route path='ViewAllowances' element={<ViewAllowances />}></Route>
                                               
                      </Route>

                    
                        <Route   element={<ProtectedRoute permission="الصلاحيات" /> } >  
                            <Route path='Role' element={<Role /> }></Route>
                            <Route path='Role/RoleUpdate/:id' element={<RoleUpdate/>}></Route>
                      </Route>

                         {/* //----------------------المهام------- */}
                  <Route element={  <ProtectedRoute permission="مهام الإدارات" /> }>    
                     <Route path='Taskes1' element={<Taskes1/>}></Route>     
                      <Route path='addTask' element={<AddTaskes/>}></Route>                                     
                      {/* <Route path='taskes1/:id' element={<ChiledTask/>}></Route>     */}
                       {/* <Route path='Taskes1' element={<Taskes1/>}></Route>                 */}
                          
                  </Route>  

           

                                            
              {/* //     documents    */} 
               <Route element={  <ProtectedRoute permission="المستندات" />} >           
                <Route path='documents' element={<Documents/>}  ></Route> 
                 <Route path='AddDocument' element={<AddDocument/>} ></Route> 
                <Route path='UpdateDocument/:id' element={<UpdateDocument/>} ></Route>            
                <Route path='DocumentShow/:id' element={<DocumentShow/>}  ></Route>            
                <Route path='OrderDocument' element={<OrderDocument/>}  ></Route>            
                <Route path='AddOrderDocument' element={<Add_Order_Document/>}  ></Route>            
                 
                 </Route> 
           

             
            </Route>
            </Route>
       
          
          
        
          {/* <Route path="/employees" element={< EmployeeManagement />} /> */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
