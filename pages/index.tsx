import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Nav } from '@/components/Nav'
import { useHome } from '@/hooks/useHome'
import { ApplicationState } from '@/state/applicationState'
import { VehicleList } from '@/components/VehicleList/VehicleList'

const inter = Inter({ subsets: ['latin'] })

export const getStaticProps = async () => {
    // call to external API etc
    const brands = ['Chevrolet', 'Ford', 'Dodge', 'Pontiac', 'Volvo', 'Peugeot']

    return {
        props: {
            brands,
        },
    }
}

type Props = {
    brands: string[]
}

const Home = ({ brands: defaultBrands }: Props) => {
    const { brands, setBrands, cars, setCars } = useHome({ defaultBrands })

    return (
        <>
            <Head>
                <title>Vehicle management system</title>
                <meta
                    name="description"
                    content="Use this to manage your inventory"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ApplicationState.Provider
                value={{
                    brands,
                    setBrands,
                    cars,
                    setCars,
                }}
            >
                <main className={styles.main}>
                    <header className="fixed top-0 left-0 right-0 bg-red-100">
                        <Nav />
                    </header>
                    <div className="">
                        <h1 className="text-3xl font-bold font-sans mb-10">
                            Vehicle Inventory Management
                        </h1>
                        <VehicleList />
                    </div>
                </main>
            </ApplicationState.Provider>
        </>
    )
}

export default Home
