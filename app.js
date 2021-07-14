console.log("Welcome to project 3");
// 3d5cc0539a7c4b7c9fda704c85225656
let newsAcc = document.getElementById('newsAcc');
//making a xhr request 
const key = config.API_KEY;
const xhr = new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`,true);

xhr.onload = function(){
    if(this.status === 200){
        let news = JSON.parse(xhr.responseText);
        let articles = news.articles;
        let newshtml = "";
        articles.forEach(function(element,index){
            let news = `
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-heading${index}" style="background-color:skyblue">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
                    <strong>Breaking News ${index+1}</strong> : ${element.title};
                </button>
                </h2>
                <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}" data-bs-parent="#newsAcc">
                <div class="accordion-body">${element.content}<br>
                <a href=${element.url} target="_blank">Read More</a>
                </div>
                </div>
            </div>
            `
                newshtml += news;    
        });
        newsAcc.innerHTML = newshtml;
    }else{
        console.log("Some error occured!");
    }
}
xhr.send();
