import { useState, useRef, useEffect } from 'react';
import Header from './components/Header.js';
import Notes from './components/Notes.js';
import Footer from './components/Footer.js';
import Table from './components/Table.js';
import ClientDetails from './components/ClientDetails.js';
import Dates from './components/Dates.js';
import TableForm from './components/TableForm.js';
import ReactToPrint from 'react-to-print';

function App() {
  const [showInvoice, setShowInvoice] = useState(false)
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState(localStorage.getItem("fixedInvoiceNumber"))
  const [admissionDate, setAdmissionDate] = useState("")
  const [dischargeDate, setDischargeDate] = useState("")
  const [doctorName, setDoctorName] = useState("Dr. Shafali Agarwal")
  const [notes, setNotes] = useState("")
  const [description, setDescription] = useState("Room Rent (Per Day)")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [amount, setAmount] = useState("")
  const [list, setList] = useState([])
  const [total, setTotal] = useState(0)

  const componentRef = useRef()

  useEffect(() => {
    let temporaryInvoiceNumber = localStorage.getItem("fixedInvoiceNumber");
    temporaryInvoiceNumber++;
    localStorage.setItem("fixedInvoiceNumber", temporaryInvoiceNumber);
  }, [])

  return (
    <>
      <main className='m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white ronded shadow'>
      {showInvoice ?  (
        <>
          <ReactToPrint 
            trigger={() => <button
                            className='ml-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'
                          >
                              Print/Download
                            </button>} 
            content ={() => componentRef.current}
          />
          <div ref={componentRef} className='p-5'>

            <Header/>

            <Dates invoiceNumber={invoiceNumber} />

            <ClientDetails name={name} address={address} admissionDate={admissionDate} dischargeDate={dischargeDate} doctorName={doctorName} />

            <Table list={list} total = {total} />

            <Notes notes={notes}/>

            <Footer 
              name={name} 
              phone={phone}
            />
            </div> 

            <button 
              onClick={() => setShowInvoice(false)}
              className='mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'> 
              Edit Information
            </button>

            </>
          ): (
            <>
            {/* name, address, email, phone, bank name, bank account number, client name, client address, invoice number, invoice date, due date, notes */}
            <div className='flex flex-col justify-center'>

              <article className='md:grid grid-cols-2 gap-10'>
                <div className='flex flex-col'>
                  <label htmlFor='name'>Enter Patient's Name</label>
                  <input 
                    type ='text' 
                    name='text' 
                    id='name' 
                    placeholder="Patient's Name" 
                    autoComplete='off'
                    value = {name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className='flex flex-col'>
                  <label htmlFor='phone'>Enter phone number</label>
                  <input 
                    type ='text' 
                    name='phone' 
                    id='phone' 
                    placeholder='Phone Number' 
                    autoComplete='off'
                    value = {phone}
                    onChange={(e) => {
                      return setPhone(e.target.value);
                    }}
                  />
                </div>
              </article>

              <div className='flex flex-col'>
                  <label htmlFor='address'>Enter Address</label>
                  <input 
                    type ='text' 
                    name='text' 
                    id='address' 
                    placeholder='Address' 
                    autoComplete='off'
                    value = {address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

              <article className='md:grid grid-cols-2 gap-10'>

                <div className='flex flex-col'>
                  <label htmlFor='admissionDate'>Enter date of admission</label>
                  <input 
                    type ='date' 
                    name='admissionDate' 
                    id='admissionDate' 
                    placeholder="date of admission" 
                    autoComplete='off'
                    value = {admissionDate}
                    onChange={(e) => {
                      return setAdmissionDate(e.target.value);
                    }}
                  />
                </div>

                <div className='flex flex-col'>
                  <label htmlFor='dischargeDate'>Enter date of discharge</label>
                  <input 
                    type ='date' 
                    name='dischargeDate' 
                    id='dischargeDate' 
                    placeholder="discharge date" 
                    autoComplete='off'
                    value = {dischargeDate}
                    onChange={(e) => {
                      return setDischargeDate(e.target.value);
                    }}
                  />
                </div>
              </article>

              <div className='flex flex-col'>
                  <label htmlFor='doctorName'>Enter name of Doctor In-Charge</label>
                  <select 
                    type ='text' 
                    name='doctorName' 
                    id='doctorName' 
                    placeholder="Doctor's Name" 
                    autoComplete='off'
                    value = {doctorName}
                    onChange={(e) => {
                      return setDoctorName(e.target.value);
                    }}
                  >
                    <option value="Dr. Shafali Agarwal">Dr. Shafali Agarwal</option>
                    <option value="Dr. Vivek Agarwal">Dr. Vivek Agarwal</option>
                  </select>
                </div>

              {/* Table Form*/}
              <article>
                <TableForm 
                  description={description} setDescription={setDescription}
                  quantity={quantity} setQuantity={setQuantity}
                  price={price} setPrice={setPrice}
                  amount={amount} setAmount={setAmount}
                  list={list} setList={setList}
                  total = {total} setTotal={setTotal}
                />
              </article>

              <label htmlFor='notes'>Additional Notes</label>
              <textarea 
                name = 'notes'
                id='notes'
                cols='30'
                rows='10'
                placeholder='Additonal Notes to the client'
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            
              <button onClick = { 
                () => setShowInvoice(true)
                } 
                className='bg-blue-500 text-white 
                font-bold py-2 px-8 rounded shadow border-2 
                border-blue-500 hover:bg-transparent hover:text-blue-500 
                transition-all duration-300'>
                Preview Invoice
              </button>
          
            </div>
            </>
        
      )}

      </main>
    </>
  );
}

export default App;
