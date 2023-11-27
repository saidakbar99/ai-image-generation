import { useState } from 'react'

function FormField(props) {
    const {
        type,
        labelName,
        name,
        placeholder,
        value,
        isSurpriseMe,
        handleChange,
        handleSurpriseMe
    } = props

    return (
        <div>
            <div className="flex items-center mb-2 gap-2">
                <label
                    htmlFor={name}
                    className='block text-sm font-medium text-gray-900'
                >
                    {labelName}
                </label>
                {isSurpriseMe && (
                    <button
                        type='button'
                        onClick={handleSurpriseMe}
                        className='font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black'
                    >
                        Surprise me
                    </button>
                )}
            </div>
            <input
                type={type}
                label={labelName}
                name={name}
                id={name}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                required
                className='bg-gray-50 border rounded-lg border-gray-300 text-gray-900 text-sm focus:ring-[#4649FF] focus:border-[#4649FF] outline-none block w-full p-3'
            />
        </div>
    )
}
export default FormField
