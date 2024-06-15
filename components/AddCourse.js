import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Input } from "@/components/ui/input" 
  import { FilePlus } from 'lucide-react';
  import { Image } from 'lucide-react';
  import { File } from 'lucide-react';
  import { X } from 'lucide-react';
  import { Button } from '@/components/ui/button'
const AddCourse = () => {
  return (
    <Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent className='gradient-border w-[350px] md:w-full'>
    <DialogHeader>
      <DialogTitle className='pb-5'>Add A Course</DialogTitle>
      <DialogDescription className='flex flex-col gap-8'>
        <div className='w-full flex flex-col justify-center items-center gap-5'>
            <Input className='w-full' id="password1" type="text" placeholder="Course Name" />
            <Input className='w-full'id="password1" type="text" placeholder="Write a short description..." />
      </div>

      <div className='flex flex-col justify-center items-center gap-2  h-[134px] p-6 rounded-xl bg-[#150F24] gradient-border'>
            <FilePlus />
            <p className='font-bold'>Upload Document</p>
            <p className='text-xs text-gray-600'>You need a minimum of 1 document</p>
      </div>

      <div>
        <div className='h-[50px] flex justify-center items-center gap-2'>
            <div className='p-1 h-[38px] w-[38px] flex justify-center items-center gap-2 rounded border border-solid border-gray-800'><Image/></div>
             <Input className='w-full'id="password1" type="text" placeholder="Title of Document" />
             <X className='text-[#FF7193]'/>
        </div>

        <div className='h-50px flex justify-center items-center gap-2'>
            <div className='p-1 h-[38px] w-[38px] flex justify-center items-center gap-2 rounded border border-solid border-gray-800'><File /></div>
            <Input className='w-full'id="password1" type="text" placeholder="Title of Document" />
            <X className='text-[#FF7193]'/>
        </div>
      </div>

      <Button variant="light" className="w-full">Add New Course</Button>    

      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

  )
}

export default AddCourse