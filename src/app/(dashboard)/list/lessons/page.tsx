import FormModal from "@/components/FormModal"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { role, lessonsData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

type Lesson = {
    id: number;
    subject: string;
    class: string;
    teacher: string;
}

const columns = [
    {
        header: "Subject Name",
        accessor: "subject",
    },
    {
        header: "Class",
        accessor: "class",
    },
    {
        header: "Teacher",
        accessor: "teacher",
        className: "hidden md:table-cell",
    },
    {
        header: "Actions",
        accessor: "actions",
    },
]

const LessonsListPage = () => {

    const renderRow = (item:Lesson) => (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-holmsPurpleLight">
            <td className="flex items-center gap-4 p-4">
                {item.subject}
            </td>
            <td>{item.class}</td>
            <td className="hidden md:table-cell">{item.teacher}</td>
            <td>
                <div className='flex items-center gap-2'>
                    {role === "admin" && (
                        <>
                        <FormModal table="lesson" type="update" data={item}/>
                        <FormModal table="lesson" type="delete" id={item.id}/>
                        </>
                    )}
                </div>
            </td>
        </tr>
    );

  return (
    <div className='bg-white flex-1 p-4 m-4 rounded-md mt-0'>
        {/* TOP */}
        <div className='flex items-center justify-between'>
            <h1 className="hidden md:block text-xl font-semibold">All Lessons</h1>
            <div className='flex flex-col md:flex-row items-center w-full md:w-auto gap-4'>
                <TableSearch />
                <div className='gap-4 flex items-center self-end'>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-holmsYellow">
                        <Image 
                        src='/filter.png'
                        alt=''
                        width={14} height={14}/>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-holmsYellow">
                        <Image 
                        src='/sort.png'
                        alt=''
                        width={14} height={14}/>
                    </button>
                    {role === "admin" && (
                        <FormModal table="lesson" type="create"/>
                    )}
                </div>
            </div>
        </div>

        {/* TABLE */}
        <Table columns={columns} renderRow={renderRow} data={lessonsData}/>

        {/* PAGINATION */}
        <Pagination />
    </div>
  )
}

export default LessonsListPage