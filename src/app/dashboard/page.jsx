import React from 'react'
import { UserButton } from "@clerk/nextjs";

function page() {
  return (
    <div className='flex justify-between  py-4 px-4'>
      <h1>My Dashboard</h1>
      < UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default page