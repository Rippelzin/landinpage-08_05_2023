import '@/styles/globals.css'
import MainContainer from '@/componets/MainContainer'
import { SessionProvider } from "next-auth/react"



export default function App({ Component, pageProps, session }) {
  

  return ( 
    <SessionProvider session={session}>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </SessionProvider>
  )
}
