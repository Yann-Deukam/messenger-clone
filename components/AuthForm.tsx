'use client'

import React, { useCallback } from 'react'
import { useState } from 'react'

type Variant = 'LOGIN' | 'REGISTER' 

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false)

    const toggleVariant = useCallback(() => {

    }, [])
  return (
    <div>AuthForm</div>
  )
}

export default AuthForm