import React from 'react'
// import { useRouter } from 'next/router'

export default function User(props) {

    const user = props.data

    // const router = useRouter()

    // if (router.isFallback) {
    //     return <h1> not Load</h1>
    // }

    return (
        <div>
            <p>{user.title}</p>
            <img src={user.url} />
        </div>
    )
}


export async function getStaticPaths() {
    const res = await fetch(`${process.env.HOST}/photos`)
    const data = await res.json()
    const popular = data.splice(0, 4)
    const paths = popular.map(item => ({ params: { user: item.id.toString() } }))

    return {
        paths,
        fallback: "blocking"
    }
}

export async function getStaticProps(context) {

    const { user } = context.params

    console.log("valid before 5 second");

    const res = await fetch(`${process.env.HOST}/photos/${user}`)
    const data = await res.json()

    if (!data.id) {
        return {
            redirect: { destination: '/' }
        }
    }


    return {
        props: { data },
        revalidate: 50000
    }
}