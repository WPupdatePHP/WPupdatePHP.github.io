---
layout: page
title: About
permalink: /about/
---

WPupdatePHP is a PHP library to be bundled with WordPress plugins to enforce users to upgrade to PHP 5.6 or higher hosting.

## Why we do this
The developers of the affiliated plugins no longer want to support these old versions of PHP.

PHP.net lists <a href="http://php.net/eol.php">all unsupported versions</a>.

## What PHP versions are WordPress users running?
See for yourself. Then compare this to the list of unsupported PHP versions. This is why a proactive stance is needed.

<div id="php-versions-chart" style="width: 100%; height: 400px;"></div>

## No affiliation with WordPress or PHP
This project has no affiliation with WordPress or PHP. Developers using this library simply no longer want to work with old PHP versions, but do this on their own terms.

<script type="text/javascript" src="{{ "/js/main.js" | prepend: site.baseurl }}"></script>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript" src="https://api.wordpress.org/stats/php/1.0/?callback=WPUPHP_setData"></script>
<script type="text/javascript">
  window.addEventListener('load', function() {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(WPUPHP_drawChart);
  });
</script>