import { handle_config } from '../types.ts'

export
const get_all_route: handle_config = {
  method: 'GET',
  path: '/user',
  handle: async ({ kv }): Promise<Response> => {
    const all = kv.list({
      prefix: ['user'],
    })
    const list = []
    for await (const item of all)
      list.push(item)
    
    return new Response(
      JSON.stringify(list.map(record => record.value)),
      {
        headers: {
          'content-type': 'application/json',
        }
      }
    )
  }
}
