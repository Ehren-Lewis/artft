import Image from 'next/image'
import PopularSell from '@/components/popularSellers'
import MoreSellers from '@/components/moreSellers'
export default function Home() {
  return (
    <main className="container mx-auto">
        <div>
          <PopularSell />
          <MoreSellers />

        </div>
    </main>
  )
}
