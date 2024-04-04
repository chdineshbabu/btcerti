import React from 'react';

function Home() {
    return (
        <div className='bg-primary min-h-screen flex flex-col justify-center text-center '>
            <div className='text-4xl m-12 mb-4 font-extralight text-cusred'>
                Generate blockchain based Certificates
            </div>
            <p className='m-4 text-white'>Upload the Excel (xlsx) file with data.</p>
            <div>
                <div className="flex items-center justify-center">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full max-w-lg h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">xlsx</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                </div>
            </div>
            <div className='flex justify-center m-6 '>
                <p className='mx-6 text-white'>
                    The file must contain:</p>


                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-[20%] text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">

                        <tbody>
                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    studentName
                                </th>
                            </tr>
                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    enrolledDate
                                </th>
                            </tr>
                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    courseTitle
                                </th>

                            </tr>
                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    studentEmail
                                </th>

                            </tr>
                            <tr>
                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    CertificateProvider
                                </th>

                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>
            <div className='fixed top-12 right-8'>
                <button className='bg-cusred p-2 rounded-lg text-white '>
                    Connect to wallet
                </button>
            </div>
        </div>
    );
}

export default Home;
