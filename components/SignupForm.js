import React, {useState} from 'react'
import classNames from "classnames";

export default function SignupForm() {
    const isLoading = true
    const [email, setEmail] = useState('')

    const subscribe = async ({ email }) => {
      const res = await fetch(`/api/subscribe?email=${email}`);
   };
   
    const handleEmailChange = (evt) => {
      setEmail(evt.target.value)
    }
  
    const handleSubmit = (evt) => {
      evt.preventDefault()
      subscribe({email});
    }

    const formClassnames = classNames({
        "bg-gray-100 border-gray-100": isLoading,
        'mt-2 mb-6': true,
    })

    const inputClassnames = classNames({
        "cursor-not-allowed ": isLoading,
        "flex-grow mt-1 p-2 border-none appearance-none focus:outline-none": true

    })

    const buttonClassname = classNames({
        'cursor-not-allowed opacity-50': isLoading,
        'ml-2 border-2 border-gray-200 p-2 rounded-lg hover:bg-black hover:text-white focus:outline-none focus:bg-black focus:text-white':true
    })

    return (
        <div className='flex flex-col items-center'>
            <h4 className='mt-6'>Subscribe below to get notified!</h4>
            <form className={formClassnames} onSubmit={handleSubmit}>
                <div className='w-full flex border-2 border-gray-200 focus-within:border-black rounded-lg p-2'>
                    <input value={email} onChange={handleEmailChange} name="email-address" disabled={isLoading} className={inputClassnames} type="email" id="email-address" placeholder="elonmusk@tesla.com" />
                    <button type='submit' disabled={isLoading} className={buttonClassname}>
                        {
                            isLoading? 'Processing': 'Sign up'
                        }
                    </button>
                </div>
            </form>
        </div>
    )
}
