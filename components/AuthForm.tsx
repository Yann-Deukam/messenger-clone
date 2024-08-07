'use client'

import React, { useCallback } from 'react'
import { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import Input from './Input'
import Button from './Button'

type Variant = 'LOGIN' | 'REGISTER' 

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false)

    const toggleVariant = useCallback(() => {
        if(variant === 'LOGIN'){
            setVariant('REGISTER')
        } else {
            setVariant('LOGIN')
        }
    }, [variant])

    const { register, handleSubmit, formState: {errors} } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if(variant === 'REGISTER'){
            //Axios register
        }

        if(variant === 'LOGIN'){
            //NextAuth
        }
    }

    const socialAction  = (action: string) => {
        setIsLoading(true)

        //NextAuth social signin
    }

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
            <form action="" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {variant === 'REGISTER' && (
                    <Input id='name' label='Name' register={register} errors={errors} />
                )}
                <Input id='email' label='Email address' type='email' register={register} errors={errors} />
                <Input id='password' label='password' type='password' register={register} errors={errors} />
                <div>
                    <Button disabled={isLoading} type='submit' fullWidth>
                        {variant === 'LOGIN' ? 'Sign-in' : 'REGISTER'}
                    </Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AuthForm