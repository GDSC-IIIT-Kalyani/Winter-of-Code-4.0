import Link from 'next/link';
import Image from 'next/image'
import footer from '../public/footer.svg'
import instagram from '../public/instagram.svg'
import twitter from '../public/twitter.svg'
import facebook from '../public/facebook.svg'
import linkedin from '../public/linkedin.svg'
const navigation = [
    { name: "Team", href: "#", current: true },
    { name: "Organisation", href: "#", current: false },
    { name: "Time-Line", href: "#", current: false },
    { name: "FAQ", href: "#", current: false },
  ];

const Footer = () => {
    return (
        
        <div className="flex-col flex py-2 sm:py-4 w-full">
            <div className="flex w-full m:top-9 md:top-10">
                
            </div>
            <Image src={footer} alt="footer" style={{objectFit: 'cover',}}/>
            <div className="absolute flex-col flex flex-shrink-0 p-4 lg:p-10">
                    <Link href="/" className=" text-sm sm:text-2xl md:text-4xl lg:text-9xl text-black font-kleemax border-outline-1 sm:border-outline-2">
                    WOC
                    </Link>
                    <div className="relative flex p-4">
                        <Image className='p-4' src={instagram} width={75} quality={100}  alt="footer" />
                        <Image className="p-4" src={twitter} width={75} quality={100}  alt="footer" />
                        <Image className="p-4" src={facebook} width={75} quality={100}  alt="footer" />
                        <Image className="p-4" src={linkedin}  width={75} quality={100}  alt="footer" />
                    </div>
                    
                    
            </div>
        </div>

    );
};

export default Footer;

