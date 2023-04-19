
export default function Album(props) {

    const album = props.data

    return (
        <div>
            <h1>{album.id}</h1>
            <h1>{album.title}</h1>
        </div>
    )
}



export async function getServerSideProps(context) {

    const albumId = context.query.album

    const res = await fetch(`${process.env.HOST}/albums/${albumId}`)
    const data = await res.json()
    console.log(process.env.HOST + '/' + albumId);

    return data.id ? { props: { data } } : { redirect: { destination: '/' } }

}