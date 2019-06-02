import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
const Contact = () => {
    return (
        <Layout>
            <Head title="Contact"/>
            <h1>Contact</h1>
            <p>This is the Contact page.</p>
            <p>Facebook <a href="https://www.facebook.com/baohoang1992" target="_blank">Contact me</a></p>
            <hr></hr>
        </Layout>
    )
}

export default Contact