(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/3mp":function(e,t,a){},"1Jpo":function(e,t,a){"use strict";var n=a("dI71"),s=a("q1tI"),r=a.n(s),o=a("Wbzz"),c=a("wd/R"),l=a.n(c),i=(a("/3mp"),function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.data.node.frontmatter,t=e.title,a=e.date,n=e.category,s=e.description,c=this.props.data.node.fields,i=c.slug,m=c.categorySlug;return r.a.createElement("div",{className:"post"},r.a.createElement("div",{className:"post__meta"},r.a.createElement("time",{className:"post__meta-time",dateTime:l()(a).format("MMMM D, YYYY")},l()(a).format("MMMM D YYYY")),r.a.createElement("span",{className:"post__meta-divider"}),r.a.createElement("span",{className:"post__meta-category",key:m},r.a.createElement(o.Link,{to:m,className:"post__meta-category-link"},n))),r.a.createElement("h2",{className:"post__title"},r.a.createElement(o.Link,{className:"post__title-link",to:i},t)),r.a.createElement("p",{className:"post__description"},s),r.a.createElement(o.Link,{className:"post__readmore",to:i},"Read"))},t}(r.a.Component));t.a=i},"2zJc":function(e,t,a){"use strict";a.r(t);var n=a("dI71"),s=a("q1tI"),r=a.n(s),o=a("TJpk"),c=a.n(o),l=a("ntAx"),i=a("1Jpo"),m=a("kfNp"),p=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=[],t=this.props.data.site.siteMetadata,a=t.title,n=t.subtitle,s=this.props.data.allMarkdownRemark,o=s?s.edges:null;return o&&o.forEach((function(t){e.push(r.a.createElement(i.a,{data:t,key:t.node.fields.slug}))})),r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement(c.a,null,r.a.createElement("title",null,a),r.a.createElement("meta",{name:"description",content:n})),r.a.createElement(m.a,this.props),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"content__inner"},e))))},t}(r.a.Component);t.default=p}}]);
//# sourceMappingURL=component---src-pages-algo-index-jsx-93d61fcd49dcaa291133.js.map