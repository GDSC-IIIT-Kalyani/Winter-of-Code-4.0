import Image from 'next/image'
import asset1 from '../public/timelinecard.svg'
import start from '../public/start.svg'
import asset2 from '../public/triangle.svg'
import asset3 from '../public/triangle2.svg'
import asset4 from '../public/web.svg'
import asset5 from '../public/lock.svg'
interface TEvent{
    date:string;
    heading:string;
    desc:string;
}

const numerate = (index:number) => {
    if(index<10){
        return `0${index}`
    }
    return index
}

const timelineData:TEvent[] = [
    {
        date: '00 XX.XX.XXXX',
        heading: 'Event 01',
        desc: ''
    },
    {
        date: '00 XX.XX.XXXX',
        heading: 'Event 02',
        desc: ''
    },
    {
        date: '00 XX.XX.XXXX',
        heading: 'Event 03',
        desc: ''
    },
    {
        date: '00 XX.XX.XXXX',
        heading: 'Event 04',
        desc: ''
    },
    {
        date: '00 XX.XX.XXXX',
        heading: 'Event 05',
        desc: ''
    },
];

interface TimelineCardProps {
    event: TEvent;
    index: number;
}

const TimelineCard = ({ event, index }: TimelineCardProps) => {
    var isEven = index%2===0;
    var source = isEven ? asset2 : asset3
    var TBA = true;
    return (
        <div className={`z-20 w-full sm:flex ${index%2===0 ? "flex-row-reverse" : ""}`}>
            <div className={`relative w-fit max-w-[80%] sm:max-w-[40%] mx-auto sm:mx-0`}>
                <Image className="backdrop-blur" src={asset1} alt="timeline card"/>
                <div className='absolute top-0 left-0 p-[2%] font-kleemax font-xl w-[40%] text-center text-white text-scale-30 text-nowrap overflow-hidden'>
                {event.date.toUpperCase()}
                </div>
                <div className='absolute top-0 right-0 p-[1%] font-kleemax w-[20%] text-center text-white text-scale-60 text-nowrap overflow-hidden'>
                {numerate(index)}
                </div>
                <div className='absolute top-[23.5%] left-[28%] pr-[2%] align-middle font-kleemax w-[70%] text-scale-70 text-left text-timeline text-nowrap overflow-hidden'>
                {event.heading.toUpperCase()}
                </div>
                <div className='absolute top-[38%] left-0 p-[2%] w-[100%] h-[45%] text-left text-grey text-scale-30 overflow-hidden'>
                {event.desc}
                {TBA && 
                <div className="absolute flex justify-center top-[30%] w-full">
                    <Image className="w-[6%] drop-shadow-red" src={asset5} alt="lock" />
                    <p className="pl-[2%] pt-[2%] text-timeline font-kleemax drop-shadow-redmini text-scale-50 font-semibold align-baseline">TO BE ANNOUNCED</p>
                </div>
                }
                </div>
            </div>
            <hr className="hidden sm:block w-[8%] bg-gradient-to-t from-timeline to-timeline my-[7%]"/>
            <Image className="hidden sm:block z-20 w-[4%] -mt-[4.25%]"  src={source} alt="<>" />
        </div>
    );
};

const Timeline = () => {
    return (
        <section className='w-full h-full mx-auto pt-[10%] bg-black'>
            <div className='text-center text-timeline font-kleemax text-scale-40 drop-shadow-red'>
                TIMELINE
            </div>
            <div className='w-full p-[10%] sm:p-[5%] relative'>
            <Image className="z-20 mx-auto w-[30%] mb-[10%] " src={start} alt="start" />
            <div className='hidden sm:block z-10 h-[76.9%] w-[0.4%] mx-auto bg-white absolute top-[9.4%] left-[49.8%]'></div> 
            <div className='sm:hidden z-10 h-[7.3%] w-[0.4%] mx-auto bg-gradient-to-b from-white to-timeline absolute top-[8.2%] left-[49.8%]'></div>
            <div className='sm:hidden z-10 h-[4.1%] w-[0.4%] mx-auto bg-gradient-to-t from-white to-timeline absolute bottom-[10.7%] left-[49.8%]'></div>
            {timelineData.map((event, index) => (
                <TimelineCard key={index} event={event} index={index} />
            ))}
            <Image className="z-20 mx-auto w-[5%] my-[10%]" src={asset4} alt="end" />
            </div>
            <hr className="flex max-w-full flex-grow bg-gradient-to-r from-black via-[#CCCCCC50] to to-black"/>
        </section>
);

}

export default Timeline;