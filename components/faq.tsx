import Image from 'next/image'
import asset1 from '../public/faqcard1.svg'
import asset2 from '../public/faqbutton.svg'
import asset3 from '../public/faqcard2.svg'
import asset4 from '../public/faquestion.svg'
import React, { useState } from 'react';

const faqData = [
    {
      question: 'What is WoC?',
      answer:
        'Winter of Code (WoC) is an exciting month-long open-source program. It’s similar to Google Summer of Code (GSoC), but with a few fun twists of our own!',
    },
    {
      question: 'Who can participate?',
      answer:
        'Absolutely anyone! Whether you’re a student (grad, undergrad, or even in high school), a professional, or anyone else we might’ve missed, WoC is open to all.',
    },
  {
    question: 'Is WoC online?',
    answer: 'WOC will be conducted in complete online mode, so you can participate from anywhere without any worry.',
  },
  {
    question: 'Is WoC for beginners?',
    answer: 'Yes, WoC is for EVERYONE – beginners, pros, and everyone in between!',
  },
    {
      question: 'What is a proposal? How do I send one?',
      answer:
        'A proposal is where you tell the organisation what you plan to work on during WoC. Some organisations even let you propose projects outside their listed ideas! Once you’re selected, we’ll guide you through submitting your proposal. Plus, we’ll be hosting a special session on how to write a great proposal.',
    },
    {
      question: 'How do I get selected?',
      answer:
        'Submit a stellar application! 😊 \n\nHere’s how the process works: \n\n(i) We’ll have an initial screening to filter out non-serious or spammy applications. \n\n(ii) Next, participants who pass the first round will submit proposals via Devfolio, where organisations will make their selections. \n\n(iii) Finally, a mentor evaluation. If you pass, you’re in for some awesome swags!',
    },
    {
      question: 'What are the prizes? How do I claim them?',
      answer:
        'Everyone who passes the mentor evaluation will get prizes from our sponsors! Plus, some organisations might even have their own rewards for top contributors.',
    },
    {
      question: 'What are Organisations?',
      answer:
        'Organisations are open-source communities that build incredible software for everyone to use. They’ll be accepting your project proposals and mentoring you throughout the program.',
    },
    
  ];

interface FAQ{
    index:number;
    question:string;
    answer:string;
    isOpen: boolean;
    toggleOpen: () => void;
}


const FAQCard: React.FC<FAQ> = ({ question, answer, isOpen, toggleOpen }) => {
    return (
            <div className='w-[80%] sm:w-[40%] mx-auto sm:mx-[1%] my-[1%] h-fit' onClick={toggleOpen}>
              <div className={`relative w-full flex py-[2%] px-[3%] justify-between border-[3px] border-faq ${isOpen? "border-b-0":""} bg-gradient-to-b from-[#00FF8415] to-[#00FF8412]`}>
                <div className='aspect-square absolute w-[3.7%] h-auto top-0 left-0' >
                  <div className='faq-t-l w-full h-full absolute -rotate-45 border-b-2 border-faq bg-black top-[-59%] left-[-59%] sm:top-[-56%] sm:left-[-56%]'></div>
                </div>
                <div className='w-[85%] text-left text-faq text-scale-40' >
                {question}
                </div>
                <Image className={`w-[7%] h-[15%] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} src={asset2} alt="faqbutton" id="faqbutton" />
              </div>
              { isOpen &&
                <div className='relative px-[2%] w-full pr-[15%] pb-[2%] text-left text-[#CBCBCB] text-scale-30 border-[3px] border-t-0 border-faq bg-gradient-to-b from-[#00FF8412] to-[#19A26005] '>
                {answer}
                <div className='aspect-square absolute w-[20%] h-auto bottom-0 right-0' >
                  <div className='faq-b-r w-full h-full absolute -rotate-45 border-faq bg-black bottom-[-51.5%] right-[-51.5%] sm:bottom-[-50.55%] sm:left-[50.5%]'></div>
                </div>
                </div>
              }
            </div>
    );
};

const FAQPage = () => {
    const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index:number) => {
    setOpenItems(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

    return (
            <section className='w-full mx-auto mt-[10%] font-chakra'>
                <div className='text-center text-faq font-kleemax text-scale-40 drop-shadow-green relative'>
                    FAQ
                    <div className='w-[20%] absolute left-[40%] -top-[25%]'>
                        <Image className="mx-auto w-full" src={asset4} alt="faquestion" />
                    </div>
                </div>
                <div className='w-full mx-auto my-[3%] flex flex-wrap justify-center'>
                {faqData.map((faq, index) => (
                    <FAQCard key={index} index={index} question={faq.question} answer={faq.answer} isOpen={openItems[index]} toggleOpen={() => toggleItem(index)} />
                ))}
                </div>
                <hr className="flex w-full flex-grow bg-gradient-to-r from-black via-[#CCCCCC50] to-black mt-[10%]"/>
            </section>
    );
};

export default FAQPage;
