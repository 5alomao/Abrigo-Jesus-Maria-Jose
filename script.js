const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
});

function loadGoogleSheetData() {
    const spreadsheetId = '1XJ7Pve5EvvgnxTmhZoxV2_n_Wm6g7053qfkkv82c2LE';
    const sheetId = 0;

    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: 'AJMJ-Doadores'
    }).then(function (response) {
        const data = response.result.values;
        const tableBody = document.querySelector('#ajmj-donators-table tbody');

        tableBody.innerHTML = '';

        data.forEach(function (row) {
            const rowData = row.map(item => item || '');

            const tableRow = document.createElement('tr');
            rowData.forEach(function (cellData) {
                const cell = document.createElement('td');
                cell.textContent = cellData;
                tableRow.appendChild(cell);
            });

            tableBody.appendChild(tableRow);
        });
    });
}

function initGoogleSheetsApi() {
    gapi.client.init({
        apiKey: 'AIzaSyCwLuci1O9bHlY0fKzLrkcocBXfxvwQ918',
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function () {
        loadGoogleSheetData();
    });
}

gapi.load('client', initGoogleSheetsApi);
