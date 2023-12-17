import { handle_config } from '../types.ts'

export
const del_user_route: handle_config = {
  method: 'DELETE',
  path: '/user',
  handle: async ({ kv, url }) => {
    const username = url.searchParams.get('name') as string
    const res = await kv.delete(['user', username])
    return new Response(
      JSON.stringify(res)
    )
  }
}
