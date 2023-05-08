import styles from '../styles/TextBlock1.module.css'
import Image from 'next/image'
import Img from '../public/assets/womenvr.jpg'
import premio from '../public/assets/premio.png'
export default function TextBlock1() {
    return(
        <div className={styles.bodyy}>
            <h2 className={styles.title1}>The XR Labs Experience</h2>
            <div className={styles.container_paragrafo1}> 
                <p className={styles.paragrafo1}>texto muito legal texto muito legal texto muito legal texto muito legal texto muito legal texto muito legal texto muito legal texto muito legal texto muito legal texto muito legal texto muito legal texto muito legal texto muito legal texto muito legal texto muito legal texto muito legal texto muito legal texto muito legal texto muito legal texto muito legal</p>
            </div>
            <div className={styles.div_list}>
                <ul className={styles.ul_items}>
                        <li className={styles.li_item}>Diferentes Trilhas de Ensinos</li>
                        <li className={styles.li_item}>Inumeros cenarios</li>
                        <li className={styles.li_item}>Modelos 3D e ferramentas realistas</li>
                        <li className={styles.li_item}>Quizes especializados</li>
                        <li className={styles.li_item}>interatividade com o mundo e colegas</li>
                        
                    </ul>
            </div>
            <div className={styles.container_paragrafo1}> 
                <p className={styles.paragrafo1}>texto muito legal texto muito legal texto muito legal texto muito legal texto muito legal texto muito legal texto muito legal texto muito legal texto muito legal texto muito legal texto muito legal texto muito legal texto muito legal texto muito legal texto muito legal texto muito legal texto muito legal texto muito legal texto muito legal texto muito legal</p>
            </div>
            <div className={styles.divImage}>
              <Image src={Img}/>
            </div>
            <div className={styles.title2}>Premios do XR LABS</div>
            <div className={styles.divPremios}>
                <Image src={premio} className={styles.premioIMG}/>
                <Image src={premio} className={styles.premioIMG}/>
                <Image src={premio} className={styles.premioIMG}/>
            </div>
            
                
            
        </div>
            
    )     
}