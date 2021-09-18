export default function ReportTable(props) {

    return (
        <div className="">

            {props.report.length > 0 ?
                <table className="mx-auto  my-4 w-3/4 text-center">
                    <thead className="bg-green-500 ">
                        <tr>
                            <th className="">Location</th>
                            {props.hours && props.hours.map(hour => (
                                <th className="">{hour}</th>
                            ))}
                            <th className="">Total</th>
                        </tr>
                        
                    </thead>
                    <tbody className="bg-green-300">
                        {props.report && props.report.map((cookie, idx) => (
                            <tr key={`${idx}`}>
                                <td className=" border border-gray-600">{cookie.location}</td>
                                {cookie.sales && cookie.sales.map(item => (
                                    <>
                                        <td className="border border-gray-600">{item}</td>

                                    </>
                                ))}
                                <td className=" border border-gray-600">{cookie.total}</td>
                            </tr>))
                        }
                    </tbody>
                    <tfoot className="bg-green-500">
                    <tr>
                            <td className=" border border-gray-600">Totals</td>
                            {props.totals && props.totals.map(item=>(
                                <td className="border border-gray-600">{item}</td>         
                            )) }
                            <td className=" border border-gray-600">{props.totals}</td>
                        </tr>
                    </tfoot>
                </table>
                : <h2 className="text-center">No Cookie Stands Available</h2>}
        </div>
    )
}