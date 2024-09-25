import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

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

    const [state, handleSubmit] = useForm("meojbrzj");

    const handleCustomSubmit = (e) => {
        e.preventDefault();

        const error = validateForm();
        if (error) {
            setErrorMessage(error);
            return;
        }

        handleSubmit(e);
    };

    return (
        <section className="overflow-hidden pt-1 pb-10 lg:pt-[10px] lg:pb-[90px] bg-[#0d1224] text-[#E8E8E8]">
            {/* Header for "Contact Us" */}
            <div id="contact" className="relative z-50 my-12 lg:my-24 bg-[#0d1224] text-[#E8E8E8]">
                <div className="flex justify-center -translate-y-[1px]">
                    <div className="w-3/4">
                        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#3BC4C4] to-transparent w-full" />
                    </div>
                </div>
                <div className="flex justify-center my-5 lg:py-8">
                    <div className="flex items-center">
                        <span className="w-24 h-[2px] bg-[#2B2E35]"></span>
                        <span className="bg-[#0A1F44] w-fit text-[#E8E8E8] p-2 px-5 text-6xl rounded-md">
                            Contact Us
                        </span>
                        <span className="w-24 h-[2px] bg-[#2B2E35]"></span>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-[#0A1F44] mt-4 font-[sans-serif] text-[#E8E8E8]" style={{
                minHeight: '100vh', paddingTop: '10vh',
                paddingBottom: '10vh',
            }}>
                <div>
                    <h2 className="text-3xl font-extrabold text-[#E8E8E8]">Get In Touch</h2>
                    <p className="text-sm mt-4 leading-relaxed text-[#BFC5C5]">
                        Have a specific inquiry or looking to explore new opportunities? Our experienced team in London is ready to engage with you.
                    </p>

                    <form onSubmit={handleCustomSubmit}>
                        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                        {state.succeeded && <p className="text-green-500">Message sent successfully!</p>}

                        <div className="space-y-4 mt-8">
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="px-2 py-3 bg-[#E8E8E8] w-full text-[#0A1F44] text-sm border-b border-[#2B2E35] focus:border-[#3BC4C4] outline-none"
                            />
                            <ValidationError field="fullName" errors={state.errors} />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="px-2 py-3 bg-[#E8E8E8] w-full text-[#0A1F44] text-sm border-b border-[#2B2E35] focus:border-[#3BC4C4] outline-none"
                            />
                            <ValidationError field="email" errors={state.errors} />

                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone No."
                                value={formData.phone}
                                onChange={handleChange}
                                className="px-2 py-3 bg-[#E8E8E8] w-full text-[#0A1F44] text-sm border-b border-[#2B2E35] focus:border-[#3BC4C4] outline-none"
                            />
                            <ValidationError field="phone" errors={state.errors} />

                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="px-2 py-3 bg-[#E8E8E8] w-full text-[#0A1F44] text-sm border-b border-[#2B2E35] focus:border-[#3BC4C4] outline-none"
                            />
                            <ValidationError field="subject" errors={state.errors} />

                            <textarea
                                name="message"
                                placeholder="Write Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="px-2 pt-3 bg-[#E8E8E8] w-full text-[#0A1F44] text-sm border-b border-[#2B2E35] focus:border-[#3BC4C4] outline-none"
                                rows="5"
                            ></textarea>
                            <ValidationError field="message" errors={state.errors} />
                        </div>

                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-[#3BC4C4] hover:bg-[#2B2E35] text-[#0A1F44]"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#0A1F44' className="mr-2" viewBox="0 0 548.244 548.244">
                                <path fillRule="evenodd" d="M392.19 156.054L211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clipRule="evenodd" />
                            </svg>
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="z-10 relative h-full max-md:min-h-[350px]" style={{ height: "60vh" }}>
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
