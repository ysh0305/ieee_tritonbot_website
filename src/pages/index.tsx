import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import TeamCardsSection from '../components/TeamCardsSection';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      wrapperClassName="home-hero-wrapper"
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main className='w-screen bg-black'>
        <img src={useBaseUrl('/img/side.svg')} className='absolute left-0 z-20 w-[4vw]'/>
        <img src={useBaseUrl('/img/side.svg')} className='absolute left-[95vw] z-20 w-[4vw]'/>
        <div className='w-screen flex items-center flex-col'>
          <div className='w-screen h-[64vw] relative flex justify-center'>
            <img src={useBaseUrl('/img/title.svg')} alt="Landing Title" className='absolute z-10 top-[-5%] w-[90%]'/>
            <img src={useBaseUrl('/img/landing.png')} alt="Landing Background Image" className='absolute top-[-10%]'/>
          </div>

          <div className='relative flex w-[75%] bg-white rounded-[3vw] py-[1.2vw] px-[4vw] text-black h-[25vw]'>
            <div className='w-2/5'>
              <p className=' font-bold text-[2.7vw]'>What is TritonBot?</p>
              <p className='text-[1.2vw] mb-[10%]'>UC San Diego’s RoboCup team is one of IEEE’s largest projects. Different subteams come together to build 6 autonomous soccer-playing robots to compete in the international RoboCup Small Sized League Competition every year. </p>
              <Link href='/docs/Tritonbots' className="bg-black p-[1.2vw] rounded-[1vw] text-white hover:text-blue-200 no-underline active:opacity-80 duration-300"> More Infomation!</Link>
            </div>
            <img src={useBaseUrl('/img/about.svg')} className='w-[38vw] absolute right-[-3%] top-[-5%]'/>
          </div>

          <TeamCardsSection />

        </div>

      </main>
      <footer className="bg-[#454545] w-screen h-[15vw] flex justify-between px-[10vw] items-center">
        <img src={useBaseUrl('/img/Resources.svg')} className="w-[12vw]"/>
        <div>
          <Link href="https://discord.gg/XxfjqZSjca" className="bg-black px-[2vw] py-[1.5vw] text-white text-[1.2vw] rounded-[0.5vw] hover:opacity-95 active:opacity-90 duration-300">Discord</Link>
          <Link href="https://ieeeatucsd.org/projects/robocup" className="ml-[1.5vw] bg-white px-[2vw] py-[1.5vw] text-black text-[1.2vw] rounded-[0.5vw] ">IEEE@UCSD Main Page</Link>
        </div>
      </footer>
    </Layout>
  );
}
