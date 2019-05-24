'use strict';

const rows = document.querySelectorAll('tbody > tr');
const arrayFromRows = [];
rows.forEach(el => arrayFromRows.push(el));

const container = document.querySelector('#grid');

	container.onclick = (event) => {
		const target = event.target;
		if (target.tagName != "TH") return; 
			if (target.getAttribute('data-type') === 'number') { 
			sortTableByAge();
		} else {
			sortTableByName();
	}
	const tBody = document.querySelector('tbody');
	arrayFromRows.forEach((el) => {
	tBody.append(el);})
};

const sortTableByAge = () => {

	rows.forEach((el) => {
		 
		const sortCallback = (el1, el2) => {
		 
		return el1.firstElementChild.textContent - el2.firstElementChild.textContent;}
		arrayFromRows.sort(sortCallback);});
};

const sortTableByName = () => {

 	rows.forEach((el) => {
		 
		const sortCallback = (el1, el2) => {
		 	
		return el1.lastElementChild.textContent.localeCompare(el2.lastElementChild.textContent);}
		arrayFromRows.sort(sortCallback)})
};
