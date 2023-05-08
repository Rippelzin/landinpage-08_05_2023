import styles from '../styles/Video.module.css'
export default function Video(props) {
    return(
        <>
         <video src={'/assets/video3.mp4'} className={styles.video}  loop muted autoPlay  />
         
        </>
       
    )
}