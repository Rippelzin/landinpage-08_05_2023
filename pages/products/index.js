import Link from "next/link"
export default function Products() {
    return (
        <>
            <h1>Produtos do XR LABS</h1>
            <ul>
                <li>
                    <Link href='/products/metaversonaodonto'>
                        Metaverso Na Odonto
                    </Link> 
                </li>
                <li>
                    <Link href='/products/animaverse'>
                        Animaverse
                    </Link> 
                </li>
            </ul>
            
        </>
    
    ) 
}