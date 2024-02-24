function readname() {
    let url = location.search;
    let strs;
    let str;
    let name;
    if (url.indexOf("?") != -1) {
        str = url.substr(1);
        strs = str.split("&");
        name = decodeURIComponent(strs[0].replace("name=", ""));
        thing = decodeURIComponent(strs[1].replace("thing=", ""));
    }
    if (name == "" | name == null | name == undefined) {
        window.location.href = "./share.html";
    } else if (thing == "" | thing == null | name == undefined) {
        thing = "期待有美好的事情发生"
    }
    let aa = [name, thing];
    return aa;
}



function showit() {
    let first1 = document.getElementById("first");
    console.log(first1);
    let a = readname();
    console.log(a);
    first1.innerText = "致 " + a[0] + " :";
    let b = document.getElementById("second");
    b.innerText = a[1];

}
showit();