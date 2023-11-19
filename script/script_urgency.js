
function loadGoogleSheetDataUrgencyFood() {
    const spreadsheetId = '1XJ7Pve5EvvgnxTmhZoxV2_n_Wm6g7053qfkkv82c2LE';
    const sheetId = 1;

    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: 'AJMJ-Urgencias-Alimentos'
    }).then(function (response) {
        const data = response.result.values;

        if (data.length > 0) {
            const productList = document.getElementById('ul-food');

            data.forEach(function (row) {
                const product = row[0];

                const productBoxItemList = document.createElement('li');
                productBoxItemList.innerHTML = `${product}`;
                productList.appendChild(productBoxItemList);
            });
        }

    }).catch(function (error) {
        console.error('Erro ao carregar dados da planilha do Google:', error);
    });
}

function loadGoogleSheetDataUrgencyHygiene() {
    const spreadsheetId = '1XJ7Pve5EvvgnxTmhZoxV2_n_Wm6g7053qfkkv82c2LE';
    const sheetId = 3;

    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: 'AJMJ-Urgencias-Higiene'
    }).then(function (response) {
        const data = response.result.values;

        if (data.length > 0) {
            const productList = document.getElementById('ul-hygiene');

            data.forEach(function (row) {
                const product = row[0];

                const productBoxItemList = document.createElement('li');
                productBoxItemList.innerHTML = `${product}`;
                productList.appendChild(productBoxItemList);
            });
        }

    }).catch(function (error) {
        console.error('Erro ao carregar dados da planilha do Google:', error);
    });
}

function loadGoogleSheetDataUrgencyCleaning() {
    const spreadsheetId = '1XJ7Pve5EvvgnxTmhZoxV2_n_Wm6g7053qfkkv82c2LE';
    const sheetId = 2;

    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: 'AJMJ-Urgencias-Limpeza'
    }).then(function (response) {
        const data = response.result.values;

        if (data.length > 0) {
            const productList = document.getElementById('ul-cleaning');

            data.forEach(function (row) {
                const product = row[0];

                const productBoxItemList = document.createElement('li');
                productBoxItemList.innerHTML = `${product}`;
                productList.appendChild(productBoxItemList);
            });
        }

    }).catch(function (error) {
        console.error('Erro ao carregar dados da planilha do Google:', error);
    });
}

function initGoogleSheetsApiUrgency() {
    gapi.client.init({
        apiKey: 'AIzaSyCwLuci1O9bHlY0fKzLrkcocBXfxvwQ918',
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function () {
        loadGoogleSheetDataUrgencyFood();
        loadGoogleSheetDataUrgencyHygiene();
        loadGoogleSheetDataUrgencyCleaning();
    });
}

gapi.load('client', initGoogleSheetsApiUrgency);