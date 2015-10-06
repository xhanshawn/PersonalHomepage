var data = [], d1, d2, d4;

//get the URL var

//get p1's position and get the eq
var p1 = "2y+x=5";
//get p2's position and get the answers
var p2 = ["2*y=5-x", "2*y=-x+5"];
//split the answers and get it in one var

d2 = {"options":{"eq":p1,"pos":[225,100],"selection_color":"#DE2F2F",
"color":"#676965","inactive_color":"#676965","no_handles":true,"normal_font":
{"family":"Kalam","id":"_4a47211defe2635e"},
"italic_font":{"family":"Kalam","id":"_4a47211defe2635e"},
"font_baseline_shift":0.4,"font_ascent":0.9,"font_descent":0.2,
"slanted_div_bar":true,"div_bar_height":0.07142857142857142,
"no_history":true,"h_align":"center"},};
d2.correctAnswers = p2;
//d2.options.enable_drag_to_join = false;
d2.text = ' ';
d2.startWiggle = ["2"];

data.push({title: 'Rearranging Terms', tasks: [d1, d2]});