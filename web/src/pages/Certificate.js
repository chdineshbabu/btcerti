import React from 'react'
import design1 from '../certificateDesigns/desing1.png'

function Certificate() {
    return (
        <div className='bg-primary min-h-screen text-center flex text-white'>
            <div className='bg-secondary text-black w-[100%]'>
                <h1 className='p-4 text-2xl '>Certificate</h1>
                <img className='w-[90%] mx-auto' src={design1} alt='design1'></img>
                <div className='fixed top-[37%] left-[10%] w-[40%]'>
                    <p className='text-2xl '>Blockchain Masterclass</p>
                    <p className='text-4xl m-6'>Dinesh babu</p>
                    <p className='font-extralight '>This certifies that the recipient has successfully fulfilled the requirements of the designated program. Presented with pride and congratulations on their achievement.</p>
                    <span className='flex text-center justify-center m-6 mb-0'><p>Date Issued</p>
                        <p>01/09/2024</p></span>
                    <p className='relative left-[33%]'>Vijayraj</p>
                </div>
            </div>
            <div className='w-[70%] flex flex-col justify-center items-center'>
                <button className='bg-cusred p-2 m-6 rounded-lg text-white'>
                    Download Certificate
                </button>
                <div>
                    <h1 className='text-2xl p-8 pt-2 font-extralight'>Blockchain verified</h1>
                    <div className='text-start'>
                        <p className='text-xl font-semibold underline'>
                            Block Details:
                        </p>
                        <p><span className='text-cusred '>Issued Date:</span> {Date}</p>
                        <p><span className='text-cusred '>transactionHash</span>:0xe9a2dae7a1a9595a11e0ca704eaaa758e7a5a0a8841a057fc86b7664d2697ff6</p>
                        <p><span className='text-cusred '>blockHash</span>:0x88f7dae9dd1f062d6ba9bb4c71ea727ef5c998cb06a6cff678b353a7da52d12a</p>
                        <p><span className='text-cusred '>blockNumber</span>:4883048</p>
                        <p><span className='text-cusred '>from:</span>0xc7229e45ddbb7a7f93765bc065582f1192cf4e50</p>
                    </div>

                </div> 
            </div>
        </div>
    )
}

export default Certificate