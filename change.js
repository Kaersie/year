(function () { 
    function resize() {
      var body = document.getElementsByTagName('body')[0];
      var html = document.getElementsByTagName('html')[0];
      var width = html.clientWidth;
      var height =  html.clientHeight;
      var max = width > height ? width : height;
      var min = width > height ? height : width;
      body.style.width = max + "px";
      body.style.height = min + "px";
    }
    resize();
    window.addEventListener("resize", resize)
  })();

  function readname(){
    let url=location.search;
    let strs;
    let str;
    let name;
    if(url.indexOf("?")!=-1){
        str=url.substr(1);
        strs=str.split("&");
        name=decodeURIComponent(strs[0].replace("name=",""));
    }
    if (name==""| name==null){
        i=1;
        while(i==1){
            name=prompt("怎么称呼您？");
        if (name!=null&name!="") {
            i=2;   
        }else{alert("姓名不能为空");}
        }
    }
    return name;
}



function showit(){
    let first1=document.getElementById("first");
    console.log(first1);
    let a=readname();
    console.log(a);
    first1.innerText="致 "+a+" :";

}
showit();
async function showagain() {
    const res = await fetch('data.json');
    const data = await res.json();
    //   随机取出data的某一项
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomtext = data[randomIndex].text;
      let b=document.getElementById("second");
      b.innerText=randomtext;
  }
  showagain();
