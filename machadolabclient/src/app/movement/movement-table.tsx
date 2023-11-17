
import AppHttp from "@/utils/app-http";
import { SERVER_URL } from "@/utils/constants";
import Link from "next/link";
import { MovmentType } from "./types/movement-types";
import Button from "../button";

export default async function MovementTable() {

    const appHttp = new AppHttp(`${SERVER_URL}`);
    const movementData: MovmentType[] = await appHttp.get<MovmentType[]>('/movement/all');

    if (!movementData) {
        return (
            <h1>No data found!!</h1>
        );
    }

    return (
        <>
            <Link href="/" className=" text-blue-500 underline">Back to Home</Link>
            <table className="table-auto w-full border-l border-r border-b border-gray-300 shadow-lg mt-4">
                <thead className="bg-gray-300 text-center">
                    <tr className="text-gray-700">
                        <th className="p-3">Account Company</th>
                        <th className="p-3">Movment Reason</th>
                        <th className="p-3">Species</th>
                        <th className="p-3">Numbers Moved</th>
                        <th className="p-3">Shipment Date</th>
                        <th className="p-3">Visualize Movement</th>
                    </tr>
                </thead>

                <tbody className="text-center">
                    {
                        movementData.map((movement) => {
                            return (
                                <tr key={movement.movement_id} className="bg-white">
                                    <td className="p-2 border-b border-gray-300">{movement.account_company}</td>
                                    <td className="p-2 border-b border-gray-300">{movement.movement_reason}</td>
                                    <td className="p-2 border-b border-gray-300">{movement.species}</td>
                                    <td className="p-2 border-b border-gray-300">{movement.num_items_moved}</td>
                                    <td className="p-2 border-b border-gray-300">{movement.shipments_start_date}</td>
                                    <td
                                        className="p-2 border-b border-gray-300"
                                    >
                                        <Button text="See movement" redirectUrl={`/movement/${movement.origin_prem_id}/${movement.destination_prem_id}`} />
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