import React, { useState, useContext } from 'react'
import Button from './Button'
import { PortfolioContext } from '../context/ContextPorfolio'

const Portfolio = () => {

    const { portfolioData, seteditValue, editValue } = useContext(PortfolioContext)
    const { myPortfolio, myPortfolioDescription } = portfolioData

    // edit portfolio description
    const [portfolioDescription, setportfolioDescription] = useState({
        show: false,
        description: myPortfolioDescription
    })
    const handlePortfolioDescriptionChange = (event) => {
        setportfolioDescription({
            ...portfolioDescription,
            description: event.target.value
        })
    }
    const showPortfolioDescription = () => {

        if(portfolioDescription.show){
            seteditValue({
                ...editValue,
                myPortfolioDescription: portfolioDescription.description
            });
        }

        setportfolioDescription({
            ...portfolioDescription,
            show: !portfolioDescription.show,
        })
    }


    // add portfolio img 
    const [portfolioImg, setportfolioImg] = useState(myPortfolio)
    const handleAddPortfolio = () => {
        if (portfolioImg.length >= 5) {
            return
        }

        const newPortfolioImg = { image: null, imageObjUrl: null };
        const updatePorfolio = [...portfolioImg, newPortfolioImg]
        setportfolioImg(updatePorfolio)
        seteditValue({ ...editValue, myPortfolio: updatePorfolio })
    }
    const handleImageChange = (event, index) => {
        const file = event.target.files[0];
        if (!file) return;

        const newPortfolioImg = [...portfolioImg];
        newPortfolioImg[index].image = file;
        newPortfolioImg[index].imageName = file.name;
        newPortfolioImg[index].imageObjUrl = URL.createObjectURL(file);
        setportfolioImg(newPortfolioImg);
        seteditValue({ ...editValue, myPortfolio: newPortfolioImg })

    };



    return (
        <div className="mx-auto container px-4">
            <div className='w-full flex flex-col justify-center items-center py-[30px]'>
                <div className='w-[350px] text-center flex flex-col justify-start items-center '>
                    <p className='text-[42px] font-bold text-white'>My <span className='text-[#EAB308]'>Portfolio</span></p>
                    <div>
                        {
                            portfolioDescription.show
                                ?
                                <textarea
                                    value={portfolioDescription.description || ""}
                                    onChange={handlePortfolioDescriptionChange}
                                    placeholder='write you own portfolio description'
                                    className="w-[400px] leading-[30px] text-[#9CA3AF] bg-transparent border border-dashed border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                                    rows="4"

                                />
                                :
                                <span className='leading-[30px] text-[#9CA3AF]'>
                                    {portfolioDescription.description ? portfolioDescription.description :
                                        " write you own portfolio description"
                                    }
                                </span>
                        }
                        <div className="pt-[10px]">
                            {
                                portfolioDescription.show
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
                </div>
            </div>
            <div className="py-8">
                <Button func={handleAddPortfolio} text="Add Portfolio" />
            </div>
            {portfolioImg.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                    {/* Sol Div - Yarı genişlik */}
                    <div className="h-64 md:h-[565px]">
                        <label
                            className="flex relative flex-col items-center justify-center w-full h-full border border-dashed border-gray-400 rounded-lg cursor-pointer hover:bg-gray-100"
                            style={{
                                backgroundImage: `url(${portfolioImg[0].imageObjUrl && portfolioImg[0].imageObjUrl !== null ? portfolioImg[0].imageObjUrl : portfolioImg[0].image
                                    })`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <span className="text-[17px] text-gray-500">+</span>
                            <input
                                onChange={(event) => handleImageChange(event, 0)}
                                type="file"
                                accept="image/*"
                                className="absolute opacity-0 w-full h-full cursor-pointer"
                            />
                        </label>
                    </div>

                    {/* Sağ Div - 4 hücreli grid */}
                    {portfolioImg.length > 1 && (
                        <div className="grid grid-cols-2 gap-4">
                            {portfolioImg.slice(1).map((item, index) => (
                                <div key={index} className="h-32 md:h-[265px]">
                                    <label
                                        className="flex relative flex-col items-center justify-center w-full h-full border border-dashed border-gray-400 rounded-lg cursor-pointer hover:bg-gray-100"
                                        style={{
                                            backgroundImage: `url(${item.imageObjUrl && item.imageObjUrl !== null ? item.imageObjUrl : item.image
                                                })`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            backgroundRepeat: "no-repeat",
                                        }}
                                    >
                                        <span className="text-[17px] text-gray-500">+</span>
                                        <input
                                            onChange={(event) => handleImageChange(event, ++index)}
                                            type="file"
                                            accept="image/*"
                                            className="absolute opacity-0 w-full h-full cursor-pointer"
                                        />
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Portfolio
