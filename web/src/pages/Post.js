import React from 'react'
import ViewTable from '../components/ViewTable'

function Post() {
  return (
    <div className='bg-primary text-white text-center min-h-screen'>
        <div>
        <p className='text-4xl p-6 text-cusred font-extralight'>Generated Certificates</p>
            <div className='w-[80%] mx-auto'>
            <ViewTable />
            </div>
            <button className='bg-cusred p-2 m-6 rounded-lg text-white '>
                Download as Excel
            </button>
        </div>
    </div>
  )
}

export default Post