export enum UserPermissions {
  "regular" = 0,
  "administrator" = 1,
  "superuser" = 2,
}

export type User = {
  name: string
  email: string
  avatar_url?: string
  permission:UserPermissions
}
