import React from 'react'

const Button = ({ text, func, classProps }) => {
    return (
        <button onClick={func} className={`w-[142px] h-[43px] transition-all bg-[#FACC15] text-black rounded font-semibold ${classProps}`}>
            {text}
        </button>
    )
}

export default Button
