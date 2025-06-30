import React, { useState } from 'react';
import { FaLocationArrow, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
        setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length === 0) {
            console.log('Form submitted:', formData);
            setSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
            setErrors(formErrors);
            setSubmitted(false);
        }
    };

    return (
        <section id='contact' className="max-w-6xl mx-auto p-6 bg-base-100 shadow-md rounded-md my-20">
            <h2 className="text-3xl font-semibold mb-6 text-center">Contact Me</h2>

            {
                submitted && (
                    <p className="mb-4 text-green-600 font-medium text-center">
                        Thank you! Your message has been sent.
                    </p>
                )
            }

            <div className='flex lg:flex-row md:flex-row flex-col gap-6'>
                {/* Contact Info Section */}
                <div className='space-y-5 bg-gray-50 p-3'>
                    <p className='flex items-center gap-2'><MdEmail /> jaber.ahmed4770@gmail.com</p>
                    <p className='flex items-center gap-2'><FaPhoneAlt /> +39 35 0845 1287</p>
                    <p className='flex items-center gap-2'><FaLocationArrow /> Messina, Italy</p>
                    <p className='flex items-center gap-2'><FaWhatsapp /> +8801645012309</p>
                </div>
                <form onSubmit={handleSubmit} noValidate className="flex-1">
                    {/* Name Field */}
                    <div className="form-control mb-6">
                        <label htmlFor="name" className="label">
                            <span className="label-text font-semibold text-gray-700">Name</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`input input-bordered w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition ${errors.name ? 'border-red-500 focus:ring-red-300' : ''}`}
                            placeholder="Your Name"
                        />
                        {errors.name && <p className="text-red-600 mt-1 text-sm italic">{errors.name}</p>}
                    </div>

                    {/* Email Field */}
                    <div className="form-control mb-6">
                        <label htmlFor="email" className="label">
                            <span className="label-text font-semibold text-gray-700">Email</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`input input-bordered w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition ${errors.email ? 'border-red-500 focus:ring-red-300' : ''}`}
                            placeholder="your.email@example.com"
                        />
                        {errors.email && <p className="text-red-600 mt-1 text-sm italic">{errors.email}</p>}
                    </div>

                    {/* Subject Field */}
                    <div className="form-control mb-6">
                        <label htmlFor="subject" className="label">
                            <span className="label-text font-semibold text-gray-700">Subject</span>
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className={`input input-bordered w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition ${errors.subject ? 'border-red-500 focus:ring-red-300' : ''}`}
                            placeholder="Subject"
                        />
                        {errors.subject && <p className="text-red-600 mt-1 text-sm italic">{errors.subject}</p>}
                    </div>

                    {/* Message Field */}
                    <div className="form-control mb-8">
                        <label htmlFor="message" className="label">
                            <span className="label-text font-semibold text-gray-700">Message</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            className={`textarea textarea-bordered resize-none w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition ${errors.message ? 'border-red-500 focus:ring-red-300' : ''}`}
                            placeholder="Write your message here..."
                        ></textarea>
                        {errors.message && <p className="text-red-600 mt-1 text-sm italic">{errors.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-full py-3 text-lg font-semibold tracking-wide rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section >
    );
};

export default Contact;
