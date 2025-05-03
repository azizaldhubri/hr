import { useState, useEffect } from "react";
import { Axios } from "../../Api/axios";
import Table_documents from "../../Component/Dashboard/Table_document"; 
import { Form , Col } from "react-bootstrap"; 
import Select from 'react-select';
import HistoryDate from "../../Component/Dashboard/History";
import NavHeader from "../../Component/Dashboard/NavHeader";

export default function ViewDeduction(){      
 
     const[page,setPage]=useState(1)
     const[limit,setLimit]=useState(3)   
    const [data, setData] = useState([]);
 

    //-=========================
    const [employees, setEmployees] = useState([]);
    const [employeeId, setEmployeeId] = useState("");
    
        useEffect(() => {        
            fetchEmployees();
        }, []);
        
        const fetchEmployees = async () => {
            try{ 
            const response = await Axios.get("users");
            setEmployees(response.data.data.data);
            }
            catch(err){console.log(err)}
        };
   
     
      const handleSelectEmployee = (selected) => {
        setEmployeeId(selected.value); // تحديث الحالة بالقيمة المحددة
      };
    
      const options =employees && employees.map(item => ({
        value: item.id,
        label: item.name
      }));
     
    

      const customStyles = {
        container: (provided) => ({
          ...provided,
          fontSize: '22px',
          minWidth: '200px', 
           borderLeft: '5px solid green',  
          borderRight: '5px solid green',  
          borderTop: '2px solid gray',            
          borderBottom: '2px solid gray',        
          boxShadow: 'none',         
        }),
        menu: (provided) => ({
          ...provided,      
          fontSize: '19px',
          zIndex: 9999,  // لتحديد قيمة z-index        
        }),
        menuList: (provided) => ({
          ...provided,
          maxHeight: '200px', // تحديد الحد الأقصى لارتفاع القائمة
          overflowY: 'auto',  // تفعيل التمرير إذا تجاوزت القائمة الحد الأقصى
        }),         
      };
      //==============================date
      
         const [startDate, setStartDate] = useState(new Date()); 
         const [endDate, setEndDate] = useState(new Date()); 
      
              function handleStart_date(value) {
                setStartDate(value);      
              };
              function handleEnd_date(value) {
                setEndDate(value);      
              };

      //----------------------------------------------
     
    const header=[          
        {    key:'amount',
            name:'المبلغ'
        },
        {
            key:'deduction_type',
            name:'السبب'
        },
        {
            key:'effective_date',
            name:'التاريخ'
        },   
     ]
    const header2=[          
        {    key:'deduction_amount',
            name:'المبلغ'
        },
        {
            key: 'absence_type' ,
            name:'نوع الغياب '
        },
        {
            key:'absence_date',
            name:'التاريخ'
        },   
     ]

 

     const handleSubmit = async (e) => {  
        // e.preventDefault();        
            try{                
            
             await Axios.get(`employee/${employeeId}/deductions?start_date=${startDate}&end_date=${endDate}`)
             .then((data) => { setData(data.data) ;
              console.log(data.data)                     
                             })            
        }      
        catch(err){console.log(err)  }
    };

  const links=[
      {name:'عرض الخصومات',
       link:'#'}, ]
    return (
      
        <div className="container mt-2">
      <NavHeader nav={links}  />  
          <div className="    w-100    fs-5 col-12 col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center gap-lg-4 align-items-center justify-content-center  flex-wrap">                                     
            <Form.Group   className="d-flex  col-lg-5 col-md-6 col-sm-11  col-12   p-2 flex-wrap align-items-center justify-content-center  " >
                 <Form.Label  className="  col-6 col-lg-3 col-md-6 col-sm-4 m-0   "   > اختر موظف </Form.Label>
                     <Col lg={9} sm={8} xs={12} md={12} >
                          <Select                          
                              options={options}                             
                              value={employeeId !=null ? employeeId.label  :'اختر موظف '}
                              name="employeeId"                            
                            onChange={handleSelectEmployee}
                              placeholder="اختر موظف "
                            styles={customStyles}   
                            required
                          >                    
                       </Select>                        
                     </Col>
            </Form.Group> 
            <Form.Group  
             className="d-flex  col-lg-5 col-md-6 col-sm-11  col-12  p-2
              flex-wrap align-items-center justify-content-center 
                " style={{zIndex:'1' }}>
                    <Form.Label  className="  col-6 col-lg-3 col-md-6 col-sm-4 m-0  "   >  من تاريخ </Form.Label>
                    <Col lg={9} sm={8} xs={12} md={12} >
                                <HistoryDate
                                name="startDate"
                                value={startDate}
                                date={startDate}                               
                                onChange={(e)=>setStartDate(e.target.value)}
                               setSelectDate={handleStart_date}
                                    />      
                    </Col>
             </Form.Group>

              <Form.Group 
               style={{zIndex:'0' }}
                className="d-flex  col-lg-5 col-md-6 col-sm-11  col-12  p-2 flex-wrap align-items-center justify-content-center  " >
                    <Form.Label  className="  col-6 col-lg-3 col-md-6 col-sm-4 m-0  "   >  الى تاريخ </Form.Label>
                    <Col lg={9} sm={8} xs={12} md={12} >
                                <HistoryDate
                                name="endDate"
                                value={endDate}
                                date={endDate}                               
                                onChange={(e)=>setEndDate(e.target.value)}
                               setSelectDate={handleEnd_date}
                                    />      
                    </Col>
             </Form.Group>  
             </div>
             <button  className="   px-4 py-2 rounded" onClick={handleSubmit}>بحث</button>
           
            <div className="mt-0   p-2 "style={{ }}> 
                <h3>الخصومات</h3>                         
                                      
                              <Table_documents
                                   limit={limit}
                              setLimit={setLimit}
                              page={page}
                               header={header}
                               data={data.deductions}                      
                                setPage={setPage}
                                loading= {false}
                                edit='users'
                                total='0'
                                search='name'                         
                                   role=''
                                /> 
              <h3 className="mt-3 mb-3">اجمالي الخصومات :{data.totalDeductions?  data.totalDeductions:0}</h3>                    
            </div>
             
            <div className="mt-0   p-2 "style={{ }}> 
                <h3> خصومات الغياب</h3>                         
                                      
                              <Table_documents
                                   limit={limit}
                              setLimit={setLimit}
                              page={page}
                               header={header2}
                               data={data.absences}                      
                                setPage={setPage}
                                loading= {false}
                                edit='users'
                                total={0}
                                search='name'                         
                                   role=''
                                /> 
              <h3 className="mt-3 mb-3">اجمالي خصومات الغياب:{data.totalAbsences?  data.totalAbsences:0}</h3>                    
            </div>
             
    
        </div>
    );
    
    };
    
     
    
