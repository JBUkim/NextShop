import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import data from '../utils/data'
import ProductItem from '../components/Productitem'
import Link from 'next/link'

  export default function Home() {
  return (
    // <Layout>
    //   <div>
    //     <div>
    //       <h1 className='text-2xl font-bold'> Next Shop</h1>
    //       <p>Kim Dahyuk</p>
    //       <p> - Tailwind CSS </p>
    //       <p> - MongoDB </p>
    //       <p> </p>
    //     </div>
    // </div>
    // </Layout>

<Layout title="Home Page">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <ProductItem product={product} key={product.slug}></ProductItem>
        ))}
      </div>
  </Layout>

  )
}
