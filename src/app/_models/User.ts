import { Auth } from "./Auth"
import { Group } from "./Group"

export class User  {
  id?: number
  name?:string
  email?:string
  password?:string
  created_at?:string
  isAdmin?:boolean
  groups?:Group[]
}
