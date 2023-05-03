import React from 'react'

const Contact = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => (formObject[key] = value));
    console.log(formObject);
    fetch('/api/hello', {
      method: 'POST',
      body: JSON.stringify(formObject),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log('Form data sent successfully!');
        // perform any other necessary actions upon successful form submission
  
        // clear the form fields
        event.target.reset();
      })
      .catch((error) => {
        console.error('There was a problem sending the form data:', error);
        // perform any other necessary error handling
      });
  };
  
  
  
  

  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen'>
        <h1 className='text-2xl font-bold text-center p-4'>Let us work together</h1>
        <form className='max-w-[600px] m-auto' onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-2'>
                <input className='border shadow-lg p-3' type="text" placeholder='Name' name="name" />
                <input className='border shadow-lg p-3' type="email" placeholder='Email' name="email" />
            </div>
            <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Subject' name="subject" />
            <textarea className='border shadow-lg p-3 w-full' cols="30" rows="10" placeholder='Message' name="message"></textarea>
            <button className='border shadow-lg p-3 w-full mt-2'>Submit</button>
        </form>
    </div>
  )
}

export default Contact
