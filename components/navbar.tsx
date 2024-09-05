import Link from 'next/link';
import Image from 'next/image'
import navline from '../public/navline.svg'
const navigation = [
    { name: "Team", href: "#", current: true },
    { name: "Organisation", href: "#", current: false },
    { name: "Time-Line", href: "#", current: false },
    { name: "FAQ", href: "#", current: false },
  ];

const Navbar = () => {
    return (
        <nav className="sticky flex-col flex py-2 sm:py-4 w-full">
            <div className="flex md:justify-between w-full justify-center">
                <div className="hidden md:flex flex-1"></div>
                <div className="flex flex-shrink-0">
                    <Link href="/" className="text-sm sm:text-2xl md:text-3xl lg:text-4xl text-black font-kleemax border-outline-1 sm:border-outline-2">
                    WOC
                    </Link>
                </div>
                <div className="hidden md:flex flex-1 justify-end">
                    {navigation.map((item) => (
                    <Link href={item.href} className="font-chakra text-brand text-sm px-2 hover:drop-shadow-2xl" key={item.name}>
                        {item.name.toUpperCase()}
                    </Link>
                    ))}
                    <div className="mr-10"></div>
                </div>
            </div>
            <div className="flex w-full absolute top-6 sm:top-9 md:top-10">
                <Image src={navline} alt="navline"/>
            </div>
        </nav>

    );
};

export default Navbar;

