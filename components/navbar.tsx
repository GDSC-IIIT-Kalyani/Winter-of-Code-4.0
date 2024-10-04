import Link from 'next/link';
import Image from 'next/image'
import navline from '../public/navline.svg'
const navigation = [
    { name: "Sponsors", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Orgs", href: "#", current: false },
    { name: "Timeline", href: "#", current: false },
    { name: "FAQ", href: "#", current: false },
  ];

const Navbar = () => {
    return (
        <nav className="z-40 sticky flex-col flex w-full top-0">
            <div className="flex w-full justify-center py-[1%] bg-black">
                <div className="flex flex-1"></div>
                    <Link href="/" className="text-scale-35 w-[14%] absolute top-[15%] left-[43%] text-center text-brand font-kleemax ">
                    WOC
                    </Link>
                <div className="flex flex-1 justify-end mr-[2%]">
                    {navigation.map((item) => (
                    <Link href={item.href} className="font-chakra font-bold text-brand text-scale-30 max-w-[20%] px-[1%] hover:drop-shadow-blue" key={item.name}>
                        {item.name.toUpperCase()}
                    </Link>
                    ))}
                </div>
            </div>
            <div className="flex w-full bg-black ">
                <Image src={navline} alt="navline"/>
            </div>
        </nav>

    );
};

export default Navbar;

