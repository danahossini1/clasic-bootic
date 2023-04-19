import Link from "next/link";


export default function Home(props) {


  const { users } = props
  return (
    <main className="flex justify-center ntext-2xl">
      <div>
        <div className="flex gap-2 flex-col">
          {users.map(item =>
            <div key={item.id} className="">
              <Link href={`/users/${item.id}`}>
                <p >{item.id} - {item.title}</p>
              </Link>
            </div>)}
        </div>
      </div>
      <style jsx>{`
      .babydiv{
        display:flex;
        gap:20px;
        margin-top:30px
      }
      h1{
        display:block;
      }
      `}</style>
    </main>
  )
}


export async function getStaticProps() {

  const res = await fetch(`${process.env.HOST}/photos`)
  const data = await res.json()
  const users = data.slice(0, 8)

  return {
    props: {
      users,
    }
  }
}