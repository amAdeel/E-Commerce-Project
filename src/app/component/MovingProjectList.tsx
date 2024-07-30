"use client"
// components/MovingProjectList.js  
import Image from "next/image";  
import Link from "next/link";
import { useEffect, useRef } from "react";  

const projects = [  
    { id: 1, name: "Project One",price:"$10USD" ,image: "/t-shirt-1.avif" },  
    { id: 2, name: "Project Two",price:"$10USD" , image: "/t-shirt-1.avif" },  
    { id: 3, name: "Project Three",price:"$10USD" , image: "/t-shirt-1.avif" },  
    { id: 4, name: "Project Four",price:"$10USD" , image: "/t-shirt-1.avif" },  
];  

const MovingProjectList = () => {  
    // Type annotation for the ref to ensure it's either a HTMLDivElement or null  
    const containerRef = useRef<HTMLDivElement | null>(null);  
    
    useEffect(() => {  
        const container = containerRef.current;  

        if (container) {  // Check if container is not null  
            // Set animation for the container  
            container.style.animation = "marquee 20s linear infinite";  
        }  

        return () => {  
            if (container) {  // Clean up animation style only if container is not null  
                container.style.animation = "";  
            }  
        };  
    }, []);  

    return (  
        <div className="overflow-hidden relative">  
            <div ref={containerRef} className="flex whitespace-nowrap">  
                {projects.map((project) => (  
                    <div key={project.id} className="mx-4 flex-shrink-0 bg-white rounded-lg border-2 shadow-md m-4">  
                        <Image   
                            src={project.image}   
                            alt={project.name}   
                            className="w-52 h-52 object-cover rounded-lg"   
                            width={128} // Add width for Image component  
                            height={128} // Add height for Image component  
                        />
                        <Link href="#">
                        <span className="mx-2 flex border-2 border-gray-300 rounded-xl justify-between m-2  ">  
                        <p className="text-gray-600 flex items-center font-medium  ">{project.name}</p>
                        <p className=" bg-blue-700 text-white rounded-xl p-1">{project.price}</p>
                        </span>
                        </Link>
                    </div>  
                ))}  
                {/* Duplicate for continuous scrolling */}  
                {projects.map((project) => (  
                    <div key={project.id} className="mx-4 flex-shrink-0 bg-white rounded-lg border-2 shadow-md m-4">  
                        <Image   
                            src={project.image}   
                            alt={project.name}   
                            className="w-52 h-52 object-cover rounded-lg"   
                            width={128} // Add width for Image component  
                            height={128} // Add height for Image component  
                        /> 
                        <Link href="#">
                        <span className="mx-2 flex border-2 border-gray-300 rounded-xl justify-between m-2  ">  
                        <p className="text-gray-600 flex items-center font-medium  ">{project.name}</p>
                        <p className=" bg-blue-700 text-white rounded-xl p-1">{project.price}</p>
                        </span>
                        </Link>

                    </div>  
                ))}  
            </div>  
            <style jsx>{`  
                @keyframes marquee {  
                    0% {  
                        transform: translateX(0);  
                    }  
                    100% {  
                        transform: translateX(-50%);  
                    }  
                }  
            `}</style>  
        </div>  
    );  
};  

export default MovingProjectList;

//useEffect(() => {  
//     const container = containerRef.current;  

//     if (container) {  
//         // Increase animation duration to slow down the scrolling  
//         container.style.animation = "marquee 20s linear infinite"; // Changed from 10s to 20s  
//     }  

//     return () => {  
//         if (container) {  
//             container.style.animation = "";  
//         }  
//     };  
// }, []);