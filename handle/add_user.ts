import { handle_config } from '../types.ts'

interface User_entity {
  name: string
  year: number
  gender: boolean
}

export
const add_user_route: handle_config = {
  method: 'POST',
  path: '/user',
  handle: async ({ req, kv }) => {
    const user = await req.json() as User_entity
    await kv.set(
      ['user', user.name], // key
      user,
    )
    return new Response(
      JSON.stringify(
        (await kv.get(['user', user.name])).value
      ),
      { status: 200 }
    )
  }
}
