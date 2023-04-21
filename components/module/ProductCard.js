import Image from 'next/image'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ProductCard({ props }) {

    const notify = (text) => toast.success(text);


    const addToCart = async (product) => {
        const localData = await JSON.parse(localStorage.getItem('cart'))

        if (localData) {

            let local = [...localData]

            let filterProduct = localData.filter(item => item.product.id === product.id)
            console.log(filterProduct);

            localData.map(item => {

                if (filterProduct.length) {
                    item.number++
                    localStorage.setItem('cart', JSON.stringify(local))
                    console.log(product, "همترمان بو");
                } else {
                    localStorage.setItem('cart', JSON.stringify([...localData, { product: product, number: 1 }]))
                    console.log(product, "اول دانه س");
                }
            })


            notify(<div>
                <h1 className='m-2 text-sm lg:text-base'>{product.name}</h1>
                <h1 className='m-2 text-sm lg:text-base'> با قیمت :{product.price}</h1>
                <h1 className='mx-2 text-sm lg:text-base'> به سبد شما اضافه شد </h1>
            </div>)
        } else {
            localStorage.setItem('cart', JSON.stringify([{ product, number: 1 }]))
            console.log("هر نمانبو");
            notify(<div>
                <h1 className='m-2 text-sm lg:text-base'>{product.name}</h1>
                <h1 className='m-2 text-sm lg:text-base'> با قیمت :{product.price}</h1>
                <h1 className='mx-2 text-sm lg:text-base'> به سبد شما اضافه شد </h1>
            </div>)
        }
    }


    return (
        <div className='w-60 m-auto  rounded-xl overflow-hidden bg-slate-50 shadow-xl'>
            <div className=''>
                <Image className='p-4 hover:-translate-y-4 duration-500' src={`/img${props.src}.webp`} alt='not found' width={400} height={300} />
            </div>
            <div className='text-center'>
                <h2 className='h-12 cursor-default'>{props.name}</h2>
                <p className=' m-auto cursor-default text-sm text-slate-700 mx-4'> لورم ایپسوم بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p>
                <div className='flex justify-between p-3 items-center'>
                    <div className='bg-gradient rounded-lg'><button onClick={() => addToCart(props)} className=' bg-white hover:bg-[#ffffffb2] duration-300 transition rounded-lg text-sm p-1 m-[2px]'>اضافه به سبد خرید</button></div>
                    <h4 className='cursor-default'>{props.price} <span className='text-sm'>تومان</span></h4>
                </div>
            </div>
            <ToastContainer className='font-[lalezar] text-blue-700' position="bottom-left" theme="dark" autoClose={1000} rtl={true} />
        </div>
    )
}
