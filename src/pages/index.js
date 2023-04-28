import Head from 'next/head'
import { Inter} from 'next/font/google'
import Headline from '../components/Headline'
import WhoAreWe from '../components/WhoAreWe'
import SocialTags from '@/components/SocialTags'
import ExploreBrowseTags from '@/components/ExploreBrowseTags'
const inter = Inter({ subsets: ['latin'] })
// import { getHiringCardData } from '../../lib/HiringCardData'
// import WeAreHiring from '@/components/WeAreHiring'
import LandingCard1 from '@/components/LandingCard1'
import LandingCard2 from '@/components/LandingCard2'
import LandingCard3 from '@/components/LandingCard3'
import LandingCard4 from '@/components/LandingCard4'



export default function Home() {
// console.log(cardData)
  return (
    <>
      <Head>
        <title>Students' Web Committee</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Headline/>
      {/* <LandingCard></LandingCard> */}
       <div className="flex w-full justify-center items-center my-[5%]">
        <div className="w-full md:w-4/5 lg:w-3/5 flex flex-col md:flex-row justify-center items-center min-h-fit space-y-6 md:space-x-6 md:space-y-0">
          <div className="flex flex-col justify-center items-center self-center w-full space-y-6">
            <SocialTags></SocialTags>
            <LandingCard1></LandingCard1>
            <LandingCard2></LandingCard2>

          </div>
          <div className="flex flex-col justify-center items-center self-center w-full space-y-6">
          <LandingCard3></LandingCard3>
          <LandingCard4></LandingCard4>

            <ExploreBrowseTags></ExploreBrowseTags>
          </div>
        </div>
      </div>
      <WhoAreWe></WhoAreWe> 
    </>
  )
}
