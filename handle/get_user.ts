export
const get_all_user = async (_req: Response, _url: URL, kv: Deno.Kv): Promise<Response> => {
  const all = kv.list({
    prefix: ['user'],
  })
  const list = []
  for await (const item of all)
    list.push(item)
  
  return new Response(
    JSON.stringify(list)
  )
}
