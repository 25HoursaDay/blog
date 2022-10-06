let txt = de;
fetch("https://raw.githubusercontent.com/25HoursaDay/blog/main/main-assets/sidenav.html").then((result) => { return result.text(); }).then((content) => { let con = document.innerHTML = content; con.body.append(txt);});
