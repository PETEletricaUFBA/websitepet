import Header from '../components/header'
import Footer from '../components/footer'


export default function Custom404() {
    return (
        <div>
            <Header />

            <section className="banner">
                <div className="container">
                    <div className="row mx-auto">

                        <div className="col-lg my-auto mx-auto text-center">
                            <h1 className="mb-3">404</h1>
                            <p className="mb-4">Sentimos muito, mas não irá encontrar nada aqui, nem mesmo o One Piece.</p>
        
                        </div>
                        <div className="col-sm">
                            <img className="w-100 rounded shadow" src="\images\roger.webp" alt="Pirate King" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}