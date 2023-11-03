const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
});

const navItems = document.querySelectorAll('.nav-menu .nav-item');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('ativo');
        navMenu.classList.remove('ativo');
    });
});

$('.carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 577,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
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
