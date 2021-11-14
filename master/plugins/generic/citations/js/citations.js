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
	reorganizeCitationListWithYearAndCountsHeadings();
	citationsLoader.style.display = 'none';
}).catch(error => {
	citationsLoader.style.display = 'none';
	console.log(error);
});

function updateCitationListCounters(){

	var citations_list = document.querySelector('.citations-list'); 
	var citations = document.querySelectorAll('.citations-list .ref'); // array with citation list items
	var citation_headings = document.querySelectorAll('.citations-list dt'); // array with citation dt elements
	
	for (var a=0; a<citation_headings.length; a++) {
		let current_node = citation_headings[a];
		let current_year = citation_headings[a].getAttribute('data-year');
		//console.log("1, current_year: " + current_year);
		let current_year_counter = 0;
		for (var b=0; b<citations.length; b++) {
			if(citations[b].getAttribute('data-year') == current_year) {
				current_year_counter ++;
			}
		}
		current_node.setAttribute('data-count', current_year_counter);
	}

	var counters = document.querySelectorAll('.citations-list dt .counter');

	// display the counters
	for(var c=0; c<counters.length; c++) {
		let current = counters[c];
		current.innerHTML = current.parentElement.getAttribute('data-count');
		current.parentElement.setAttribute('title','In ' + current.parentElement.getAttribute('data-year') + ' this article was cited ' + current.parentElement.getAttribute('data-count') + ' times.');

	}
}

function createCitationYearHeading(year) {
	var el = document.createElement('dt');
	el.setAttribute('data-year',year);
	el.innerHTML = "<span>" + year + "</span> (<span class=\"counter\"></span>)";
	return el;
}

function reorganizeCitationListWithYearAndCountsHeadings(){
	var citation_years = [];
	var reorganized_citations_list = [];
	var citations_list = document.querySelector('.citations-list'); 
	var citations = document.querySelectorAll('.citations-list .ref'); // array with citation list items

	// find all citation years for the article OK
	for(let a=0; a<citations.length; a++) {
		let current_year = citations[a].getAttribute('data-year');
		if(!citation_years.includes(current_year)) {
			citation_years.push(current_year);
		}
	}

	// for each year, create the heading and push it and all citations matching this year to the array "reorganized_citations_list"
	for(var b=0; b<citation_years.length; b++) {
		// create the citation year heading and push it to "reorganized_citations_list" array
		reorganized_citations_list.push(createCitationYearHeading(citation_years[b]));

		for(var c=0; c<citations.length; c++) {
			if(citations[c].getAttribute('data-year') == citation_years[b]) {
				reorganized_citations_list.push(citations[c]);
			}
		}
	}

	// append all items in "reorganized_citations_list" to citations_list
	for(var e=0; e<reorganized_citations_list.length; e++) {
		citations_list.appendChild(reorganized_citations_list[e]);
	}

	updateCitationListCounters();

	// debug:
	//console.log(citation_years);
	// console.log(reorganized_citations_list);
}

function sortReferenceList() {
	var refs = [];
	var reflist_elements = document.querySelectorAll('.citations-list dd.ref')
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
	let reference = document.createElement('dd');
	reference.classList = "ref";
	let img = document.createElement("img");
	img.src = citationsImagePath + '/' + item['type'] + '.png';
	img.alt = item['type'] + " Logo";
	/*reference.appendChild(img);*/
	let authors = document.createElement('span');
	authors.classList = "authors";
	authors.innerHTML = item['authors'];

	let year = document.createElement('span');
	year.classList = "year";
	year.innerHTML = ' (' + item['year'] + '). ';
	
	reference.setAttribute('data-year', item['year']);
	reference.appendChild(authors);
	reference.appendChild(year);
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

