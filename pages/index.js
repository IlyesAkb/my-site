import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>
      <div className={styles.placeholder}>
        <div>
          <div className={ styles.image }>
            <Image
              src="/images/groguhq.jpg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          
        </div>
        <p className={ styles.message }>Мне пока нечего сказать :)</p>
      </div>
    </>
  )
}
