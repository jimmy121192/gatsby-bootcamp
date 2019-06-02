import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'
//Goal : Link to blog post
// 1. Fetch the slug for posts
// 2. Use slug to generate a link to the post page
// 3. Test your work


//Goal: Render Contentful Post
//1. Swap out the markdown query with the contentful query
//2. Update the component to render the new data
//3. Test your work!


const Blog = () => {

    //using markdown file
    // const data = useStaticQuery(graphql`
    //     query{
    //         allMarkdownRemark {
    //             edges {
    //                 node {
    //                 frontmatter {
    //                     title
    //                     date
    //                 }
    //                 fields {
    //                     slug
    //                 }
    //                 }
    //             }
    //         } 
    //     }
    // `)


    const data = useStaticQuery(graphql`
        query{
            allContentfulBlogPost(
                sort: {
                  fields:publishDate,
                  order:DESC
                }
              ) {
                edges {
                  node {
                    title
                    slug
                    # publishDate (fromNow:true)
                    publishDate (formatString:"MMM Do, YYYY") 
                    # check moment.js  
                  }
                }
              } 
        }
    `)

    console.log(data)
    return (
            <Layout >
            <Head title="Blog"/>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
            {data.allContentfulBlogPost.edges.map((edge, index) => {
                return (
                    <li key={index} className={blogStyles.post}>
                        <Link to={`/blog/${edge.node.slug}`}>
                        <h4 >{edge.node.title}</h4>
                        <p>{edge.node.publishDate}</p></Link>
                    </li>
                )
            }) 
            
            }
            </ol>
    
            </Layout>
    )
}

export default Blog