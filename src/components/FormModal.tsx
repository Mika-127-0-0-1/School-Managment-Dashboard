"use client";

import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), { 
    loading: () => <h1>Loading...</h1>});
    // Lazy booting loading...
const StudentForm = dynamic(() => import("./forms/StudentForm"), { 
    loading: () => <h1>Loading...</h1> });

const forms:{
    [key: string]:(type: "create" | "update", data?: any) => JSX.Element;
} = {
    teacher: (type, data) => <TeacherForm type={type} data={data}/>,
    student: (type, data) => <StudentForm type={type} data={data}/>,
}

const FormModal = ({
    table,
    type,
    data,
    id
}: {
    table: 
    | "teacher" 
    | "student" 
    | "parent" 
    | "subject" 
    | "class" 
    | "lesson" 
    | "exam" 
    | "assignment" 
    | "result" 
    | "attendance" 
    | "event"
    | "announcement";
    type: "create" | "update" | "delete";
    data?: any;
    id?: number; 
}) => {

    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const bgColor = type === "create" ? "bg-holmsYellow" : type === "update" ? "bg-holmsSky" : "bg-holmsPurple";

    const [open, setOpen] = useState(false);

    const Form = () => {
        return type === "delete" && id ? (
        <form action="" className="p-4 flex flex-col gap-4">
            <span className='text-center font-medium'>All data will be lost. Are you sure you want to delete this {table}?</span>
            <button className='bg-red-700 text-white px-4 py-2 rounded-md border-none w-max self-center'>Delete</button>
        </form>
        ) : type === "create" || type === "update" ?(
            forms[table](type, data)
        ) : (
            "Form not found!"
        );
    };

  return (
    <>
        <button className={`flex items-center justify-center rounded-full ${size} ${bgColor}`} 
        onClick={() => setOpen(!open)}>
        {/* onClick={() => setOpen(true)}> */}
            <Image src={`/${type}.png`} alt="" width={16} height={16}/>
        </button>
        {open && 
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className='bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]'>
                <Form />
                <div className='absolute top-4 right-4 cursor-pointer' onClick={() => setOpen(!open)}>
                    <Image src="/close.png" alt="" width={14} height={16} />
                </div>    
            </div>
        </div>}
    </>
  )
}

export default FormModal