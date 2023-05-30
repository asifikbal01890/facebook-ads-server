import Ellipses from '@/Components/demos/Ellipses/Ellipses'
import HeroSection from '@/Components/demos/HeroSection/HeroSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-5 lg:pt-[117px] px-5 lg:px-0">
     <HeroSection></HeroSection>
     <Ellipses></Ellipses>
    </main>
  )
}
