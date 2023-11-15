export function FarmTable() {
    const list = [1, 2, 3, 4, 5, 6]
    return (
        <table className="table-auto w-full border-l border-r border-b border-gray-300 shadow-lg">
            <thead className="bg-gray-300 text-left">
                <tr className="text-gray-700">
                    <th className="p-2">Farm Name</th>
                    <th className="p-2">Farm Street Address</th>
                    <th className="p-2">Farm City</th>
                    <th className="p-2">Farm State</th>
                </tr>
            </thead>

            <tbody>
                {
                    list.map((item) => {
                        return (
                            <tr key={item} className="bg-white">
                                <td className="p-2 border-b border-gray-300">Random</td>
                                <td className="p-2 border-b border-gray-300">Random</td>
                                <td className="p-2 border-b border-gray-300">Random</td>
                                <td className="p-2 border-b border-gray-300">Random</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}