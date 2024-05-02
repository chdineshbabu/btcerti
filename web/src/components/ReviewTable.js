import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReviewTable() {
    const [data, setData] = useState(null);
    const [verifyData, setVerifyData] = useState(null);
    const baseURL = 'http://localhost:3001/api/verify';

    const fetchVerifyData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/verifyRec');
            setVerifyData(response.data);
        } catch (error) {
            console.error('Error fetching verification data:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(baseURL);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
        fetchVerifyData();
    }, []);
    const verifyCertificate = async (studentName, enrolledDate, courseTitle, studentEmail, certificateProvider) => {
        try {
            const response = await axios.post('http://localhost:3001/api/generate', {
                studentName,
                enrolledDate,
                courseTitle,
                studentEmail,
                certificateProvider
            });
            console.log('Certificate verification response:', response.data);
        } catch (error) {
            console.error('Error generating certificate:', error);
        }
    };

    return (
        <div>
            {!data ? (
                <p>Loading...</p>
            ) : (
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Student Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Enrolled Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Course Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Student Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Certificate Provider
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((student, index) => {
                                const matchingVerifyData = verifyData && verifyData.find(record => record.studentEmail === student.studentEmail);
                                const certificateId = matchingVerifyData ? matchingVerifyData.certificateId : null;


                                return (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {student.studentName}
                                        </td>
                                        <td className="px-6 py-4">
                                            {student.enrolledDate}
                                        </td>
                                        <td className="px-6 py-4">
                                            {student.courseTitle}
                                        </td>
                                        <td className="px-6 py-4">
                                            {student.studentEmail}
                                        </td>
                                        <td className="px-6 py-4">
                                            {student.certificateProvider}
                                        </td>
                                        <td className="px-6 py-4">
                                            {certificateId ? (
                                                <a href={`certificate/` + certificateId} className="text-blue-500 hover:underline">
                                                    View Certificate
                                                </a>
                                            ) : (
                                                <button
                                                    onClick={() =>
                                                        verifyCertificate(
                                                            student.studentName,
                                                            student.enrolledDate,
                                                            student.courseTitle,
                                                            student.studentEmail,
                                                            student.certificateProvider
                                                        )
                                                    }
                                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                >
                                                    Verify
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default ReviewTable;
