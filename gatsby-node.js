// GOAL 1 - Generate a slug for each post
// gatsby.md -> gatsby -> /blog/gatsby

// GOAL 2 - Generate the blog post page template

// GOAL 3 - Generate a new page for each post



const path = require('path')

module.exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/post.js')
    const res = await graphql(`
            query {
                allContentfulBlogPost {
                    edges {
                        node {
                            slug
                        }
                    }
                }
            }
        `)

    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
    // 1. Get path to template
    // 2. Get Contentful data
    // 3. Create new pages
}