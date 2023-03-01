function displayMovies() {
    $.ajax({
        url: "http://www.omdbapi.com/?s=batman&apikey=YOUR_API_KEY",
        type: "GET",
        dataType: "json",
        success: function (data) {
            // Check if the data contains the expected properties
            if (data && data.Search && data.Search.length >= 4) {
                // Process the data and append to the movie containers
                var movies = data.Search;
                if (isValidUrl(movies[0].Poster)) {
                    $("#movie-container1").html("<h2>" + movies[0].Title + "</h2>
                        < img src = '" + movies[0].Poster + "' > ");
                } else {
                    console.log("Error: Invalid poster URL for movie " + movies[0].Title);
                }
                if (isValidUrl(movies[1].Poster)) {
                    $("#movie-container2").html("<h2>" + movies[1].Title + "</h2>
                        < img src = '" + movies[1].Poster + "' > ");
                } else {
                    console.log("Error: Invalid poster URL for movie " + movies[1].Title);
                }
                if (isValidUrl(movies[2].Poster)) {
                    $("#movie-container3").html("<h2>" + movies[2].Title + "</h2>
                        < img src = '" + movies[2].Poster + "' > ");
                } else {
                    console.log("Error: Invalid poster URL for movie " + movies[2].Title);
                }
                if (isValidUrl(movies[3].Poster)) {
                    $("#movie-container4").html("<h2>" + movies[3].Title + "</h2>
                        < img src = '" + movies[3].Poster + "' > ");
                } else {
                    console.log("Error: Invalid poster URL for movie " + movies[3].Title);
                }
            } else {
                console.log("Error: Unexpected API response: " + JSON.stringify(data));
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Error: " + textStatus + " " + errorThrown);
        }
    });
}

function isValidUrl(url) {
    // Check if the URL starts with http or https and ends with an image file extension
    return /^https?:\/\/.*\.(jpg|jpeg|png|gif)$/i.test(url);
} dataType: "json",
    success: function (data) {
        var movies = data.Search;
        if (isValidUrl(movies[0].Poster)) {
            $("#movie-container1").html("<h2>" + movies[0].Title + "</h2> <img src='" + movies[0].Poster + "'>");
        } else {
            console.log("Error: Invalid poster URL for movie " + movies[0].Title);
}
        if (isValidUrl(movies[1].Poster)) {
            $("#movie-container2").html("<h2>" + movies[1].Title + "</h2> <img src='" + movies[1].Poster + "'>");
        } else {
            console.log("Error: Invalid poster URL for movie " + movies[1].Title);
        }
        if (isValidUrl(movies[2].Poster)) {
            $("#movie-container3").html("<h2>" + movies[2].Title + "</h2> <img src='" + movies[2].Poster + "'>");
        } else {
            console.log("Error: Invalid poster URL for movie " + movies[2].Title);
        }
        if (isValidUrl(movies[3].Poster)) {
            $("#movie-container4").html("<h2>" + movies[3].Title + "</h2> <img src='" + movies[3].Poster + "'>");
        } else {
            console.log("Error: Invalid poster URL for movie " + movies[3].Title);
        }
    },
error: function (jqXHR, textStatus, errorThrown) {
    console.log("Error: " + textStatus + " " + errorThrown);
}
    });