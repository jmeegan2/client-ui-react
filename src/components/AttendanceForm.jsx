import React from 'react';

const AttendanceForm = () => {
// put logic here 
const initialValues = { 
    studentId: 0,
    firstName: '',
    lastName: '',
}

return ( 
    <>
    <section>
        <h1>Attendance</h1>
        <p>PLease enter your information and check in.</p>
    </section>
    <section className='form' >
        <form>
            <div className='mb-3'>
                <label htmlFor="">TU ID#</label>
                <input className='form-control' type="number" maxLength={7}
                name='studentId' id='studentId' />
            </div>
            <div className='mb-3'>
                <label htmlFor="">First Name</label>
                <input className='form-control' type="text" name='firstName' id='firstName' />
            </div>
            <div className='mb-3'>
                <label htmlFor="">Last Name</label>
                <input className='form-control' type="text" name='lastName' id='lastName' />
            </div>
            <div className='mb-3'>
              <button className='btn btn-primary'>Check In Present</button>
            </div>
            <div></div>
        </form>
    </section>
    </>
)
}

export default AttendanceForm;