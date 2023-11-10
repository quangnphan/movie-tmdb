"use client"

import React from 'react'
import { useLoading } from '@/providers/loading-provider'

const Page = () => {
  const { isLoading } = useLoading()

  return (
    <div>
        {isLoading ? "true" : "false"}
    </div>
  )
}

export default Page