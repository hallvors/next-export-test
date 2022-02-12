import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test Next App</title>
      </Head>

    <div className={styles.hello}>
      This text should be bronze
    </div>
    </div>
  )
}
