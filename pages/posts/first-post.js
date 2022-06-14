import React from "react"
import Link from 'next/link';
import Head from 'next/head';
import Layout from "../../components/Layout";

export default class FirstPost extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        // $("img").src = 'favicon.ico';
        return (

            <Layout>
                <Head>
                    <title>First Post</title>
                    <script src="https://connect.facebook.net/en_US/sdk.js" />
                    <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>
                </Head>
                <h1>First Post</h1>
                <div><img src='/favicon.ico'></img></div>

                <div>
                    <Link href='/'>
                        <a>back to home</a>
                    </Link>
                </div>
            </Layout>
        )
    }
}