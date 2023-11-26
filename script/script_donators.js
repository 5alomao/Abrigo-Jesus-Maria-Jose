function loadGoogleSheetDataDonators() {
    const spreadsheetId = '1XJ7Pve5EvvgnxTmhZoxV2_n_Wm6g7053qfkkv82c2LE';
    const sheetId = 0;

    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: 'AJMJ-Doadores'
    }).then(function (response) {

        const data = response.result.values;

        if (data.length > 0) {
            const donatorsContent = document.getElementById('donators-content');
            data.forEach(function (row) {
                const company = row[0];
                const companyLink = row[1];
                const companyLogo = row[2];

                const donatorsBox = document.createElement('div');
                donatorsBox.className = 'donators-box';

                if (companyLogo) {
                    donatorsBox.innerHTML = `
                        <a href="${companyLink}" target="_blank">
                            <img class="company-logo" src="${companyLogo}" alt="Logo ${company}">
                        </a>
                    `;
                } else {
                    donatorsBox.innerHTML = `
                        <a href="${companyLink}" target="_blank">
                            ${company}
                        </a>
                    `;
                }

                donatorsContent.appendChild(donatorsBox);
            });
        }

    }).catch(function (error) {
        console.error('Erro ao carregar dados da planilha do Google:', error);
    });
}


function initGoogleSheetsApiDonators() {
    gapi.client.init({
        apiKey: 'AIzaSyCwLuci1O9bHlY0fKzLrkcocBXfxvwQ918',
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function () {
        loadGoogleSheetDataDonators();
    });
}

gapi.load('client', initGoogleSheetsApiDonators);