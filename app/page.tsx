import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const loggedIn: boolean = false;

  if (loggedIn) {
    return (<main className={styles.main}>
      <p>Logged In</p>
    </main>)
  }
  else {
    return (
      <main className={styles.main}>
        <p>Hello NextJS</p>
      </main>
  )
  }
}
