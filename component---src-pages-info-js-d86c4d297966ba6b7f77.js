(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"2BF6":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOC44OSAzNC44OCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMzYzAwY2U7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5BdWRpbyBwb2ludGVyIGJsdWVBc3NldCAxODwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9ImZyb250X2ludGVyZmFjZSIgZGF0YS1uYW1lPSJmcm9udCBpbnRlcmZhY2UiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI0LjY2LDQuMjNBMTQuNDUsMTQuNDUsMCwwLDAsNC4yMywyNC42NkwxNC40NCwzNC44OCwyNC42NiwyNC42NkExNC40NSwxNC40NSwwLDAsMCwyNC42Niw0LjIzWm0tMy41OCw2LjVMMTYuMTksNy44NWwuMzMsMTEuMjVjMCwxLjc5LTIuMjEsMy43Mi00LjUzLDMuNzJTNy44LDIxLjM2LDcuOCwxOS41N3MxLjQ2LTMuMjEsMy43Ny0zLjIxQTUuNTcsNS41NywwLDAsMSwxNS41LDE3LjhMMTUuMzEsNy42MVY0LjU2bDUuNzcsMy4yNVoiLz48L2c+PC9nPjwvc3ZnPg=="},"5+wS":function(e,t,a){"use strict";var i=a("dI71"),n=a("q1tI"),o=a.n(n),s=a("7oih"),c=a("a+pH"),r=a.n(c),l=a("SVAT"),u=a("YgSM"),M=a("k0TJ"),m=a("UDOl"),y=a("azlP"),p=a.n(y),L=a("2BF6"),N=a.n(L),d=a("TSYQ"),j=a.n(d),w={center:[51.7522,-1.256],zoom:12,minZoom:12},I=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={activePark:null},console.log("init"),a}return Object(i.a)(t,e),t.prototype.render=function(){var e,t=this,i=this.props,n=a("4R65");return console.log("L",n),this.icons||"undefined"==typeof window||(this.icons={Text:new n.Icon({iconUrl:p.a,iconSize:[32,32]}),Audio:new n.Icon({iconUrl:N.a,iconSize:[64,64]})}),o.a.createElement(s.a,i,o.a.createElement("div",{className:r.a.map_layout},o.a.createElement("div",{className:r.a.overlay},i.children),o.a.createElement("div",{className:j()(r.a.map,(e={},e[r.a.figure_disabled]=i.mapDisabled,e))},o.a.createElement(l.a,{settings:w},m.features.map((function(e){return t.icons&&t.icons[e.type]?o.a.createElement(u.a,{key:e.properties.PARK_ID,icon:t.icons[e.type]||void 0,position:[e.geometry.coordinates[0],e.geometry.coordinates[1]],onClick:function(){t.setState({activePark:e})}}):(console.log("no marker"),o.a.createElement(u.a,{key:e.properties.PARK_ID,position:[e.geometry.coordinates[0],e.geometry.coordinates[1]],onClick:function(){console.log("click 2",e),t.setState({activePark:e})}}))})),this.state.activePark&&o.a.createElement(M.a,{position:[this.state.activePark.geometry.coordinates[0]+.005,this.state.activePark.geometry.coordinates[1]],onClose:function(){t.setState({activePark:null})}},o.a.createElement("div",null,o.a.createElement("h2",null,this.state.activePark.properties.NAME),o.a.createElement("p",null,this.state.activePark.properties.DESCRIPTION)))))))},t}(o.a.Component);t.a=I},TSYQ:function(e,t,a){var i;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var o=typeof i;if("string"===o||"number"===o)e.push(i);else if(Array.isArray(i)&&i.length){var s=n.apply(null,i);s&&e.push(s)}else if("object"===o)for(var c in i)a.call(i,c)&&i[c]&&e.push(c)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(i=function(){return n}.apply(t,[]))||(e.exports=i)}()},Ul04:function(e,t,a){e.exports={info_blurb:"info-module--info_blurb--DoQ9H"}},"a+pH":function(e,t,a){e.exports={map_layout:"mapLayout-module--map_layout--1uDaX",overlay:"mapLayout-module--overlay--1lMrM",map:"mapLayout-module--map--2Owqp",map_disabled:"mapLayout-module--map_disabled--1kvJb"}},azlP:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOC44OSAzNC44OCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMzYzAwY2U7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5UZXh0IHBvaW50ZXIgYmx1ZUFzc2V0IDE0PC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iZnJvbnRfaW50ZXJmYWNlIiBkYXRhLW5hbWU9ImZyb250IGludGVyZmFjZSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjQuNjYsNC4yM0ExNC40NSwxNC40NSwwLDAsMCw0LjIzLDI0LjY2TDE0LjQ0LDM0Ljg4LDI0LjY2LDI0LjY2QTE0LjQ1LDE0LjQ1LDAsMCwwLDI0LjY2LDQuMjNabS0yLDZMMTEuNTUsMjEuNDNsLTEuMTYuMzItMy0zLC41My0xLjI3TDE4Ljc3LDYuNjJsMS4zLDAsMi42NiwyLjY2Wk05LjY1LDIxLjlsLTMuMTkuNzQuMjQtMS4xMi40OS0yLjA4WiIvPjwvZz48L2c+PC9zdmc+"},szYE:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c}));var i=a("q1tI"),n=a.n(i),o=(a("Wbzz"),a("5+wS")),s=(a("Ul04"),a("wkXz"));function c(){Object(s.a)().infoData;return n.a.createElement(o.a,{figureDisabled:!0,gradient:!0})}}}]);
//# sourceMappingURL=component---src-pages-info-js-d86c4d297966ba6b7f77.js.map