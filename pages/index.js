import Link from "next/link";



export default function Home() {



  return (
    <main className="flex justify-center flex-col ntext-2xl">
      <Link href={`/users`}>users</Link>
      <Link href={`/albums`}>albums</Link>
    </main>
  )
}
