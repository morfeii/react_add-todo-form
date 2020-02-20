(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),i=a.n(s),o=a(6),l=a(1),c=a(2),d=a(4),m=a(3),u=a(5),h=function(e){var t=e.todos;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.title),r.a.createElement("td",null,e.userId))})))},p=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={userId:0,title:"",errorInput:!1,errorSelect:!1},a.selectUserName=function(e){var t=e.target.value;a.setState({userId:t,errorSelect:!1})},a.handleChange=function(e){var t=e.target.value.replace(/^\s/,"");a.setState({title:t,errorInput:!1})},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.title,r=t.userId;(0,a.props.addTodo)(n,r),a.setState({title:"",userId:0,errorInput:!1,errorSelect:!1})},a.validateForm=function(e){e.preventDefault();var t=a.state,n=t.title,r=t.userId;n||a.setState({errorInput:!0}),r||a.setState({errorSelect:!0})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t,a=this.props.users,n=this.state,s=n.title,i=n.userId;return e=n.errorInput?"Please enter the title":"",t=n.errorSelect?"Choose a user":"",r.a.createElement("div",{className:"field is-horizontal is-grouped"},r.a.createElement("form",{className:"field-body",onSubmit:s&&i?this.handleSubmit:this.validateForm},r.a.createElement("div",{className:"field has-addons"},r.a.createElement("div",{className:"control is-expanded"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Please enter the title",value:s,onChange:this.handleChange}),r.a.createElement("p",{className:"help is-danger"},e)),r.a.createElement("div",{className:"control"},r.a.createElement("button",{className:"button is-link",type:"submit"},"Add"))),r.a.createElement("div",{className:"field-body"},r.a.createElement("div",{className:"select"},r.a.createElement("select",{onChange:this.selectUserName,value:i},r.a.createElement("option",{disabled:!0,value:"0"},"Choose a User"),a.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)}))),r.a.createElement("p",{className:"help is-danger"},t)))))}}]),t}(r.a.Component),b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={todos:Object(o.a)(a.props.todos)},a.addTodo=function(e,t){var n=a.state.todos.length;a.setState((function(a){return{todos:[].concat(Object(o.a)(a.todos),[{userId:+t,id:n+1,title:e}])}}))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.users,t=this.state.todos;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{users:e,addTodo:this.addTodo}),r.a.createElement("p",{className:"title is-5"},"Todo List"),r.a.createElement("table",{className:"table is-bordered is-narrow is-fullwidth"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Number"),r.a.createElement("th",null,"Task"),r.a.createElement("th",null,"User id"))),r.a.createElement("tbody",null,r.a.createElement(h,{todos:t}))))}}]),t}(r.a.Component),g=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),y=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}];var v=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title is-5"},"Add Todo Form"),r.a.createElement(b,{users:g,todos:y}))};i.a.render(r.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.107b22ff.chunk.js.map