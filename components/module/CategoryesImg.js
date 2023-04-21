import Image from 'next/image'
import Link from 'next/link'

export default function CategoryesImg() {
    return (
        <div className='flex flex-wrap justify-around mt-2'>
            <Link href={'/category/watch'}><div className='text-xs md:text-base text-center'>
                <div className='overflow-hidden flex justify-center items-center rounded-full w-12 h-12 mi:h-14 mi:w-14 md:w-20 md:h-20 lg:w-28 lg:h-28 border-zinc-300 bg-white border-2'>
                    <Image className='hover:scale-75 duration-500' src={'/img/watch.jpg'} alt='notFound' width={120} height={60} />
                </div>
                ساعت
            </div></Link>
            <Link href={'/category/socks'}> <div className='text-xs md:text-base text-center'>
                <div className='overflow-hidden flex justify-center items-center rounded-full w-12 h-12 mi:h-14 mi:w-14 md:w-20 md:h-20 lg:w-28 lg:h-28 border-zinc-300 bg-white border-2'>
                    <Image className=' hover:scale-75 duration-500' src={'/img/socks.jpg'} alt='notFound' width={100} height={50} />
                </div>
                جوراب
            </div></Link>
            <Link href={'/category/shoos'}> <div className='text-xs md:text-base text-center'>
                <div className='overflow-hidden flex justify-center items-center rounded-full w-12 h-12 mi:h-14 mi:w-14 md:w-20 md:h-20 lg:w-28 lg:h-28 border-zinc-300 bg-white border-2'>
                    <Image className='hover:scale-75 duration-500' src={'/img/shoos.jpg'} alt='notFound' width={120} height={60} />
                </div>
                کفش
            </div></Link>
            <Link href={'/category/tshert'}>  <div className='text-xs md:text-base text-center'>
                <div className='overflow-hidden flex justify-center items-center rounded-full w-12 h-12 mi:h-14 mi:w-14 md:w-20 md:h-20 lg:w-28 lg:h-28 border-zinc-300 bg-white border-2'>
                    <Image className='hover:scale-75 duration-500' src={'/img/tshert.jpg'} alt='notFound' width={120} height={60} />
                </div>
                تی شرت
            </div></Link>
            <Link href={'/category/glasses'}><div className='text-xs md:text-base text-center'>
                <div className='overflow-hidden flex justify-center items-center rounded-full w-12 h-12 mi:h-14 mi:w-14 md:w-20 md:h-20 lg:w-28 lg:h-28 border-zinc-300 bg-white border-2'>
                    <Image className='hover:scale-75 duration-500' src={'/img/glasses.jpg'} alt='notFound' width={120} height={60} />
                </div>
                عینک
            </div></Link>
            <Link href={'/category/allProduct'}><div className='text-xs md:text-base text-center'>
                <div className='overflow-hidden flex justify-center items-center rounded-full w-12 h-12 mi:h-14 mi:w-14 md:w-20 md:h-20 lg:w-28 lg:h-28 border-zinc-300 bg-stone-100 border-2'>
                    <Image className='hover:scale-75 duration-500' src={'/img/allproduct.webp'} alt='notFound' width={120} height={60} />
                </div>
                همه محصولات
            </div></Link>
        </div>
    )
}


