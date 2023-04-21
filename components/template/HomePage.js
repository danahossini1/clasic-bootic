import Image from "next/image";
import Link from "next/link";
import ProductCard from "../module/ProductCard";
import CategoryesImg from "../module/CategoryesImg";

export default function HomePage({ props }) {


  return (
    <div>
      <header className="relative">
        <Image className=" h-[300px] lg:h-[500px] w-full" src="/img/mall.jpg" alt="not found" width={800} height={600} />
        <div className="absolute bg-[#41414185] inset-0 flex flex-col gap-1  justify-center items-center">
          <h2 className="text-slate-200 cursor-default cursor-default bg-[#41414199] p-2 rounded-md text-xl lg:text-3xl"> با ما بهترین ها را تجربه کنید ;</h2>
          <h2 className="text-slate-200 cursor-default cursor-default bg-[#41414199] p-2 rounded-md text-xl lg:text-3xl">کیفیت اتفاقی نیست</h2>
        </div>
      </header>
      <div className="px-2 md:px-12 lg:px-16 sm:px-4 max-w-[1020px] m-auto">

        <div className="py-4">
          <h1 className="px-2 cursor-default md:px-4 md:text-2xl">دسترسی سریع</h1>
          <CategoryesImg />
        </div>
        <div className="flex justify-between items-center mt-5 sm:text-xl">
          <h2 className="p-2 cursor-default">محبوب ترین محصولات</h2>
          <Link href={'/category/allProduct'}><button className=" px-2 text-stone-800 bg-orange-400 hover:bg-inherit transition border-2 rounded-md border-solid border-orange-500"> دیدن همه &gt;</button></Link>
        </div>

        <div className="flex flex-wrap gap-4 mt-3">

          {props.map(product => <div key={product.id} className="m-auto"><ProductCard props={product} /></div>)}


        </div>
      </div>
    </div>
  )
}
