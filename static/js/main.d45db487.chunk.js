(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),s=a.n(o),i=a(4),l=a(1),c=a(5),d=a(6),u=a(8),m=a(7),h=(a(14),[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}]),p=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}];a(15);function b(e){var t=e.name;return r.a.createElement("div",{className:"user"},r.a.createElement("span",{className:"user-name"},t))}function g(e){var t=e.id,a=e.title,n=e.completed,o=e.user,s=e.handler;return r.a.createElement("div",{className:"todo"},r.a.createElement("span",null,a),r.a.createElement("span",null,n?r.a.createElement("button",{type:"button",onClick:function(){return s(t)}},r.a.createElement("span",{role:"img","aria-label":"done"},"\u2714\ufe0f")):r.a.createElement("button",{type:"button",onClick:function(){return s(t)}},r.a.createElement("span",{role:"img","aria-label":"not-done"},"\u274c"))),r.a.createElement(b,o))}function y(e){var t=e.todos,a=e.changeStatusHandler;return r.a.createElement("div",{className:"todo-list"},r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(g,Object.assign({},e,{handler:a})))}))))}var f=h.map((function(e){return Object.assign(e,{user:p.filter((function(t){return t.id===e.userId}))[0]})})),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={todo:"",todosList:Object(l.a)(f),userId:0,showChooseUserError:!1,showWriteTodoError:!1},e.handleSubmit=function(t){t.preventDefault();var a=p.find((function(t){return t.id===parseInt(e.state.userId,10)})),n=Math.max.apply(Math,Object(l.a)(e.state.todosList.map((function(e){return e.id}))))+1;""!==e.state.todo?(e.setState({showWriteTodoError:!1}),void 0!==a?(e.setState({showChooseUserError:!1}),e.setState((function(e){var t=Object(l.a)(e.todosList);return t.push({completed:!1,user:a,id:n,userId:a.id,title:e.todo}),{todosList:t,todo:"",userId:0,showChooseUserError:!1,showWriteTodoError:!1}}))):e.setState({showChooseUserError:!0})):e.setState({showWriteTodoError:!0})},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(i.a)({},n,r))},e.changeStatusHandler=function(t){var a=e.state.todosList.find((function(e){return e.id===t}));a.completed=!a.completed,e.forceUpdate()},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Todos:"),r.a.createElement(y,{todos:this.state.todosList,changeStatusHandler:this.changeStatusHandler}),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("textarea",{placeholder:"Write your todo here",value:this.state.todo,onChange:this.handleChange,name:"todo"}),r.a.createElement("div",null,r.a.createElement("select",{value:this.state.userId,onChange:this.handleChange,name:"userId"},r.a.createElement("option",{value:""},"Choose username"),p.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.username)}))),r.a.createElement("button",{type:"submit"},"Add")),r.a.createElement("div",{className:"errors"},this.state.showChooseUserError&&r.a.createElement("div",{className:"error-msg"},r.a.createElement("h1",null,"Please, choose user")),this.state.showWriteTodoError&&r.a.createElement("div",{className:"error-msg"},r.a.createElement("h1",null,"Please, write todo")))))}}]),a}(r.a.Component);s.a.render(r.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.d45db487.chunk.js.map