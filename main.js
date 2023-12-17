import { add_user } from './handle/add_user.ts'
import { get_all_user } from './handle/get_user.ts'

const kv = await Deno.openKv() // deno 可以使用顶层 await

Deno.serve(
  {
    port: 8080,
  },
  req => {
    console.log('url string', req.url)
    const url = new URL(req.url)
    console.log({ url })
    
    switch(url.pathname) {
      case '/user':
        return new Response(
          JSON.stringify({ // body
            code: 0,
            data: {
              name: 'ppz',
              year: 4,
            },
            msg: 'success',
          }),
          { // head
            status: 200,
            // headers: {
            //   'content-type': 'html/text'
            // },
          },
        )
      case '/add/user':
        return add_user(req, url, kv)
      case '/get/user':
        return get_all_user(req, url, kv)
      default:
        return new Response(`not found`, { status: 404 })
    }
  }
)
