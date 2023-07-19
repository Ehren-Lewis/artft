
import PopularSell from '@/components/popularSellers'
import MoreSellers from '@/components/moreSellers';
import Headliner from '@/components/headliner';
import Wallet from '@/components/wallet';
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
          <PopularSell />
          <MoreSellers />
        </div>
    </main>
  )
}
