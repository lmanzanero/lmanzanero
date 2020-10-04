// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
   const result = await graphql(
    `
      {
        articles: allStrapiArticle {
          edges {
            node {
              strapiId
              slug
            }
          }
        }
        categories: allStrapiCategory {
          edges {
            node {
              strapiId
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }


    // Create blog articles pages.
    const posts = result.data.articles.edges 
    const PostTemplate = require.resolve("./src/templates/post.js")


    posts.forEach((post, index) => {
      createPage({
        path: `/blog/${post.node.slug}`,
        component: PostTemplate,
        context: {
          slug: post.node.slug,
        },
      })
    })

    module.exports.onCreateNode = async ({ node, actions, createNodeId }) => {
      const crypto = require(`crypto`)
    
      if (node.internal.type === "StrapiArticle") {
          const newNode = {
              id: createNodeId(`StrapiArticleContent-${node.id}`),
              parent: node.id,
              children: [],
              internal: {
                  content: node.content || " ",
                  type: "StrapiArticleContent",
                  mediaType: "text/markdown",
                  contentDigest: crypto
                      .createHash("md5")
                      .update(node.content || " ")
                      .digest("hex"),
              },
          };
          actions.createNode(newNode);
          actions.createParentChildLink({
              parent: node,
              child: newNode,
          });
      }
    };
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"

    // Update the page.
    createPage(page)
  }
}
