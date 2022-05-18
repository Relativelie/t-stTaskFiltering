export const tableGeneration = (data, tableSelector) => {
    document.querySelector(tableSelector).innerHTML = '';
    data.map((item) => {
        const from = item.prices[0] !== null ? item.prices[0] : '*';
        const to = item.prices[1] !== null ? item.prices[1] : '*';
        document.querySelector(tableSelector).innerHTML += `
        <tr>
                <td class="${tableSelector}__item">${item.name}</td>
                <td class="${tableSelector}__item">${from}</td>
                <td class="${tableSelector}__item">${to}</td>
        </tr>
        `;
    });
};
