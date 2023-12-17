import { type handle, type handle_config } from "./types.ts"
import { add_user_route } from "./handle/add_user.ts"
import { get_all_route } from "./handle/get_user.ts"
import { del_user_route } from "./handle/del_user.ts"

const routes: handle_config[] = [
  add_user_route,
  get_all_route,
  del_user_route,
]

export
const Router = (req: Request, url: URL): handle | undefined => {
  console.log(`serving request, method: ${req.method}, path: ${url.pathname}`)
  return routes.find(item =>
    item.method == req.method && url.pathname == item.path
  )?.handle
}

