import Image from 'next/image'
import asset1 from '../public/partner.svg'

const Partners = () => {
    var TBA = true;
    return (
        <section className='w-full h-full mx-auto mt-[10%]'>
            <div className='text-center text-partner font-kleemax text-scale-40 drop-shadow-red'>
            COMMUNITY PARTNERS
            </div>
            {TBA ?
            <div className="pt-[5%] flex w-full justify-center text-partner drop-shadow-red font-kleemax text-scale-30 font-semibold">TO BE ANNOUNCED</div>
            :
            <div className='w-full p-[10%] sm:p-[5%] sm:flex'>
            <Image className="mx-auto w-[60%] sm:w-[25%] my-[5%]" src={asset1} alt="partner" />
            <Image className="mx-auto w-[60%] sm:w-[40%] my-[5%]" src={asset1} alt="partner" />
            <Image className="mx-auto w-[60%] sm:w-[25%] my-[5%]" src={asset1} alt="partner" />
            </div>
            }
            <hr className="invisible flex mt-[10%] w-full flex-grow bg-gradient-to-r from-black via-[#CCCCCC50]"/>
        </section>
);

}

export default Partners;
