import { request } from '@services/datocms'

export const getAllPosts = async () => {
  const data = await request({
    query: `query {
      allPosts {
		    category
        content
        title
        created
        id
        tag
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
