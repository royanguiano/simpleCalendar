
// Syntax for each event is as below
//["EventID", "day", "Event Name", "Event Description", "Start Time", "End Time"]
// Each event has a comma after the closing bracket If another event is below it on the next line down.

//testing events
events = new Array(

	["1", "15", "Stakeholders Meeting", "If Meeting with Stakeholders to discuss about project requirements", "9:00 AM", "10:00 AM"], ["2", "15", "", "Team lunch at ABC restaurant", "12:00 PM", "1:00 PM"], ["3", "15", "Bug scrub", "Meeting to analyze the release blocking software bugs", "4:00 PM", "5:00 PM"], ["4", "16", "lunch", "Lunch meeting with Customers", "12:00 PM", "1:00 PM"], ["5", "16", "Training", "Mandatory training", "10:00 AM", "1:00 PM"], ["6", "19", "Company All Hands", "Company All hands meeting to discuss the quarterly results", "3:00 PM", "5:00 PM"]

);

var calString = "";

//This function creates the Calendar and populates the Week from Jan 14 to Jan 20, 2018.
// It also checks if there are any events on a particular day. If there are any events on a particular day,
//that day is highlighted and when we click the date, the list of events gets populated.
function createCalendar() {
	calString = '';
	var daycounter = 14;
	var month = "January";
	var year = "2018";

	
	calString += '<table class="mainTable" cellpadding="0" cellspacing="1">';
	calString += '<tr>';

	calString += '<td class="maintd" align=\"center\" colspan=\"7\">January 2018<\/td>';

	calString += '<\/tr>';
	calString += '<tr>';
	calString += '<td class="maincell" align=\"center\">Sun<\/td>';
	calString += '<td class="maincell" align=\"center\">Mon<\/td>';
	calString += '<td class="maincell" align=\"center\">Tue<\/td>';
	calString += '<td class="maincell" align=\"center\">Wed<\/td>';
	calString += '<td class="maincell" align=\"center\">Thu<\/td>';
	calString += '<td class="maincell" align=\"center\">Fri<\/td>';
	calString += '<td class="maincell" align=\"center\">Sat<\/td>';
	calString += '<\/tr>';

	calString += '<tr>';
	for (var x = 1; x <= 7; x++) {
		if (checkForEvents(daycounter)) {
			calString += '<td class="event"><a href=\"javascript:paintCalendar(' + daycounter + ')\">' + daycounter + '<\/a><\/td>';
		} else {
			calString += '<td class="noEvent">' + daycounter + '<\/td>';
		}
		daycounter++;
	}

	calString += '<tr><\/tr><\/table>';

	var object = document.getElementById('calendar');
	object.innerHTML = calString;

}

// This function checks if there are any events present on a particular day.
// It returns true if events are present else returns false.

function checkForEvents(day) {
	var numevents = 0;

	checkValidEvents(events)

	for (var i = 0; i < events.length; i++) {

		if ((events[i][1] == day))
			numevents++;
	}

	if (numevents == 0) {
		return false;
	} else {
		return true;
	}
}

function checkValidEvents(events) {
	for (let i = 0; i < events.length; i++) {
		events[i].map((v) => {
			if (v == '') console.log(events[i])
		})
	}
}

// This function displays the list of events when user selects a particular day.
function paintCalendar(day) {

	var event = "";

	for (var i = 0; i < events.length; i++) {
		// First we'll process recurring events (if any):
		if ((events[i][1] == day)) {
			console.log(events[i])
			event += events[i][2] + '\n';
			event += 'Start Time: ' + events[i][4] + '\n';
			event += 'Ending Time: ' + events[i][5] + '\n';
			event += 'Description: ' + events[i][3] + '\n';
			event += '\n -------------- \n\n';
			document.forms.eventform.eventlist.value = event;
		}
	}
	if (event == "") document.forms.eventform.eventlist.value = 'No events to display.';
}