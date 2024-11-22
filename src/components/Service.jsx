import React, { useState, useContext } from 'react';
import Button from './Button';
import { PortfolioContext } from '../context/ContextPorfolio'


const Service = () => {

    const { portfolioData, seteditValue, editValue } = useContext(PortfolioContext)
    const { service, serviceDescription } = portfolioData

    const [addService, setAddService] = useState(service);
    const [editServiceShow, setEditServiceShow] = useState(null);

    const handleAddService = () => {

        const newService = { name: '', description: '', img: '' };

        const updatedServices = [...addService, newService];

        setAddService(updatedServices);

        seteditValue({
            ...editValue,
            service: updatedServices
        })
    };

    const removeItem = (index) => {
        const newService = [...addService];
        newService.splice(index, 1);
        setAddService(newService);

        seteditValue({ ...editValue, service: newService });
    };

    const handleEditServiceShow = (index) => {
        setEditServiceShow(editServiceShow === index ? null : index);
    };
    const handleImageChange = (event, index) => {
        const file = event.target.files[0];
        if (!file) return;

        const newServiceImg = [...addService];
        newServiceImg[index].img = URL.createObjectURL(file);
        setAddService(newServiceImg);
    };
    const handleInputChange = (event, index, field) => {
        const value = event.target.value;
        const newService = [...addService];
        newService[index][field] = value;
        setAddService(newService);
    };

    // edit Service description
    const [ServiceDescription, setServiceDescription] = useState({
        show: false,
        description: serviceDescription
    })
    const handleAboutDescriptionChange = (event) => {
        setServiceDescription({
            ...ServiceDescription,
            description: event.target.value
        })
    }
    const showAboutDescription = () => {

        if (ServiceDescription.show) {
            seteditValue({
                ...editValue,
                serviceDescription: ServiceDescription.description
            });
        }

        setServiceDescription({
            ...ServiceDescription,
            show: !ServiceDescription.show,
        })
    }

    return (
        <div className="bg-[#111827] w-full break-words">
            <div className="container mx-auto py-[90px] px-4">
                <div className="w-full md:w-[445px] mb-8">
                    <p className="text-[32px] md:text-[42px] text-white font-bold">
                        My <span className="text-[#EAB308]">Service</span>
                    </p>

                    {
                        ServiceDescription.show
                            ?
                            <textarea
                                value={ServiceDescription.description || ""}
                                onChange={handleAboutDescriptionChange}
                                placeholder='write you own Service description'
                                className="w-[400px] leading-[30px] text-[#9CA3AF] bg-transparent border border-dashed border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                                rows="4"

                            />
                            :
                            <span className="text-[#6B7280] leading-[24px] md:leading-[30px] inline-block py-4">
                                {ServiceDescription.description ? ServiceDescription.description :
                                    " write you own Service description"
                                }
                            </span>
                    }
                    <div className="pb-[15px]">
                        {
                            ServiceDescription.show
                                ?
                                <button
                                    onClick={showAboutDescription}
                                >

                                    <i className="fa-solid fa-check text-green-500 text-[17px] cursor-pointer"></i>
                                </button>
                                :
                                <button
                                    onClick={showAboutDescription}
                                >
                                    <i className="fa-solid fa-pen text-[#6B7280] text-[17px] cursor-pointer"></i>
                                </button>
                        }
                    </div>

                    <Button func={handleAddService} text="Add Services" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-8">
                    {addService.map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#020617] p-6 text-center flex flex-col justify-center items-center rounded-[20px] md:rounded-[30px] min-h-[300px] md:min-h-[342px] relative group"
                        >
                            <div className="absolute top-[15px] w-[50px] items-center justify-between right-[20px] hidden group-hover:flex">
                                <button onClick={() => removeItem(index)}>
                                    <i className="fa-solid fa-trash text-red-500 text-[17px]"></i>
                                </button>
                                {
                                    editServiceShow === index ? null :
                                        <button onClick={() => handleEditServiceShow(index)}>
                                            <i className="fa-regular fa-pen-to-square text-slate-400 text-[17px]"></i>
                                        </button>
                                }
                            </div>

                            {/* Image Section */}
                            <div className="flex justify-center items-center w-[40px] h-[40px] cursor-pointer">
                                {service.img ? (
                                    <button className="relative !cursor-pointer w-full h-full">
                                        <div
                                            className="w-[40px] h-[40px] cursor-pointer"
                                            alt="Service"
                                            style={{
                                                backgroundImage: `url(${service.img})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                backgroundRepeat: "no-repeat",
                                            }}
                                        >
                                        </div>

                                        <input
                                            onChange={(event) => handleImageChange(event, index)}
                                            type="file"
                                            accept="image/*"
                                            className="absolute top-0 left-0 opacity-0 z-10 w-full h-full !cursor-pointer"
                                        />
                                    </button>
                                ) : (
                                    <label className="flex relative flex-col items-center justify-center w-[40px] h-[40px] border border-dashed border-gray-400 rounded-lg !cursor-pointer hover:bg-gray-100">
                                        <span className="text-[17px] text-gray-500 !cursor-pointer">+</span>
                                        <input
                                            onChange={(event) => handleImageChange(event, index)}
                                            type="file"
                                            accept="image/*"
                                            className="absolute opacity-0 w-full h-full !cursor-pointer"
                                        />
                                    </label>
                                )}
                            </div>

                            {/* Edit Mode */}
                            {editServiceShow === index ? (
                                <div className="flex flex-col w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg mt-4">
                                    <h2 className="text-xl md:text-2xl text-white font-semibold text-center mb-4">
                                        Create Your Service
                                    </h2>
                                    <div className="mb-4">
                                        <label
                                            htmlFor="name"
                                            className="block text-white text-sm font-semibold mb-2"
                                        >
                                            Service Name
                                        </label>
                                        <input
                                            type="text"
                                            value={service.name}
                                            onChange={(e) => handleInputChange(e, index, "name")}
                                            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-400"
                                            placeholder="Enter service name"
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
                                            value={service.description}
                                            onChange={(e) => handleInputChange(e, index, "description")}
                                            rows="4"
                                            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-400"
                                            placeholder="Describe your service"
                                        ></textarea>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => {
                                                handleEditServiceShow(index);
                                                seteditValue({ ...editValue, service: addService });
                                            }}
                                            type="submit"
                                            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col justify-between items-center">
                                    <div className="w-[136px] py-4">
                                        <p className="text-white text-lg md:text-[26px] font-bold">
                                            {service.name || "Service Name"}
                                        </p>
                                    </div>
                                    <div className="w-full md:w-[286px]">
                                        <p className="text-[#6B7280] text-sm md:text-base leading-[24px] md:leading-[30px]">
                                            {service.description || "Service Description"}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Service;
