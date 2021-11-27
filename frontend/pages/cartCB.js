import Cart from "../components/Pages/Cart"
import Footer from "../components/Layout/Footer"
import Header from "../components/Layout/Header"

export default function cartCB () {
    const classBook = "SPcomicbox"
    return (
        <>
        <Header />
            <Cart classBook={classBook} />
        <Footer />
        </>
    )
}