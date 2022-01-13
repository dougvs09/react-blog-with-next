import { request } from '../services/datocms'

export const getPost = async (id: string | string[] | undefined) => {
  const data = await request({
    query: `query {
        post (filter: {id: {eq: ${id}}}) {
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

  return data.post
}
