import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        if (!formData.fullName) return 'Please fill in your full name.';
        if (!formData.email) return 'Please fill in your email.';
        if (!formData.phone) return 'Please fill in your phone number.';
        if (!formData.subject) return 'Please fill in the subject.';
        if (!formData.message) return 'Please fill in your message.';
        return '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const error = validateForm();
        if (error) {
            setErrorMessage(error);
            return;
        }

        // Use Formspree endpoint to submit the form
        fetch('https://formspree.io/f/meojbrzj', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fullName: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                subject: formData.subject,
                message: formData.message
            }),
        }).then(response => {
            if (response.ok) {
                setSuccessMessage('Message sent successfully!');
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
                setErrorMessage('');
            } else {
                setErrorMessage('Failed to send message. Please try again.');
            }
        }).catch(() => {
            setErrorMessage('Failed to send message. Please try again.');
        });
    };

    return (
        <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-[#0d1224] text-[#E8E8E8]">

            <div className="grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-[#0d1224] mt-4 font-[sans-serif] text-[#E8E8E8]" style={{
                minHeight: '100vh', paddingTop: '10vh',
                paddingBottom: '10vh'
            }}>
                <div>
                    <h2 className="text-3xl font-extrabold text-[#E8E8E8]">Get In Touch</h2>
                    <p className="text-sm mt-4 leading-relaxed text-[#BFC5C5]">
                        Have a specific inquiry or looking to explore new opportunities? Our experienced team in London is ready to engage with you.
                    </p>

                    <form onSubmit={handleSubmit}>
                        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                        {successMessage && <p className="text-green-500">{successMessage}</p>}

                        <div className="space-y-4 mt-8">
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="px-2 py-3 bg-[#E8E8E8] w-full text-[#0A1F44] text-sm border-b border-[#2B2E35] focus:border-[#3BC4C4] outline-none"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="px-2 py-3 bg-[#E8E8E8] w-full text-[#0A1F44] text-sm border-b border-[#2B2E35] focus:border-[#3BC4C4] outline-none"
                            />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone No."
                                value={formData.phone}
                                onChange={handleChange}
                                className="px-2 py-3 bg-[#E8E8E8] w-full text-[#0A1F44] text-sm border-b border-[#2B2E35] focus:border-[#3BC4C4] outline-none"
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="px-2 py-3 bg-[#E8E8E8] w-full text-[#0A1F44] text-sm border-b border-[#2B2E35] focus:border-[#3BC4C4] outline-none"
                            />
                            <textarea
                                name="message"
                                placeholder="Write Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="px-2 pt-3 bg-[#E8E8E8] w-full text-[#0A1F44] text-sm border-b border-[#2B2E35] focus:border-[#3BC4C4] outline-none"
                                rows="5"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-[#3BC4C4] hover:bg-[#2B2E35] text-[#0A1F44]"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#0A1F44' className="mr-2" viewBox="0 0 548.244 548.244">
                                <path fillRule="evenodd" d="M392.19 156.054L211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clipRule="evenodd" />
                            </svg>
                            Send Message
                        </button>
                    </form>

                    <ul className="mt-4 flex flex-wrap justify-center gap-6">
                        <li className="flex items-center text-[#3BC4C4]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currentColor' viewBox="0 0 479.058 479.058">
                                <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                            </svg>
                            <a href="mailto:info@example.com" className="text-sm ml-4">
                                <strong>info@example.com</strong>
                            </a>
                        </li>
                        <li className="flex items-center text-[#3BC4C4]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currentColor' viewBox="0 0 482.6 482.6">
                                <path d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7z" />
                            </svg>
                            <a href="tel:+158996888" className="text-sm ml-4">
                                <strong>+158 996 888</strong>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="z-10 relative h-full max-md:min-h-[350px]">
                    <iframe
                        src="https://maps.google.com/maps?q=london&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                        frameBorder="0"
                        allowFullScreen
                        aria-hidden="false"
                        tabIndex="0"
                    ></iframe>
                </div>
            </div>

        </section>
    );
};

export default ContactUs;
