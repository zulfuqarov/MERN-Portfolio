import React from 'react'

const AboutPage = () => {
    return (
        <div className='pt-[60px] w-full'>
            <p className="text-3xl md:text-4xl lg:text-4xl text-center font-bold text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text drop-shadow-lg shadow-orange-500">
                About the Portfolio Platform
            </p>
            <div className="mt-8 text-lg text-gray-700 px-4 md:px-16">
                <p>
                    Welcome to Portfolio, a platform designed to help individuals create and showcase their professional portfolios. Users can easily build their own portfolio pages, share them with others, and make meaningful connections. Each portfolio includes a contact section, allowing users to get in touch directly via the email used for registration.
                </p>
                <p className="mt-4">
                    In addition, the platform features a robust search functionality, enabling users to find professionals based on their specific job positions. By simply typing in the position they're looking for, users can discover others' portfolios and explore their work.
                </p>
                <p className="mt-4">
                    Our goal is to create a dynamic, engaging space where professionals can not only present themselves but also connect with others in their field. As we continue to develop this platform, we aim to enhance its functionality and provide even more opportunities for networking, collaboration, and growth.
                </p>
                <p className="mt-8 text-center text-sm text-gray-500">
                    This platform was created by <span className="font-semibold">Zulfuqarov Nebi</span> and is open to all users. You can connect with me through my social media profiles:
                </p>
                {/* <div className="mt-4 text-center">
                    <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 mx-2">Instagram</a> |
                    <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 mx-2">LinkedIn</a>
                </div> */}
            </div>
        </div>
    )
}

export default AboutPage
