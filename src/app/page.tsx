import Customers from '@/Components/demos/Customers/Customers'
import HeroSection from '@/Components/demos/HeroSection/HeroSection'
import Results from '@/Components/demos/Results/Results'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between pt-5 lg:pt-[117px] px-5 lg:px-0">
     <HeroSection></HeroSection>
     <Customers></Customers>
     <Results></Results>
    </main>
  )
}
