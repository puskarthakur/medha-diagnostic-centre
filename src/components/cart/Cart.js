
// import React, { useRef } from "react";
import Orderdetails from "../order/Orderdetails";
// import Appointment from './Appointment'
import Stepper from '../stepper/Stepper'
import Button from '@mui/material/Button';
import { useState } from "react";
import './Cart.css'

export default function Cart() {
  const [trigger, setTrigger] = useState({name: '',
  salary: 0,
});
    return (
        <div  style={{ marginTop: '160px', paddingBottom: "100px" }}>
          {/* <Stepper trigger={trigger}></Stepper> */}
      <Orderdetails></Orderdetails>
      <div className="footer">
      <div>
          <Button variant="outlined" className="footer-buttons"  >Add More Tests</Button>
                    <Button variant="outlined"  className="footer-buttons" onClick={() => { setTrigger({name: 'Next', salary: trigger.salary + 1})}}>Next</Button>
                    <Button variant="outlined"  className="footer-buttons" onClick={() => { setTrigger({name: 'Back', salary: trigger.salary - 1})}}>Back</Button>

      </div>
    
      </div>
 
        </div>
    )
}