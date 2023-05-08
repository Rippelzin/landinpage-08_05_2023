import Head from 'next/head'
import Image from 'next/image'
import { Inter, Lilita_One } from 'next/font/google'

import Navbar from '../componets/Navbar'
import Videobg from '../componets/Video'
import TextBlock1 from '../componets/TextBlock1'
import Particles from '../componets/ParticlesBg'





export default function Home() {


  return (
    <div >
      <Head>
        <title> Home Page</title>
      </Head>
      <Particles/>
      <Videobg video={'/assets/video3.mp4'} />

      <TextBlock1/>
      
    </div>
  )
}
