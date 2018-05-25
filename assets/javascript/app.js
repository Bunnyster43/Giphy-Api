var APIKey = "HNCxgPSEHdHMMDOocVx6MPd6VUvKUzvw";

$(document).ready(function(){
    $('button').on('click', function() {
        var animal = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=HNCxgPSEHdHMMDOocVx6MPd6VUvKUzvw&limit=10";

        $.ajax({ url: queryURL, method: 'GET' })
            .done(function(response) {
                console.log(response)

            var results = response.data;
                for (var i = 0; i < results.length; i++) {
                    var animalDiv = $('<div/>');
                    var p =$('<p/>');
                    p.text(results[i].rating);
                    var animalImage = $('<img/>');
                    animalImage.addClass('Img')
                    animalImage.attr('src', results[i].images.fixed_height.url);
                    animalImage.attr('dataAnimate', results[i].images.fixed_height.url)
                    animalDiv.append(p);
                    animalDiv.append(animalImage);
                    animalDiv.prependTo($('#gifs'));
                }
            });
    });

    var animals = [''];

        $('#theButton').on('click', function(){
            var animalButton = $("#gif-input").val();
            var newButton = $("<button/>").addClass( "animalsbuttons").attr('data-name',animalButton).html(animalButton).css({'margin':'5px'});
            $("#animalsbuttons").append(newButton);
                console.log("Work");

            queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalButton + "&api_key=HNCxgPSEHdHMMDOocVx6MPd6VUvKUzvw&limit=10";
                console.log(animalButton);

            $.ajax({ url: queryURL, method: 'GET'})

            .done(function(response) {

            var results = response.data;
                for (var i = 0; i < results.length; i++) {
                    var animalDiv = $('<div/>');
                    var p =$('<p/>');
                    p.text(results[i].rating);
                    var animalImage = $('<img/>');
                    animalImage.addClass('Img')
                    animalImage.attr('src', results[i].images.fixed_height_still.url);
                    animalImage.attr('dataAnimate', results[i].images.fixed_height.url)
                    animalDiv.append(p);
                    animalDiv.append(animalImage);
                    animalDiv.prependTo($('#gifs'));
                }

            });

            $("#gif-input").val("");
            return false;
        })

});
