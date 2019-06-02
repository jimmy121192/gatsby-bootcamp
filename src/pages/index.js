import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
const Index = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <h1>Hello!</h1>
            <h2>My name is Jimmy</h2>
        </Layout>
    )

    // return(
    //     <div>
    //         <Header/>
    //         <h1>Hello!</h1>
    //         <h2>My name is Jimmy</h2>
    //         <p>Need a developer? <a href="/contact">Contact me</a></p>
    //         <p>Need a developer? <Link to="/contact">Contact me</Link></p>
    //         <p><Link to="/blog">Blog</Link></p>
    //         <Footer/>
    //     </div>
    // )
}

export default Index
