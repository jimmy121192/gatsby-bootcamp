import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import footerStyles from './footer.module.scss'
const Footer = () => {
        //data from GraphQL
        const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title,
                    author
                }
                }
            } 
        `)
    return (
        <footer className={footerStyles.footer}>
            <p>Created by {data.site.siteMetadata.author}@ 2019. Powered by <a href="https://www.gatsbyjs.org/" target="_blank">GastbyJS</a></p>
        </footer>
    )
}

export default Footer