import { useSession, signIn, signOut, getSession } from 'next-auth/react'
import styles from '../styles/Profile.module.css'
import ProfileCard from '@/componets/ProfileCard'


export default function index() {
  const { data: session, status } = useSession()
  const tamanho = '50%';
  if (status === 'authenticated') {
    return (
      <div className={styles.body}>
        <h1>Signed in as {session.user.email} <br /></h1>
        
        <button onClick={() => signOut()}>Sign out</button>
        <ProfileCard/>
      </div>
    )
  } else { 
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
}

export const getServerSideProps = async (context ) => {
  const session = await getSession(context)
  if(!session){
    return{
      redirect: {
        destination: '/entrar'
      }
    }
  }
  return{
    props : {session},
  }
}