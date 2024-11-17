import React from 'react'

const Button = ({ text, func }) => {
    return (
        <button onClick={func} className='w-[142px] h-[43px] bg-[#FACC15] text-black rounded font-semibold'>
            {text}
        </button>
    )
}

export default Button
