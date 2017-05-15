<html>
<head>
<title>FIFA 15 Random Team Generator</title>
    <script src="jquery-1.10.2.js"></script>
    <script src="underscore-min.js"></script>
    <script src="javascript.js"></script>
    <link href="styling.css" rel="stylesheet">
    <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-67904176-1', 'auto');
  ga('send', 'pageview');

</script>
</head>
<body>
<div id="bg"></div> 
<div id="area"><br>
    <input id="option1" type="checkbox" name="option1" value="pool">0,5<br>
    <input id="option2" type="checkbox" name="option2" value="yks">1,0<br>
    <input id="option3" type="checkbox" name="option3" value="ykspool">1,5<br>
    <input id="option4" type="checkbox" name="option4" value="kaks">2,0<br>
    <input id="option5" type="checkbox" name="option5" value="kakspool">2,5<br>
    <input id="option6" type="checkbox" name="option6" value="kolm">3,0<br>
    <input id="option7" type="checkbox" name="option7" value="kolmpool">3,5<br>
    <input id="option8" type="checkbox" name="option8" value="neli">4,0<br>
    <input id="option9" type="checkbox" name="option9" value="nelipool" checked>4,5<br>
    <input id="option10" type="checkbox" name="option10" value="viis" checked>5,0<br>
    <button onclick="shuffle()">Generate!</button>
    <p id="demo"></p>
<br>
</div>
    
</body>
</html>