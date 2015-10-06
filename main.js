function navButton(var x){
	var list = document.querySelectorAll('x')
	for(var i;i<list.length;i++){
		list[i].onClick = mainNav(i);
	}
}



function mainNav(var i){
	switch (i){
		
		case 0: 
			document.URL='http://www.google.com';
			break;
		
		default:
			break;
		
		
		
	}
}


window.onload = navButton('#main_nav_list');
