'use client';

const Footer = () => {
    return (
        <section className='sm:px-10 px-5; pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5 px-5'>
            <div className='text-gray flex gap-2'>
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>
            <div className='flex gap-3'>
                <div className='w-12 h-12 rounded-full flex justify-center items-center 
                 border-none cursor-pointer' onClick={() => window.open('https://github.com/nguyeenphan', '_blank', 'noopener noreferrer')}>
                    <img src='/github.png' alt='GitHub' className='w-1/2 h-1./2'/>
                </div>
                <div className='w-12 h-12 rounded-full flex justify-center items-center 
                bg-black-300 border-none cursor-pointer' onClick={() => window.open('https://linkedin.com/in/khánh-nguyên-a12862326/', '_blank', 'noopener noreferrer')}>
                    <img src='/linkedin.png' alt='LinkedIn' className='w-1/2'/>
                </div>
                <div className='w-12 h-12 rounded-full flex justify-center items-center 
                bg-black-300 border-none cursor-pointer' onClick={() => window.open('https://www.instagram.com/nguyeenphann/', '_blank', 'noopener noreferrer')}>
                    <img src='/instagram.png' alt='Instagram' className='w-1/2'/>
                </div>
            </div>
            <p className='text-white-500'>
                © 2024 Nguyen Phan.
            </p>
        </section>
    )
}

export default Footer