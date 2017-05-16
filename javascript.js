var half = ['pool1', 'pool2'];
var one = ['yks1', 'yks2'];
var onehalf = ['Perth Glory', 'Admira','SCR Altach','SV Grödig','Wiener Neustadt'];
var two = ['Adelaide United','Brisbane Roar','Central Coast','Melbourne Victory','Newcastle Jets','Sydney FC','Well. Pheonix','WS Wanderers','SV Ried','Wolfsberger AC'];
var twohalf = ['Bahia Blanca','Fl. Varela','G. La Plata','Godoy Cruz','Quilmes','Rafaela','Melbourne City','SK Rapid Wien','SK Sturm Graz','Cercle Brugge','KV Oostende','KVC Westerlo','Lierse SK','Royal Mouscron'];
var three = ['Banfield', 'Belgrano','Estudiantes','Independiente','Rosario Ctral','Tigre','Velez Sarsfield','FK Austria','KAA Gent','KV Kortrijk','KV Mechelen','Sp. Charleroi','Sport Lokeren','Waasl.-Beveren','Zulte Waregem'];
var threehalf = ['Boca Juniors', 'Lanus','Newells','Racing Club','River Plate','San Lorenzo','Sarandi','RB Salzburg','Club Brugge','KRC Genk','Anderlecht','Standard Liege','Burnley','Crystal Palace','Hull City','Leicester City','Celta Vigo','Cordoba','Elche','Getafe', 'Granada', 'RC Deportivo','RCD Espanyol','SD Eibar','UD Almeria'];
var four = ['Aston Villa','Newcastle','QPR','Southampton','Sunderland','Swansea','West Brom','West Ham','Levante','Malaga','Rayo Vallecano','Villareal'];
var fourhalf = ['Everton', 'Liverpool','Spurs','Stoke','Athletic Bilbao','Atletico Madrid','Real Sociedad','Sevilla','Valencia'];
var five = ['Arsenal','Chelsea','Man City','Man Utd','FC Barcelona','Real Madrid'];
var shufflearray = [];
var valikud = [];
function shuffle(){
    while(shufflearray.length > 0) {
    shufflearray.pop();
    }
    if($("#option1").is(':checked')) {
    shufflearray.push.apply(shufflearray, half);}
    if($("#option2").is(':checked')) {
       shufflearray.push.apply(shufflearray, one);}
    if($("#option3").is(':checked')) {
        shufflearray.push.apply(shufflearray, onehalf); }
    if($("#option4").is(':checked')) {
        shufflearray.push.apply(shufflearray, two); }
    if($("#option5").is(':checked')) {
        shufflearray.push.apply(shufflearray, twohalf); }
    if($("#option6").is(':checked')) {
        shufflearray.push.apply(shufflearray, three); }
    if($("#option7").is(':checked')) {
        shufflearray.push.apply(shufflearray, threehalf); }
    if($("#option8").is(':checked')) {
        shufflearray.push.apply(shufflearray, four); }
    if($("#option9").is(':checked')) {
        shufflearray.push.apply(shufflearray, fourhalf); }
    if($("#option10").is(':checked')) {
        shufflearray.push.apply(shufflearray, five); }
    var randomnumber = Math.floor((Math.random() * shufflearray.length));
    var randomteam = shufflearray[randomnumber];
    randomteam.toString();
    document.getElementById("demo").innerHTML = randomteam;
}