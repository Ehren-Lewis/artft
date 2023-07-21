
import Collection from '@/components/collections'
import MoreSellers from '@/components/moreSellers';
import Headliner from '@/components/headliner';
import EthereumButton from '@/components/ethbutton';
// import ethereumVar from '@/metamask/main';




export default function Home() {


  // ethereumVar.request({ method: 'eth_requestAccounts', params: [] });

  // console.log(ethereumVar);


  return (



    // <main className="container mx-auto">
    <main>

      <div>
        <Headliner />
      </div>
          
          <div className='container mx-auto'>
          <Collection />
          <MoreSellers />
          <EthereumButton />
        </div>
    </main>
  )
}
