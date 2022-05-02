/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = './cars.json';


const promise = fetch('./cars.json', {
	method: 'GET',
});
promise
	.then((resp) => resp.json())
	.then((data) => {
		data.forEach((item) => {
			const outputEl = document.getElementById('output');
			const brandEl = document.createElement('div');
			const modelsEl = document.createElement('div');
			brandEl.append(item.brand);
			modelsEl.append(item.models);
			outputEl.append(brandEl);
			outputEl.append(modelsEl);
			brandEl.style.margin = '10px';
			brandEl.style.fontWeight = 'bold';
			modelsEl.style.margin = '20px 10px 20px 10px';
		});
	});


