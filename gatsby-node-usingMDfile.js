// GOAL 1 - Generate a slug for each post
// gatsby.md -> gatsby -> /blog/gatsby

// GOAL 2 - Generate the blog post page template

// GOAL 3 - Generate a new page for each post



const path = require('path')

//using markdown file

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if(node.internal.type === 'MarkdownRemark'){
        const slug = path.basename(node.fileAbsolutePath, '.md')
        // console.log(JSON.stringify(node, undefined, 4))

        // console.log('@@@@@@@@@', slug)

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }

    
}

module.exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/post.js')
    const res = await graphql(`
            query {
                allMarkdownRemark {
                    edges {
                        node {
                            fields {
                                slug
                            }
                        }
                    }
                }
            }
        `)

    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
    // 1. Get path to template
    // 2. Get markdown data
    // 3. Create new pages
}