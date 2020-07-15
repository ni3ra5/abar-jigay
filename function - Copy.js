var i;

function scrollFunction()
{
	
	var home=document.getElementById('home_sec').scrollHeight;
	var about = document.getElementById('about_sec').scrollHeight;
	var howto = document.getElementById('howto_sec').scrollHeight;
	
	// var pos_about = about.scrollTop;
	
	var tab = document.getElementsByClassName('tab');

	for (i = 0; i < tab.length; i++)
	{ tab[i].classList.remove('tab_active'); }
	
	// var scroll = document.documentElement.scrollTop;
	var scroll = pageYOffset;

	if (scroll < about-100)
	{
		document.getElementById('ref-home').classList.add('tab_active');
		for (i = 0; i < tab.length; i++)
		{ tab[i].classList.remove('invert'); }
	}

	else if ((scroll >= about-100) && (scroll<howto+700)) 
	{
		document.getElementById('ref-about').classList.add('tab_active');
		for (i = 0; i < tab.length; i++)
		{ tab[i].classList.add('invert'); }
	}
	else
	{
		document.getElementById('ref-howto').classList.add('tab_active');
		for (i = 0; i < tab.length; i++)
		{ tab[i].classList.add('invert'); }
	}



	// alert(howto);
}