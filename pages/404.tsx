import Image from '../lib/Image'
import Layout from '../components/layout'

export default function Custom404() {
    return (
        <Layout>

            <section className="banner">
                <div className="container">
                    <div className="row mx-auto">

                        <div className="col-lg my-auto mx-auto text-center">
                            <h1 className="mb-3">404</h1>
                            <p className="mb-4">Sentimos muito, mas não irá encontrar nada aqui, nem mesmo o One Piece.</p>

                        </div>
                        <div className="col-sm">

                            <div className="w-100 rounded shadow" >
                                <Image src="/images/roger.webp" alt="Pirate King" layout='responsive' height="60%" width="100%" objectFit="contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    )
}