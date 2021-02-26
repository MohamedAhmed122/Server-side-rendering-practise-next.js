import { useRouter } from 'next/router'

export default function PostDetails({data}) {
    const {query : { id }} = useRouter()

    return (
        <div>
            {data.content.rendered} 
        </div>
    )
}


export const getServerSideProps = async (context) =>{

    const res = await fetch(`https://www.sumydesigns.com/wp-json/wp/v2/posts/${context.params.id}`)

    const data = await res.json();

    return{
        props : { 
            data
        }
    }
}