import Layout from '@/components/layout/layout'
import Image from 'next/image'
import mapImg from '../../public/map.jpg'
import farmImg from '../../public/farm.jpg'
import Button from './button'

export default function Home() {
  return (
    <Layout>
      <div>
        <section className='bg-white shadow-md flex'>
          <div>
            <Image
              src={mapImg}
              width={300}
              height={200}
              alt="random map pic"
            />
          </div>
          <div className='p-5 pl-7'>
            <h3 className='font-bold text-xl'>Movement Data</h3>
            <p >Click below button to see the movement data of animals from various farms</p>
            <Button text='See Data' redirectUrl='/movement' />
          </div>
        </section>
        <section className='mt-5 bg-white shadow-md flex'>
          <div>
            <Image
              src={farmImg}
              width={300}
              height={200}
              alt="random farm pic"
            />
          </div>
          <div className='p-5 pl-7'>
            <h3 className='font-bold text-xl'>Farm Data</h3>
            <p>Click below button to see the data of all farms</p>
            <Button text='See Data' redirectUrl='/farm' />
          </div>
        </section>
      </div>
    </Layout>
  )
}
