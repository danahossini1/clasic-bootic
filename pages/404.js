import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='h-screen md:text-2xl flex flex-col gap-5 justify-center items-center'>
      <Head>
        <title className="font-[lalezar]">بوتیک کلاسیک | 404</title>
        <meta
          name="discription"
          content="classic botic is my test website"
        />
      </Head>
      <h1 className='bg-orange-500 w-2/3 p-4 rounded-sm text-center'>صفحه مورد نظر پیدا نشد</h1>
      <Link className='' href={'/'}>بازگشت به صفحه اصلی</Link>
    </div>
  )
}
