
import Link from 'next/link'
import styles from './page.module.scss'
import About from './About/page'
import NavFront from './Navigation'

export default function Home() {
  return (
    <div className={styles.Container}>
    <About/>
    </div>
  )
}
