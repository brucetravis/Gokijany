import React, { useState } from 'react'
import './Dropdowns.css'

export default function Dropdowns() {
    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [isOpen3, setIsOpen3] = useState(false)
    const [isOpen4, setIsOpen4] = useState(false)
    const [isOpen5, setIsOpen5] = useState(false)
    
    return (
    <div className='contact-dropdowns'>
        <div className='contact-dropdown'>
            <p 
            onClick={() => setIsOpen1(!isOpen1)}
            className='fs-5 d-flex align-items-center gap-4'
            >
                How will we Know that the trees have been planted?
                <svg
                style={{
                transform: isOpen1 ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.5s ease"
                }}
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                fill="currentColor" 
                className="bi bi-chevron-down" 
                viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                </svg>
            </p>

            {isOpen1 && (
                <div className='ml-4'>
                    We Geo Tag the areas where the trees have been planted so that 
                    you as our Volunteers can see where ther have been planted
                </div>
            )}
        </div>
        <div className='contact-dropdown'>
            <p
            onClick={() => setIsOpen2(!isOpen2)}
            className='fs-5 d-flex align-items-center gap-4'
            >
                Can we partner with you to maximize our environmental impact?
                <svg
                style={{
                    transform: isOpen2 ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.5s ease"
                }}
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                fill="currentColor" 
                className="bi bi-chevron-down" 
                viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                </svg>
            </p>
            {isOpen2 && (
                <div>
                    We welcome all Parternships. Our goal is to transform our
                    environment into a carbon free habitat
                </div>
            )}
        </div>
        <div className='contact-dropdown'>
            <p
            onClick={() => setIsOpen3(!isOpen3)}
            className='fs-5 d-flex align-items-center gap-4'>
                What is Goshilingy?
                <svg
                style={{
                    transform: isOpen3 ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.5s ease"
                }}
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                fill="currentColor" 
                className="bi bi-chevron-down" 
                viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                </svg>
            </p>
            {isOpen3 && (
                <div>
                    Goshilingy is our crypto currency which you will be rewarded 
                    with according your total carbon credits. The ratio is 1:1.
                    1 Carbon cretit = 1 Goshilingy
                </div>
            )}
        </div>
        <div className='contact-dropdown'>
            <p
            onClick={() => setIsOpen4(!isOpen4)}
            className='fs-5 d-flex align-items-center gap-4'>
                How will I be be redeeming my carbon points?
                <svg
                style={{
                    transform: isOpen4 ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.5s ease"
                }}
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                fill="currentColor" 
                className="bi bi-chevron-down" 
                viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                </svg>
            </p>
            {isOpen4 && (
                <div>
                    We are working on partnering with establishments where you 
                    will be reedeming your points which have been converted into 
                    the crypto coin, "Goshilingy"
                </div>
            )}
        </div>

        <div className='contact-dropdown'>
            <p
            onClick={() => setIsOpen5(!isOpen5)}
            className='fs-5 d-flex align-items-center gap-4'>
                Do you offer any Job Opportunities?
                <svg
                style={{
                    transform: isOpen5 ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.5s ease"
                }}
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                fill="currentColor" 
                className="bi bi-chevron-down" 
                viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                </svg>
            </p>
            {isOpen5 && (
                <div>
                    We are partnering with other organizations which can offer job opportunities for our volunteers.
                    Once It is finalized you will be informed.
                </div>
            )}
        </div>
    </div>
  )
}
