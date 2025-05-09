import { cn } from '@/lib/utils'
import { Download } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import HackerBtn from './animation/HackerBtn'

function DownLoadResumeBtn() {
  return (
    <div className="h-fit w-full mt-2 py-2 px-4 flex items-center">
      <Link
        href="https://drive.google.com/file/d/1EmLG6xK3VbrPv6udKV7XTwpkBp86frfA/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className={cn('inline-block')}
      >
        <HackerBtn label='Download Resume' btnClassName={cn(buttonVariants({ variant: 'default', size: 'sm' }), 'text-sm px-3 py-2 flex items-center gap-2')} />
      </Link>
    </div>
  )
}

export default DownLoadResumeBtn
