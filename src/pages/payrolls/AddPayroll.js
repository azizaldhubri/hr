 

import { useEffect, useState } from "react";
import { Axios } from "../../Api/axios";
import { Form , Col } from "react-bootstrap"; 
import Select from 'react-select';

 
const AddPayroll = () => {
    const [employees, setEmployees] = useState([]);
    const [employeeId, setEmployeeId] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

      useEffect(() => {        
            fetchEmployees();
        }, []);
        
        const fetchEmployees = async () => {
            try{ 
            const response = await Axios.get("users");
            setEmployees(response.data.data);
            }
            catch(err){console.log(err)}
        };

    const addPayroll = async () => {
        try {
          const res=   await Axios.post("store-payroll", {
                employee_id: employeeId,
                month: month,
                year: year
            });
            console.log(res.data)
            alert("تم تسجيل الراتب بنجاح!");
        } catch (error) {
            console.error("خطأ أثناء تسجيل الراتب", error);
        }
    };
    const options =employees && employees.map(item => ({
        value: item.id,
        label: item.name
      }));
     
      const handleChange = (selected) => {
        setEmployeeId(selected.value); // تحديث الحالة بالقيمة المحددة
      };
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

    return (
        <div>
            <h2>إضافة راتب جديد</h2>
            <Form.Group   className="d-flex  col-lg-5 col-md-6 col-sm-11  col-12   p-2 flex-wrap align-items-center justify-content-center  " >
                 <Form.Label  className="  col-6 col-lg-3 col-md-6 col-sm-4 m-0   "   > اختر موظف </Form.Label>
                     <Col lg={9} sm={8} xs={12} md={12} >
                          <Select                       
                              options={options}                             
                              value={employeeId !=null ? employeeId.label  :'اختر موظف '}
                              name="employeeId"                            
                            onChange={handleChange}
                              placeholder="اختر موظف "
                            styles={customStyles}                             
                            required
                          >                    
                       </Select>                        
                     </Col>
            </Form.Group>  
           

            <div className="    w-100    fs-5 col-12 col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center gap-lg-4 align-items-center justify-content-center  flex-wrap">            
                <Form.Group   className="d-flex  col-lg-5 col-md-6 col-sm-11  col-12  p-2 flex-wrap align-items-center justify-content-center  " >
                        <Form.Label  className="  col-6 col-lg-3 col-md-6 col-sm-4 m-0  "   > الشهر  </Form.Label>
                        <Col lg={9} sm={8} xs={12} md={12} >
                        <Form.Control className='w-100   '
                            type="number"
                            placeholder="الشهر  "
                            onChange={(e) => setMonth(e.target.value)}                              
                                    > 
                        </Form.Control>   
                        </Col>
                 </Form.Group> 
                <Form.Group   className="d-flex  col-lg-5 col-md-6 col-sm-11  col-12  p-2 flex-wrap align-items-center justify-content-center  " >
                        <Form.Label  className="  col-6 col-lg-3 col-md-6 col-sm-4 m-0  "   > السنة  </Form.Label>
                        <Col lg={9} sm={8} xs={12} md={12} >
                        <Form.Control className='w-100   '
                            type="number"
                            placeholder="السنة  "
                            onChange={(e) => setYear(e.target.value)}                              
                                    > 
                        </Form.Control>   
                        </Col>
                 </Form.Group> 
             <button className="btn btn-primary" onClick={addPayroll}>إضافة الراتب</button>
            
            </div> 
        </div>
    );
};

export default AddPayroll;