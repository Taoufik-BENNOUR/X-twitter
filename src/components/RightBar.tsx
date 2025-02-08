import React from 'react'
import Search from './Search'
import Popular from './Popular'
import Recommendations from './Recommendations'

const RightBar = () => {
  return (
    <div className="flex flex-col pt-4 gap-4 sticky top-0 h-screen">
      <Search/>
      <Popular/>
      <Recommendations/>
      <div className='text-textGray text-sm'>

      </div>
    </div>
  )
}

export default RightBar