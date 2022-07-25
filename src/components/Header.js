export default function Header() {
    return (
      <>
        <header className='flex flex-col items-center justify-center mb-5'>
            <div>
                <h1 className='font-bold uppercase tracking-wide text-4xl'>
                    Agarwal Nursing Home
                </h1>
                <h1 className='flex items-center justify-center font-bold tracking-wide text-3xl'>
                    (Mother & Child Clinic)
                </h1>
                <h2 className='flex items-center justify-center font-bold tracking-wide text-xl mb-3'> 
                    Jai Om Nagar, Amroha
                </h2>
            </div>

            {/* <div>
                <ul className='flex items-center justify-between flex-wrap'>
                <li>
                    <button onClick={handlePrint} className='bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300'>
                        Print
                    </button>
                </li>
                <li className="mx-2">
                    <button className='bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'>
                        Download
                    </button>
                </li>
                <li>
                    <button className='bg-green-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300'>
                        Send
                    </button>
                </li>
                </ul>
            </div> */}
        </header>
      </>
    )
  }
  