import Image from 'next/image'
import asset1 from '../public/platinum.svg'
import asset2 from '../public/gold.svg'
import asset3 from '../public/silver.svg'
import asset4 from '../public/bronze.svg'
import devfolio from '../public/devfolio.png'
import ethindia from '../public/ethindia.png'
import polygon from '../public/polygon.png'

const Sponsors = () => {
    var TBA = true;
    return (
        <section className='w-full h-full mx-auto mt-[10%]'>
            <div className='text-center text-brand font-kleemax text-scale-40 drop-shadow-blue'>
                SPONSORS
            </div>
            {/*<div className="flex w-full">
            <div className="apply-button" 
            data-hackathon-slug="winterofcode" 
            data-button-theme="light"
            style={{height: '44px', width: '312px'}}>
            </div>
            <Image src={devfolio} alt="DEVFOLIO LOGO" className="w-[20%]"/>
            <Image src={polygon} alt="POLYGON LOGO" className="w-[20%]"/>
            <Image src={ethindia} alt="ETHINDIA LOGO" className="w-[20%]"/>
            </div>*/}
            {TBA ?
            <div className="pt-[5%] flex w-full justify-center text-brand drop-shadow-blue font-kleemax text-scale-30 font-semibold">TO BE ANNOUNCED
            </div>
            :
            <div className='w-full p-[10%] sm:p-[5%]'>
            <Image className="mx-auto w-full my-[5%] backdrop-blur" src={asset1} alt="platinum sponsor" />
            <Image className="mx-auto w-full my-[5%] backdrop-blur" src={asset2} alt="gold sponsor" />
            <Image className="mx-auto w-full my-[5%] backdrop-blur" src={asset3} alt="silver sponsor" />
            <Image className="mx-auto w-full my-[5%] backdrop-blur" src={asset4} alt="bronze sponsor" />
            </div>            
            }
            <hr className="flex mt-[10%] max-w-full flex-grow bg-gradient-to-r from-black via-[#CCCCCC50] to-black"/>
        </section>
);

}

export default Sponsors;