import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import styles from './Layout.module.scss'
import Principal from '../Principal'

const Layout = ( { children }) => {
    return (
        <div className={styles.layout}>
            <Header />
            <Main>
                <Principal />
                { children }
            </Main>
            <Footer />
        </div>
    )
}

export default Layout
