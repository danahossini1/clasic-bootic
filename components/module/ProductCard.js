
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ProductCard({ props }) {

    const notify = (text) => toast.success(text);

    const [isLoading, setIsLoading] = useState(false)


    const addToCart = async (product) => {
        const localData = await JSON.parse(localStorage.getItem('cart'))

        if (localData) {



            const filterProduct = localData.filter(item => item.product.id === product.id)


            let local = localData


            if (filterProduct.length) {
                local.map(item => {
                    if (item.product.id === filterProduct[0].product.id) {
                        console.log(filterProduct);
                        item.number += 1
                        localStorage.setItem('cart', JSON.stringify(local))
                        // console.log(product, "همترمان بو");
                    }
                })

            } else {
                localStorage.setItem('cart', JSON.stringify([...localData, { product: product, number: 1 }]))
                // console.log(product, "اول دانه س");
                
            }





            notify(<div>
                <h1 className='m-2 text-sm lg:text-base'>{product.name}</h1>
                <h1 className='m-2 text-sm lg:text-base'> با قیمت :{product.price}</h1>
                <h1 className='mx-2 text-sm lg:text-base'> به سبد شما اضافه شد </h1>
            </div>)
        } else {
            localStorage.setItem('cart', JSON.stringify([{ product, number: 1 }]))
            // console.log("هر نمانبو");
            notify(<div>
                <h1 className='m-2 text-sm lg:text-base'>{product.name}</h1>
                <h1 className='m-2 text-sm lg:text-base'> با قیمت :{product.price}</h1>
                <h1 className='mx-2 text-sm lg:text-base'> به سبد شما اضافه شد </h1>
            </div>)
        }
    }

    const load = () => {
        setIsLoading(true)
    }
    useEffect(() => {
        load()
    }, [])


    return (
        <>

            <div className={`w-60 m-auto ${isLoading ? 'block' : 'hidden'}  rounded-xl overflow-hidden bg-white shadow-xl`}>
                <div className=''>
                    <img onLoad={load} className='p-4 hover:-translate-y-4 duration-500' src={`/img${props.src}.webp`} alt='not found' width={400} height={300} />
                </div>
                <div className='text-center'>
                    <h2 className='h-12 cursor-default'>{props.name}</h2>
                    <p className=' m-auto cursor-default text-sm text-slate-700 mx-4'> لورم ایپسوم بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p>
                    <div className='flex justify-between p-3 items-center'>
                        <div className='bg-gradient rounded-lg'><button onClick={() => addToCart(props)} className=' bg-white hover:bg-[#ffffffb2] duration-300 transition rounded-lg text-sm p-1 m-[2px]'>اضافه به سبد خرید</button></div>
                        <h4 className='cursor-default'>{props.price} <span className='text-sm'>تومان</span></h4>
                    </div>
                </div>
                <ToastContainer className='font-[lalezar] text-blue-700' position="bottom-left" theme="dark" autoClose={500} rtl={true} />
            </div>


            <div role="status" className={`max-w-sm border m-auto ${!isLoading ? 'block' : 'hidden'} w-60 border-gray-200 rounded shadow animate-pulse dark:border-gray-700`}>
                <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                    <svg className="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                </div>
                <div className="h-2.5 bg-gray-200 m-auto rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 mx-3 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 mx-3 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 mx-3 rounded-full dark:bg-gray-700"></div>
                <div className="flex items-center mt-4 space-x-3">
                    {/* <svg className="text-gray-200 w-14 h-14 dark:text-gray-700" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg> */}
                    <div className='flex justify-between items-center w-full p-3'>
                        <div className="h-6 bg-gray-200 rounded-lg dark:bg-gray-700 w-28 mb-2"></div>
                        <div className="w-20 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                </div>
            </div>

        </>
    )
}
