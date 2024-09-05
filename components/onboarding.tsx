import Link from 'next/link';
import Image from 'next/image'
import wocg from '../public/wocg.svg'
import regline1 from '../public/regline1.svg'
import regline2 from '../public/regline2.svg'
import asset1 from '../public/background1.svg'
const Register = () => {
    return (
        <div>
            <div className="my-4 sm:my-6 md:my-10 lg:my-20">
                <Image src={asset1} alt="woc"/>
                <div className="">
                <div className="">
                    <div className="flex justify-center items-center"> 
                        <Image className='' src={regline1}  width={300} alt="woc"/>
                        <div className="flex justify-center grow-0 bg-black">
                            <Link href="/" className="z-10 text-nowrap text-xs sm:text-base md:text-2xl lg:text-3xl p-1 sm:p-2 md:p-3 lg:p-4 font-kleemax text-brand border sm:border-2 md:border-3 lg:border-4 drop-shadow-glow">
                            REGISTER HERE
                            </Link>
                        </div>
                        <Image className='' src={regline2} width={300} alt="woc"/>
                    </div> 
                </div>
                </div>
            </div>
            </div>
    );
};

export default Register;

