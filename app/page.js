
import Collection from '@/components/collections'
import MoreSellers from '@/components/moreSellers';
import Headliner from '@/components/headliner';
import EthereumButton from '@/components/ethbutton';

export default function Home() {
  return (
    <main>

      <div>
        <Headliner />
      </div>
          
          <div className='container mx-auto'>
          <Collection />
        </div>
    </main>
  )
}
