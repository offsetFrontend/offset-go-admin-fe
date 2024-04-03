import React, { useEffect, useState } from "react";

const sdgTypes = [
    { name: "one", value: "sdg-1", src: "/images/sdgs/1.png" },
    { name: "two", value: "sdg-2", src: "/images/sdgs/2.png" },
    { name: "three", value: "sdg-3", src: "/images/sdgs/3.png" },
    { name: "four", value: "sdg-4", src: "/images/sdgs/4.png" },
    { name: "five", value: "sdg-5", src: "/images/sdgs/5.png" },
    { name: "six", value: "sdg-6", src: "/images/sdgs/6.png" },
    { name: "seven", value: "sdg-7", src: "/images/sdgs/7.png" },
    { name: "eight", value: "sdg-8", src: "/images/sdgs/8.png" },
    { name: "nine", value: "sdg-9", src: "/images/sdgs/9.png" },
    { name: "ten", value: "sdg-10", src: "/images/sdgs/10.png" },
    { name: "eleveen", value: "sdg-11", src: "/images/sdgs/11.png" },
    { name: "twelve", value: "sdg-12", src: "/images/sdgs/12.png" },
    { name: "thirteen", value: "sdg-13", src: "/images/sdgs/13.png" },
    { name: "fourteen", value: "sdg-14", src: "/images/sdgs/14.png" },
    { name: "fifteen", value: "sdg-15", src: "/images/sdgs/15.png" },
    { name: "sixteen", value: "sdg-16", src: "/images/sdgs/16.png" },
    { name: "seventeen", value: "sdg-17", src: "/images/sdgs/17.png" },
];

const SdgContribution = ({ setValue, selected }) => {

    const handleCheckboxChange = (value) => {
        setValue((prevSelected) => {
            if (prevSelected.includes(value)) {
                return prevSelected.filter((option) => option !== value);
            } else {
                return [...prevSelected, value];
            }
        });
    };

    return (
        <div className="flex justify-between mt-3 max-w-5xl">
            {sdgTypes.map(({ value, src }, index) => (
                <div
                    key={`sdg-item-${index}`}
                    style={{
                        background: `url(${src})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                    }}
                    className={`relative w-12 h-12 cursor-pointer ${
                        selected.includes(value) &&
                        "border-[3px] border-blue-800"
                    }`}
                    onClick={handleCheckboxChange.bind(null, value)}
                >
                    <div
                        className={`${
                            selected.includes(value) ? "block" : "hidden"
                        } absolute left-1/2 top-0 w-4 h-4 -translate-x-1/2 -translate-y-[calc(50%+2px)] flex justify-center items-center rounded-full bg-blue-800`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={7}
                            height={7}
                            viewBox="0 0 8 7"
                            fill="none"
                        >
                            <path
                                d="M1 3.5L2.5 5L6.5 1"
                                stroke="white"
                                strokeWidth={1.5}
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SdgContribution;
