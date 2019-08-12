const a= require('./utility/product');
var b = a.list()
console.log(b)

// Vue.component('card-content', {
//     props: ['post'],
//     template: '<div class="card article-card">' +
//         '<div class="row no-gutters card-body">' +
//         '<div class="col-md-2">' +
//         '<div class="HotIssueImg">' +
//         '<img src="./imgs/qq.png" class="img-article">' +
//         '</div>' +
//         '</div>' +
//         '<div class="col-md-10">' +
//         '<div class="right-article">' +
//         '<h5 class="card-title">{{post.title}}</h5>' +
//         '<h6 class="card-subtitle mb-2 text-muted">{{post.label}}</h6>' +
//         '<p class="card-text">{{post.content}}</p>' +
//         '</div>' +
//         '</div>' +
//         '</div>' +
//         '<div class="author">' +
//         '<div class="author-name-time">{{post.name}} {{post.time}}</div>' +
//         '<i class="far fa-eye"></i>' +
//         '<div style="color:#919191">{{post.view}}</div>' +
//         '</div>' +
//         '<div class="card-footer">' +
//         '<a href="content.html" class="card-link">繼續閱讀</a>' +
//         '<a href="#" class="card-link">加入收藏</a>' +
//         '<a href="#" class="card-link">好文分享</a>' +
//         '</div>' +
//         '</div>'
// });
// Vue.component('loud-content', {
//     props: ['loud'],
//     template: '<div class="MessengeCard">' +
//         '<div class="ImgWithAuthor">' +
//         '<img src="./imgs/project_photo2.jpg" class="ImgAuthor">' +
//         '<u>{{loud.name}}</u>' +
//         '</div>' +
//         '<div class="PushMessengeText">' +
//         '{{loud.messenge}}' +
//         '</div>' +
//         '<div class="PushTime">{{loud.time}}</div><hr>' +
//         '</div>'
// })
// Vue.component('btn-send', {
//     template: `<div class="form-group textareaMessenge"> 
//         <label for="exampleFormControlTextarea1">發送訊息：</label> 
//         <textarea class="form-control loud-say-textarea" rows="3" 
//         v-on:input="$emit('input', $event.target.value)"></textarea>
//         <button type="button" class="btn btn-warning loud-say-button" v-on:click="$emit('enlarge-text')">送出</button>
//         </div>`

// })
// //AddArticle
// Vue.component('addarticle-btn', {
//     template:`<button type="submit" class="btn btn-danger col-lg-2 float-right" v-on:click="$emit('get-inputvalue')">提交</button>`
//   })
// //實體化
// var components_demo=new Vue({
//     el: '#components-demo,#addarticle',
//     data:b,
//     methods:{
//         clickget:function(){
//             title=$('#titleInput').val()
//             content=$('#postInput').text()
//             tag=$('#tagInput').val()
//             var a=1
//             for(var i=0;i<this.posts.length;i++){
//                 a++;
//             }
//             this.posts.push({id:a,title:title,label:tag,content:content,name:'haohao',time:new Date().toLocaleString(),view:'0'})
//             alert('成功新增')
//         }
//     }
// })
// var components_demo2=new Vue({
//     el: '#components-demo2',
//     data: {
//         searchText:'',
//         posts: [
//             {
//                 id: 1,
//                 name: 'JackRobin',
//                 messenge: '聽說白竹鼠大大發表新的文章了!',
//                 time: new Date().toLocaleString()
//             },
//             {
//                 id: 2,
//                 name: 'Banana',
//                 messenge: '真的嘛!那我要趕快去看看',
//                 time: new Date().toLocaleString()
//             }
//         ]
//     },
//     methods:{
//         click:function(){
//             x=this.searchText
//             var a=1
//             for(var i=0;i<this.posts.length;i++){
//                 a++;
//             }
//             this.posts.push({id:a,name:'haohao',messenge:x,time:new Date().toLocaleString()})
//         }
//     }

// })
