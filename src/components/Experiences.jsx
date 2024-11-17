import React, { useState } from 'react';
import Button from './Button';
const Experiences = () => {

    // edit Experiences  description
    const [ExperiencesDescription, setExperiencesDescription] = useState({
        show: false,
        description: 'There are many variations of passages ofLorem Ipsum available, but the majority havesuffered alteration in some form, by injected humour'
    })
    const handlePortfolioDescriptionChange = (event) => {
        setExperiencesDescription({
            ...ExperiencesDescription,
            description: event.target.value
        })
    }
    const showPortfolioDescription = () => {
        setExperiencesDescription({
            ...ExperiencesDescription,
            show: !ExperiencesDescription.show,
        })
    }


    // addExperiences 
    const [addExperiences, setaddExperiences] = useState([
        {
            name: 'Front End Developer',
            description: 'Build user-friendly interfaces, optimize performance, and maintain code quality.',
            date: '2024-11-18', // Eklenen tarih
        },
        {
            name: 'Back End Developer',
            description: 'Develop server-side logic, manage databases, and optimize application performance.',
            date: '2023-09-10', // Eklenen tarih
        },
        {
            name: 'Full Stack Developer',
            description: 'Develop both front-end and back-end features for web applications.',
            date: '2022-05-15', // Eklenen tarih
        }
    ]);

    const [editExperiences, seteditExperiences] = useState(null);

    const handleAddService = () => {
        setaddExperiences([...addExperiences, { name: '', description: '', date: '' }]);
    };

    const removeItem = (index) => {
        const newService = [...addExperiences];
        newService.splice(index, 1);
        setaddExperiences(newService);
    };

    const handleEditExperiencesShow = (index) => {
        seteditExperiences(editExperiences === index ? null : index);
    };

    const handleInputChange = (event, index, field) => {
        const value = event.target.value;
        const newService = [...addExperiences];
        newService[index][field] = value;
        setaddExperiences(newService);
    };


    return (
        <div className="bg-[#111827] w-full py-12 break-words ">
            <div className="container mx-auto px-6">
                <div className="w-full md:w-[445px] mb-8">
                    <p className="text-[32px] md:text-[42px] text-white font-bold">
                        My <span className="text-[#EAB308]">Experiences</span>
                    </p>
                    <div className='py-[30px]'>
                        {
                            ExperiencesDescription.show
                                ?
                                <textarea
                                    value={ExperiencesDescription.description || ""}
                                    onChange={handlePortfolioDescriptionChange}
                                    placeholder='write you own Experiences description'
                                    className="w-[400px] leading-[30px] text-[#9CA3AF] bg-transparent border border-dashed border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                                    rows="4"

                                />
                                :
                                <span className='leading-[30px] text-[#9CA3AF]'>
                                    {ExperiencesDescription.description ? ExperiencesDescription.description :
                                        " write you own Experiences description"
                                    }
                                </span>
                        }
                        <div className="pt-[20px]">
                            {
                                ExperiencesDescription.show
                                    ?
                                    <button
                                        onClick={showPortfolioDescription}
                                    >

                                        <i class="fa-solid fa-check text-green-500 text-[17px] cursor-pointer"></i>
                                    </button>
                                    :
                                    <button
                                        onClick={showPortfolioDescription}
                                    >
                                        <i className="fa-solid fa-pen text-[#6B7280] text-[17px] cursor-pointer"></i>
                                    </button>
                            }

                        </div>
                    </div>
                    <Button func={handleAddService} text="Add Experiences" className="mt-6" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
                    {addExperiences.map((Experiences, index) => (
                        <div
                            key={index}
                            className="bg-[#020617] p-6 text-center flex flex-col justify-center items-center rounded-[20px] md:rounded-[30px] min-h-[320px] md:min-h-[350px] h-full relative group transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-[#1F2937]"
                        >
                            <div className="absolute top-4 right-4 w-[50px] items-center justify-between hidden group-hover:flex">
                                <button onClick={() => removeItem(index)}>
                                    <i className="fa-solid fa-trash text-red-500 text-[18px]"></i>
                                </button>
                                <button onClick={() => handleEditExperiencesShow(index)}>
                                    <i className="fa-regular fa-pen-to-square text-slate-400 text-[18px]"></i>
                                </button>
                            </div>

                            {/* Edit Mode */}
                            {editExperiences === index ? (
                                <div className="flex flex-col w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg mt-4">
                                    <h2 className="text-xl md:text-2xl text-white font-semibold text-center mb-4">
                                        Your Experiences
                                    </h2>
                                    <div>
                                        <input
                                            className="w-full h-[36px] border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#EAB308] focus:border-[#EAB308] placeholder-gray-500 transition duration-200 ease-in-out"
                                            type="date"
                                            placeholder="mm/dd/yyyy"
                                            onChange={(e) => handleInputChange(e, index, "date")}
                                        />
                                    </div>
                                    <div className="mb-4 mt-6">
                                        <label
                                            htmlFor="name"
                                            className="block text-white text-sm font-semibold mb-2"
                                        >
                                            Experiences Name
                                        </label>
                                        <input
                                            type="text"
                                            value={Experiences.name}
                                            onChange={(e) => handleInputChange(e, index, "name")}
                                            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-400"
                                            placeholder="Enter Experiences name"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label
                                            htmlFor="description"
                                            className="block text-white text-sm font-semibold mb-2"
                                        >
                                            Description
                                        </label>
                                        <textarea
                                            value={Experiences.description}
                                            onChange={(e) => handleInputChange(e, index, "description")}
                                            rows="4"
                                            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-400"
                                            placeholder="Describe your Experiences"
                                        ></textarea>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => handleEditExperiencesShow(index)}
                                            type="submit"
                                            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg transition duration-300 ease-in-out"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col justify-evenly w-full h-full text-left space-y-4">
                                    <div className="py-4">
                                        <p className="text-[#EAB308] text-lg md:text-[26px] font-semibold">
                                            {Experiences.date || "Experiences date"}
                                        </p>
                                    </div>
                                    <div className="w-full py-4">
                                        <p className="text-white w-full h-full text-lg md:text-[26px] font-semibold">
                                            {Experiences.name || "Experiences Name"}
                                        </p>
                                    </div>
                                    <div className="w-full md:w-[286px]">
                                        <p className="text-[#6B7280] w-full text-sm md:text-base leading-[24px] md:leading-[30px]">
                                            {Experiences.description || "Experiences Description"}
                                        </p>
                                    </div>
                                </div>

                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Experiences