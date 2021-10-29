const citationsContainer = document.querySelector('.citations-container');
const citationsLoader = document.querySelector('#citations-loader');
const citationsImagePath = citationsContainer.getAttribute('data-image-path');
const citationUrl = citationsContainer.getAttribute('data-citations-url');
const citationProvider = citationsContainer.getAttribute('data-citations-provider');
const citationShowTotal = citationsContainer.getAttribute('data-citations-total');
const citationShowList = citationsContainer.getAttribute('data-citations-list');
const showGoogle = citationsContainer.getAttribute('data-show-google');
const showPmc = citationsContainer.getAttribute('data-show-pmc');

fetch(citationUrl, {
	method: 'GET',
}).then(function (response) {
	if (response.ok) {
		return response.json();
	} else
		throw new Error('Error getting API Data!');
}).then((data) => {
	displayTotalContent(data.content);
	displayListContent(data.content);
	sortReferenceList();
	citationsLoader.style.display = 'none';
}).catch(error => {
	citationsLoader.style.display = 'none';
	console.log(error);
});

function sortReferenceList() {
	var refs = [];
	var reflist_elements = document.querySelectorAll('.citations-list li.ref')
	var reflist_container = document.querySelector('.citations-list');

	for(var i = 0; i < reflist_elements.length; i++) {
		refs.push(reflist_elements[i]);
	}
	
	// sort the array of reference entries
	refs.sort(function(a,b) {
		var a_year = a.getAttribute('data-year') + 0;
		var b_year = b.getAttribute('data-year') + 0;
	
		if (a_year < b_year) {
			return 1;
		}
		if (a_year > b_year) {
	  		return -1;
		}
		return 0;
		});

	// append the reference entries to the reference list in sorted order
	for(var i = 0; i < refs.length; i++) {
		reflist_container.appendChild(refs[i]);
	}
}

function displayTotalContent(data) {
	if (citationProvider && citationShowTotal) {
		let crossrefTotal = document.querySelector('.citations-count-crossref');
		let scopusTotal = document.querySelector('.citations-count-scopus');
		let gridColumns = "1fr";
		switch (citationProvider) {
			case 'crossref':
				crossrefTotal.style.display = 'block';
				crossrefTotal.querySelector('.badge_total').innerText = data["crossref_count"] ? data["crossref_count"] : 0;
				break;
			case 'scopus':
				scopusTotal.style.display = 'block';
				scopusTotal.querySelector('.badge_total').innerText = data["scopus_count"] ? data["scopus_count"] : 0;
				break;
			case 'all':
				crossrefTotal.style.display = 'block';
				scopusTotal.style.display = 'block';
				crossrefTotal.querySelector('.badge_total').innerText = data["crossref_count"] ? data["crossref_count"] : 0;
				scopusTotal.querySelector('.badge_total').innerText = data["scopus_count"] ? data["scopus_count"] : 0;
				gridColumns += ' 1fr';
				break;
		}
		if (showGoogle === "1") {
			document.querySelector('.citations-count-google').style.display = 'block';
			gridColumns += ' 1fr';
		}
		if (showPmc === "1") {
			document.querySelector('.citations-count-pmc').style.display = 'block';
			document.querySelector('.citations-count-pmc').querySelector('.badge_total').innerText = data["pmc_count"] ? data["pmc_count"] : 0;
			gridColumns += ' 1fr';
		}
		document.querySelector('.citations-count').style.gridTemplateColumns = gridColumns;
		if (gridColumns.length === 3) {
			document.querySelector('.citations-count').querySelector('img').style.maxWidth = '50%';
		}
	}
}

function displayListContent(data) {
	if (citationShowList) {
		let list = data[citationProvider + '_list'];
		if (list && list.length > 0) {
			for (let item of list) {
				document.querySelector('.citations-list').appendChild(createListElement(item));
			}
		}
	
	}
}

function createListElement(item) {
	let reference = document.createElement('li');
	reference.classList = "ref";
	let img = document.createElement("img");
	img.src = citationsImagePath + '/' + item['type'] + '.png';
	img.alt = item['type'] + " Logo";
	/*reference.appendChild(img);*/
	let authors_year = document.createElement('span');
	authors_year.classList = "authors year";
	authors_year.innerHTML = item['authors'] + ' (' + item['year'] + '). ';
	reference.setAttribute('data-year', item['year']);
	reference.appendChild(authors_year);
	let title = document.createElement('strong');
	//title.style.fontWeight = 'bold';
	title.innerHTML = item['article_title'] + '. ';
	reference.append(title);

	let journal_and_volume = document.createElement('em');
	journal_and_volume.classList = "journal volume";
	let journal_issue = document.createElement('span');
	journal_issue.classList = "issue";
	let journal_pages = document.createElement('span');
	journal_pages.classList = "pages";
	if (item['journal_title'] && item['journal_title'] !== '')
		//reference.append(item['journal_title'] + ', ');
		journal_and_volume.append(item['journal_title'] + ', ');
	if (item['volume'] && item['volume'] !== '') {
		//reference.append(" " + item['volume']);
		journal_and_volume.append(" " + item['volume']);
		if (item['issue'] && item['issue'] !== '')
			//reference.append("(" + item['issue'] + '), ');
			journal_issue.append("(" + item['issue'] + '), ');
		else
			//reference.append(", ");
			journal_issue.append(", ");
	}
	if (item['first_page'] && item['first_page'] !== ' :')
		//reference.append(item['first_page'] + '.');
		journal_pages.append(item['first_page'] + '.');
		reference.appendChild(journal_and_volume);
		reference.appendChild(journal_issue);
		reference.appendChild(journal_pages);
	//reference.appendChild(document.createElement('br'));
	let doi = document.createElement('a');
	doi.classList = "doi";
	doi.href = "https://doi.org/" + item['doi'];
	doi.target = "_blank";
	doi.rel = "noreferrer";
	//doi.innerText = item['doi'];
	doi.innerText = doi.href;
	reference.innerHTML = reference.innerHTML + " ";
	reference.append(doi);
	return reference;
}

