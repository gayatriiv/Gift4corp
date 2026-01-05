// import React, { useState } from 'react'
// import Title from '../Components/Title'
// import { assets } from '../assets/assets'
// import NewsletteBox from '../Components/NewsletteBox'

// const Contact = () => {
//   const [form, setForm] = useState({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     email: '',
//     location: '',
//     organisation: '',
//     info: '',
//   });
//   const [status, setStatus] = useState('');

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus('');
//     try {
//       const res = await fetch('http://localhost:5000/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(form),
//       });
//       const data = await res.json();
//       if (data.success) {
//         setStatus('Message sent successfully!');
//         setForm({
//           firstName: '', lastName: '', phone: '', email: '', location: '', organisation: '', info: ''
//         });
//       } else {
//         setStatus(data.error || 'Failed to send message.');
//       }
//     } catch {
//       setStatus('Failed to send message.');
//     }
//   };

//   return (
//     <div className='pb-16'>
//       <div className='text-center text-2xl pt-10 border-t'>
//           <Title text1={'CONTACT '} text2={'US'}/>
//       </div>
//       <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28  '>
//             <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt='' />
//        <div className='flex flex-col justify-center items-start gap-6 '>
//               <p className='font-semibold text-xl text-gray-600'>Our Store

// </p>
//               <p className='text-gray-500'>Gifts4Corporate, 
//                 <br /> Bengaluru, India


// </p>
//                 <p className='text-gray-500'>+91-9620044002
//                 <br /> Email:sales@gifts4corp.com
// </p>
            
//             <p className='font-semibold text-xl text-gray-600'>Carres at gifts4corp</p>
//            <p className='text-gray-500'>
//             Learn more about our teams and job openings. We’re always looking for talented people to help us create the best online shopping experience for our customers.

// </p>
           
//            <button className='border borde-black px-8 py-4 text-sm hover:bg-black hover:text-white transtion-all duration-500'>Explore jobs</button>
//            <form className='w-full max-w-md flex flex-col gap-4 mt-8' onSubmit={handleSubmit}>
//                 <input
//                   type='text'
//                   name='firstName'
//                   placeholder='First name *'
//                   value={form.firstName}
//                   onChange={handleChange}
//                   required
//                   className='border px-4 py-2 rounded'
//                 />
//                 <input
//                   type='text'
//                   name='lastName'
//                   placeholder='Last name *'
//                   value={form.lastName}
//                   onChange={handleChange}
//                   required
//                   className='border px-4 py-2 rounded'
//                 />
//                 <input
//                   type='tel'
//                   name='phone'
//                   placeholder='Phone *'
//                   value={form.phone}
//                   onChange={handleChange}
//                   required
//                   className='border px-4 py-2 rounded'
//                 />
//                 <input
//                   type='email'
//                   name='email'
//                   placeholder='Email address *'
//                   value={form.email}
//                   onChange={handleChange}
//                   required
//                   className='border px-4 py-2 rounded'
//                 />
//                 <input
//                   type='text'
//                   name='location'
//                   placeholder='Location'
//                   value={form.location}
//                   onChange={handleChange}
//                   className='border px-4 py-2 rounded'
//                 />
//                 <input
//                   type='text'
//                   name='organisation'
//                   placeholder='Organisation'
//                   value={form.organisation}
//                   onChange={handleChange}
//                   className='border px-4 py-2 rounded'
//                 />
//                 <textarea
//                   name='info'
//                   placeholder='Any Other Information'
//                   value={form.info}
//                   onChange={handleChange}
//                   className='border px-4 py-2 rounded h-24'
//                 />
//                 <button type='submit' className='bg-black text-white px-6 py-2 rounded hover:bg-gray-800'>Send Message</button>
//                 {status && <p className='text-green-600'>{status}</p>}
//               </form>




//        </div>
//       </div>

// <NewsletteBox/>
     
//     </div>
//   )
// }

// export default Contact


import React, { useState } from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsletteBox from '../Components/NewsletteBox'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaPaperPlane, FaCheckCircle } from 'react-icons/fa'

const Contact = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    location: '',
    organisation: '',
    info: '',
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    setIsSubmitting(true);
    
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('Message sent successfully!');
        setForm({
          firstName: '', lastName: '', phone: '', email: '', 
          location: '', organisation: '', info: ''
        });
      } else {
        setStatus(data.error || 'Failed to send message.');
      }
    } catch {
      setStatus('Failed to send message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='pb-16'>
      {/* Hero Section */}
      <div className='relative h-64 bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center'>
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='relative z-10 text-center text-white px-4'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>Get In Touch</h1>
          <p className='text-lg md:text-xl'>We'd love to hear from you</p>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20'>
        <div className='bg-white rounded-2xl shadow-2xl p-6 md:p-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            
            {/* Left Column - Contact Info */}
            <div>
              <div className='mb-10'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
                    <FaMapMarkerAlt className='text-blue-600 text-xl' />
                  </div>
                  <div>
                    <h3 className='font-bold text-xl text-gray-800'>Our Store</h3>
                    <p className='text-gray-600 mt-1'>
                      Gifts4Corporate, <br />
                      Bengaluru, India
                    </p>
                  </div>
                </div>

                <div className='flex items-center gap-3 mb-6'>
                  <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center'>
                    <FaPhone className='text-green-600 text-xl' />
                  </div>
                  <div>
                    <h3 className='font-bold text-xl text-gray-800'>Contact</h3>
                    <p className='text-gray-600 mt-1'>
                      +91-9620044002 <br />
                      sales@gifts4corp.com
                    </p>
                  </div>
                </div>

                <div className='flex items-center gap-3'>
                  <div className='w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center'>
                    <FaBriefcase className='text-purple-600 text-xl' />
                  </div>
                  <div>
                    <h3 className='font-bold text-xl text-gray-800'>Careers at gifts4corp</h3>
                    <p className='text-gray-600 mt-1 mb-4'>
                      Learn more about our teams and job openings. We're always looking for talented people.
                    </p>
                    <button className='border-2 border-gray-800 px-8 py-3 text-sm font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 rounded-lg hover:scale-105 transform'>
                      Explore Jobs
                    </button>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className='hidden lg:block'>
                <img 
                  className='w-full rounded-xl shadow-lg object-cover h-64'
                  src={assets.contact_img} 
                  alt='Contact us' 
                />
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className='mb-8'>
                <h2 className='text-3xl font-bold text-gray-800 mb-4'>Send us a message</h2>
                <p className='text-gray-600'>
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              <form className='space-y-6' onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      First name *
                    </label>
                    <input
                      type='text'
                      name='firstName'
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      className='w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300'
                      placeholder='John'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Last name *
                    </label>
                    <input
                      type='text'
                      name='lastName'
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      className='w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300'
                      placeholder='Doe'
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Phone *
                    </label>
                    <input
                      type='tel'
                      name='phone'
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className='w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300'
                      placeholder='+91 9876543210'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Email *
                    </label>
                    <input
                      type='email'
                      name='email'
                      value={form.email}
                      onChange={handleChange}
                      required
                      className='w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300'
                      placeholder='john@example.com'
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Location
                    </label>
                    <input
                      type='text'
                      name='location'
                      value={form.location}
                      onChange={handleChange}
                      className='w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300'
                      placeholder='City, Country'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Organisation
                    </label>
                    <input
                      type='text'
                      name='organisation'
                      value={form.organisation}
                      onChange={handleChange}
                      className='w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300'
                      placeholder='Company name'
                    />
                  </div>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Any Other Information
                  </label>
                  <textarea
                    name='info'
                    value={form.info}
                    onChange={handleChange}
                    rows='4'
                    className='w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none'
                    placeholder='Tell us more about your requirements...'
                  />
                </div>

                <button 
                  type='submit' 
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-lg'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>

                {status && (
                  <div className={`p-4 rounded-lg flex items-center gap-3 ${
                    status.includes('success') 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {status.includes('success') ? (
                      <FaCheckCircle className='text-green-500' />
                    ) : (
                      <div className='w-5 h-5 border-2 border-red-500 rounded-full flex items-center justify-center'>
                        <span className='text-red-500 text-sm'>!</span>
                      </div>
                    )}
                    <p className='font-medium'>{status}</p>
                  </div>
                )}
              </form>

              {/* Mobile Image */}
              <div className='mt-10 lg:hidden'>
                <img 
                  className='w-full rounded-xl shadow-lg'
                  src={assets.contact_img} 
                  alt='Contact us' 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16'>
        <div className='bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
            <div>
              <h3 className='font-bold text-xl text-gray-800 mb-3'>Response Time</h3>
              <p className='text-gray-600'>We typically respond within 24 hours</p>
            </div>
            <div>
              <h3 className='font-bold text-xl text-gray-800 mb-3'>Support Hours</h3>
              <p className='text-gray-600'>Mon-Fri: 9 AM - 6 PM IST</p>
            </div>
            <div>
              <h3 className='font-bold text-xl text-gray-800 mb-3'>Bulk Orders</h3>
              <p className='text-gray-600'>Special discounts for corporate orders</p>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-16'>
        <NewsletteBox />
      </div>
    </div>
  )
}

export default Contact