!function(a){var n={};function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return a[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=a,o.c=n,o.d=function(e,r,a){o.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(r,e){if(1&e&&(r=o(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var n in r)o.d(a,n,function(e){return r[e]}.bind(null,n));return a},o.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(r,"a",r),r},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},o.p="",o(o.s=1)}([function(e,r,a){"use strict";var u=new function(){var l=this;this.version="3.3.9",this.vsakt={c:79,f:72,s:"13.0.4",e:18,i:12,ios:"13.3",samsung:10.2,o:65,o_a:55.2,y:"19.12.3",v:2.1,uc:"12.13"},this.vsinsecure_below={c:74,f:62,s:"11.1.1",e:16,i:11,ios:"12.4.3",samsung:"8.0",o:55,o_a:50,y:"19.6",v:"2.5",uc:"12.10"},this.vsdefault={c:-3,f:-3,s:-1,e:-3,i:11,ios:10,samsung:7.9,o:-3,o_a:-3,y:19.5,v:2.3,uc:12.8,a:535},this.names={c:"Chrome",f:"Firefox",s:"Safari",e:"Edge",i:"Internet Explorer",ios:"iOS",samsung:"Samsung Internet",o:"Opera",o_a:"Opera",y:"Yandex Browser",v:"Vivaldi",uc:"UC Browser",a:"Android Browser",x:"Other",silk:"Silk"},this.get_browser=function(a){a=(a||navigator.userAgent).replace("_",".");var e={n:"x",v:0,t:"other browser",age_years:void 0,no_device_update:!1,available:l.vsakt};function r(e,r){return!!new RegExp(r,"i").test(a)&&e}e.other=r("bot","Pagespeed|pingdom|Preview|ktxn|dynatrace|Ruxit|PhantomJS|Headless|Lighthouse|bot|spider|archiver|transcoder|crawl|checker|monitoring|prerender|screenshot|python-|php|uptime|validator|fetcher|facebook|slurp|google|yahoo|node|mail.ru|github|cloudflare|addthis|thumb|proxy|feed|fetch|favicon|link|http|scrape|seo|page|search console|AOLBuild|Teoma|Expeditor")||r("TV","SMART-TV|SmartTV")||r("niche browser","EdgA|Falkon|Brave|Classic Browser|Dorado|LBBROWSER|Focus|waterfox|Firefox/56.2|Firefox/56.3|Whale|MIDP|k-meleon|sparrow|wii|Chromium|Puffin|Opera Mini|maxthon|maxton|dolfin|dolphin|seamonkey|opera mini|netfront|moblin|maemo|arora|kazehakase|epiphany|konqueror|rekonq|symbian|webos|PaleMoon|QupZilla|Otter|Midori|qutebrowser")||r("mobile without upgrade path or landing page","cros|kindle|tizen|silk|blackberry|bb10|RIM|PlayBook|meego|nokia|ucweb|ZuneWP7|537.85.10"),e.mobile=/iphone|ipod|ipad|android|mobile|phone|ios|iemobile/i.test(a);for(var n=[["CriOS.VV","c","ios"],["FxiOS.VV","f","ios"],["Trident.*rv:VV","i","i"],["Trident.VV","io","i"],["UCBrowser.VV","uc","c"],["MSIE.VV","i","i"],["Edge.VV","e","e"],["Vivaldi.VV","v","c"],["Android.*OPR.VV","o_a","c"],["OPR.VV","o","c"],["YaBrowser.VV","y","c"],["SamsungBrowser.VV","samsung","c"],["Silk.VV","silk","c"],["Chrome.VV","c","c"],["Firefox.VV","f","f"],[" OS.VV.*Safari","ios","ios"],["Version.VV.*Safari","s","s"],["Safari.VV","so","s"],["Opera.*Version.VV","o"],["Opera.VV","o"]],o="(\\d+\\.?\\d+\\.?\\d*\\.?\\d*)",i=0;i<n.length;i++)if(a.match(new RegExp(n[i][0].replace("VV",o),"i"))){e.n=n[i][1],e.engine=n[i][2];break}if(e.fullv=RegExp.$1,e.v=parseFloat(e.fullv),/windows.nt.5.0|windows.nt.4.0|windows.95|windows.98|os x 10.2|os x 10.3|os x 10.4|os x 10.5/i.test(a)&&(e.no_device_update=!0,e.available={}),"MacIntel"===navigator.platform&&1<navigator.maxTouchPoints&&(e.n="ios",e.engine="ios",e.fullv=e.v=13,e.no_device_update=!0),/iphone|ipod|ipad|ios/i.test(a)){a.match(new RegExp("OS."+o,"i")),e.n="ios",e.fullv=RegExp.$1,e.v=parseFloat(e.fullv),e.engine="ios";var t=l.available_ios(a,e.v);e.available={ios:t},parseFloat(e.available.ios)<11&&(e.no_device_update=!0)}if(/windows.nt.5.1|windows.nt.5.2|windows.nt.6.0/i.test(a)&&(e.available={c:49.9,f:52.9}),/os x 10.6/i.test(a)&&(e.available={s:"5.1.10",c:49.9,f:48},e.no_device_update=!0),/os x 10.7|os x 10.8/i.test(a)&&(e.available={s:"6.2.8",c:49.9,f:48},e.no_device_update=!0),/os x 10.9/i.test(a)&&(e.available.s="9.1.3"),/os x 10.10/i.test(a)&&(e.available.s="10.1.2"),-1<a.indexOf("Android")&&"s"===e.n){var s=parseInt((/WebKit\/([0-9]+)/i.exec(a)||0)[1],10)||2e3;s<=534&&(e.n="a",e.fullv=e.v=s,e.is_insecure=!0)}"so"===e.n&&(e.v=e.fullv=4,e.n="s"),"io"===e.n&&(e.n="i",6<e.v?e.v=11:5<e.v?e.v=10:4<e.v?e.v=9:3.1<e.v?e.v=8:3<e.v?e.v=7:e.v=9,e.fullv=e.v),e.t=l.names[e.n]+" "+e.v,e.is_supported=e.is_latest=l.vsakt[e.n]?l.less(e.fullv,l.vsakt[e.n])<=0:void 0,e.vmaj=Math.round(e.v),e.is_insecure=e.is_insecure||!l.vsinsecure_below[e.n]?void 0:1===l.less(e.fullv,l.vsinsecure_below[e.n]),("f"===e.n&&(68===e.vmaj||60===e.vmaj)||"i"===e.n&&11===e.vmaj)&&(e.is_supported=!0,e.is_insecure=!1,"f"===e.n&&(e.esr=!0)),("c"===e.n||"f"===e.n||"o"===e.n)&&l.less(e.fullv,parseFloat(l.vsakt[e.n])-1)<=0&&(e.is_supported=!0),"ios"===e.n&&10.3<e.v&&(e.is_supported=!0),"a"!==e.n&&"x"!==e.n||(e.t=l.names[e.n]),"e"===e.n&&(e.t=l.names[e.n]+" "+e.vmaj,e.is_supported=1!=l.less(e.fullv,"15.15063"));var d={f:7,c:8,o:8,i:1,e:1,s:1};return d[e.n]&&(e.age_years=Math.round((l.vsakt[e.n]-e.v)/d[e.n]*10)/10||0),e.engine&&(a.match(new RegExp({e:"Edge.VV",c:"Chrome.VV",f:"Firefox.VV",s:"Version.VV",i:"MSIE.VV",ios:" OS.VV"}[e.engine].replace("VV",o),"i")),e.engine_version=parseFloat(RegExp.$1)),e},this.semver=function(e){if(e instanceof Array)return e;var r=(e+".0.0.0").split(".");return[parseInt(r[0])||0,parseInt(r[1])||0,parseInt(r[2])||0,parseInt(r[3])||0]},this.less=function(e,r){e=l.semver(e),r=l.semver(r);for(var a=0;;a++){if(a>=e.length)return a>=r.length?0:1;if(a>=r.length)return-1;var n=r[a]-e[a];if(n)return 0<n?1:-1}},this.available_ios=function(e,r){var a=Math.max(window.screen.height,window.screen.width),n=window.devicePixelRatio;return/ipad/i.test(e)?1024==a&&2==n?10:1112==a?15:1366==a?15:1024==a&&r<6?5:9:1==n?6:812==a?15:736==a||667==a?13:568==a?10:480==a?7:6}};window.$bu_getBrowser=u.get_browser,e.exports=function(e,r){var a,n=window.navigator,o=(e=window._buorgres=e||{}).l||(n.languages?n.languages[0]:null)||n.language||n.browserLanguage||n.userLanguage||document.documentElement.getAttribute("lang")||"en";e.llfull=o.replace("_","-").toLowerCase().substr(0,5),e.ll=e.llfull.substr(0,2),e.domain=void 0!==e.domain?e.domain:(/file:/.test(location.href)?"https:":"")+"//browser-update.org",e.apiver=e.api||e.c||-1,e.jsv=u.version;var i=e.apiver<2018&&{i:10,f:11,o:21,s:8,c:30}||{},t=e.notify||e.vs||{};t.e=t.e||t.i,t.i=t.i||t.e;var s,d,l=e.required||{};for(a in l.e=l.e||l.i,l.i||(l.i=l.e,u.vsakt.i=u.vsakt.e),u.vsdefault)t[a]&&(0<=u.less(t[a],0)?l[a]=parseFloat(u.vsakt[a])+parseFloat(t[a])+.01:l[a]=parseFloat(t[a])+.01),a in l&&null!=l[a]||(l[a]=u.vsdefault[a]),0<=u.less(l[a],0)&&(l[a]=parseFloat(u.vsakt[a])+parseFloat(l[a])),i[a]&&1===u.less(l[a],i[a])&&(l[a]=i[a]);l.ios=l.ios||l.s,e.required=l,e.reminder=e.reminder<.1?0:e.reminder||168,e.reminderClosed=e.reminderClosed<1?0:e.reminderClosed||168,e.onshow=e.onshow||function(e){},e.onclick=e.onclick||function(e){},e.onclose=e.onclose||function(e){},e.pageurl=e.pageurl||location.hostname||"x",e.newwindow=!1!==e.newwindow,e.test=r||e.test||"#test-bu"===location.hash||!1,1e3*Math.random()<1&&!e.test&&!e.nostatistics&&((new Image).src="//browser-update.org/browserstat?jsv="+e.jsv),e.test=r||e.test||"#test-bu"===location.hash,e.reasons=[],e.hide_reasons=[],e.notified=(s=e,d=u.get_browser(s.override_ua),s.is_below_required=l[d.n]&&1===u.less(d.fullv,l[d.n]),!1!==d.other&&s.hide_reasons.push("is other browser:"+d.other),d.esr&&!s.notify_esr&&s.hide_reasons.push("Extended support (ESR)"),d.mobile&&!1===s.mobile&&s.hide_reasons.push("do not notify mobile"),d.no_device_update&&s.hide_reasons.push("no device update"),s.is_below_required&&s.reasons.push("below required"),(s.insecure||s.unsecure)&&d.is_insecure&&s.reasons.push("insecure"),s.unsupported&&!d.is_supported&&s.reasons.push("no vendor support"),!(0<s.hide_reasons.length)&&0<s.reasons.length),e.already_shown=-1<document.cookie.indexOf("browserupdateorg=pause"),(e.test||e.notified&&!e.already_shown)&&(e.setCookie=function(e){document.cookie="browserupdateorg=pause; expires="+new Date((new Date).getTime()+36e5*e).toGMTString()+"; path=/; SameSite=None; Secure"},0<e.reminder&&e.setCookie(e.reminder),e.nomessage?e.onshow(e):m())};var m=function(){var r=window._buorgres,e=$bu_getBrowser(),a=r.burl||"http"+(/MSIE/i.test(navigator.userAgent)?"":"s")+"://browser-update.org/";r.url||(r.url=a+(r.l&&r.l+"/"||"")+"update-browser.html"+(r.test?"?force_outdated=true":"")+"#"+r.jsv+":"+r.pageurl),r.url_permanent_hide=r.url_permanent_hide||a+"block-ignore-browser-update-warning.html";var n,o={en:{msg:"Your web browser ({brow_name}) is out of date.",msgmore:"Update your browser for more security, speed and the best experience on this site.",bupdate:"Update browser",bignore:"Ignore",remind:"You will be reminded in {days} days.",bnever:"Never show again"},ar:{msg:"متصفح الإنترنت الخاص بك ({brow_name}) غير مُحدّث.",msgmore:"قم بتحديث المتصفح الخاص بك لمزيد من الأمان والسرعة ولأفضل تجربة على هذا الموقع.",bupdate:"تحديث المتصفح",bignore:"تجاهل",remind:"سيتم تذكيرك في غضون {days} أيام.",bnever:"لا تظهر مرة أخرى"},bg:{msg:"Вашият уеб браузър ({brow_name}) е остарял.",msgmore:"Актуализирайте браузъра си за повече сигурност, бързина и най-доброто изживяване на този сайт.",bupdate:"Актуализиране на браузъра",bignore:"игнорирай",remind:"Ще ви бъде напомнено след {days} дни.",bnever:"Никога повече да не се показва"},ca:{msg:"El teu navegador ({brow_name}) està desactualitzat.",msgmore:"Actualitzeu el vostre navegador per obtenir més seguretat, velocitat i una millor experiència en aquest lloc.",bupdate:"Actualitza el navegador",bignore:"Ignorar",remind:"T'ho recordarem d'aquí a {days} dies.",bnever:"No ho tornis a mostrar"},cs:{msg:"Váš prohlížeč ({brow_name}) je zastaralý.",msgmore:"Aktualizujte prohlížeč pro lepší zabezpečení, rychlost a nejlepší zážitek z tohoto webu.",bupdate:"Aktualizovat prohlížeč",bignore:"Ignorovat",remind:"Znovu budete upozorněni za {days} dnů.",bnever:"Již nezobrazovat"},da:{msg:"Din web browser ({brow_name}) er forældet",msgmore:"Opdater din browser for mere sikkerhed, hastighed og den bedste oplevelse på denne side.",bupdate:"Opdater browser",bignore:"Ignorer",remind:"Du vil blive påmindet om {days} dage.",bnever:"Vis aldrig igen"},de:{msg:"Ihr Webbrowser ({brow_name}) ist veraltet.",msgmore:"Aktualisieren Sie Ihren Browser für mehr Sicherheit, Geschwindigkeit und den besten Komfort auf dieser Seite.",bupdate:"Browser aktualisieren",bignore:"Ignorieren",remind:"Sie werden in {days} Tagen wieder erinnert.",bnever:"Nie wieder anzeigen"},el:{msg:"Το πρόγραμμα περιήγησής σας ({brow_name}) είναι απαρχαιωμένο.",msgmore:"Ενημερώστε το πρόγραμμα περιήγησής σας για περισσότερη ασφάλεια, ταχύτητα και την καλύτερη εμπειρία σ' αυτόν τον ιστότοπο.",bupdate:"Ενημερώστε το πρόγραμμα περιήγησης",bignore:"Αγνοήστε",remind:"Θα σας το υπενθυμίσουμε σε {days} ημέρες.",bnever:"Να μην εμφανιστεί ξανά"},es:{msg:"Su navegador web ({brow_name}) está desactualizado.",msgmore:"Actualice su navegador para obtener más seguridad, velocidad y para disfrutar de la mejor experiencia en este sitio.",bupdate:"Actualizar navegador",bignore:"Ignorar",remind:"Se le recordará en {days} días.",bnever:"No mostrar de nuevo"},fa:{msg:"مرورگر شما ({brow_name}) قدیمی است.",msgmore:"برای ایمنی، سرعت و تجربه بهتر مرورگر خود را به‌روز کنید.",bupdate:"به‌روزرسانی مرورگر",bignore:"نادیده گرفتن",remind:"به شما تا {days} روز دیگر دوباره یاد‌آوری خواهد شد.",bnever:"هرگز نمایش نده"},fi:{msg:"Selaimesi ({brow_name}) on vanhentunut.",msgmore:"Päivitä selaimesi saadaksesi tietoturvapäivityksiä, nopeutta sekä parhaan käyttökokemuksen sivustolla.",bupdate:"Päivitä selain",bignore:"Ohita",remind:"Saat uuden muistutuksen {days} päivän päästä.",bnever:"Älä näytä uudestaan"},fr:{msg:"Votre navigateur Web ({brow_name}) n'est pas à jour.",msgmore:"Mettez à jour votre navigateur pour plus de sécurité et de rapidité et une meilleure expérience sur ce site.",bupdate:"Mettre à jour le navigateur",bignore:"Ignorer",remind:"Vous serez rappelé dans {days} jours.",bnever:"Ne plus afficher"},gl:{msg:"Tá an líonléitheoir agat ({brow_name}) as dáta.",msgmore:"Actualiza o teu navegador para obter máis seguridade, rapidez e mellor experiencia neste sitio.",bupdate:"Actualizar navegador web",bignore:"Ignorar",remind:"Lembraralle en {days} días.",bnever:"Non volver mostrar máis"},he:{msg:"דפדפן ({brow_name}) שלך אינו מעודכן.",msgmore:"עדכן/י את הדפדפן שלך לשיפור האבטחה והמהירות וכדי ליהנות מהחוויה הטובה ביותר באתר זה.",bupdate:"עדכן דפדפן",bignore:"התעלם",remind:"תקבל/י תזכורת בעוד  {days} ימים.",bnever:"אל תציג שוב"},hi:{msg:"आपका वेब ब्राउज़र ({brow_name}) पुराना है।",msgmore:"इस साइट पर अधिक सुरक्षा, गति और सर्वोत्तम अनुभव करने के लिए अपने ब्राउज़र को अपडेट करें ।",bupdate:"ब्राउज़र अपडेट करें",bignore:"नजरअंदाज करें",remind:"आपको {days} दिनों में याद दिलाया जाएगा।",bnever:"फिर कभी मत दिखाना"},hu:{msg:"Az Ön webböngészője ({brow_name}) elavult.",msgmore:"Frissítse böngészőjét a nagyobb biztonság, sebesség és élmény érdekében!",bupdate:"Böngésző frissítése",bignore:"Mellőzés",remind:"Újra emlékeztetünk {days} napon belül.",bnever:"Ne mutassa többet"},id:{msg:"Peramban web ({brow_name}) Anda sudah usang.",msgmore:"Perbarui peramban Anda untuk pengalaman terbaik, lebih aman, dan cepat di situs ini.",bupdate:"Perbarui peramban",bignore:"Abaikan",remind:"Anda akan diingatkan kembali dalam {days} hari.",bnever:"Jangan pernah tampilkan lagi"},it:{msg:"Il tuo browser ({brow_name}) non è aggiornato.",msgmore:"Aggiorna il browser per una maggiore sicurezza, velocità e la migliore esperienza su questo sito.",bupdate:"Aggiorna browser",bignore:"Ignora",remind:"Riceverai un promemoria tra {days} giorni.",bnever:"Non mostrare di nuovo"},ja:{msg:"お使いのブラウザ ({brow_name}) は最新版ではございません。",msgmore:"このサイトでのさらなるセキュリティ、速度および最高の体験のためにお使いのブラウザーを更新してください。",bupdate:"ブラウザをアップデートする",bignore:"無視する",remind:"{days}後にお知らせします。",bnever:"今後表示しない"},ko:{msg:"귀하의 웹 브라우저({brow_name})는 오래되었습니다.",msgmore:"이 사이트에서 보안, 속도와 최상의 경험을 얻으려면 브라우저를 업데이트하십시오.",bupdate:"브라우저 업데이트하기",bignore:"무시하기",remind:"{days}일 후에 알려 드립니다.",bnever:"다시 표시하지 않기"},lt:{msg:"Jūsų naršyklė ({brow_name}) yra pasenusi.",msgmore:"Atsinaujinkite savo naršyklę norėdami gauti daugiau saugumo, greičio ir pačių geriausių patirčių šioje svetainėje.",bupdate:"Atnaujinti naršyklę",bignore:"Nepaisyti",remind:"Jums bus priminta po {days} dienų.",bnever:"Daugiau niekada nerodyti"},lv:{msg:"Jūsu pārlūkprogramma ({brow_name}) ir novecojusi.",msgmore:"Atjaunojiet savu pārlūkprogrammu lielākai drošībai, ātrumam un labākai pieredzei ar šo vietni.",bupdate:"Atjaunināt pārlūkprogrammu",bignore:"Ignorēt",remind:"Jums tiks parādīts atgādinājums pēc {days} dienām.",bnever:"Vairs nerādīt"},ms:{msg:"Pelayar web anda ({brow_name}) sudah lapuk.",msgmore:"Kemas kini pelayar anda untuk lebih keselamatan, kelajuan dan pengalaman terbaik di laman web ini.",bupdate:"Kemas kini pelayar",bignore:"Abaikan",remind:"Anda akan diingatkan dalam {days} hari.",bnever:"Jangan tunjukkan lagi"},nl:{msg:"Uw webbrowser ({brow_name}) is verouderd.",msgmore:"Update uw browser voor meer veiligheid, snelheid en om deze site optimaal te kunnen gebruiken.",bupdate:"Browser updaten",bignore:"Negeren",remind:"We zullen u er in {days} dagen aan herinneren.",bnever:"Nooit meer tonen"},no:{msg:"Nettleseren din ({brow_name}) er utdatert.",msgmore:"Oppdater nettleseren din for økt sikkerhet, hastighet og den beste opplevelsen på dette nettstedet.",bupdate:"Oppdater nettleser",bignore:"Ignorer",remind:"Du vil få en påminnelse om {days} dager.",bnever:"Aldri vis igjen"},pl:{msg:"Twoja przeglądarka ({brow_name}) jest nieaktualna.",msgmore:"Zaktualizuj przeglądarkę, by korzystać z tej strony bezpieczniej, szybciej i po prostu sprawniej.",bupdate:"Aktualizuj przeglądarkę",bignore:"Ignoruj",remind:"Przypomnimy o tym za {days} dni.",bnever:"Nie pokazuj więcej"},pt:{msg:"Seu navegador da web ({brow_name}) está desatualizado.",msgmore:"Atualize seu navegador para ter mais segurança e velocidade, além da melhor experiência neste site.",bupdate:"Atualizar navegador",bignore:"Ignorar",remind:"Você será relembrado em {days} dias.",bnever:"Não mostrar novamente"},ro:{msg:"Browserul tău ({brow_name}) nu este actualizat.",msgmore:"Actualizează browserul pentru o mai mare siguranță, viteză și cea mai bună experiență pe acest site.",bupdate:"Actualizează browser",bignore:"Ignoră",remind:"Ți se va reaminti peste {days} zile.",bnever:"Nu mai arăta"},ru:{msg:"Ваш браузер ({brow_name}) устарел.",msgmore:"Обновите ваш браузер для повышения уровня безопасности, скорости и комфорта использования этого сайта.",bupdate:"Обновить браузер",bignore:"Игнорировать",remind:"Вы получите напоминание через {days} дней.",bnever:"Больше не показывать "},sk:{msg:"Váš internetový prehliadač ({brow_name}) je zastaraný.",msgmore:"Pre väčšiu bezpečnosť, rýchlosť a lepšiu skúsenosť s touto stránkou si aktualizujte svoj prehliadač.",bupdate:"Aktualizovať prehliadač",bignore:"Ignorovať",remind:"Bude vám to pripomenuté o {days} dní.",bnever:"Už nikdy viac neukazovať"},sl:{msg:"Vaš spletni brskalnik ({brow_name}) je zastarel.",msgmore:"Posodobite svoj brskalnik za dodatno varnost, hitrost in najboljšo izkušnjo na tem spletnem mestu.",bupdate:"Posodobi brskalnik",bignore:"Prezri",remind:"Opomnik boste prejeli čez toliko dni: {days}.",bnever:"Ne prikaži več"},sq:{msg:"Shfletuesi juaj ({brow_name}) është i vjetruar.",msgmore:"Përditësoni shfletuesin tuaj për më tepër siguri, shpejtësi dhe më të mirin e funksionimeve në këtë sajt.",bupdate:"Përditëso shfletuesin",bignore:"Shpërfille",remind:"Do të rikujtoheni pas {days} ditësh.",bnever:"Mos e shfaq kurrë më"},sr:{msg:"Vaš pretraživač ({brow_name}) je zastareo.",msgmore:"Ima poznate sigurnosne probleme i najverovatnije neće prikazati sve funkcionalnisti ovog i drugih sajtova.",bupdate:"Nadogradi pretraživač",bignore:"Ignorisi",remind:"Zaboravićete za {days} dana.",bnever:"Ne prikazuj opet"},sv:{msg:"Din webbläsare ({brow_name}) är föråldrad. ",msgmore:"Uppdatera din webbläsare för mer säkerhet, hastighet och den bästa upplevelsen på den här sajten. ",bupdate:"Uppdatera webbläsaren",bignore:"Ignorera",remind:"Du får en påminnelse om {days} dagar.",bnever:"Visa aldrig igen"},th:{msg:"เว็บเบราว์เซอร์ของคุณ ({brow_name}) ล้าสมัยแล้ว",msgmore:"อัปเดทเบราว์เซอร์เพื่อเพิ่มความปลอดภัย, ความเร็ว และประสบการณ์ที่ดีที่สุดบนเว็บไซต์นี้",bupdate:"อัปเดทเบราว์เซอร์",bignore:"ข้าม",remind:"คุณจะได้รับการแจ้งเตือนใน {days} วัน",bnever:"ไม่ต้องแสดงอีก"},tr:{msg:"Web tarayıcınız ({brow_name}) güncel değil.",msgmore:"Daha fazla güvenlik ve hız ile bu sitede en iyi deneyim için tarayıcınızı güncelleyin.",bupdate:"Tarayıcıyı güncelle",bignore:"Yok say",remind:"{days} gün sonra bir hatırlatma alacaksınız.",bnever:"Bir daha gösterme"},uk:{msg:"Ваш браузер ({brow_name}) застарілий.",msgmore:"Оновіть свій браузер для більшої безпеки, швидкості та повноцінної роботи цього сайту.",bupdate:"Оновити браузер",bignore:"Пропустити",remind:"Ви отримаєте нагадування через {days} днів.",bnever:"Більше не показувати"},vi:{msg:"Trình duyệt web của bạn ({brow_name}) đã lỗi thời.",msgmore:"Cập nhật trình duyệt của bạn để có thêm bảo mật, tốc độ và trải nghiệm tốt nhất trên trang web này.",bupdate:"Cập nhật trình duyệt",bignore:"Bỏ qua",remind:"Bạn sẽ được nhắc nhở sau {days} ngày.",bnever:"Không bao giờ hiển thị lại"},zh:{msg:"您的网页浏览器（{brow_name}）已过期。",msgmore:"更新您的浏览器，以便在该网站上获得更安全、更快速和最好的体验。",bupdate:"更新浏览器",bignore:"忽略",remind:"会在{days}天后提醒您。",bnever:"不再显示"}};o["zh-tw"]=o["zh-hans-cn"]={msg:"您的網路瀏覽器（{brow_name}）已過舊。",msgmore:"更新您的瀏覽器以獲得更佳的安全性、速度以及在此網站的最佳體驗。",bupdate:"更新瀏覽器",bignore:"忽略",remind:"您將在 {days} 天後收到提醒。",bnever:"不要再顯示"};var i=r["text_"+r.llfull]||r["text_"+r.ll]||r["text_in_"+r.ll]||r["text_for_"+e.n]||r["text_for_"+e.n+"_in_"+r.ll]||r.text;if(o=n=o[r.llfull]||o[r.ll]||o.en,i)if("string"==typeof i)o=n=i;else for(var t in i)n[t]=i[t];n.msg&&(o='<b class="buorg-mainmsg">'+o.msg+'</b> <span class="buorg-moremsg">'+o.msgmore+'</span> <span class="buorg-buttons"><a{up_but}>'+o.bupdate+"</a> <a{ignore_but}>"+o.bignore+"</a></span>");var s="";r.newwindow&&(s=' target="_blank" rel="noopener"');var d=r.div=document.createElement("div");d.id=d.className="buorg";var l="<style>.buorg-icon {width: 22px; height: 16px; vertical-align: middle; position: relative; top: -0.05em; display: inline-block; background: no-repeat 0px center url(https://browser-update.org/static/img/small/"+e.n+".png);}</style>",u="<style>.buorg {position:absolute;position:fixed;z-index:111111; width:100%; top:0px; left:0px; border-bottom:1px solid #A29330; text-align:center;  color:#000; background-color: #fff8ea; font: 18px Calibri,Helvetica,sans-serif; box-shadow: 0 0 5px rgba(0,0,0,0.2);animation: buorgfly 1s ease-out 0s;}.buorg-pad { padding: 9px;  line-height: 1.7em; }.buorg-buttons { display: block; text-align: center; }#buorgig,#buorgul,#buorgpermanent { color: #fff; text-decoration: none; cursor:pointer; box-shadow: 0 0 2px rgba(0,0,0,0.4); padding: 1px 10px; border-radius: 4px; font-weight: normal; background: #5ab400;    white-space: nowrap;    margin: 0 2px; display: inline-block;}#buorgig { background-color: #edbc68;}@media only screen and (max-width: 700px){.buorg div { padding:5px 12px 5px 9px; line-height: 1.3em;}}@keyframes buorgfly {from {opacity:0;transform:translateY(-50px)} to {opacity:1;transform:translateY(0px)}}.buorg-fadeout {transition: visibility 0s 8.5s, opacity 8s ease-out .5s;}</style>";!n.msg||"ar"!=r.ll&&"he"!=r.ll&&"fa"!=r.ll||(u+="<style>.buorg {direction:RTL; unicode-bidi:embed;}</style>"),!n.msg&&o.indexOf&&-1!==o.indexOf("%s")?(o=function(){for(var e=arguments,r=e[0],a=1;a<e.length;++a)r=r.replace(/%s/,e[a]);return r}(o,e.t,' id="buorgul" href="'+r.url+'"'+s),l+="<style>.buorg {position:absolute;position:fixed;z-index:111111; width:100%; top:0px; left:0px; border-bottom:1px solid #A29330; text-align:left; cursor:pointer; color:#000; font: 13px Arial,sans-serif;color:#000;}.buorg div { padding:5px 36px 5px 40px; }.buorg>div>a,.buorg>div>a:visited{color:#E25600; text-decoration: underline;}#buorgclose{position:absolute;right:6px;top:0px;height:20px;width:12px;font:18px bold;padding:0;}#buorga{display:block;}@media only screen and (max-width: 700px){.buorg div { padding:5px 15px 5px 9px; }}</style>",d.innerHTML="<div>"+o+'<div id="buorgclose"><a id="buorga">&times;</a></div></div>'+l,r.addmargin=!0):("bottom"===r.style?u+="<style>.buorg {bottom:0; top:auto; border-top:1px solid #A29330; } @keyframes buorgfly {from {opacity:0;transform:translateY(50px)} to {opacity:1;transform:translateY(0px)}}</style>":"corner"===r.style?u+="<style> .buorg { text-align: left; width:300px; top:50px; right:50px; left:auto; border:1px solid #A29330; } .buorg-buttons, .buorg-mainmsg, .buorg-moremsg { display: block; } .buorg-buttons a {margin: 4px 2px;} .buorg-icon {display: none;}</style>":r.addmargin=!0,o=o.replace("{brow_name}",e.t).replace("{up_but}",' id="buorgul" href="'+r.url+'"'+s).replace("{ignore_but}",' id="buorgig" role="button" tabindex="0"'),d.innerHTML='<div class="buorg-pad" role="status" aria-live="polite"><span class="buorg-icon"> </span>'+o+"</div>"+l+u),r.text=o,r.container?(r.container.appendChild(d),r.addmargin=!1):document.body.insertBefore(d,document.body.firstChild);var m=document.getElementById("buorgul");if(m&&(m.onclick=function(e){d.onclick=null,r.onclick(r),r.noclose||(r.setCookie(r.reminderClosed),r.noclose||(d.style.display="none",r.addmargin&&(b.style.marginTop=r.bodymt)))}),i||(d.style.cursor="pointer",d.onclick=function(){r.newwindow?window.open(r.url,"_blank"):window.location.href=r.url,r.setCookie(r.reminderClosed),r.onclick(r)}),r.addmargin&&!1!==r.shift_page_down){var b=document.getElementsByTagName("html")[0]||document.body;r.bodymt=b.style.marginTop,b.style.marginTop=d.clientHeight+"px"}var g=document.getElementById("buorga")||document.getElementById("buorgig");if(g&&(g.onclick=function(e){return d.onclick=null,r.onclose(r),r.addmargin&&!1!==r.shift_page_down&&(b.style.marginTop=r.bodymt),r.setCookie(r.reminderClosed),!r.no_permanent_hide&&n.bnever&&n.remind?(r.div.innerHTML='<div class="buorg-pad"><span class="buorg-moremsg">'+(24<r.reminderClosed?n.remind.replace("{days}",Math.round(r.reminderClosed/24)):"")+'</span> <span class="buorg-buttons"><a id="buorgpermanent" role="button" tabindex="0" href="'+r.url_permanent_hide+'"'+s+">"+n.bnever+"</a></span></div>"+l+u,d.className="buorg buorg-fadeout",document.getElementById("buorgpermanent").onclick=function(e){r.setCookie(8760),r.div.style.display="none"},r.div.style.opacity=0,r.div.style.visibility="hidden"):r.div.style.display="none",!1},!r.noclose&&0!=r.reminderClosed||g.parentNode.removeChild(g)),r.onshow(r),r.test&&!r.dont_show_debuginfo){var p=document.createElement("script");p.src=r.domain+"/update.test.js",document.body.appendChild(p)}}},function(e,r,a){"use strict";a.r(r);var n=a(0);a.n(n)()({required:{e:11,f:-6,o:-6,s:10,c:-6},insecure:!0,unsupported:!0,reminder:0,reminderClosed:1}),console.log("Hej, nazywam się ".concat("Kasia Izak"," i jestem autorką tej strony.\nFajnie, że nie boisz się zaglądać do konsoli! ;-)"))}]);