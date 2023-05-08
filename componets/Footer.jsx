import styles from '../styles/Footer.module.css'
import { BsInstagram} from 'react-icons/bs'
import {ImWhatsapp} from 'react-icons/Im'
import {AiOutlineYoutube} from 'react-icons/Ai'

export default function Footer(){
    return(
        <div className={styles.footer} >
            <div className={styles.divIcons}>
                    <a href={'https://www.instagram.com/gabriel_rippel/'}>
                    <BsInstagram className={styles.Icons}/>
                    </a>
                    <a href={'https://www.instagram.com/gabriel_rippel/'}>
                    <ImWhatsapp className={styles.Icons}/>
                    </a>
                    <a href={'https://www.instagram.com/gabriel_rippel/'}>
                    <AiOutlineYoutube className={styles.Icons}/>
                    </a>
            </div>
                    
            
            <div>
                <p className={styles.p_footer}> Termos de Contrato * Suporte * Contato</p>
            </div>
                
            
            
        </div>
    )
}