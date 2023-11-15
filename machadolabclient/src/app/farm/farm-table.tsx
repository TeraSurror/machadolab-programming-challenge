export function FarmTable() {
    const list = [1, 2, 3, 4, 5, 6]
    return (
        <table className="table-auto w-full">
            <thead className="uppercase bg-gray-50 text-left">
                <tr>
                    <th className="p-2">Farm Name</th>
                    <th>Farm Street Address</th>
                    <th>Farm City</th>
                    <th>Farm State</th>
                </tr>
            </thead>

            <tbody>
                {
                    list.map((item) => {
                        return (
                            <tr key={item}>
                                <td>Random</td>
                                <td>Random</td>
                                <td>Random</td>
                                <td>Random</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
}