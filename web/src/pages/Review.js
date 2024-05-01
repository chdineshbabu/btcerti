import React from 'react'
import { useNavigate } from 'react-router-dom';
import ReviewTable from '../components/ReviewTable'

function Review() {
  return (
    <div className='bg-primary min-h-screen flex text-center flex-col text-white'>
        <div>
        <p className='text-3xl font-extralight text-cusred m-4'>Review the data</p>
            <div>
            <p className=''>Check wheather missing values occure</p>
            </div>
        </div>
        <div className='w-[80%] mx-auto my-6'>
        <ReviewTable />
        </div>
    </div>
  )
}

export default Review