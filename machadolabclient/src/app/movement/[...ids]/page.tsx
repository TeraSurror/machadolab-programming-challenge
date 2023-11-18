import Layout from '@/components/layout/layout';
import { FarmType } from '@/app/farm/types/farm-type';
import AppHttp from '@/utils/app-http';
import { SERVER_URL } from '@/utils/constants';
import MovementMap from './movement-map';
import Link from 'next/link';


export default async function MovementMapHome({ params }: { params: { ids: string[] } }) {

    const [id1, id2] = params.ids;
    const appHttp = new AppHttp(`${SERVER_URL}`);
    const farmData: FarmType[] = await appHttp.get<FarmType[]>(`/farm/farm-details/${id1}/${id2}`);

    if (!farmData) {
        return (
            <h1>No data found!!</h1>
        );
    }

    return (
        <Layout>
            <Link href="/movement" className=" text-blue-500 underline">Back to movement data</Link>
            <div className='flex mt-4'>
                <MovementMap
                    lat1={parseFloat(farmData[0].farm_latitude)}
                    long1={parseFloat(farmData[0].farm_longitude)}
                    lat2={parseFloat(farmData[1].farm_latitude)}
                    long2={parseFloat(farmData[1].farm_longitude)}
                    farmName1={farmData[0].farm_name}
                    farmName2={farmData[1].farm_name}
                />
                <div className='ml-8 bg-white shadow-md p-10 pr-16'>
                    <h3 className='text-xl font-bold'>Movement Details</h3>
                    <br />
                    <div>
                        <h4 className='font-semibold'>Farm 1 details:</h4>
                        <p>{`Name: ${farmData[0].farm_name}`}</p>
                        <p>{`Premise ID: ${farmData[0].farm_prem_id}`}</p>
                    </div>
                    <br />
                    <div>
                        <h4 className='font-semibold'>Farm 2 details:</h4>
                        <p>{`Name: ${farmData[1].farm_name}`}</p>
                        <p>{`Premise ID: ${farmData[1].farm_prem_id}`}</p>
                    </div>
                    <br />
                </div>

            </div>
        </Layout>
    );
}