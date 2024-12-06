import React from 'react'

const Error = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-9xl font-extrabold text-red-500">404</h1>
                <p className="text-2xl font-semibold text-gray-800 mt-4">
                    Oops! Page not found
                </p>
                <p className="text-lg text-gray-600 mt-2">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <div className="mt-6">
                    <a
                        href="/"
                        className="px-6 py-3 bg-blue-600 text-white rounded-md text-lg font-medium hover:bg-blue-700 transition-all"
                    >
                        Back to Home
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Error