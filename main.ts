import { Router } from "./router.ts";

const kv = await Deno.openKv('./db/data') // deno 可以使用顶层 await

Deno.serve(
  {
    port: 8080,
  },
  async req => {
    const url = new URL(req.url)
    const handle = Router(req, url)
    if (handle)
      try {
        return await handle({ req, url, kv })
      } catch(err) {
        console.error(err)
        return new Response(
          `Unknown Error`,
          {
            status: 500,
          }
        )
      }
    else
      return new Response(
        `Not Found`,
        {
          status: 404
        }
      )
  }
)
