import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { preview } from '../assets'
import { getRandomPrompt } from '../utils'
import { FormField, Loader } from '../components'

function CreatePost() {
    const navigate = useNavigate()
    const [generatingImg, setGeneratingImg] = useState(false)
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        prompt: '',
        photo: ''
    })

    const handleSubmit = () => {

    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSurpriseMe = () => {
        setForm({
            ...form,
            prompt: getRandomPrompt(form.prompt)
        })
    }

    const generateImage = () => {

    }

    return (
        <section className='max-w-7xl mx-auto'>
            <div>
                <h1 className="font-extrabold text-[#222328] text-[32px]">
                    Create
                </h1>
                <p className="mt02 text-[#666e75] text-[16px] max-w-[500px]">
                    Create imaginative and visually stunning images generated through DALL-E AI and share them with community
                </p>
            </div>

            <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-5'>
                    <FormField
                        type='text'
                        labelName='Your name'
                        name='name'
                        placeholder="John Doe"
                        value={form.name}
                        isSurpriseMe={false}
                        handleChange={handleChange}
                    />
                    <FormField
                        type='text'
                        labelName='Prompt'
                        name='prompt'
                        placeholder="Teddy bears shopping for groceries in Japan, ukiyo-e"
                        value={form.prompt}
                        handleChange={handleChange}
                        isSurpriseMe
                        handleSurpriseMe={handleSurpriseMe}
                    />

                    <div className='relative bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-blue-300 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
                        {form.photo ? (
                            <img
                                src={form.photo}
                                alt={form.prompt}
                                className='w-full h-full object-contain'
                            />
                        ) : (
                            <img
                                src={preview}
                                alt='preview'
                                className='w-9/12 h-9/12 object-contain opacity-40'
                            />
                        )}

                        {generatingImg && (
                            <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded -lg'>
                                <Loader />
                            </div>
                        )}
                    </div>
                </div>
                <div className='mt-5 flex gap-5'>
                    <button
                        className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
                        type='button'
                        onClick={generateImage}
                    >
                        {generatingImg ? 'Generating...' : 'Generate'}
                    </button>
                </div>
                <div className='mt-10'>
                    <p className='mt-2 text-[#666e75] text-[14px]'>** Once you have created the image you want, you can share it with others in the community **</p>
                    <button
                        type='submit'
                        className='mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
                    >
                        {loading ? 'Sharing' : 'Share with the community'}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default CreatePost
