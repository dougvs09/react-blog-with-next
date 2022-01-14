import { request } from '@services/datocms'

export const getPostsPerTag = async (tag: string | string[] | undefined) => {
  const data = await request({
    query: `query {
      allPosts(filter: {tag: {eq: ${tag}}}) {
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
        tag
      }
    }`,
  })

  return data.allPosts
}
