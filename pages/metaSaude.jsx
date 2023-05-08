import styles from '../styles/metaSaude.module.css'
import TextBlock1 from '@/componets/TextBlock1'
import Video from '../componets/Video'
export default function metaSaude() {
    return(
        <div className={styles.body}>
            <h1 className={styles.title1}> Metaverso na Saude</h1>
                 
                <div className={styles.container_paragrafo1}>
                    <p className={styles.paragrafo1}>texto muito legal texto muito legal texto muito 
                    legal texto muito legal texto muito legal texto muito legal texto muito legal texto
                    muito legal texto muito legal texto muito legal texto muito legal texto muito lega
                    l texto muito legal texto muito legal texto muito legal texto muito legal texto mu
                    ito legal texto muito legal texto muito legal texto muito legal</p>
                </div>
                <div className={styles.divCards}>
                    <div class={styles.card1}>
                        <div class={styles.card_img}></div>
                        <h3>Card 1</h3>
                        <p>conteudo legal</p>
                    </div>

                    <div class={styles.card1}>
                        <div class={styles.card_img}></div>
                        <h3>Card 2</h3>
                        <p> conteudo legal</p>
                    </div>

                    <div class={styles.card1}>
                        <div class={styles.card_img}></div>
                        <h3>Card 3</h3>
                        <p>Conteudo legal</p>
                    </div>
                    
                </div> 

                <h1 className={styles.title1}> Conteudo para todos estudantes </h1>
                <div className={styles.container_paragrafo1}>
                    <p className={styles.paragrafo1}>texto muito legal texto muito legal texto muito 
                    legal texto muito legal texto muito legal texto muito legal texto muito legal texto
                    muito legal texto muito legal texto muito legal texto muito legal texto muito lega
                    l texto muito legal texto muito legal texto muito legal texto muito legal texto mu
                    ito legal texto muito legal texto muito legal texto muito legal</p>
                </div>     

               {/*} <Video video={'/assets/video3.mp4'}/>*/}
               <video src={'/assets/video3.mp4'} className={styles.video}  loop muted autoPlay  /> 
               

               <h1 className={styles.title1}> Trilhas de Aprendizado especializadas e intrigrantes </h1>
               <div className={styles.container_paragrafo1}>
                    <p className={styles.paragrafo1}>texto muito legal texto muito legal texto muito 
                    legal texto muito legal texto muito legal texto muito legal texto muito legal texto
                    muito legal texto muito legal texto muito legal texto muito legal texto muito lega
                    l texto muito legal texto muito legal texto muito legal texto muito legal texto mu
                    ito legal texto muito legal texto muito legal texto muito legal</p>
                </div>   
        </div>
    )
}