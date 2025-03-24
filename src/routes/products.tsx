import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import FeaturedProducts from '../comps/Products'

export const Route = createFileRoute('/products')({
  component: AboutComponent,
})

function AboutComponent() {
  return (
    <div className="p-2">
     <FeaturedProducts />
    </div>
  )
}
