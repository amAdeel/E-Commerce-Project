// pages/index.js  

import Head from 'next/head';  
import HeroSection from './component/Hero';
import Image from 'next/image';
import ComponentCard from './component/ComponentCard';
import MovingProjectList from './component/MovingProjectList';

export default function Home() {  
  return (  
    <div>  
      <Head>  
        <title>My Next.js App</title>  
        <link rel="icon" href="/favicon.ico" />  
      </Head>  
      <main className="p-4">
        {/* w-868px h-391px  create thi top component for three pic showing */}
        
        <div className='flex gap-3  '>
          {/* <div className='bg-white w-[868px] h-[391px] rounded-xl border-2 '>
           <Image src="/img1.1.png" alt={'Product Image'} width={48} height={48}/>
          </div> */}
          <div className="bg-white w-[868px] h-[391px] rounded-xl border-2">
  <Image src="/img1.1.png" alt="Product Image" width={48} height={48} className="w-full h-full object-cover" />
</div>
          <div className='flex flex-col'>
          <div className='bg-white w-[430px] h-[191px] mb-1 rounded-xl border-2 '></div>
          <div className='bg-white w-[430px] h-[191px] mt-1 rounded-xl border-2'></div>
          </div>
        </div>
        <div className="w-full overflow-hidden">  
                <MovingProjectList />  
            </div>
         
        <HeroSection/> 
        {/* Your main content goes here */} 
      </main>  
    </div>  
  );  
}