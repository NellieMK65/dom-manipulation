document.addEventListener('DOMContentLoaded', () => {
	console.log('Our js is linked to the html');

	const header = document.querySelector('h1');

	console.log(header);

	// selecting a couple of tags
	// returns a collection of elements (in short array)
	// const h1Tags = document.getElementsByTagName('h1');
	const h1Tags = document.querySelectorAll('h1');
	/**
	 * The whole point of using backticks when using innerHTML is that
	 * we might need to dynamically inject values
	 */
	h1Tags[1].innerHTML = `
		<span style="color: blueviolet;">Todays date is ${new Date().toDateString()}</span>
	`;

	// console.log(h1Tags[1]);

	const paragraph = document.getElementById('my-paragraph');
	// paragraph.innerText = 'New text';

	// console.log(paragraph);

	// select paragraph using querySelector
	const sameParagraph = document.querySelector('.heading');
	sameParagraph.innerText = 'Some new text';

	console.log(sameParagraph);

	const headings = document.getElementsByClassName('heading');

	console.log(headings);

	const elements = document.querySelectorAll('.title');

	console.log(elements);

	const lastHeading = document.querySelector('body > h2');

	console.log(lastHeading);

	// document.querySelector("body > h1:nth-child(3)")

	// Creating elements dynamically and attach them to our html

	// 1. Select the element to append the new html to
	const div = document.querySelector('#dom-manipulation');

	// 2. use innerHTML to append the new html content
	// div.innerHTML = `
	// 	<a href="https://en.wikipedia.org/wiki/Ada_Lovelace" target="_blank" > Ada Lovelace </a>
	// 	<p class="title">A new parapgraph</p>
	// `;
	const link = document.createElement('a');
	link.innerText = 'Ada Lovelace';
	link.href = 'https://en.wikipedia.org/wiki/Ada_Lovelace';
	link.target = `_blank`;
	link.className = 'title';
	link.style.color = '#f2f';

	const newParagraph = document.createElement('p');
	newParagraph.innerText = 'A new paragraph';
	newParagraph.className = 'title';

	div.append(link, newParagraph);
});
