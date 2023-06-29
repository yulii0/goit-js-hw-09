const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),bodyStyles:document.querySelector("body")};t.startBtn.addEventListener("click",function(){o=setInterval(()=>{t.bodyStyles.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`},1e3),t.startBtn.disabled=!0,t.stopBtn.disabled=!1,t.stopBtn.style.cssText=`
background-color: #f44336;
color: white;
padding: 20px 40px;
border: none;
cursor: pointer;
border-radius: 40px;
font-size: 20px;`,t.startBtn.style.cssText=`
background-color: grey;
color: white;
padding: 20px 40px;
border: none;
cursor: pointer;
border-radius: 40px;
font-size: 20px;`}),t.stopBtn.addEventListener("click",function(){clearInterval(o),t.startBtn.disabled=!1,t.stopBtn.disabled=!0,t.startBtn.style.cssText=`
background-color: #4CAF50;
color: white;
padding: 20px 40px;
border: none;
cursor: pointer;
border-radius: 40px;
font-size: 20px;`,t.stopBtn.style.cssText=`
background-color: grey;
color: white;
padding: 20px 40px;
border: none;
cursor: pointer;
border-radius: 40px;
font-size: 20px;`});let o=null;t.stopBtn.disabled=!0,t.bodyStyles.style.cssText=`
display: flex; 
gap: 20px; 
align-items: center;
justify-content: center;
padding-top: 200px;`,t.startBtn.style.cssText=`
background-color: #4CAF50;
color: white;
padding: 20px 40px;
border: none;
cursor: pointer;
border-radius: 40px;
font-size: 20px;`,t.stopBtn.style.cssText=`
background-color: #f44336;
color: white;
padding: 20px 40px;
border: none;
cursor: pointer;
border-radius: 40px;
font-size: 20px;`;
//# sourceMappingURL=01-color-switcher.82ee9d85.js.map
