const Announcements = () => {
  return (
    <div className='bg-white p-4 rounded-md'>
        {/* TITLE */}
        <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Announcements</h1>
            <span className="text-gray-400">View All</span>
        </div>

        {/* ANNOUNCEMENTS */}
        <div className='flex flex-col gap-4 mt-4'>
            <div className='bg-holmsSkyLight p-4 rounded-md'>
                <div className='flex items-center justify-between'>
                    <h2 className="font-medium">Lorem ipsum dolor sit</h2>
                    <span className="text-gray-400 text-xs bg-white rounded-md px-1 py-1">2024-11-01</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta porro accusamus odio eveniet minima nulla molestiae earum. Iusto placeat rem sit quisquam quaerat eveniet.</p>
            </div>
        </div>
        <div className='flex flex-col gap-4 mt-4'>
            <div className='bg-holmsPurpleLight p-4 rounded-md'>
                <div className='flex items-center justify-between'>
                    <h2 className="font-medium">Lorem ipsum dolor sit</h2>
                    <span className="text-gray-400 text-xs bg-white rounded-md px-1 py-1">2024-11-01</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta porro accusamus odio eveniet minima nulla molestiae earum. Iusto placeat rem sit quisquam quaerat eveniet.</p>
            </div>
        </div>
        <div className='flex flex-col gap-4 mt-4'>
            <div className='bg-holmsYellowLight p-4 rounded-md'>
                <div className='flex items-center justify-between'>
                    <h2 className="font-medium">Lorem ipsum dolor sit</h2>
                    <span className="text-gray-400 text-xs bg-white rounded-md px-1 py-1">2024-11-01</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta porro accusamus odio eveniet minima nulla molestiae earum. Iusto placeat rem sit quisquam quaerat eveniet.</p>
            </div>
        </div>
    </div>
    
  )
}

export default Announcements