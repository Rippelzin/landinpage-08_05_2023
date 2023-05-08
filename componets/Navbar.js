import Link from "next/link"
import styles from '../styles/Navbar.module.css'
import Image from "next/image"
import logo from '../images/logouni.png'
import { useSession } from "next-auth/react"
export default function navbar() {
    const { data: session, status } = useSession() /* a ordem de session e depois status importa kkkk */
    if(status === 'authenticated'){
        return(
            <nav className={styles.navbar}>
                <div className={styles.navbar_img}>
                    <Link  href='/'> <Image src={logo}/></Link>
                </div>
                
                <ul className={styles.link_items} >
                    
                        <li>
                            <Link className={styles.link_items_i} href='/sobre'>Sobre</Link>
    
                         </li>
    
                         <li >
                            <div className={styles.nav_links_especial}>
                                <div className={styles.dropdown}>
                                        <button className={styles.dropbtn}>Produtos </button>
                                            <div className={styles.dropdown_content}>
                                            {/*<Link href='/'>Animaverse</Link>*/}
                                            <Link href= '/metaSaude'>Metaversoasd Na Saude</Link>
                                            </div> 
                                </div>
                            </div>
                  
                        </li>
                       
    
                            <li >
                                 <Link  className={styles.link_items_i}href='/profile'>Profile</Link>
                             </li>
                        </ul>
                    </nav>
                        
       )             
    } 
    else { 
    return(
        <nav className={styles.navbar}>
            <div className={styles.navbar_img}>
                <Link  href='/'> <Image src={logo}/></Link>
            </div>
            
            <ul className={styles.link_items} >
                
                    <li>
                        <Link className={styles.link_items_i} href='/sobre'>Sobre</Link>

                     </li>

                     <li >
                        <div className={styles.nav_links_especial}>
                            <div className={styles.dropdown}>
                                    <button className={styles.dropbtn}>Produtos </button>
                                        <div className={styles.dropdown_content}>
                                        {/*<Link href='/'>Animaverse</Link>*/}
                                        <Link href= '/metaSaude'>Metaverso Na Saude</Link>
                                        </div> 
                            </div>
                        </div>
              
                    </li>
                   
                    
                
                    <li >
                         <Link  className={styles.link_items_i}href='/entrar'>Entrar</Link>
                     </li>
                
                    
            </ul>
            
           
        </nav>
    )}
    
}