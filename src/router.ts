// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/:id`
  | `/admin`
  | `/admin/edit-user`
  | `/admin/user-list`
  | `/admin/users`
  | `/forgot-password`
  | `/lock`
  | `/login`
  | `/search`
  | `/sign-up`
  | `/success`

export type Params = {
  '/:id': { id: string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<
  Path,
  Params,
  ModalPath
>()
export const { redirect } = utils<Path, Params>()
