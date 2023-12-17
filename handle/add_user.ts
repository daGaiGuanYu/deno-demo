export
const add_user = async (_req: Request, url: URL, kv: Deno.Kv): Promise<Response> => {
  const name = url.searchParams.get('name') as string
  const year = url.searchParams.get('year')
  await kv.set(
    ['user', name], // key
    { // value
      year,
      name,
      suibianxie: true,
    }
  )
  return new Response(
    JSON.stringify(
      (await kv.get(['user', name])).value
    ),
    { status: 200 }
  )
}
