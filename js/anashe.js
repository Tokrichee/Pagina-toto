(function(){function u(t,i){var v=document.getElementById("cpy-copyshield-script").src,c=v.split("/"),r=c[4],e,s,a,h,u,l,f;c[5].includes("?")&&(e=o(c[5]));s=document.createElement("div");s.id="cpy-copyshield-container";a=e==="0"?`https://localhost:5001/copyshield/website-protected/`+r:e==="1"?`https://beta.copyleaks.com/copyshield/website-protected/`+r:`https://copyleaks.com/copyshield/website-protected/`+r;s.onclick=function(){window.open(a)};document.getElementById("cpy-copyshield").appendChild(s);h=document.createElement("div");h.id="cpy-copyshield-button";h.title="Click to learn more.";document.getElementById("cpy-copyshield-container").appendChild(h);u=document.createElement("img");u.setAttribute("height","60px");u.setAttribute("width","60px");u.setAttribute("src","https://copyshield.copyleaks.com/images/v1-square-logo.svg");document.getElementById("cpy-copyshield-button").appendChild(u);l=document.createElement("div");l.id="cpy-copyshield-texts";document.getElementById("cpy-copyshield-button").appendChild(l);document.getElementById("cpy-copyshield-texts").innerHTML="<span><b>"+n.get(i).title+"<\/b><\/span><span>"+n.get(i).desc+"<\/span>";t!==""&&(f=document.createElement("iframe"),f.id="cpy-copyshield-iframe-invisible",e==="1"?f.setAttribute("src","https://beta.copyshield.copyleaks.com/lp.html?cdn-cache&utm_source="+r+"&utm_medium=copyshield&utm_campaign="+t):f.setAttribute("src","https://copyshield.copyleaks.com/lp.html?cdn-cache&utm_source="+r+"&utm_medium=copyshield&utm_campaign="+t),document.getElementById("cpy-copyshield").appendChild(f))}function e(){t("#cpy-copyshield-container","background-color: white !important; height: fit-content !important; width: 272px; display: inline-block; position: relative; cursor: pointer !important; border-radius: 2px; margin: 10px 10px 10px 10px; font-family: sans-serif; box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26); border-top: solid 6px #4BB543;");t("#cpy-copyshield-container:hover","background-color: #f3f3f5;");t("#cpy-copyshield-button","padding: 10px 10px 10px 10px; display: flex; flex-direction: row;");t("#cpy-copyshield-iframe-invisible","width:0; height:0; border:0; border:none");r==="es"?(t("img","display: block; margin-top: -2px; text-align: left; margin-right: 15px;"),t("#cpy-copyshield-texts","display: flex; flex-direction: column; color: black !important; font-style: normal !important; font-size: 16px !important; justify-content: space-around; align-items: left;")):(t("img","display: block; margin-top: auto; text-align: left; margin-right: 15px;"),t("#cpy-copyshield-texts","display: flex; flex-direction: column; color: black !important; font-style: normal !important; font-size: 16px !important; justify-content: space-around; align-items: left;"))}function t(n,t){var i=document.createElement("style");i.type="text/css";document.getElementsByTagName("head")[0].appendChild(i);(i.sheet||{}).insertRule?i.sheet.insertRule(n+"{"+t+"}",0):(i.styleSheet||i.sheet).addRule(n,t)}function o(n){var t=n.split("?"),i=t[1].split("=");return i[1]}function s(){n.set("en",{title:"Web Content Protected",desc:"By Copyleaks"});n.set("es",{title:"Contenido web protegido",desc:"Por Copyleaks"});n.set("fr",{title:"Contenu Web protÃ©gÃ©",desc:"Par Copyleaks"});n.set("hi",{title:"à¤µà¥‡à¤¬ à¤¸à¤¾à¤®à¤—à¥à¤°à¥€ à¤¸à¤‚à¤°à¤•à¥à¤·à¤¿à¤¤",desc:"Copyleaks à¤¦à¥à¤µà¤¾à¤°à¤¾"});n.set("pt",{title:"ConteÃºdo da web protegido",desc:"Por Copyleaks"});n.set("ru",{title:"Ð’ÐµÐ±-ÐºÐ¾Ð½Ñ‚ÐµÐ½Ñ‚ Ð·Ð°Ñ‰Ð¸Ñ‰ÐµÐ½",desc:"ÐÐ²Ñ‚Ð¾Ñ€ Copyleaks"});n.set("ja",{title:"ä¿è­·ã•ã‚ŒãŸWebã‚³ãƒ³ãƒ†ãƒ³ãƒ„",desc:"Copyleaksã«ã‚ˆã£ã¦"});n.set("it",{title:"Contenuto Web protetto",desc:"Di Copyleaks"});n.set("de",{title:"GeschÃ¼tzter Webinhalt",desc:"Door Copyleaks"});n.set("tr",{title:"Web Ä°Ã§eriÄŸi KorumalÄ±",desc:"Copyleaks tarafÄ±ndan"})}let n=new Map;try{if(document.getElementById("cpy-copyshield")){var i,r=document.documentElement.lang;i=location.hostname==="localhost"||location.hostname==="127.0.0.1"?"":window.location.hostname;s();e();["es","fr","hi","pt","ru","ja","it","de","tr"].indexOf(r)>=0?u(i,r):u(i,"en")}else throw'Please add the <div id="cpy-copyshield"><\/div> to your code.';}catch(f){console.log(f)}})()