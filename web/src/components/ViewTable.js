import React from 'react'
import jsonData from '../data/genData.json'

function ViewTable() {
    return (
        <div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Student Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Issued Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Student Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Certificate Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Certificate Link
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {jsonData.map((student, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {student.studentName}
                                </td>
                                <td className="px-6 py-4">
                                    {student.issuedDate}
                                </td>
                                <td className="px-6 py-4">
                                    {student.studentEmail}
                                </td>
                                <td className="px-6 py-4">
                                    {student.certificateId}
                                </td>
                                <td className="px-6 py-4">
                                    {student.RoutecertificateId}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ViewTable