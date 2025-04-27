import { useEffect, useState } from "react";
import { Axios } from "../../Api/axios";
import Table_documents from "../../Component/Dashboard/Table_document";
import TableShow from "../../Component/Dashboard/Table";
import { Link } from "react-router-dom";

export default function Payrolls(){
    const [payrolls, setPayrolls] = useState([]);
    const[page,setPage]=useState(1)
    const[limit,setLimit]=useState(3)
    const[loading,setLoading]=useState(false)
    const[total,setTotal]=useState(0);
    const[role,setRole]=useState('');
 
 

    useEffect(() => {
        fetchPayrolls();
        getAllPayrolls();
        // fetchEmployees();
    }, [limit]);

    const fetchPayrolls = async () => {         
        try{ const response = await Axios.get(`payrolls? limit=${limit}&page=${page}`);
            setPayrolls(response.data.data);  
            // console.log(response.data.data)         
        }
        catch(err){console.log(err)}
       
    };

    /// دالة لحساب الخصومات والبدلات من المرتب قبل عرض المرتب
    const getAllPayrolls = async () => {
         
        try{ await Axios.post("process_payroll")
            // .then(data=> console.log(data.data));            
            // alert('تم تحديث رواتب كل الموظفين')
            // fetchPayrolls();
        }
        catch(err){console.log(err)}
       
    };

 
    const header=[
          
        {             
            key:'employee_name',
            name:'الاسم  '            
        },
      
        {
            key:'basic_salary',
            name:'الراتب الأساسي',
           
        },
        {
            key:'total_allowances',
            name:'البدلات'
        },
        {
            key:'total_deductions',
            name:'الخصومات'
        },
        {
            key:'net_salary',
            name:'الراتب الصافي'
        },
        {
            key:'month',
            name:'مرتب شهر  '
        },
        
 
     ]
  

    

    return (
        <div className="container">
            <div className="d-flex gap-5">
                <h2>عرض المرتبات</h2> 
                <Link to='/dashboard'>رجوع</Link>
                
                {/* <button className="btn btn-primary" onClick={getAllPayrolls}>نحديث رواتب الموظفين</button>     */}
            </div>
            
             <div className="mt-0   p-2 "style={{ }}>
                              
                {/* <Table_documents
                    limit={limit}
                setLimit={setLimit}
                page={page}
                header={header}
                data={payrolls}
                // currentUser={currentUser}
                // delete ={handleDelet}
                setPage={setPage}
                loading={loading}
                edit=''
                total={0}
                search='name'
                //   Linksearch={USER}
                //   createTask={createTask}
                    role= ''
                /> */}
                <TableShow
                limit={limit}
                setLimit={setLimit}
                page={page}
                header={header}
                data={payrolls}
                // currentUser={currentUser}
                // delete ={handleDelet}
                setPage={setPage}
                loading={loading}
                edit=''
                total={0}
                search='name'
                  Linksearch={payrolls}
                //   createTask={createTask}
                    role= ''>

                </TableShow>
                
        
             </div>               

        </div>
    );
}