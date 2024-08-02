import React, { useContext } from 'react';
import { MedalsDataContext } from '../MedalsDataContext';

const Table = () => {
    const data = useContext(MedalsDataContext);

    return (
        <table>
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Year</th>
                    <th>Medals</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.Id}>
                         <td>{item.Id}</td>
                        <td>{item.Year}</td>
                        <td>{item.Medals}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
