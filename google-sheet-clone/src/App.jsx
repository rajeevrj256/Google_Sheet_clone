import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import "./App.css";


export default function App() {
    let spreadsheet;

    const onCreated = () => {
        // Enable formulas including UPPER
        spreadsheet.enableFormulaCalculation = true;
    };
    const [customParams, setCustomParams] = React.useState({});    
    const beforeSave = (args) => {
        setCustomParams({ customParams: 'you can pass custom params in server side' });
        args.customParams = customParams; // you can pass the custom params
    };
    
      const saveComplete = (args) => {
        // To obtain the blob data.
        console.log("Spreadsheet BlobData :", args.blobData)
      }

    return (
        <div style={{ height: "100vh", width: "100vw" }}>
            <SpreadsheetComponent
            allowOpen={true} openUrl='https://services.syncfusion.com/react/production/api/spreadsheet/open' beforeSave={beforeSave}
            saveUrl='https://services.syncfusion.com/react/production/api/spreadsheet/save' saveComplete={saveComplete}

             ref={(ssObj) => { spreadsheet = ssObj; }} created={onCreated} />

        </div>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
