export
type handle = (ctx: Req_context) => Promise<Response>

export
interface handle_config {
  method: string
  path: string
  handle: handle
}

export
interface Req_context {
  req: Request
  url: URL
  kv: Deno.Kv
}
