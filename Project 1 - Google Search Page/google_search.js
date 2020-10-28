function changeTheme(){

    var element = document.getElementById('btnTheme');
    var style;
    if (window.getComputedStyle) {
        style = window.getComputedStyle(element);
    } else {
        style = element.currentStyle;
    }

    if(style.backgroundColor == "rgb(33, 33, 33)"){
        document.querySelector('#btnTheme').innerText = "Light Theme";
        document.getElementById("btnTheme").style.background = "#FFFFFF";
        document.getElementById("btnTheme").style.color = "#212121";
        document.body.style.background = "#303030";
        document.getElementById("bottomFooter").style.background = "#212121";
        document.getElementById("txtSearch").style.background = "#424242";
        document.getElementById("bottomFooter").style.borderTop = "none";
    }
    else{
        document.querySelector('#btnTheme').innerText = "Dark Theme";
        document.getElementById("btnTheme").style.background = "#212121";
        document.getElementById("btnTheme").style.color = "#FFFFFF";
        document.body.style.background = "#FFFFFF";
        document.getElementById("bottomFooter").style.background = "#f2f2f2";
        document.getElementById("txtSearch").style.background = "#FFFFFF";
        document.getElementById("bottomFooter").style.borderTop = "1px solid #e4e4e4";
    }
}