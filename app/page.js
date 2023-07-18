
import PopularSell from '@/components/popularSellers'
import MoreSellers from '@/components/moreSellers';
import Wallet from '@/components/wallet';
// import ethereumVar from '@/metamask/main';




export default function Home() {


  // ethereumVar.request({ method: 'eth_requestAccounts', params: [] });

  // console.log(ethereumVar);


  return (



    <main className="container mx-auto">
        <div>
          <PopularSell />
          <MoreSellers />
          <Wallet />
        </div>
    </main>
  )
}
