import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function Albums(props) {

    const albums = props.data

    const router = useRouter()


    const pushQuery = (id) => {
        router.push({ query: { id } })
    }
    return (
        <div>
            <h1>{router.query.id}</h1>
            {albums.map(item => <h1 className='flex flex-col' key={item.id}>
                <Link href={`/albums/${item.id}`}>
                    {item.title}
                </Link>
                <button onClick={() => pushQuery(item.id)}>push</button>
            </h1>)}
        </div>
    )
}


export async function getServerSideProps() {

    const res = await fetch(`${process.env.HOST}/albums`)
    const Alldata = await res.json()
    const data = Alldata.slice(0, 10)


    return {
        props: { data }
    }
}