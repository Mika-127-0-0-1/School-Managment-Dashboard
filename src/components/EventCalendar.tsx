"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY DATA
const events = [
    {
        id:1,
        title: "Lorem ipsum dolor",
        time: "10:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id:2,
        title: "Lorem ipsum dolor",
        time: "10:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id:3,
        title: "Lorem ipsum dolor",
        time: "10:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='bg-white p-4 rounded-md'>
        <Calendar onChange={onChange} value={value} />

        {/* TITLE */}
        <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold my-4'>Events</h1>
            <Image 
            src="/moreDark.png" alt="" width={20} height={20}/>
        </div>

        {/* EVENTS */}
        <div className='flex flex-col gap-4'>
            {events.map((event) => (
                <div key={event.id} className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-holmsSky even:border-t-holmsPurple'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-gray-600 font-semibold'>{event.title}</h1>
                        <span className="text-gray-300 text-xs">{event.time}</span>
                    </div>
                    <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default EventCalendar