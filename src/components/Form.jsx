import React from 'react';

import { useForm } from "react-hook-form"

const Form = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => console.log(data)


    console.log(watch("example")) // watch input value by passing the name of it


    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <div className='bg-gray-600 py-9'>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input type='text' placeholder='Name' {...register("example")} />


                {/* include validation with required or other standard HTML validation rules */}
                <input type='email' placeholder='Email' {...register("exampleRequired", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <textarea placeholder='Enter your message' className='w-full p-3 rounded' rows={4}></textarea>

                <input type="submit" />
            </form>
        </div>
    )
};

export default Form;