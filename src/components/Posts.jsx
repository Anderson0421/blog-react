import { useEffect, useState } from "react"

export default function Posts(){
    const [data,setData] = useState(null)

    useEffect(()=>{
        async function getPosts(){
            const response = await fetch('https://backend-django-blog.onrender.com/api/v1api/posts/v1/')
            const data = await response.json()
            setData(data)
            console.log(data)
        }
        getPosts()
    },[])



    return(
        <>
            <div  className="px-5 flex flex-wrap">
            {
                data ? data.map((post,index)=>{
                    const maxChars = 100; 
                    const content = post.content.substring(0, maxChars)+'...'; 

                    return(
                        <div key={index} className="w-80 p-2 group">
                            <img src={post.bg_image+'?sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2026-05-14T02:48:34Z&st=2024-02-24T18:48:34Z&spr=https&sig=euPXsyaHk2PjJkXSH2DwNixR35RG3svMkkB3i65U2GY%3D'} alt={post.title} className="group-hover:scale-105 transition-all duration-300" />
                            <h1 className="text-xl   mt-3 text-white font-bold">{post.title}</h1>
                            <p className="text-xs text-white w-3/4" dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                    )
                })
                :   
                <div role="status" class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
                    <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                        <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                        </svg>
                    </div>
                    <div class="w-full">
                        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                    </div>
                    <span class="sr-only">Loading...</span>
                </div>


            }
            </div>
        </>
    )
}