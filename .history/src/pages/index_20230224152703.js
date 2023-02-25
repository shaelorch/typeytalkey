import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Logo from 'comps/Logo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Logo/>
      <main className={styles.main}>
        
        <div style={{backgroundColor:"#6987C9", width:"100%",
        height:200, borderRadius:20, display:'flex', justifyContent:'center', textAlign:'center', alignItems:'center', border:"1px solid #ffffff",
        boxShadow: "1px 2px 4px rgb(0, 0, 0)"}}>
        <h1>Welcome to Messagie </h1> 
        <Image src="public/Asset 5.svg"
        width={100}
        height={100}/>
        
        </div>
        
        <button className={styles.chatbutton}>CHAT NOW</button> 
      </main>
    </>
  )
}
