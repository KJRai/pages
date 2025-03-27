/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthImport } from './routes/Auth'
import { Route as IndexImport } from './routes/index'
import { Route as PodcasIndexImport } from './routes/podcas/index'
import { Route as PodcasIdIndexImport } from './routes/podcas/$id/index'

// Create/Update Routes

const AuthRoute = AuthImport.update({
  id: '/Auth',
  path: '/Auth',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PodcasIndexRoute = PodcasIndexImport.update({
  id: '/podcas/',
  path: '/podcas/',
  getParentRoute: () => rootRoute,
} as any)

const PodcasIdIndexRoute = PodcasIdIndexImport.update({
  id: '/podcas/$id/',
  path: '/podcas/$id/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/Auth': {
      id: '/Auth'
      path: '/Auth'
      fullPath: '/Auth'
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/podcas/': {
      id: '/podcas/'
      path: '/podcas'
      fullPath: '/podcas'
      preLoaderRoute: typeof PodcasIndexImport
      parentRoute: typeof rootRoute
    }
    '/podcas/$id/': {
      id: '/podcas/$id/'
      path: '/podcas/$id'
      fullPath: '/podcas/$id'
      preLoaderRoute: typeof PodcasIdIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/Auth': typeof AuthRoute
  '/podcas': typeof PodcasIndexRoute
  '/podcas/$id': typeof PodcasIdIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/Auth': typeof AuthRoute
  '/podcas': typeof PodcasIndexRoute
  '/podcas/$id': typeof PodcasIdIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/Auth': typeof AuthRoute
  '/podcas/': typeof PodcasIndexRoute
  '/podcas/$id/': typeof PodcasIdIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/Auth' | '/podcas' | '/podcas/$id'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/Auth' | '/podcas' | '/podcas/$id'
  id: '__root__' | '/' | '/Auth' | '/podcas/' | '/podcas/$id/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthRoute: typeof AuthRoute
  PodcasIndexRoute: typeof PodcasIndexRoute
  PodcasIdIndexRoute: typeof PodcasIdIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthRoute: AuthRoute,
  PodcasIndexRoute: PodcasIndexRoute,
  PodcasIdIndexRoute: PodcasIdIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/Auth",
        "/podcas/",
        "/podcas/$id/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/Auth": {
      "filePath": "Auth.tsx"
    },
    "/podcas/": {
      "filePath": "podcas/index.tsx"
    },
    "/podcas/$id/": {
      "filePath": "podcas/$id/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
