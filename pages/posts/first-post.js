import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost(){
    return (
        <Layout>
            <Head>
                <title>First Page</title>
            </Head>
            <h1>First Post</h1>
        </Layout>
    )
}