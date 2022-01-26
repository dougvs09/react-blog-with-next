import { request } from '@services/datocms'

export const getPostsPerCategory = async (category: string | string[] | undefined) => {
  const data = await request({
    query: `query {
      allPosts(filter: {category: {eq: ${category}}}) {
		    category
        content
        title
        id
        created
        image {
          url
          alt
        }
        ishighlighted
      }
    }`,
  })

  return data.allPosts
}
