(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(e,a,t){e.exports=t(58)},26:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),l=t(18),r=t.n(l),c=(t(26),t(3)),m=t.n(c),i=t(2),o=t(4),u=t(20),d=t(5),E=t.n(d),p=t(6),g=t.n(p),v=t(19);t(47),t(48),t(49),t(50),t(51),t(52),t(53),t(54),t(55),t(56),t(57);var f=function(){var e=Object(n.useState)({musics:[],input:""}),a=Object(u.a)(e,2),t=a[0],l=a[1],r=function(){var e=Object(o.a)(m.a.mark((function e(){var a,n,s,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://qrary-fuseki-service.herokuapp.com/trend_music/query",a={Accept:"application/sparql-results+json,*/*;q=0.9","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},n={query:'PREFIX md: <http://trendmusic.com/musicdata#>\n  \n        SELECT ?song ?artist ?genre ?length ?year ?listeners\n        WHERE\n        {\n          ?m     md:song    ?song ;\n                md:artist    ?artist ;\n                md:genre    ?genre ;\n                md:length    ?length ;\n                md:year    ?year ;\n                md:listeners    ?listeners ;\n          FILTER (regex(?song, "^'.concat(t.input,'","i") || regex(?artist, "^').concat(t.input,'","i") || regex(?genre, "^').concat(t.input,'","i"))\n        }')},e.prev=3,e.next=6,E()("https://qrary-fuseki-service.herokuapp.com/trend_music/query",{method:"POST",headers:a,data:g.a.stringify(n)});case 6:s=e.sent,r=s.data,console.log(r),c=r.results.bindings.map((function(e,a){return d(e,a)})),console.log(c),l(Object(i.a)(Object(i.a)({},t),{},{musics:c})),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(o.a)(m.a.mark((function e(){var a,n,s,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://qrary-fuseki-service.herokuapp.com/trend_music/query",a={Accept:"application/sparql-results+json,*/*;q=0.9","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},n={query:"PREFIX md: <http://trendmusic.com/musicdata#>\n  \n        SELECT ?song ?artist ?genre ?length ?year ?listeners\n        WHERE\n        {\n          ?m     md:song    ?song ;\n                md:artist    ?artist ;\n                md:genre    ?genre ;\n                md:length    ?length ;\n                md:year    ?year ;\n                md:listeners    ?listeners ;\n          \n        }\n        ORDER BY DESC(?listeners)"},e.prev=3,e.next=6,E()("https://qrary-fuseki-service.herokuapp.com/trend_music/query",{method:"POST",headers:a,data:g.a.stringify(n)});case 6:s=e.sent,r=s.data,console.log(r),c=r.results.bindings.map((function(e,a){return d(e,a)})),console.log(c),l(Object(i.a)(Object(i.a)({},t),{},{musics:c})),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(){return e.apply(this,arguments)}}(),d=function(e,a){return{d:a,song:e.song.value,artist:e.artist.value,genre:e.genre.value,length:e.length.value,year:e.year.value,listeners:e.listeners.value}};return s.a.createElement("div",{className:"super_container"},s.a.createElement("header",{className:"header"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"header_content d-flex flex-row align-items-center justify-content-center"},s.a.createElement("div",{className:"logo"},s.a.createElement("div",{className:"d-flex flex-row align-items-end justify-content-start"},s.a.createElement("span",{className:"logo_bars d-flex flex-row align-items-end justify-content-between"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null)),s.a.createElement("span",{className:"logo_text"},"TrendMusic")))))))),s.a.createElement("div",{className:"home"},s.a.createElement("div",{className:"home_slider_container"},s.a.createElement("div",{className:"owl-carousel owl-theme home_slider"},s.a.createElement("div",{className:"slide"},s.a.createElement("div",{className:"background_image",style:{backgroundImage:"url(images/index.jpg)"}}),s.a.createElement("div",{className:"home_container"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"home_content"},s.a.createElement("div",{className:"home_title_container text-center"},s.a.createElement("div",{className:"home_title islive text-center"},s.a.createElement("h1",null,"Trend ",s.a.createElement("span",null,"Music.")))),s.a.createElement("div",{className:"music_form_container"},s.a.createElement("form",{className:"music_form"},s.a.createElement("div",{className:"d-flex flex-md-row flex-column align-items-start justify-content-md-between justify-content-start"},s.a.createElement("div",{className:"music_form_inputs d-flex flex-row align-items-start justify-content-between"},s.a.createElement("input",{onChange:function(e){l(Object(i.a)(Object(i.a)({},t),{},{input:e.target.value}))},type:"text",className:"music_form_input",placeholder:"Search artist, music and genre",required:"required"})),s.a.createElement("button",{className:"music_form_button button",onClick:r},s.a.createElement("span",null,"Search")))))))))))))),s.a.createElement("div",{className:"musics"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row row-lg-eq-height"},s.a.createElement("div",{className:"col-lg-4 order-lg-1 order-2 musics_col"},s.a.createElement("div",{className:"extra d-flex flex-column align-items-center justify-content-between"},s.a.createElement("div",{className:"background_image",style:{backgroundImage:"url(images/extra_1.jpg)"}}),s.a.createElement("div",{className:"extra_frame"}),s.a.createElement("div",{className:"extra_text"},"it's awesome"),s.a.createElement("div",{className:"extra_title_container"},s.a.createElement("div",{className:"extra_year"},"2020"),s.a.createElement("div",{className:"extra_title"},"TOP MUSIC"),s.a.createElement("div",{className:"extra_subtitle"},"june 2020")))),s.a.createElement("div",{className:"col-lg-8 order-lg-2 order-1"},s.a.createElement("div",{className:"musics_content"},s.a.createElement("div",{className:"section_title"},s.a.createElement("h1",null,"Trending"),s.a.createElement("button",{className:"music_form_button button",onClick:c},s.a.createElement("span",null,"See Top Music"))),s.a.createElement("div",{className:"musics_list_container"},s.a.createElement("ol",null,t.musics.map((function(e,a){return s.a.createElement("li",{key:a},s.a.createElement("div",{className:"d-flex flex-row align-items-start justify-content-start"}),s.a.createElement("div",{className:"music_info"}),s.a.createElement("div",{className:"music_title"},e.song,s.a.createElement("br",null)),s.a.createElement("div",{className:"music_artist"},e.artist,s.a.createElement("br",null)),"Genre : ",e.genre,s.a.createElement("br",null),"Duration : ",e.length,s.a.createElement("br",null),"Published : ",e.year,s.a.createElement("br",null),"Listen : ",s.a.createElement(v.a,{value:e.listeners,displayType:"text",thousandSeparator:!0}))}))),s.a.createElement("ul",{className:"musics_list"}))))))),s.a.createElement("div",{className:"news"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"section_title"},s.a.createElement("h1",null,"Latest News")))),s.a.createElement("div",{className:"row news_row"},s.a.createElement("div",{className:"col-xl-4 col-md-6"},s.a.createElement("div",{className:"news_post image_top"},s.a.createElement("div",{className:"news_post_image"},s.a.createElement("img",{src:"images/news_1.jpg",alt:""})),s.a.createElement("div",{className:"news_post_content"},s.a.createElement("div",{className:"news_post_title"},s.a.createElement("span",null,"musik/mu\xb7sik/ n")),s.a.createElement("div",{className:"news_post_text"},s.a.createElement("p",null,"ilmu atau seni menyusun nada atau suara dalam urutan, kombinasi, dan hubungan temporal untuk menghasilkan komposisi (suara) yang mempunyai kesatuan dan kesinam-bungan;"))))),s.a.createElement("div",{className:"col-xl-4 col-md-6"},s.a.createElement("div",{className:"news_post image_bottom d-flex flex-column align-items-start justify-content-start"},s.a.createElement("div",{className:"news_post_content order-md-1 order-2"},s.a.createElement("div",{className:"news_post_title"},s.a.createElement("span",null,"Apa itu TrendMusic?")),s.a.createElement("div",{className:"news_post_text"},s.a.createElement("p",null,"TrendMusic merupakan sebuah aplikasi web semantik untuk mencari musik yang sedang trending, bisa mencari Judul, Artist dan Genre. TrendMusic ini dibuat untuk memenuhi tugas akhir mata kuliah Semantik Web."))),s.a.createElement("div",{className:"news_post_image order-md-2 order-1"},s.a.createElement("img",{src:"images/news_2.jpg",alt:""})))),s.a.createElement("div",{className:"col-xl-4 col-md-6"},s.a.createElement("div",{className:"news_post image_top"},s.a.createElement("div",{className:"news_post_image"},s.a.createElement("img",{src:"images/news_3.jpg",alt:""})),s.a.createElement("div",{className:"news_post_content"},s.a.createElement("div",{className:"news_post_title"},s.a.createElement("span",null,"Web Semantik")),s.a.createElement("div",{className:"news_post_text"},s.a.createElement("p",null,"Sir  Tim  Berners-Lee  mendefinisikan  Web  semantik  sebagai pengembangan  dari  web yang  ada  saat ini  dengan  informasi  yang  memiliki  makna  yang didefinisikan  dengan  baik  (well defined  meaning),  lebih  memampukan  komputer  dan manusia untuk bekerja sama (Berners-Lee, 2000).")))))))),s.a.createElement("footer",{className:"footer"},s.a.createElement("div",{className:"background_image",style:{backgroundImage:"url(images/footer.jpg)"}}),s.a.createElement("div",{className:"footer_content"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col text-center"},s.a.createElement("div",{className:"logo"},s.a.createElement("div",{className:"d-flex flex-row align-items-end justify-content-start"},s.a.createElement("span",{className:"logo_bars d-flex flex-row align-items-end justify-content-between"},s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null),s.a.createElement("span",null)),s.a.createElement("span",{className:"logo_text"},"TrendMusic"))))))),s.a.createElement("div",{className:"footer_bar"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"copyright text-center"},"Copyright \xa9 All rights reserved | This template is made by Colorlib")))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.9368c30c.chunk.js.map