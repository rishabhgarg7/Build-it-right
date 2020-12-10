import React, {useState} from 'react'
import classNames from "classnames";
import { useMutation } from 'react-query';

export default function SignupForm() {
    const [email, setEmail] = useState('')
    const handleEmailChange = (evt) => {
        setEmail(evt.target.value)
      }

    const subscribe = async ({ email }) => {

        const header_body = {
            method: 'POST',
            body: JSON.stringify({email:email,tags:['builditright']}),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'}
        }
        const response = await fetch(`/api/subscribe`, header_body)
        if (!response.ok){
            const errorMessage = (responseData && responseData.message) || response.statusText;
            throw new Error(errorMessage)
        }
        const data = await response.json();
        return data
 
   };

   const [onSubmitData, {isLoading, isSuccess, isError}] = useMutation(subscribe)
//    const [onSubmitData, {isLoading, isSuccess, isError}] = useMutation((email) => axios.post('/api/subscribe',email), )
//    const [onSubmitData, {isLoading, isSuccess, isError}] = useMutation((email) => axios.post('/api/subscribe',email).then((res)=>res.data), )
   console.log({isError,isLoading,isSuccess})

   
    const handleSubmit = (evt) => {
      evt.preventDefault()
      onSubmitData({email})
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
                            isLoading? 'Subscribing..': isError?'Could not subscribe': isSuccess? 'Subscribed': 'Sign up'
                        }
                    </button>
                </div>
            </form>
        </div>
    )
}
