import * as React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';


const DashboardTable = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        getData();
    }, []);

    const getData = () => {

        const output = {
            code: '1',
            quantity: '1'
        }


        axios.get('http://localhost:9090/api/v1/query_range?query=up&start=2021-09-16T00:10:30.781Z&end=2021-10-16T23:11:00.781Z&step=15s').then(
            (response) => {
                const result = response.data.data.result;
                if(result && result.length > 0) {
                    const processedData = result[0]['values'];
                    console.log('response', processedData);
                    const result = [];
                    for (let i = 0; i < 100; i++) {
                        result.push({
                        code: processedData[i][1],
                        quantity : processedData[i][0]
                        })
                    }
                }
                setData(result);
            }
        );
    
       
    }

    return <DataTable value={data}>
        <Column field="code" header="Code"></Column>
     
        <Column field="quantity" header="Quantity"></Column>
    </DataTable>
}

export default DashboardTable;