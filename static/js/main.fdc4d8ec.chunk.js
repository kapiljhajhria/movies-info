(this.webpackJsonpmovie_grid=this.webpackJsonpmovie_grid||[]).push([[0],{23:function(e,t,a){e.exports=a(41)},28:function(e,t,a){},29:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},30:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(20),l=a.n(r),c=(a(28),a(29),a(30),a(11)),s=a.n(c),o=a(13),m=a(5),v=a(6),u=a(8),d=a(7),p=(a(32),a(14)),E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){var e=this.props.movie;return i.a.createElement(p.b,{to:"/moviedetails/".concat(e.id)},i.a.createElement("div",{className:"movieCard"},i.a.createElement("div",{className:"movie-poster"},i.a.createElement("div",null,i.a.createElement("img",{className:"movieimg",src:"https://image.tmdb.org/t/p/original".concat(e.poster_path),alt:""}))),i.a.createElement("div",{className:"mv-inf"},i.a.createElement("div",{className:"mv-inf-top"},i.a.createElement("div",{className:"mv-inf-title"},e.original_title)),i.a.createElement("div",null,i.a.createElement("hr",null)),i.a.createElement("div",{className:"mv-inf-btm"},i.a.createElement("div",{className:"mv-inf-overview"},e.overview.substr(0,70)),i.a.createElement("div",{className:"mv-inf-vote-avg"},e.vote_average)))))}}]),a}(i.a.Component),g=(a(38),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"moviesgrid"},this.props.allMoviesData.map((function(e){return i.a.createElement(E,{movie:e})})))}}]),a}(i.a.Component)),f=(a(39),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={isLoading:!1,data:null},n}return Object(v.a)(a,[{key:"getApiKey",value:function(){return"9455f2fb0b779e4e7588ad14649658d3"}},{key:"getMovieData",value:function(){var e=Object(o.a)(s.a.mark((function e(){var t,a,n,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return[],t="https://api.themoviedb.org/3/discover/movie?api_key="+this.getApiKey(),e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,i=n.results,this.setState({data:i,isLoading:!0});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getMovieData()}},{key:"render",value:function(){return i.a.createElement("div",{className:"main"},this.state.isLoading?i.a.createElement(g,{allMoviesData:this.state.data}):i.a.createElement("div",{className:"loadingScreen"},i.a.createElement("div",{className:"lds-spinner"},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null))))}}]),a}(i.a.Component)),h=a(9),b=(a(40),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={id:n.props.match.params.id,isLoading:!1,data:null},n}return Object(v.a)(a,[{key:"getApiKey",value:function(){return"9455f2fb0b779e4e7588ad14649658d3"}},{key:"getMovieData",value:function(){var e=Object(o.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/movie/"+this.state.id+"?api_key="+this.getApiKey(),console.log("urls is:"+t),e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,this.setState({data:n,isLoading:!0});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getMovieData()}},{key:"render",value:function(){var e=this.state.data;return this.state.isLoading?i.a.createElement("div",{className:"screen"},i.a.createElement("div",{className:"background-img"},i.a.createElement("img",{className:"bg-img",src:"https://image.tmdb.org/t/p/original"+e.backdrop_path,alt:""})),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"poster-img"},i.a.createElement("img",{src:"https://image.tmdb.org/t/p/original"+e.poster_path,alt:""})),i.a.createElement("div",{className:"mov-inf"},i.a.createElement("div",{className:"mov-name"},e.title),i.a.createElement("div",{className:"mov-tag"},e.tagline),i.a.createElement("div",{className:"mov-overview"},e.overview),i.a.createElement("div",{className:"mov-genres"},e.genres.map((function(e){return i.a.createElement("div",{className:"genres"},e.name)})))))):i.a.createElement("div",{className:"loadingScreen-moviedetails"},i.a.createElement("div",{className:"lds-spinner"},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null)))}}]),a}(i.a.Component));var N=function(){return i.a.createElement(p.a,null,i.a.createElement(h.c,null,i.a.createElement(h.a,{path:"/moviedetails/:id",component:b}),i.a.createElement(h.a,{path:"/",component:!0},i.a.createElement(f,null))),i.a.createElement("div",{className:"App"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.fdc4d8ec.chunk.js.map