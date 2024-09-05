import Link from 'next/link';
import Image from 'next/image'
import asset1 from '../public/arrow.svg'
const AboutUs = () => {
    return (
        <div className="bg-[#868686] bg-opacity-10 max-w-[1280px] m-10 xl:m-auto">
            <div className="w-full flex">
                <div className='text-[#00FF84] bg-black w-fit rounded-br-xl border-[#868686] border-opacity-10 pr-4 text-4xl font-kleemax text-nowrap'>
                    ABOUT US
                </div>
                <div className='w-full bg-black'>
                    <div className='h-full bg-[#868686] bg-opacity-10 rounded-tl-xl border-black'></div>
                </div>
                <div className='w-fit'>
                    <Image src={asset1} alt="woc"/>
                </div>
            </div>
            <div className="w-full flex p-5 rounded-2xl border-black">
            Lorem ipsum dolor sit amet consectetur. Adipiscing commodo id vel id massa venenatis. Faucibus vitae nisi amet convallis commodo at consectetur suspendisse diam. Adipiscing est vel id quis tempor nisl eros dolor. Habitant curabitur leo ultrices vitae massa nullam. Convallis habitasse at in volutpat ullamcorper ornare vitae. Non justo egestas venenatis nunc sed metus. Cursus tellus consequat volutpat in facilisi sed tincidunt. Accumsan augue molestie vel integer imperdiet nec nulla.

            Pellentesque tellus elementum auctor augue. Duis lobortis diam integer sit condimentum nulla cursus. Enim eget aliquam nibh lorem porttitor hac quisque massa. Integer varius sit imperdiet nam consectetur nulla eget. Quisque sed elit risus malesuada. Tortor velit libero tristique orci vitae morbi in consectetur. Nibh ligula maecenas arcu ornare urna gravida nec mi. Turpis mi ornare enim tempor risus tempus mi mi ullamcorper.
            Eget mus ultricies nibh nec commodo interdum risus augue lacinia. Vitae arcu tincidunt vestibulum tristique sed sagittis nulla pellentesque quis. Massa nunc pellentesque ut ipsum nec. At est ullamcorper elementum bibendum amet. Phasellus et egestas fermentum in risus nulla.

            Non cursus platea enim tellus. Interdum ornare pulvinar at tortor mus faucibus nulla tellus laoreet. Quam convallis interdum amet malesuada ante. Enim accumsan tellus pellentesque et viverra id in tincidunt in. Enim et parturient in feugiat a sollicitudin massa arcu vel. 
            </div>

        </div>
    );
};

export default AboutUs;