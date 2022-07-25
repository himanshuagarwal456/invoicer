import React from 'react'

export default function ClientDetails({name, address, admissionDate, dischargeDate, doctorName}) {
    console.log(typeof admissionDate)
    return (
    <>
        <section className='my-10'>
            <ul>
                <li className='m-1'><span className='font-bold'>Patient Name:</span> <span className='uppercase'>{name}</span></li>
                <li className='m-1'><span className='font-bold'>Address:</span> {address}</li>
                <li className='m-1'><span className='font-bold'>Date Of Admission:</span> {admissionDate ? (new Date(admissionDate).toLocaleString('en-UK').slice(0,10)): ""}</li>
                <li className='m-1'><span className='font-bold'>Date Of Discharge:</span> {dischargeDate ? (new Date(dischargeDate).toLocaleString('en-UK').slice(0,10)): ""}</li>
                <li className='m-1'><span className='font-bold'>Name of Doctor In-Charge:</span> {doctorName}</li>
            </ul>
            
        </section>
    </>
    )
}
