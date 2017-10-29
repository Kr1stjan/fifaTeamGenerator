var teamsForShuffle = [];
var randomNumber;
var randomTeam;
function shuffle(){
    var teams = [];
    var requests = Array();
    while(teamsForShuffle.length > 0) {
    teamsForShuffle.pop();
    }
    if($("#option1").is(':checked')) {
        requests.push($.get(getUrl(1,59)));}
    
    if($("#option2").is(':checked')) {
        requests.push($.get(getUrl(60,62)));}
    
    if($("#option3").is(':checked')) {
        requests.push($.get(getUrl(63,64))); }
    
    if($("#option4").is(':checked')) {
        requests.push($.get(getUrl(65,66))); }

    if($("#option5").is(':checked')) {
        requests.push($.get(getUrl(67,68)));}
    
    if($("#option6").is(':checked')) {
        requests.push($.get(getUrl(69,70))); }
    
    if($("#option7").is(':checked')) {
        requests.push($.get(getUrl(71,74))); }
    
    if($("#option8").is(':checked')) {
        requests.push($.get(getUrl(75,78))); }
    
    if($("#option9").is(':checked')) {
        requests.push($.get(getUrl(79,82))); }
    
    if($("#option10").is(':checked')) {
        requests.push($.get(getUrl(83,99)));   
    }

    var defer = $.when.apply($, requests);
    defer.done(function(response){
        // This is executed only after every ajax request has been completed
        if (requests.length == 1)
            $.each(response.filteredTeams, function( index, team ) {
                teamsForShuffle.push(team.name);
            });
        else
            $.each(arguments, function(index, responseData){
                $.each(responseData[0].filteredTeams, function( index, team ) {
                    teamsForShuffle.push(team.name);
                });
            });
        // Get data here
        alert(teamsForShuffle.length);
        randomNumber = Math.floor((Math.random() * teamsForShuffle.length));
        randomTeam = teamsForShuffle[randomNumber];
        randomTeam.toString();
        document.getElementById("message").innerHTML = randomTeam;
    });
}

function getUrl(minRating, maxRating){
    return 'http://api.falcon.ee/teams?min_rating=' + minRating + '&max_rating=' + maxRating;
}