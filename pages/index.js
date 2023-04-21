import Head from "next/head";
import HomePage from "@/components/template/HomePage";

export default function Home(props) {
  return (
    <>
      <Head>
        <title className="font-[lalezar]">بوتیک کلاسیک | صفحه اصلی</title>
        <meta
          name="discription"
          content="classic botic is my test website"
        />
      </Head>
      <main>
        <HomePage props={...props.data} />
      </main>
    </>
  )
}


export async function getStaticProps() {

  const res = await fetch(`${process.env.API}/popular`)
  const data = await res.json()

  return {
    props: { data }
  }
}