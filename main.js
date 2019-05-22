'use strict';

const trs = document.querySelectorAll('tr');
const trsArr0 = [];
trs.forEach(el => trsArr0.push(el));

const trsArr = trsArr0.slice(1);

const sortEvent = document.querySelector('#grid');

	sortEvent.onclick = (event) => {
		const target = event.target;
		if (target.tagName != "TH") return; 
			if (target.getAttribute('data-type') === 'number') { 
			sortTableByAge();
		} else {
			sortTableByName();
	}
	const tbody = document.querySelector('tbody');
	trsArr.forEach((el) => {
	tbody.append(el);})
};

const sortTableByAge = () => {

	trs.forEach((el) => {
		 
		const sortCallback = (el1, el2) => {
		 
		return el1.firstElementChild.textContent - el2.firstElementChild.textContent;}
		trsArr.sort(sortCallback);});
};

const sortTableByName = () => {

 	trs.forEach((el) => {
		 
		const sortCallback = (el1, el2) => {
		 	
		return el1.lastElementChild.textContent.localeCompare(el2.lastElementChild.textContent);}
		trsArr.sort(sortCallback)})
};
