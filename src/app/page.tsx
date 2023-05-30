import Customers from '@/Components/demos/Customers/Customers'
import Ellipses from '@/Components/demos/Ellipses/Ellipses'
import HeroSection from '@/Components/demos/HeroSection/HeroSection'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between pt-5 lg:pt-[117px] px-5 lg:px-0">
     <HeroSection></HeroSection>
     <Customers></Customers>
     {/* <Ellipses></Ellipses> */}
    </main>
  )
}
