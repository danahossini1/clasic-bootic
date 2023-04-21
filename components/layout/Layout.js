import React from 'react'
import Topbar from '../module/Topbar'

export default function Layout({ children }) {
    return (
        <div>
            <Topbar />
            {children}
            <div className='bg-slate-900 mt-16 text-center'>
                <h1 className='text-slate-200 p-2 cursor-default'>طراح و توسعه دهنده :&nbsp;&nbsp; سید دانا حسینی</h1>
            </div>
        </div>
    )
}
