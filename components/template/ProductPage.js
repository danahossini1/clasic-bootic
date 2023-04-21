
import React, { useEffect, useState } from 'react'
import CategoryesImg from '../module/CategoryesImg'
import ProductCard from '../module/ProductCard';
import { useRouter } from 'next/router';

export default function ProductPage(props) {

    const { data, category } = props

    const [page, setPage] = useState(0)
    const [product, setProduct] = useState([])

    useEffect(() => {
     setProduct(data.slice(page, page + 12))
    }, [page,category])


    const router = useRouter()

    if (router.isFallback) {
        return <h1> not Load</h1>
    }



    return (
        <div className=''>
            <div className='mt-8 max-w-5xl m-auto'>
                <CategoryesImg />
            </div>

            <h2 className='text-center text-3xl cursor-default mt-8'>{category}</h2>
            <div className='flex flex-wrap gap-6 mt-8 max-w-[1020px] m-auto'>
                {category === "همه محصولات" ?
                    product.map(item => <ProductCard key={item.id} props={item} />)
                    :
                    data.map(item => <ProductCard key={item.id} props={item} />)
                }
            </div>
            <div className='text-center mt-10 flex m-auto justify-around px-12 max-w-[450px]'>
                {category === "همه محصولات" &&
                    <>
                        <button className={`p-2 px-4 rounded-md ${page === 0 ? 'bg-orange-600' : 'bg-orange-400'}`} onClick={() => {
                            setPage(0)
                            window.scroll(0, 0)
                        }}>1</button>
                        <button className={`p-2 px-4 rounded-md ${page === 12 ? 'bg-orange-600' : 'bg-orange-400'}`} onClick={() => {
                            setPage(12)
                            window.scroll(0, 0)
                        }}>2</button>
                        <button className={`p-2 px-4 rounded-md ${page === 24 ? 'bg-orange-600' : 'bg-orange-400'}`} onClick={() => {
                            setPage(24)
                            window.scroll(0, 0)
                        }}>3</button>
                        <button className={`p-2 px-4 rounded-md ${page === 36 ? 'bg-orange-600' : 'bg-orange-400'}`} onClick={() => {
                            setPage(36)
                            window.scroll(0, 0)
                        }}>4</button>
                        <button className={`p-2 px-4 rounded-md ${page === 48 ? 'bg-orange-600' : 'bg-orange-400'}`} onClick={() => {
                            setPage(48)
                            window.scroll(0, 0)
                        }}>5</button>
                    </>
                }
            </div>

        </div>
    )
}
