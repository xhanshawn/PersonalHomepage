var url_base = "http://users.wpi.edu/~xhan";
$(window).load(function(){
	readIntroduction();
	addProjects();
});

function readFile(file_url) {

	var content;
	$.get(file_url)
	.done(function( data ) {
    	content = data;
	})
	.fail(function() {

	})
	.always(function() {

	});
	
	return content;
}


function readIntroduction() {

	
	$.ajax({
        url : url_base + "/text/introduction.txt",
        dataType: "text",
        success : function (data) {
        	var content = data.replace(/[|&;$%@"<>+,]/g, "");
        	var p = content.search(/\n/g);
        	content = content.substring(0, p);
        	$('#intro_p').html(content);
        }
    });
	
}


function addProjects(){
	
 	$.ajax({
        url : url_base + "/text/projects.txt",
        dataType: "text",
        success : function (data) {
        	var str = data.replace(/[|&;$%@"<>+,]/g, "");
        	while(str.length > 0 && str.search("PROJECT: ") != -1) {
        		var p1 = str.search("PROJECT: ") + "PROJECT: ".length;
        		var p2 = str.search("DESCRIPTION: ");
        		var project = document.createElement('li');
    			project.innerHTML = str.substring(p1, p2);
    			$('#project_list').append(project);
    			str = str.substring(p2 + "DESCRIPTION: ".length, str.length);

        	}
        }
    });
}



var str = "PROJECT: CS509: Flight Search System DESCRIPTION: In the Course CS 509 Design of Software System, I joined a team to build a flight reservation system. My job in this team is to build all back end things except buying tickets in the remote database server provided by the professor. What I did is to retrieve data from server by XML and then parse store them by data structures designed by myself, like Airpot, Flight, Airplane. The cached data and management is also my job. " 
+ "My heaviest work is to search customer wanted flight plan results based on all the available data provided by professor.The core algorithm is to at first sort all the possible ariports by the direction of user's trip. For example, if customer wants to fly from Boston to L.A then we assume the main direction is on the longitude. So we sort the airport list by longitude. After sorting, the second step is to pick out the depart airport and end airport and only iterate airports between them to avoid redundant flight plans. Next filter operation is to check if one airport is a possible layover airport by some assumptions like the distance, the flight angle etc. All these filters are designed for decreasing the chance to waste time to search flights from server retrieving useless information. After all the filters, what we should do is to build flight plans recursively in a way like DFS. Converting local time from the GMT time in the server is another work of my duty. During the time of searching results, the system doesn't convert time. The conversion only happens in the querying step and showing final results. A point must be metioned is we need to query two days because local time usually has timezone offsets and the time in the database is GMT time. "
  + "In the back end part, I builded the main interface for commuting with front end. Moreover, I wrote some codes to parse instances of data back to XML for communication. " 
 + "To finish the project, I had to do some front end jobs as well. The auto-complete and updating airport lists in the first page, the pagination in the second page, the loading function, results sorting are what I did in the front end by using JavaScript JQuery and HTML 5. " 
 + "Another thing I want to mention is the results showing idea derived by myself. The results are separately retrieved from server. For example, direct flight plan is retrieved most quickly and show. Then the one-stop plans will be retrieved and show. At last, the two-stop plans will get most slowly and show at last. This flow is implemented by AJax, which I think can give user a better experience, because the database is remote which means the results have to be fetched very slowly. " 
 + "You can try our project demo before our professor shuts down his database server. The second page's filter has something wrong, so please avoid using it during loading. All the information like flights are only used for study. Please don't trust it and use it for other uses.  " 
 + "PROJECT: Snake Game DESCRIPTION: Snake Game is a cute Java game. It is a classic computer game. At first, I use playsnake.java to implement the logic function of the game including Snake moving, Turning direction, Body increase, Random setting food and Detection of Game over. I use Javax.swing to build the Graphic User Interface (GUI) of this game. All the listeners of input and GUI are put in SnakeGame.java. The runnable Java program and source code are open for downloading. " 
 + "PROJECT: Android Application Development DESCRIPTION: During the Winter break of 2014, one of my friend and I decided to develop a new Android Application (APP) together. He had an idea to develop a APP to deliver one's feeling and mood in a certain location. It is like the notes posted in a cafe or on the wall painted with doodles. Or like what we can see in a place of interest, somebody post his mood or wish on a wall or on a tree. So the new concept currently called \"MoodNote\" came out. It is a social network APP where we don't want to provide a direct way to find friends and communicate. All the notes posted are tightly bundled with Geolocaiton information. It may gives you a message when you arrive at where you used to be and tells you what feelings and wishes you had in the old days. It provides two input types involving painting and text. In a word, it is a new Social Network APP and it is still ongoing. " 
 + "My duty is to develop the Main UI and Setting UI. Main UI includes displaying Notes, switching to next note, liking current note and so on. I designed and implemented all the widgets and animations, and customized Action Bar and List view. I also need to develop function to retrieve data from server and manage them. " 
  + "PROJECT: Personal homepage " 
  + "DESCRIPTION: I developed this cute personal homepage recently. I will update continuely."