import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {ArrowUpRight} from 'lucide-react';

type TeamCard = {
  teamName: string;
  href: string;
  imageSrc: string;
  cardBgClass: string;
  labelClass: string;
  linkTextClass: string;
  iconWrapClass: string;
  iconClass: string;
};

const teamCards: TeamCard[] = [
  {
    teamName: 'Mechanical',
    href: '/mechanical',
    imageSrc: '/img/team.png',
    cardBgClass: 'bg-[#3C406A]',
    labelClass: 'bg-white text-black',
    linkTextClass: 'text-white',
    iconWrapClass: 'bg-white',
    iconClass: 'text-black',
  },
  {
    teamName: 'Electrical',
    href: '/electrical',
    imageSrc: '/img/team2.png',
    cardBgClass: 'bg-white',
    labelClass: 'bg-[#3C406A] text-white',
    linkTextClass: 'text-black',
    iconWrapClass: 'bg-black',
    iconClass: 'text-white',
  },
  {
    teamName: 'Embedded',
    href: '/embedded',
    imageSrc: '/img/team3.svg',
    cardBgClass: 'bg-[#A2A9C4]',
    labelClass: 'bg-white text-black',
    linkTextClass: 'text-black',
    iconWrapClass: 'bg-black',
    iconClass: 'text-white',
  },
  {
    teamName: 'AI',
    href: '/ai',
    imageSrc: '/img/team4.png',
    cardBgClass: 'bg-[#BEBEC4]',
    labelClass: 'bg-[#A2A9C4] text-black',
    linkTextClass: 'text-white',
    iconWrapClass: 'bg-white',
    iconClass: 'text-black',
  },
];

function TeamCardItem({card}: {card: TeamCard}): ReactNode {
  return (
    <div className={`h-[20vw] mt-[2vw] ${card.cardBgClass} rounded-[2vw] p-[2vw] flex justify-between items-center`}>
      <div className='flex flex-col w-2/5 justify-between p-[1vw] h-[90%]'>
        <div>
          <text className={`${card.labelClass} w-fit p-[0.2vw] rounded-[0.2vw] text-[1.5vw] font-semibold leading-0`}>{card.teamName} <br/></text>
          <text className={`${card.labelClass} w-fit p-[0.2vw] rounded-[0.2vw] text-[1.5vw] font-semibold leading-0`}>Team</text>
        </div>

        <Link href={card.href} className={`flex text-[1.3vw] ${card.linkTextClass}`}>
          <div className={`mr-[1vw] rounded-full ${card.iconWrapClass} aspect-square w-[2.5vw] flex justify-center items-center`}>
            <ArrowUpRight className={` ${card.iconClass}`} />
          </div>
          Learn more
        </Link>
      </div>

      <img src={card.imageSrc} className='w-3/5 object-contain h-[90%]'/>
    </div>
  );
}

export default function TeamCardsSection(): ReactNode {
  return (
    <div className=' grid grid-cols-2 w-[75%] gap-[3%] mt-[5vw] mb-[15vw]'>
      {teamCards.map((card) => (
        <TeamCardItem key={card.teamName} card={card} />
      ))}
    </div>
  );
}
