'use strict';

var WPUPHP_chartData;

function WPUPHP_setData(data) {
	WPUPHP_chartData = [
		[ 'Version', 'Usage' ]
	];
	for(var version in data) {
		WPUPHP_chartData.push([ version, data[version] ]);
	}
}

function WPUPHP_drawChart() {
	var dataTable = google.visualization.arrayToDataTable(WPUPHP_chartData);
	var options = { title: 'PHP Versions' };
	var chart = new google.visualization.PieChart(document.getElementById('php-versions-chart'));
	chart.draw(dataTable, options);
}
