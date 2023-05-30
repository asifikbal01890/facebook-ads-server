import Customers from '@/Components/demos/Customers/Customers'
import ExcitingTools from '@/Components/demos/ExcitingTools/ExcitingTools'
import HeroSection from '@/Components/demos/HeroSection/HeroSection'
import Results from '@/Components/demos/Results/Results'
import MixlandLaouts from './settings/MixlandLaouts'
import BlogHeadlines from '@/Components/demos/MixlandHelps/BlogHeadlines/BlogHeadlines'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between pt-5 lg:pt-[117px] px-5 lg:px-0">
     <HeroSection></HeroSection>
     <Customers></Customers>
     <Results></Results>
     <ExcitingTools></ExcitingTools>
     <MixlandLaouts>
     <BlogHeadlines></BlogHeadlines>
     </MixlandLaouts>
    </main>
  )
}
