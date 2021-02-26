// import { useRouter } from 'next/router'

export default function PostDetails({data}) {
    // const {query : { id }} = useRouter()

    return (
        <div>
            {data.content.rendered} 
        </div>
    )
}


export const getStaticProps = async (context) =>{

    const res = await fetch(`https://www.sumydesigns.com/wp-json/wp/v2/posts/${context.params.id}`)

    const data = await res.json();

    return{
        props : { 
            data
        }
    }
}


export const getStaticPaths = async (context) =>{

    const res = await fetch(`https://www.sumydesigns.com/wp-json/wp/v2/posts/`)

    const data = await res.json();

    const ids = data.map(data =>  data.id);

    const paths = ids.map((id) => ({ params: { id: id.toString() } }))

    return{
        paths,
        fallback: false,
    }
}