document.querySelector("#button1").addEventListener("click", getTextFile);
document.querySelector("#button2").addEventListener("click", getJsonFile);
document.querySelector("#button3").addEventListener("click", getAPI);


function getTextFile(){
    fetch("text.txt").then(function(response){
        return response.text();
    }).then(function(data){
        document.getElementById("output").innerHTML += data;
    }).catch(function(err){
        console.log(err)
    });
};

function getJsonFile(){
    fetch("article.json").then(function(response){
        return response.json();
    }).then(function(articles){
        let output = "<ul>";

        articles.forEach(function(article){

            output += `<li>Başlık${article.title} - İçerik${article.body}</li>`
        })

        output+= "</ul>"

        document.getElementById("output").innerHTML += output;
    }).catch(function(err){
        console.log(err)
    });
};

function getAPI(){
    fetch("https://api.github.com/users").then(function(response){
        return response.json();
    }).then(function(users){
        let output = "<ul>";

        users.forEach(function(user){

            output += `<li>Kullanıcı Adı${user.login}</li>`
        })

        output+= "</ul>"

        document.getElementById("output").innerHTML += output;
    }).catch(function(err){
        console.log(err)
    });
};