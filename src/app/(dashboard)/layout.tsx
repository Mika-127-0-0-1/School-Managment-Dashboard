import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className='w-[17%] md:w-[8%] lg:w-[17%] xl:w-[17%] p-4'>
        <Link href='/' className="flex items-center justify-center lg:justify-start gap-2">
          <Image
            src="/logo.png" 
            alt="Logo"
            width={32} height={32}/>
            <span className="hidden lg:block font-bold">Holmes Academy</span>
        </Link>
        <Menu/>
      </div>

      {/* RIGHT */}
      <div className='w-[83%] md:w-[92%] lg:w-[83%] xl:w-[83%] bg-[#F7F8FA] overflow-scroll flex flex-col'>
        <Navbar />
        {children}
      </div>
    </div>
  );
}
