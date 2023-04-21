import ProductPage from '@/components/template/ProductPage';
import Head from 'next/head'
import React from 'react'

export default function product(props) {

  const param = props.product

  const paramName = {
    allProduct: 'همه محصولات',
    watch: 'ساعت ها',
    shoos: 'کفش ها',
    socks: 'جوراب ها',
    glasses: 'عینک ها',
    tshert: 'تی شرت ها',
  }

  return (
    <div className='min-h-screen'>
      <Head>
        <title className="font-[lalezar]">بوتیک کلاسیک | {`${paramName[param]}`}</title>
        <meta
          name="discription"
          content="classic botic is my test website"
        />
      </Head>
      <main>
        <ProductPage data={props.data} category={`${paramName[param]}`} />
      </main>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { product: 'allProduct' } }],
    fallback: "blocking"
  }
}

export async function getStaticProps(context) {

  const { product } = await context.params

  const res = await fetch(`${process.env.API}/${product}`)
  const data = await res.json()


  if (!data.length) { return { notFound: true } }

  return {
    props: {
      data,
      product
    }
  }

}