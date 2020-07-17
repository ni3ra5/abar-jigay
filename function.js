var i;

function scrollFunction()
{
	
	var home=document.getElementById('home_sec').scrollHeight;
	var about = document.getElementById('about_sec').scrollHeight;
	var howto = document.getElementById('howto_sec').scrollHeight;
	
	var tab = document.getElementsByClassName('catch');
	const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
	// alert(vh);

	for (i = 0; i < tab.length; i++)
	{ tab[i].classList.remove('tab_active'); }
	
	var scroll = pageYOffset;

	if (scroll < vh-100)
	{
		document.getElementById('ref-home').classList.add('tab_active');
		for (i = 0; i < tab.length; i++)
		{ tab[i].classList.remove('invert'); }
	}

	else if ((scroll >= vh-100) && (scroll< vh+600)) 
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

function small_logo()
{
	var logo = document.getElementById("mainLogo");
	var scroll = pageYOffset;

	if (scroll > 10)
	{
		logo.classList.add('small_logo');
	}
	else
	{
		logo.classList.remove('small_logo');
	}
}

function loader()
{
	var loader = document.getElementById('loader');
	setTimeout(function () { loader.style.opacity = '0'; }, 500);
	setTimeout(function () { loader.style.display = 'none'; }, 800);
}