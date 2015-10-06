$(document).ready(function(){
	


	createTopBar();
	createMainFooter();

});

function createTopBar() {

	var nav_buttons = [];

	// index button
	var index_b = document.createElement('a');
	index_b.href = 'index.html';
	index_b.innerHTML = "Home";
	nav_buttons.push(index_b);

	// introduciton button
	var intro_b = document.createElement('a');
	intro_b.href = 'intro.html';
	intro_b.innerHTML = "Introduction";
	nav_buttons.push(intro_b);

	// education button
	var edu_b = document.createElement('a');
	edu_b.href = 'education.html';
	edu_b.innerHTML = "Education";
	nav_buttons.push(edu_b);

	// project button
	var proj_b = document.createElement('a');
	proj_b.href = 'project.html';
	proj_b.innerHTML = "Project";
	nav_buttons.push(proj_b);

	// skill button
	var skill_b = document.createElement('a');
	skill_b.href = 'skill.html';
	skill_b.innerHTML = "Skill";
	nav_buttons.push(skill_b);

	// post
	var post_b = document.createElement('a');
	post_b.href = 'post.html';
	post_b.innerHTML = "Post";
	nav_buttons.push(post_b);

	// others button
	var others_b = document.createElement('a');
	others_b.href = 'others.html';
	others_b.innerHTML = "Downloads";
	nav_buttons.push(others_b);



	var top_menu_list = document.createElement('ul');
	top_menu_list.id = 'top_menu_list';

	var top_menu = document.createElement('nav');
	top_menu.id = 'top_menu';

	$('#top_bar').append(top_menu);
	top_menu.appendChild(top_menu_list);

	for(i = 0; i < nav_buttons.length ; i++) {
		nav_buttons[i].className = 'nav_link';
		var list_item = document.createElement('li');
		list_item.className = 'main_nav_list';
		list_item.appendChild(nav_buttons[i]);
		top_menu_list.appendChild(list_item);
	}
}

function createMainFooter(){
	var name = document.createElement('p');
	name.innerHTML = "Xu Han";
	var contact_me = document.createElement('a');
	contact_me.innerHTML = "Contact Me";
	contact_me.href = "intro.html";
	contact_me.className = "link";
	
	var mail_me = document.createElement('p');
	mail_me.innerHTML = "Email: ";
	var mail_add = document.createElement('a');
	mail_add.className = "link";
	mail_add.href = "mailto:xhan@wpi.edu";
	mail_me.appendChild(mail_add);
	mail_add.innerHTML = "xhan@wpi.edu";

	$('#main_footer').append(name);
	$('#main_footer').append(contact_me);
	$('#main_footer').append(mail_me);
}

