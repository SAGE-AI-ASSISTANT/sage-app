import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Label } from "@/components/ui/label"
  import { Input } from "@/components/ui/input"
  import { Button } from '@/components/ui/button' 
  import { Copy } from 'lucide-react';
  import Image from 'next/image'
  import Link from 'next/link'
  
const GroupStudySessionLink = () => {
  return (
    <div>
<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <div className='min-w-[70%] md:w-screen'></div>
  <DialogContent className='gradient-border w-[562px]'> 
    <DialogHeader>
      <DialogTitle className='pb-4'>Group Study Session</DialogTitle>
      <DialogDescription className=''>
        <div className='relative flex flex-col gap-5'>
            <Label className="text-gray-600 text-xs" htmlFor="text">Enjoy the bliss of company. Share with your friends and mates.</Label>
            <Input id="input" type="input" className='' placeholder="https://sage.ai/gr/********" />
            <Button variant="light" className="w-[98px] h-[30px] text-[10px] flex justify-center items-center gap-1 absolute right-2 top-10"><Copy className='w-8 h-8 text-white'/>Copy Link</Button>

            <div className="flex items-center w-full">
                <hr className="flex-1 border-t border-gray-600" />
                <p className="mx-4 text-xs italic text-gray-600">OR</p>
                <hr className="flex-1 border-t border-gray-600" />
          </div>
            <p className='font-semibold text-white'>Share to</p>
          <div className='flex justify-around'>
         <Link href='#' className='flex flex-col justify-center items-center gap-2'><Image src='/images/whatsapp.svg' alt='whatsapp' width={36} height={36} />whatsapp</Link> 
         <Link href='#' className='flex flex-col justify-center items-center gap-2'><Image src='/images/Facebook.svg' alt='facebook' width={45} height={45} />Facebook</Link>
         <Link href='#' className='flex flex-col justify-center items-center gap-2'><Image src='/images/Twitter.svg' alt='twitter' width={43} height={43} />X</Link>
         <Link href='#' className='flex flex-col justify-center items-center gap-2'><Image src='/images/Gmail.svg' alt='gmail' width={36} height={36} />Gmail</Link>
          </div>
        </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default GroupStudySessionLink