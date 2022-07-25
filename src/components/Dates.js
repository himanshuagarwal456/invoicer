import React from 'react'

export default function Dates({invoiceNumber}) {
  return (
    <>
        <article className='my-10 flex items-end justify-end'>
            <ul>
                <li className='p-1'>
                    <span className='font-bold'>Invoice number:</span> {invoiceNumber}
                </li>
                <li className='p-1'>
                    <span className='font-bold'>Invoice date:</span> {new Date().toLocaleString('en-UK').slice(0,10)}
                </li>
            </ul>
        </article>
    </>
  )
}
