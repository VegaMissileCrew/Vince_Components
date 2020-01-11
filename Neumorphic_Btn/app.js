const btns = document.querySelectorAll('.button');

for (const btn of btns)
{
	btn.addEventListener('click', () => 
 	{ btn.classList.toggle('pushed'); });
}
