import React from 'react'

const Distribs = ({ distribs }) => {
    return (
        <div>
            <center><h1>Kube Distributions List</h1></center>
            <table class="pf-c-table pf-m-grid-md" role="grid"  id="table-basic">
                <caption>Kube Radar</caption>
                <thead>
                    <tr role="row">
                        <th role="columnheader" scope="col">Name</th>
                        <th role="columnheader" scope="col">Vendor</th>
                    </tr>
                </thead>
                {distribs.map((distrib) => (
                    <tbody role="rowgroup">
                        <tr role="row">
                            <td role="cell" data-label="Distribution">{distrib.name}</td>
                            <td role="cell" data-label="Distribution">{distrib.vendor}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>

    )
};

export default Distribs