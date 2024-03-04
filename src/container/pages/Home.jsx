import Posts from "../../components/Posts"


export default function Home(){
    return(
        <>
            <section className="flex items-center mt-32 p-5">
                <h1 className="text-4xl font-bold text-white w-3/4">
                        Hola 👋, Bienvenido a mi blog <br />
                    <p className="font-thin text-lg w-1/2 mt-3 text-gray-300 ">
                        donde encontrarás contenido sobre tecnología, desarrollo web, programación y mucho más..
                    </p>
                    <p className="font-thin text-sm mt-5 text-gray-400">
                        Ultimos posts:
                    </p>
                </h1>
            </section>
            <Posts />

        </>
    )
}