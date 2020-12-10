import Head from 'next/head'
import {useState} from 'react'

export default function Home() {

  const [email, setEmail] = useState('')
  const handleEmailChange = (evt) => {
    setEmail(evt.target.value)
  }
  const handleSubmit = (evt) => {
    evt.preventDefault()

    console.log(email)
  }
  return (
    <div className={''}>
      <Head>
        <title>Build it right - The right way to build your product.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='main-content max-w-screen-md mx-auto p-2  flex flex-col items-center '>
        <div className='hero-headline flex flex-col items-center p-8'>
          <h2 className='mt-4 text-6xl md:text-7xl font-bold' style={{color:"#124a63"}}>build. it. right.</h2>
          <h4 className='mt-6 md:mt-4 text-base md:uppercase font-normal md:font-medium'>Validate your idea before investing 100+ hrs in building it.</h4>
        </div>
        <div className='why-validate mt-4 flex flex-col items-center'>
            <h3 className='font-bold'>Why validate?</h3>
            <h4 className='mt-2 md:text-xl text-center'>There are two ways to build a product.</h4>
            <div className='two-ways mt-6 md:flex md:justify-center md:items-center'>
                <div className='first-way-lhs p-3 border-2 border-dashed border-red-500 rounded-lg'>
                    <ol className='grid grid-rows-6 gap-y-3'>
                      <li> 1. Have an idea.</li>
                      <li> 2. Start building the product.</li>
                      <li> 3. Continue building it for months.</li>
                      <li> 4. Launch it.</li>
                      <li> 5. Came to know that nobody wants it.</li>
                      <li> 6. Shut it down.</li>
                    </ol>
                </div>
                <div className='second-way-rhs mt-6 md:mt-0 md:ml-4 p-3 border-4 border-green-500 rounded-lg font-medium' style={{color:"#124a63"}}>
                    <ol className='grid grid-rows-6 gap-y-3'>
                      <li> 1. Have an idea.</li>
                      <li> 2. Build landing page with signup form.</li>
                      <li> 3. Enough Interest? Build it.</li>
                      <li> 4. Launch it.</li>
                      <li> 5. Earn from day one.</li>
                      <li> 6. Keep working on it..</li>
                    </ol>
                </div>
            </div>
            <div className='mt-4'>You know the right way. Don't you?</div>
        </div>
        <div className='how-validate hidden mt-12 flex flex-col items-center'>
          <h3 className='font-bold'>How to validate it?</h3>
            <ol className='mt-2 grid gap-y-3 '>
              <li>1. Create some quick graphical assets in your favourite desin tool.</li>
              <li>2. Build a landing page.</li>
              <li>3. Add those assets and signup form to landing page.</li>
              <li>4. Launch it.</li>
              <li>5. Share it on platform where your target audience hang out.</li>
              <li>6. Validate on the basis of total page views and number of subscribers.</li>
            </ol>
        </div>
        <hr />
        <div className='cta-section mt-8 flex flex-col items-center'>
          <h2 className='text-2xl text-center'>We're building tools for <span className='font-bold' style={{color:"#124a63"}}>entrepreneurs</span> like you.</h2>
          <h4 className='mt-6'>Subscribe below to get notified!</h4>
          <form className='mt-1 mb-6' onSubmit={handleSubmit}>
            <div className='w-full flex border-2 border-gray-200 focus-within:border-black rounded-lg p-2'>
              <input value={email} onChange={handleEmailChange} name="email-address" className=" flex-grow mt-1 p-2 border-none appearance-none focus:outline-none" type="email" id="email-address" placeholder="elonmusk@tesla.com" />
              <button type='submit' className='ml-2 border-2 border-gray-200 p-2 rounded-lg hover:bg-black hover:text-white focus:outline-none  focus:bg-black focus:text-white'>Sign Up</button>
            </div>
          </form>
        </div>
      </main>
    </div>
    )
}
