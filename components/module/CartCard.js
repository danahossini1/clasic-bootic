import Image from 'next/image'
import React from 'react'
import { AiOutlineClear } from 'react-icons/ai'

export default function CartCard({ props, mathOpration, deleteCart }) {

    const { product } = props || {}


    return (
        <div className='flex mi:text-xl md:text-lg bg-stone-50 rounded-md overflow-hidden m-2'>
            <div>
                <Image className='w-32 md:w-44' src={`/img${product.src}.webp`} alt='not found' width={800} height={500} /></div>
            <div className='w-full flex flex-col justify-between'>
                <div className='flex justify-between items-start'>
                    <h2 className='text-sm mi:text-base  md:w-[300px]  md:text-lg'>{product.name}</h2>
                    <button onClick={() => deleteCart(product.id)} className='p-2 md:mx-4 :text-[22px] md:text-[25px] text-red-600'><AiOutlineClear /></button>
                </div>
                <div className='flex justify-between p-2'>
                    <h3>{product.price}تومان</h3>
                    <div className='flex'>
                        <button onClick={() => { mathOpration(product.id, '+') }} className='px-1 mi:px-2 bg-orange-400 text-sm rounded-3xl shadow-lg'>+</button>
                        <span className='px-1 lg:text-lg'>{props.number}</span>
                        <button onClick={() => { mathOpration(product.id, '-') }} className='px-1 mi:px-2 bg-orange-400 text-base rounded-3xl  shadow-lg'>-</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
