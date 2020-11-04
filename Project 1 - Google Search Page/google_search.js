function changeTheme(){

    var btnTheme = document.getElementById('btnTheme');

    if(btnTheme.classList.contains("light-button")){
        //Remove light theme
        document.body.classList.remove("light-body");
        btnTheme.classList.remove("light-button");
        document.getElementById("bottomFooter").classList.remove("light-footer");
        document.getElementById("txtSearch").classList.remove("light-search");

        //Add dark theme
        document.body.classList.add("dark-body");
        btnTheme.classList.add("dark-button");
        document.getElementById("bottomFooter").classList.add("dark-footer");
        document.getElementById("txtSearch").classList.add("dark-search");
        btnTheme.innerText = "Light Theme";
    }
    else{
        //Remove dark theme
        document.body.classList.remove("dark-body");
        btnTheme.classList.remove("dark-button");
        document.getElementById("bottomFooter").classList.remove("dark-footer");
        document.getElementById("txtSearch").classList.remove("dark-search");

        //Add light theme
        document.body.classList.add("light-body");
        btnTheme.classList.add("light-button");
        document.getElementById("bottomFooter").classList.add("light-footer");
        document.getElementById("txtSearch").classList.add("light-search");
        btnTheme.innerText = "Dark Theme";
    }
}