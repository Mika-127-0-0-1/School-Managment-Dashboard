import FormModal from "@/components/FormModal"
import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import { role, resultsData } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

type Result = {
    id: number;
    subject: string;
    class: string,
    teacher: string,
    student: string,
    date: string,
    type: string,
    score: number,
}

const columns = [
    {
        header: "Subject Name",
        accessor: "subject",
    },
    {
        header: "Student",
        accessor: "student",
    },
    {
        header: "Score",
        accessor: "score",
        className: "hidden md:table-cell",
    },
    {
    header: "Teacher",
        accessor: "Teacher",
        className: "hidden md:table-cell",
    },
    {
        header: "Class",
        accessor: "class",
        className: "hidden md:table-cell",
    },
    {
        header: "Date",
        accessor: "date",
        className: "hidden md:table-cell",
    },
    // {
    //     header: "Type",
    //     accessor: "type",
    //     className: "hidden md:table-cell",
    // },
    {
        header: "Actions",
        accessor: "actions",
    },
]

const ResultsListPage = () => {

    const renderRow = (item:Result) => (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-holmsPurpleLight">
            <td className="flex items-center gap-4 p-4">{item.subject}</td>
            <td >{item.student}</td>
            <td className="hidden md:table-cell">{item.score}</td>
            <td className="hidden md:table-cell">{item.teacher}</td>
            <td className="hidden md:table-cell">{item.class}</td>
            <td className="hidden md:table-cell">{item.date}</td>
            {/* <td className="hidden md:table-cell">{item.type}</td> */}
            <td>
                <div className='flex items-center gap-2'>
                    {role === "admin" && (
                        <>
                        <FormModal table="result" type="update" data={item}/>
                        <FormModal table="result" type="delete" id={item.id}/>
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
            <h1 className="hidden md:block text-xl font-semibold">All Results</h1>
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
                        <FormModal table="result" type="create"/>
                    )}
                </div>
            </div>
        </div>

        {/* TABLE */}
        <Table columns={columns} renderRow={renderRow} data={resultsData}/>

        {/* PAGINATION */}
        <Pagination />
    </div>
  )
}

export default ResultsListPage