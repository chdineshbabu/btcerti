import React, { useEffect, useRef, useState } from 'react'
import design1 from '../certificateDesigns/desing1.png'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import QRCode from "react-qr-code";
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas'

function Certificate() {
    const pdfRef = useRef();
    const downloadPdf =()=>{
        const input = pdfRef.current;
        html2canvas(input).then((canvas)=>{
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('l',"in",'a5',true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ration = Math.min(pdfWidth/imgWidth,pdfHeight/imgHeight);
            const imgX=(pdfWidth-imgWidth*ration);
            const imgY=0.5;
            pdf.addImage(imgData,'PNG',imgX,imgY,imgWidth*ration,imgHeight*ration);
            pdf.save('Certifacate.pdf')
        })
    }
    const url = window.location.href
    const { id } = useParams();
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const respones = await axios.post("http://localhost:3001/api/certificate", { id })
                setData(respones.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    console.log(data)
    return (
        <div className='bg-primary min-h-screen text-center flex text-white'>
            <div className='bg-primary  text-black w-[100%]' >
                <h1 className='p-4 text-4xl text-cusred font-serif font-semibold'>Your Certificate</h1>
                <div ref={pdfRef}>
                <img className='w-[90%] mx-auto shadow-2xl shadow-white' src={design1} alt='design1'></img>
                <div className='fixed top-[37%] left-[10%] w-[40%]'>
                    <p className='text-2xl '>{data.courseTitle}</p>
                    <p className='text-4xl m-6'>{data.studentName}</p>
                    <p className='font-extralight '>This certifies that the recipient has successfully fulfilled the requirements of the designated program. Presented with pride and congratulations on their achievement.</p>
                    <span className='flex text-center justify-center m-6 mb-0'><p>Date Issued</p>
                        <p>{data.issueDate}</p></span>
                    <p className='relative top-[100%] left-[31%]'>{data.certificateProvider}</p>
                    <div className='relative bottom-10'>
                    <QRCode
                        size={256}
                        style={{ height: "auto", maxWidth: "15%", width: "15%" }}
                        value={url}
                        viewBox={`0 0 256 256`}
                    />
                    <p className='text-xs opacity-50 bottom-0 relative'>Id:{data.certificateId}</p>
                    </div>
                    
                </div>
                </div>
            </div>
            <div className='w-[70%] flex flex-col justify-center items-center'>
                
                <div>
                    <h1 className='text-3xl font-semibold text-cusred p-4 pt-2 font-extralight'>Blockchain verified</h1>
                    <div className='text-start'>
                        <p className='text-xl font-semibold underline py-4 '>
                            Block Details:
                        </p>
                        <p><span className='text-cusred text-lg font-medium '>Issued Date:<br/></span> {data.issueDate}</p>
                        <p><span className='text-cusred text-lg font-medium '>transactionHash:<br/></span>{data.transactionHash}</p>
                        <p><span className='text-cusred text-lg font-medium '>blockHash:<br/></span>{data.blockHash}</p>
                        <p><span className='text-cusred text-lg font-medium '>blockNumber:<br/></span>{data.blockNumber}</p>
                        <p><span className='text-cusred text-lg font-medium '>from:<br/></span>{data.from}</p>
                    </div>

                </div>
                <button className='bg-cusred p-2  m-6 rounded-lg text-white' onClick={downloadPdf}>
                    Download Certificate
                </button>
            </div>
        </div>
    )
}

export default Certificate