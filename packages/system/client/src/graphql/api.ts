import gql from 'graphql-tag'
import { query } from '.'

/** 请求字体列表 */
export const reqFonts = (options?: PaginationOptions) => {
  return query<{ fonts: PaginationResult<FontItem[]> }>({
    query: gql`
      query ($fontsOptions: PaginationInput) {
        fonts(options: $fontsOptions) {
          total
          lastPage
          list {
            id
            key
            value
            group
          }
        }
      }
    `,
    variables: { fontsOptions: options }
  })
}
