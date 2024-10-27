import FormModal from "@/components/FormModal"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { role, subjectsData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

type Subject = {
    id: number;
    name: string;
    teachers: string[];
}

const columns = [
    {
        header: "Subject Name",
        accessor: "name",
    },
    {
        header: "Teachers",
        accessor: "teachers",
        className: "hidden md:table-cell",
    },
    {
        header: "Actions",
        accessor: "actions",
    },
]

const SubjectsListPage = () => {

    const renderRow = (item:Subject) => (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-holmsPurpleLight">
            <td className="flex items-center gap-4 p-4">           
                {item.name}
            </td>
            <td className="hidden md:table-cell">{item.teachers.join(", ")}</td>
            <td>
                <div className='flex items-center gap-2'>
                    <Link href={`/list/Subjects/${item.id}`}>
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-holmsSky">
                            <Image src="/edit.png" alt="" width={16} height={16}></Image>
                        </button>
                    </Link>
                    {role === "admin" && (
                        // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-holmsPurple">
                        //     <Image src="/delete.png" alt="" width={16} height={16}></Image>
                        // </button>
                        <FormModal table="subject" type="delete" id={item.id}/>
                    )}
                </div>
            </td>
        </tr>
    );

  return (
    <div className='bg-white flex-1 p-4 m-4 rounded-md mt-0'>
        {/* TOP */}
        <div className='flex items-center justify-between'>
            <h1 className="hidden md:block text-xl font-semibold">All Subjects</h1>
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
                        <FormModal table="subject" type="create"/>
                    )}
                </div>
            </div>
        </div>

        {/* TABLE */}
        <Table columns={columns} renderRow={renderRow} data={subjectsData}/>

        {/* PAGINATION */}
        <Pagination />
    </div>
  )
}

export default SubjectsListPage