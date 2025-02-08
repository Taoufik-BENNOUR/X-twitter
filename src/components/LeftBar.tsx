import Image from 'next/image'
import Link from 'next/link'
import sidebarData from '../utils/menu'
import { HistoryEdu, PostAdd, VerifiedUserSharp } from '@mui/icons-material'



const LeftBar = () => {
  return (
    <div className='h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8'>
      <div className='flex flex-col gap-4 text-lg items-start'>
      <Link href={"/"} className='p-2'>
          <Image src={"globe.svg"} alt='logo' width={24} height={24}/>
        </Link>
          <div className='flex flex-col gap-4'>
              {sidebarData.map((el,i)=> 
                    <Link href={el.path} key={i} className='flex items-center p-2 gap-2 rounded-full hover:bg-borderGray'>
                      <el.icon sx={{ fontSize: 30 }} />
                      <span className='hidden xxl:inline'>{el.title}</span>
                    </Link>
          )}
          </div>
          <Link href={"/compose/post"} className='flex justify-center items-center xxl:hidden bg-white rounded-full text-black p-2 h-12 w-12' >
            <HistoryEdu/>
          </Link>
          <Link href={"/compose/post"} className='hidden xxl:block bg-white text-black rounded-full py-2 px-20'>
            Post
          </Link>
      </div>
      <div className='flex items-center justify-between gap-1'>
        <div className="flex items-center gap-2">
          <div className='w-10 h-10 rounded-full relative overflow-hidden'>
          <Image src={"file.svg"} alt="profile" fill/>
          </div>
          <div className="hidden xxl:flex flex-col">
            <span>Name</span>
            <span className='text-sm text-textGray'>@TagName</span>
          </div>
        </div>
        <div className="hidden xxl:block cursor-pointer font-bold">...</div>
      </div>
    </div>
  )
}

export default LeftBar