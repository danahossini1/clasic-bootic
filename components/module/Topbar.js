import React from 'react'
import { RxHome } from 'react-icons/rx'
import { BiCategoryAlt } from 'react-icons/bi'

import { BsBagCheck } from 'react-icons/bs'
import Link from 'next/link'
export default function Topbar() {
    return (
        <div className=' bg-slate-900 text-lg md:text-2xl shadow-xl p-3 flex justify-between items-center text-gray-200'>
            <ul className='flex gap-5 text-lg'>
                <Link href={'/'}><li className='flex gap-1 items-center'><RxHome /><span className='hidden sm:inline'>صفحه اصلی</span></li></Link>
                <Link href={'/category/allProduct'}><li className='flex gap-1 items-center'><BiCategoryAlt /><span className='hidden sm:inline'>محصولات</span></li></Link>
            </ul>
            <h1 className='sm:pl-32 cursor-default'>بوتیک کلاسیک</h1>
            <button className=''><Link className='flex gap-1 text-lg items-center' href={'/cart'}><BsBagCheck /><span className='hidden sm:inline'>سبد خرید</span></Link></button>
        </div>
    )
}
