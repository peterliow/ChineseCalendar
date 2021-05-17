"use strict";function header(e,l,t){let i,n=[];0==e?(i={id:"menuconversion",title:"Calendar<br />Conversion"},i.sub=[{title:"Yearly Calendar",url:"index.html"},{title:"Conversion Table",url:"table.html"},{title:"Sun &amp; Moon Phenomena",url:"sunMoon.html"},{title:"Julian &amp; Sexagenary Date Calculator",url:"Julian.html"}],n.push(i),i={id:"menuCalendarBasics",title:"Chinese Calendar<br />Basics"},i.sub=[{title:"24 Solar Terms",url:"solarTerms.html"},{title:"Sexagenary Cycle",url:"sexagenary.html"},{title:"Chinese Calendar Rules",url:"rules.html"}],n.push(i),i={id:"menuCalendarComputation",title:"Calendar<br />Computation"},i.sub=[{title:"Chinese Calendar Generation",url:"computation.html"},{title:"Moon Phases and Solar Terms",url:"docs/sunMoon.pdf"},{title:"Chunqiu Calendar",url:"chunqiu.html"},{title:"Ancient Six Calendars",url:"guliuli.html"},{title:"Qin &amp; Early Han Calendars",url:"QinHanCalendars.html"}],n.push(i),i={id:"menuMisc",title:"Other<br />Links",url:"others.html",sub:[]},n.push(i)):1==e?(i={id:"menuconversion",title:"中 西 曆 對 照"},i.sub=[{title:"年曆",url:"index_chinese.html"},{title:"朔閏表",url:"table_chinese.html"},{title:"氣朔時刻",url:"sunMoon_chinese.html"},{title:"中國歷史年表",url:"era_names.html"},{title:"儒略日數和日干支計算器",url:"Julian_chinese.html"}],n.push(i),i={id:"menuCalendarBasics",title:"農 曆 知 識"},i.sub=[{title:"二十四節氣",url:"solarTerms_chinese.html"},{title:"六十干支",url:"sexagenary_chinese.html"},{title:"農曆編算法則",url:"rules_chinese.html"}],n.push(i),i={id:"menuCalendarComputation",title:"曆 法 計 算"},i.sub=[{title:"編算農曆",url:"computation_chinese.html"},{title:"月相和二十四節氣算法",url:"docs/sunMoon_chinese.pdf"},{title:"春秋曆復原法",url:"chunqiu_chinese.html"},{title:"古六曆計算法",url:"guliuli_chinese.html"},{title:"秦至漢初的曆法復原",url:"QinHanCalendars_chinese.html"}],n.push(i),i={id:"menuMisc",title:"其 他",url:"others_chinese.html",sub:[]},n.push(i)):(i={id:"menuconversion",title:"中 西 历 对 照"},i.sub=[{title:"年历",url:"index_simp.html"},{title:"朔闰表",url:"table_simp.html"},{title:"气朔时刻",url:"sunMoon_simp.html"},{title:"中国历史年表",url:"era_names_simp.html"},{title:"儒略日数和日干支计算器",url:"Julian_simp.html"}],n.push(i),i={id:"menuCalendarBasics",title:"农 历 知 识"},i.sub=[{title:"二十四节气",url:"solarTerms_simp.html"},{title:"六十干支",url:"sexagenary_simp.html"},{title:"农历编算法则",url:"rules_simp.html"}],n.push(i),i={id:"menuCalendarComputation",title:"历 法 计 算"},i.sub=[{title:"编算农历",url:"computation_simp.html"},{title:"月相和二十四节气算法",url:"docs/sunMoon_simp.pdf"},{title:"春秋历复原法",url:"chunqiu_simp.html"},{title:"古六历计算法",url:"guliuli_simp.html"},{title:"秦至汉初的历法复原",url:"QinHanCalendars_simp.html"}],n.push(i),i={id:"menuMisc",title:"其 他",url:"others_simp.html",sub:[]},n.push(i));let s="";n.forEach((function(e){s+='<div class="dropdown" id="'+e.id+'">';let l=e.sub.length;if(0==l)s+='<button class="dropbtn" style="cursor:pointer;"  onclick="myloadurl(\''+e.url+"')\">"+e.title+"</button></div>";else{s+='<button class="dropbtn" onclick="display_dropdown_menu(\''+e.id+"')\">"+e.title+"</button>",s+='<div class="dropdown-content">';for(let t=0;t<l;t++)s+="<p onclick=\"myloadurl('"+e.sub[t].url+"')\">"+e.sub[t].title+"</p>";s+="</div></div>"}})),document.getElementById("menu").innerHTML=s,""!=t&&(s='<h2 style="text-align:right;">',s+=0==e?'Chinese versions: <a href="'+t+'_chinese.html">傳統中文</a> &nbsp; <a href="'+t+'_simp.html">简体中文</a></h2>':1==e?'<a href="'+t+'.html">English 英文</a> &nbsp; <a href="'+t+'_simp.html">简体中文</a></h2>':'<a href="'+t+'.html">English 英文</a> &nbsp; <a href="'+t+'_chinese.html">傳統中文</a></h2>',document.getElementById("language").innerHTML=s)}function display_dropdown_menu(e){document.getElementById(e).classList.toggle("showdropdown");let l=document.getElementsByClassName("showdropdown"),t=l.length;for(let i=0;i<t;i++)if(l[i].id!=e){l[i].classList.remove("showdropdown");break}}function myloadurl(e){let l=document.getElementsByClassName("showdropdown");1==l.length&&l[0].classList.remove("showdropdown"),location.href=e}