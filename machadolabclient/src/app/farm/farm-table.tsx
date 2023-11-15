import AppHttp from "../utils/app-http";
import { SERVER_URL } from "../utils/constants";
import RedirectToMaps from "./redirect-btn";
import { FarmType } from "./types/farm-type";

export default async function FarmTable() {

    const appHttp = new AppHttp(`${SERVER_URL}`);
    const farmData: FarmType[] = await appHttp.get<FarmType[]>('/farm/all');

    if (!farmData) {
        return (
            <h1>No data found!!</h1>
        );
    }

    return (
        <table className="table-auto w-full border-l border-r border-b border-gray-300 shadow-lg">
            <thead className="bg-gray-300 text-left">
                <tr className="text-gray-700">
                    <th className="p-2">Farm Name</th>
                    <th className="p-2">Farm Street Address</th>
                    <th className="p-2">Farm City</th>
                    <th className="p-2">Farm State</th>
                    <th className="p-2">Farm Location</th>
                </tr>
            </thead>

            <tbody>
                {
                    farmData.map((farm) => {
                        return (
                            <tr key={farm.farm_id} className="bg-white">
                                <td className="p-2 border-b border-gray-300">{farm.farm_name}</td>
                                <td className="p-2 border-b border-gray-300">{`${farm.farm_street_no}, ${farm.farm_street_name}`}</td>
                                <td className="p-2 border-b border-gray-300">{farm.farm_city}</td>
                                <td className="p-2 border-b border-gray-300">{farm.farm_state}</td>
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
    );
}