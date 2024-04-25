import { React, useState } from 'react'
import { validateEmail } from '../utils/helpers';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
          setEmail(inputValue);
        } 
      };
      const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    
        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email)) {
          setErrorMessage('Email is invalid');
          // We want to exit out of this code block if something is wrong so that the user can correct it
          return;
          // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
        }
      };
  return (
    <div className='max-w-[1200px] mx-auto sm:py-20 p-5' id="contact">
      <div className='text-center'>
        <h2 className='text-4xl font-bold leading-tight primary-color'>Contact Me</h2>
      </div>

      <div className='max-w-[800px] mx-auto'>
        <div className='mt-6 bg-[#262626] rounded-xl'>
            <div className="p-10">

                <form action="https://getform.io/f/paoxklgb" method="POST">
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4'>
                        <div>
                            <div className='mt-2.5'>
                                <input type="text" name="name" id="" placeholder='Your Name' className='w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-red-600 shadow-input' required/>
                            </div>
                        </div>

                        <div>
                            <div className='mt-2.5'>
                                <input onChange={handleInputChange} type="email" name="email" id="" placeholder='Your Email' className='w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-red-600 shadow-input' required/>
                            </div>
                        </div>

                        <div className='sm:col-span-2'>
                            <div className='mt-2.5'>
                                <textarea name="message" id="" placeholder='Your Message' className=' w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-red-600 shadow-input' rows="4" required>
                                </textarea>                         
                            </div>
                        </div>

                        <div className='sm:col-span-2'>
                            <button onSubmit={handleFormSubmit} type='submit' className='text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md shadow-button'>
                            Send
                            </button>
                        </div>
                    </div>
                </form>
                {errorMessage && (
                    <div>
                    <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact