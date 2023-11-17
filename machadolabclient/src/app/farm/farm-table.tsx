import AppHttp from "@/utils/app-http";
import { SERVER_URL } from "@/utils/constants";
import RedirectToMaps from "./redirect-btn";
import { FarmType } from "./types/farm-type";
import Link from "next/link";

export default async function FarmTable() {

    const appHttp = new AppHttp(`${SERVER_URL}`);
    const farmData: FarmType[] = await appHttp.get<FarmType[]>('/farm/all');

    if (!farmData) {
        return (
            <h1>No data found!!</h1>
        );
    }

    return (
        <>
            <Link href="/" className=" text-blue-500 underline">Back to home</Link>
            <table className="table-auto w-full border-l border-r border-b border-gray-300 shadow-lg mt-4">
                <thead className="bg-gray-300 text-center">
                    <tr className="text-gray-700">
                        <th className="p-2">Farm Name</th>
                        <th className="p-2">Farm Address</th>
                        <th className="p-2">Farm Latitude</th>
                        <th className="p-2">Farm Longitude</th>
                        <th className="p-2">Farm Location</th>
                    </tr>
                </thead>

                <tbody className="text-center">
                    {
                        farmData.map((farm) => {
                            return (
                                <tr key={farm.farm_id} className="bg-white">
                                    <td className="p-2 border-b border-gray-300">{farm.farm_name}</td>
                                    <td className="p-2 border-b border-gray-300">
                                        {`${farm.farm_street_no}, ${farm.farm_street_name}, ${farm.farm_city}, ${farm.farm_state}, ${farm.farm_postal_code}`}
                                    </td>
                                    <td className="p-2 border-b border-gray-300">{farm.farm_latitude}</td>
                                    <td className="p-2 border-b border-gray-300">{farm.farm_longitude}</td>
                                    <td
                                        className="p-2 border-b border-gray-300"
                                    >
                                        <RedirectToMaps lat={farm.farm_latitude} long={farm.farm_longitude} />
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    );
}