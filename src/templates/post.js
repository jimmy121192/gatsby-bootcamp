import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/head'
//Goal : Link to blog post
// 1. Fetch the slug for posts
// 2. Use slug to generate a link to the post page
// 3. Test your work


// export const query = graphql`
//         query (
//             $slug: String! 
//         )
//         {
//             markdownRemark (
//             fields: {
//                 slug : {
//                 eq: $slug
//                 }
//             }
//             ) {
//             frontmatter {
//                 title,
//                 date
//             }
//             html
//             }
//         }
//     `

export const query = graphql`
    query($slug: String!){
        contentfulBlogPost(slug: {eq: $slug}){
            title
            publishDate(formatString: "MMM Do, YYYY")
            body {
                json
            }
        }
    }
`
    const Post = (props) => {
        //to fetch img/video
        const options = {
            renderNode: {
                "embedded-asset-block": (node) => {
                    
                    if(node.data.target.fields.file['en-US'].contentType === "video/mp4"){
                        const format=node.data.target.fields.file['en-US'].contentType;
                        const url=node.data.target.fields.file['en-US'].url;
                        return (
                        
                        <video width="320" height="240" controls>
                            <source src={url} type={format}/>
                        </video>
                    )
                    } 

                    if(node.data.target.fields.file['en-US'].contentType === "image/jpeg"){
                        const alt=node.data.target.fields.title['en-US'];
                        const url=node.data.target.fields.file['en-US'].url;
                        return (
                        <img alt={alt} src={url}/>
                            
                    )
                    }
                    


                }
            }
        }
    
    return(
        <Layout>
            <Head title={props.data.contentfulBlogPost.title}/>
            {/* <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML ={{__html: props.data.markdownRemark.html}}></div> */}

            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishDate}</p>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
        </Layout>
    )
}

export default Post