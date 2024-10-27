import FormModal from "@/components/FormModal"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { role, studentsData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

type Student = {
    id: number;
    studentId: string;
    name: string;
    email?: string;
    photo: string;
    grade: number;
    phone?: string;
    class: string;
    address: string;
}

const columns = [
    {
        header: "Info",
        accessor: "info",
    },
    {
        header: "Student ID",
        accessor: "StudentId",
        className: "hidden md:table-cell",
    },
    {
        header: "Grade",
        accessor: "grade",
        className: "hidden md:table-cell",
    },
    {
        header: "Phone",
        accessor: "phone",
        className: "hidden md:table-cell",
    },
    {
        header: "Address",
        accessor: "address",
        className: "hidden md:table-cell",
    },
    {
        header: "Actions",
        accessor: "actions",
    },
]

const StudentsListPage = () => {

    const renderRow = (item:Student) => (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-holmsPurpleLight">
            <td className="flex items-center gap-4 p-4">
                <Image src={item.photo} alt="" width={40} height={40} className="rounded-full md:hidden xl:block h-10 w-10 object-cover"/>
                <div className=' flex flex-col'>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-xs text-gray-500">{item?.class}</p>
                </div>
            </td>
            <td className="hidden md:table-cell">{item.studentId}</td>
            <td className="hidden md:table-cell">{item.grade}</td>
            {/* <td className="hidden md:table-cell">{item?.email}</td> */}
            <td className="hidden md:table-cell">{item.phone}</td>
            <td className="hidden md:table-cell">{item.address}</td>
            <td>
                <div className='flex items-center gap-2'>
                    <Link href={`/list/students/${item.id}`}>
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-holmsSky">
                            <Image src="/view.png" alt="" width={16} height={16}></Image>
                        </button>
                    </Link>
                    {role === "admin" && (
                        <FormModal table="student" type="delete" id={item.id}/>
                    )}
                </div>
            </td>
        </tr>
    );

  return (
    <div className='bg-white flex-1 p-4 m-4 rounded-md mt-0'>
        {/* TOP */}
        <div className='flex items-center justify-between'>
            <h1 className="hidden md:block text-xl font-semibold">All Students</h1>
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
                        <FormModal table="student" type="create"/>
                    )}
                </div>
            </div>
        </div>

        {/* TABLE */}
        <Table columns={columns} renderRow={renderRow} data={studentsData}/>

        {/* PAGINATION */}
        <Pagination />
    </div>
  )
}

export default StudentsListPage