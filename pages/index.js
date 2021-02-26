import axios from 'axios'
import { route } from 'next/dist/next-server/server/router'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'



function Home({data }) {

  const router = useRouter()

  
  console.log(data)
  // if (loading) return <div>Loading ... </div>

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
      {
        data?.map(data =>(
          <div key={data.id} onClick={() => router.push(`/post/${data.id}`)}>
            <h1>  {data.title.rendered} </h1>
          </div>
        ))
      }
      </>
     
    </div>
  )
}


export default Home


export const  getStaticProps = async (context) => {
 

  const  { data } = await axios.get('https://www.sumydesigns.com/wp-json/wp/v2/posts')

  return {
    props: {
      data ,
    
     
    }, // will be passed to the page component as props
  }
}

