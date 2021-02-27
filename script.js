console.log("test1");

document.getElementById("animalSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  // const value = document.getElementById("animalInput").value;
  // if (value === "")
  //   return;
  const url = "https://cat-fact.herokuapp.com/facts";
    // debugger
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        console.log(json);

        // This is where to edit html
        let string = "<div>";
        for (let i = 0; i < 5; i++) {
          string += "<p>" + (i+1) + ". " + json[i].text + "</p><br>";
        }
        string += "</div>";

        document.getElementById("result-box").innerHTML = string;
      });
});

document.getElementById("wordSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("wordInput").value;
  if (value === "")
    return;
  const url = "https://dictionaryapi.com/api/v3/references/collegiate/json/"
        + value + "?key=6f77a523-6bde-4d92-8016-f788c5df9ee8";
    // debugger
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        console.log(json);
        let string = "";
        // This is where to edit html
        try {
          string = "<div>Top three definitions:";
          for (let i = 0; i < 3; i++) {
            string += "<div><br><p>" + (i+1) + ":  " + json[i].fl + "</p><ul>";
            for (let j = 0; j < json[i].shortdef.length; j++) {
              string += "<li>\t" + json[i].shortdef[j] + "</li>"
            }
            string += "</ul>";
          }
          string += "</div><br>";
        }
        catch (error) {
          string = "<div<p>Definition not found. Maybe you meant...</p><br><p>"
          for (let i = 0; i < json.length; i++) {
            string += json[i];
            if (i === json.length - 1) {
              string += ".</p>"
            }
            else {
              string += ", ";
            }
          }
          string += "</div>"
        }
        document.getElementById("result-box2").innerHTML = string;
      });
});

document.getElementById("personalitySubmit").addEventListener("click", function(event) {
  event.preventDefault();



  const url = "https://api.kanye.rest";
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        console.log(json);
        let string = "";
        string += "<p>Kanye West once said this: \"" + json.quote + "\". If you said this at parties, you'd be cool too.</p>";
        document.getElementById("result-box3").innerHTML = string;
      });
  const url2 = "https://api.chucknorris.io/jokes/random";
  // debugger
  fetch(url2)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        console.log(json);
        let string2 = "";
        string2 = "<p>Everybody loves Chuck Norris jokes! Here's something you could say when you're hanging with friends:</p>";
        string2 += "<p>\"" + json.value + "\"</p>";
        document.getElementById("result-box4").innerHTML = string2;
      });

  const url3 = "https://api.taylor.rest/";
  // debugger
  fetch(url3)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        console.log(json);
        let string3 = "";
        string3 += "<p>People also love Taylor swift. Throw this quote down and watch your friends double in size! \"" + json.quote + "\". You don't beleive me? Have fun being a loner then.</p><br>";
        document.getElementById("result-box5").innerHTML = string3;
      });
});


// Populate results box with info from website
