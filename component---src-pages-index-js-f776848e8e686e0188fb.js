(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2BF6":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOC44OSAzNC44OCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMzYzAwY2U7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5BdWRpbyBwb2ludGVyIGJsdWVBc3NldCAxODwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9ImZyb250X2ludGVyZmFjZSIgZGF0YS1uYW1lPSJmcm9udCBpbnRlcmZhY2UiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTI0LjY2LDQuMjNBMTQuNDUsMTQuNDUsMCwwLDAsNC4yMywyNC42NkwxNC40NCwzNC44OCwyNC42NiwyNC42NkExNC40NSwxNC40NSwwLDAsMCwyNC42Niw0LjIzWm0tMy41OCw2LjVMMTYuMTksNy44NWwuMzMsMTEuMjVjMCwxLjc5LTIuMjEsMy43Mi00LjUzLDMuNzJTNy44LDIxLjM2LDcuOCwxOS41N3MxLjQ2LTMuMjEsMy43Ny0zLjIxQTUuNTcsNS41NywwLDAsMSwxNS41LDE3LjhMMTUuMzEsNy42MVY0LjU2bDUuNzcsMy4yNVoiLz48L2c+PC9nPjwvc3ZnPg=="},"5+wS":function(e,t,a){"use strict";var n=a("dI71"),o=a("q1tI"),i=a.n(o),l=a("7oih"),c=a("a+pH"),s=a.n(c),r=a("SVAT"),u=a("YgSM"),d=a("k0TJ"),m=a("UDOl"),M=a("azlP"),p=a.n(M),L=a("2BF6"),y=a.n(L),N=a("TSYQ"),w=a.n(N),j={center:[51.7522,-1.256],zoom:12,minZoom:12},v=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={activePark:null},console.log("init"),a}Object(n.a)(t,e);var o=t.prototype;return o.componentDidMount=function(){console.log("mount"),this.handleLoad(),window.addEventListener("load",this.handleLoad),this.forceUpdate()},o.componentDidUpdate=function(){console.log("update"),this.handleLoad(),window.addEventListener("load",this.handleLoad)},o.componentWillUnmount=function(){console.log("unmount"),window.removeEventListener("load",this.handleLoad)},o.handleLoad=function(){var e=a("4R65");console.log("L",e),this.icons||"undefined"==typeof window||(this.icons={Text:new e.Icon({iconUrl:p.a,iconSize:[32,32]}),Audio:new e.Icon({iconUrl:y.a,iconSize:[64,64]})})},o.render=function(){var e,t=this,a=this.props;return i.a.createElement(l.a,a,i.a.createElement("div",{className:s.a.map_layout},i.a.createElement("div",{className:s.a.overlay},a.children),i.a.createElement("div",{className:w()(s.a.map,(e={},e[s.a.figure_disabled]=a.mapDisabled,e))},i.a.createElement(r.a,{settings:j},m.features.map((function(e){return t.icons&&t.icons[e.type]?i.a.createElement(u.a,{key:e.properties.PARK_ID,icon:t.icons[e.type]||void 0,position:[e.geometry.coordinates[0],e.geometry.coordinates[1]],onClick:function(){t.setState({activePark:e})}}):(console.log("no marker"),i.a.createElement(u.a,{key:e.properties.PARK_ID,position:[e.geometry.coordinates[0],e.geometry.coordinates[1]],onClick:function(){console.log("click 2",e),t.setState({activePark:e})}}))})),this.state.activePark&&i.a.createElement(d.a,{position:[this.state.activePark.geometry.coordinates[0]+.005,this.state.activePark.geometry.coordinates[1]],onClose:function(){t.setState({activePark:null})}},i.a.createElement("div",null,i.a.createElement("h2",null,this.state.activePark.properties.NAME),i.a.createElement("p",null,this.state.activePark.properties.DESCRIPTION)))))))},t}(i.a.Component);t.a=v},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),i=(a("Wbzz"),a("5+wS"));t.default=function(){return o.a.createElement(i.a,null,o.a.createElement("div",{className:"overlay"}," ",o.a.createElement("p",null),o.a.createElement("p",null),o.a.createElement("p",null),o.a.createElement("p",null),o.a.createElement("p",null),o.a.createElement("a",null,"link")))}},TSYQ:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var l=o.apply(null,n);l&&e.push(l)}else if("object"===i)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},"a+pH":function(e,t,a){e.exports={map_layout:"mapLayout-module--map_layout--1uDaX",overlay:"mapLayout-module--overlay--1lMrM",map:"mapLayout-module--map--2Owqp",map_disabled:"mapLayout-module--map_disabled--1kvJb"}},azlP:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOC44OSAzNC44OCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMzYzAwY2U7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5UZXh0IHBvaW50ZXIgYmx1ZUFzc2V0IDE0PC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iZnJvbnRfaW50ZXJmYWNlIiBkYXRhLW5hbWU9ImZyb250IGludGVyZmFjZSI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjQuNjYsNC4yM0ExNC40NSwxNC40NSwwLDAsMCw0LjIzLDI0LjY2TDE0LjQ0LDM0Ljg4LDI0LjY2LDI0LjY2QTE0LjQ1LDE0LjQ1LDAsMCwwLDI0LjY2LDQuMjNabS0yLDZMMTEuNTUsMjEuNDNsLTEuMTYuMzItMy0zLC41My0xLjI3TDE4Ljc3LDYuNjJsMS4zLDAsMi42NiwyLjY2Wk05LjY1LDIxLjlsLTMuMTkuNzQuMjQtMS4xMi40OS0yLjA4WiIvPjwvZz48L2c+PC9zdmc+"}}]);
//# sourceMappingURL=component---src-pages-index-js-f776848e8e686e0188fb.js.map