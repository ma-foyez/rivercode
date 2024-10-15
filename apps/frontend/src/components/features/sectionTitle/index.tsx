import React from 'react';

interface ISectionTitle {
    title: string;
    customClass?: string;
    color?: string;
}

const SectionTitle = ({ title = "", customClass, color="text-black" }: ISectionTitle) => {
    return (
        <div className='mx-auto w-full 2xl:w-2/3 2xl:px-2'>
            <h1 className={`${customClass} text-xl md:text-2xl xl:text-4xl text-${color} text-center py-2 md:py-4 font-bold`}>{title}</h1>
        </div>
    );
};

export default SectionTitle;