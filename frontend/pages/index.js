import Head from 'next/head'
import Image from 'next/image'
import ShowHome from '../components/Pages/Home'
import Principal from '../components/Principal'
//import Login from '../components/Pages/Login'

import styles from '../styles/Home.module.scss'

export default function Home() {
  //<Login />
    return (
    <div className={styles.container}>
      <ShowHome>
      </ShowHome>
    </div>
  )
}