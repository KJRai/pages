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
import { Route as ProductIndexImport } from './routes/product/index'
import { Route as ProductIdIndexImport } from './routes/product/$id/index'

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

const ProductIndexRoute = ProductIndexImport.update({
  id: '/product/',
  path: '/product/',
  getParentRoute: () => rootRoute,
} as any)

const ProductIdIndexRoute = ProductIdIndexImport.update({
  id: '/product/$id/',
  path: '/product/$id/',
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
    '/product/': {
      id: '/product/'
      path: '/product'
      fullPath: '/product'
      preLoaderRoute: typeof ProductIndexImport
      parentRoute: typeof rootRoute
    }
    '/product/$id/': {
      id: '/product/$id/'
      path: '/product/$id'
      fullPath: '/product/$id'
      preLoaderRoute: typeof ProductIdIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/Auth': typeof AuthRoute
  '/product': typeof ProductIndexRoute
  '/product/$id': typeof ProductIdIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/Auth': typeof AuthRoute
  '/product': typeof ProductIndexRoute
  '/product/$id': typeof ProductIdIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/Auth': typeof AuthRoute
  '/product/': typeof ProductIndexRoute
  '/product/$id/': typeof ProductIdIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/Auth' | '/product' | '/product/$id'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/Auth' | '/product' | '/product/$id'
  id: '__root__' | '/' | '/Auth' | '/product/' | '/product/$id/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AuthRoute: typeof AuthRoute
  ProductIndexRoute: typeof ProductIndexRoute
  ProductIdIndexRoute: typeof ProductIdIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AuthRoute: AuthRoute,
  ProductIndexRoute: ProductIndexRoute,
  ProductIdIndexRoute: ProductIdIndexRoute,
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
        "/product/",
        "/product/$id/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/Auth": {
      "filePath": "Auth.tsx"
    },
    "/product/": {
      "filePath": "product/index.tsx"
    },
    "/product/$id/": {
      "filePath": "product/$id/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
