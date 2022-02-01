document.body.onload = addRepos;


function addRepos(){
    fetch('https://api.github.com/users/georgeayman97/repos')
    .then((response) => response.json())
    .then((repositories) => {
        
    
        repositories.forEach(repo => {
            let mainrepo = document.getElementById("repository");
            
            let mainDiv = document.createElement("div");
            mainDiv.className = 'col-4 col-6-medium col-12-small';
            mainrepo.appendChild(mainDiv);

            let mainArticle = document.createElement("article");
            mainArticle.className = 'box style2 repos'; 
            mainDiv.appendChild(mainArticle);

            let a1 = document.createElement("a");
            a1.className = 'image featured';
            a1.href = `https://github.com/georgeayman97/${repo.name}`;

            let a2 = document.createElement("a");
            a2.className = 'image featured';
            a2.href = `https://github.com/georgeayman97/${repo.name}`;
            
            let h3 = document.createElement("h3");
            h3.appendChild(a2);

            let a3 = document.createElement("a");
            a3.textContent = '  '+repo.name;
            a3.href = `https://github.com/georgeayman97/${repo.name}`;
            

            let li = document.createElement("li");
            li.className = 'fa fa-github';
            li.style = 'font-size:24px';
            h3.appendChild(li);
            h3.appendChild(a3);

            let p = document.createElement("p");
            p.textContent = repo.description;
            
    
            
            mainArticle.appendChild(a1);
            mainArticle.appendChild(h3);
            if(repo.name == 'Fully-Automated-Portfolio'){
                let a4 = document.createElement("a");
                a4.textContent = 'WebSite Link';
                a4.href = repo.homepage;
                
                mainArticle.appendChild(a4);
            }
            
            mainArticle.appendChild(p);
        });
    });
}
