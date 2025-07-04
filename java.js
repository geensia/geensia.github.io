document.querySelector('#moreLess1').addEventListener('click', toggleContent);
document.querySelector('#moreLess2').addEventListener('click', toggleContent);
document.querySelector('#moreLess3').addEventListener('click', toggleContent);
document.querySelector('#moreLess4').addEventListener('click', toggleContent);

function toggleContent()  {
	let details;
	if (this.id == "moreLess1")
	   details = document.querySelector('#info1');
	if (this.id == "moreLess2")
	   details = document.querySelector('#info2');
	if (this.id == "moreLess3")
	   details = document.querySelector('#info3');
	if (this.id == "moreLess4")
	   details = document.querySelector('#info4');

    if (this.textContent == "Read More") {
        details.style.display = 'block';
        this.textContent = "Read Less";
    }
    else {
       details.style.display = 'none';
       this.textContent = "Read More";
    }
}