const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
});

// Função para carregar e exibir dados da planilha do Google Sheets
function loadGoogleSheetData() {
    const spreadsheetId = '';
    const sheetId = 0;

    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: ''
    }).then(function (response) {
        const data = response.result.values;
        const tableBody = document.querySelector('#actions-table tbody');

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
        apiKey: '',
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function () {
        loadGoogleSheetData();
    });
}

gapi.load('client', initGoogleSheetsApi);
