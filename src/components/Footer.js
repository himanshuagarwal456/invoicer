import React from 'react'

export default function Footer({name, website, email, phone, bankAccount, bankName}) {
  return (
    <>
    <footer className='footer border-t-2 border-gray-300 pt-5'>
        <span className='mt-14 flex items-end justify-end font-bold'>Doctor's Signature</span>
      </footer>
    </>
  )
}
