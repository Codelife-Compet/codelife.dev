export type User = {
  name: string,
  email: string,
  avatar_url?: string,
  permission: UserPermissions
}
export enum UserPermissions {
  regular = 0,
  administrator = 1,
  superuser = 2
}
export enum Socials {
  github = "github",
  google = "google",
  discord = "discord",
  facebook = "facebook",
  instagram = "instagram"
}