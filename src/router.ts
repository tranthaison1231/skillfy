// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/admin`
  | `/admin/edit-user`
  | `/admin/user-list`
  | `/admin/users`
  | `/forgot-password`
  | `/lock`
  | `/login`
  | `/rooms/:id`
  | `/search`
  | `/sign-up`
  | `/success`

export type Params = {
  '/rooms/:id': { id: string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<
  Path,
  Params,
  ModalPath
>()
export const { redirect } = utils<Path, Params>()
