"use strict";(self["webpackChunkinstayul"]=self["webpackChunkinstayul"]||[]).push([[495],{8495:function(s,t,e){e.r(t),e.d(t,{default:function(){return k}});var o=function(){var s=this,t=s._self._c;return s.user?t("div",{staticClass:"user-details"},[t("section",{staticClass:"profile flex"},[t("img",{staticClass:"profile-img avatar",attrs:{src:s.user.imgUrl}}),t("div",{staticClass:"profile-description"},[t("div",{staticClass:"profile-description-top"},[t("h2",{staticClass:"profile-description-top-username"},[s._v(s._s(s.user.userName))])]),t("div",{staticClass:"profile-description-count"},[t("span",{staticClass:"profile-count"},[t("span",{staticClass:"profile-count-num"},[s._v(s._s(s.getPostsOfUser.length))]),s._v(" posts ")]),t("button",{staticClass:"profile-count",on:{click:s.toggleFollowersModal}},[t("span",{staticClass:"profile-count-num"},[s._v(s._s(s.user.followers.length))]),s._v(" followers ")]),t("users-modal",{directives:[{name:"show",rawName:"v-show",value:s.isShownFollowersModal,expression:"isShownFollowersModal"}],on:{closeModal:s.toggleFollowersModal}},[t("h4",{staticClass:"screen-box-top-title",attrs:{slot:"title"},slot:"title"},[s._v("Followers")]),s._l(s.user.followers,(function(e){return t("div",{key:e._id,staticClass:"screen-row flex flex-align-center",attrs:{slot:"users"},on:{click:s.toggleFollowersModal},slot:"users"},[t("router-link",{attrs:{to:`/${e.userName}`}},[t("img",{staticClass:"user-avatar avatar-lg avatar",attrs:{src:e.imgUrl,alt:"profile pic"}})]),t("div",{staticClass:"screen-row-name"},[t("div",{staticClass:"screen-row-name-username",attrs:{title:e.userName}},[t("router-link",{attrs:{to:`/${e.userName}`}},[s._v(s._s(e.userName))])],1),e.fullName?t("div",{staticClass:"screen-row-name-fullname"},[s._v(s._s(e.fullName))]):s._e()])],1)}))],2),t("button",{staticClass:"profile-count",on:{click:s.toggleFollowingModal}},[t("span",{staticClass:"profile-count-num"},[s._v(s._s(s.user.following.length))]),s._v(" following ")]),t("users-modal",{directives:[{name:"show",rawName:"v-show",value:s.isShownFollowingModal,expression:"isShownFollowingModal"}],on:{closeModal:s.toggleFollowingModal}},[t("h4",{staticClass:"screen-box-top-title",attrs:{slot:"title"},slot:"title"},[s._v("Following")]),s._l(s.user.following,(function(e){return t("div",{key:e._id,staticClass:"screen-row",attrs:{slot:"users"},on:{click:s.toggleFollowingModal},slot:"users"},[t("router-link",{attrs:{to:`/${e.userName}`}},[t("img",{staticClass:"user-avatar avatar-lg avatar",attrs:{src:e.imgUrl,alt:"profile pic"}})]),t("div",{staticClass:"screen-row-name"},[t("div",{staticClass:"screen-row-name-username",attrs:{title:e.userName}},[t("router-link",{attrs:{to:`/${e.userName}`}},[s._v(s._s(e.userName))])],1),e.fullName?t("div",{staticClass:"screen-row-name-fullname"},[s._v(s._s(e.fullName))]):s._e()])],1)}))],2)],1),t("div",{staticClass:"profile-description-bio"},[t("h3",[s._v(s._s(s.user.fullName))]),t("p",[s._v(s._s(s.user.bio))])])])]),t("div",{staticClass:"profile-tabs"},[t("span",{staticClass:"profile-tabs-tab flex flex-align-center"},[t("svg",{staticClass:"profile-tabs-icon"},[t("use",{attrs:{"xlink:href":e(7795)+"#posts"}})]),s._v(" Posts ")])]),t("section",{staticClass:"profile-posts"},[0===s.getPostsOfUser.length?t("div",{staticClass:"profile-posts-no-posts flex flex-align-center flex-column"},[t("div",{staticClass:"profile-posts-no-posts-icon"},[t("svg",{staticClass:"icon"},[t("use",{attrs:{"xlink:href":e(7795)+"#no-posts"}})])]),s._v(" No posts yet ")]):s._l(s.getPostsOfUser,(function(o,l){return t("div",{key:o.id,staticClass:"profile-posts-item",on:{click:function(t){s.selectedPostIdx=l}}},[t("img",{staticClass:"profile-posts-item-img",attrs:{src:o.imgUrl}}),t("div",{staticClass:"profile-posts-item-count"},[t("span",[t("svg",{staticClass:"profile-posts-item-count-icon-heart"},[t("use",{attrs:{"xlink:href":e(7795)+"#heart-bold"}})]),s._v(" "+s._s(o.likes.length)+" ")]),t("span",[t("svg",{staticClass:"profile-posts-item-count-icon-comment"},[t("use",{attrs:{"xlink:href":e(7795)+"#comment"}})]),s._v(" "+s._s(o.comments.length)+" ")])])])})),null!==s.selectedPostIdx?t("post-modal",{attrs:{userPost:s.getPostsOfUser[s.selectedPostIdx]},on:{closePostModal:function(t){s.selectedPostIdx=null}}}):s._e()],2)]):s._e()},l=[],a=e(4725),r=e(4304),i=function(){var s=this,t=s._self._c;return t("div",{staticClass:"screen flex flex-align-center"},[t("close-button",{on:{closeModal:s.closePostModal}}),t("div",{staticClass:"post-modal modal flex"},[t("img",{staticClass:"post-modal-img",attrs:{src:s.userPost.imgUrl,alt:`Photo by ${s.loggedInUser.userName}`}}),t("div",{staticClass:"post-modal-right flex flex-column"},[t("post-header",{attrs:{post:s.userPost,user:s.loggedInUser},on:{removedPost:s.removedPost}}),t("post-author",{staticClass:"post-modal-author",attrs:{post:s.userPost}}),t("post-comments",{staticClass:"post-modal-comments",attrs:{comments:s.userPost.comments,post:s.userPost,user:s.loggedInUser}}),t("div",{staticClass:"post-modal-bottom"},[t("post-actions",{attrs:{post:s.userPost,user:s.loggedInUser}}),t("post-likes",{attrs:{post:s.userPost}}),t("post-time",{attrs:{post:s.userPost}})],1),t("add-comment",{attrs:{post:s.userPost,isUserDetails:!0,user:s.loggedInUser}})],1)])],1)},n=[],c=e(5116),u=e(6076),d=e(6879),m=e(4829),p=e(3707),g=e(9889),f=e(8093),v=e(9152),h={name:"post-modal",props:{userPost:Object},data(){return{commentToAdd:{content:"",createdAt:Date.now()}}},methods:{closePostModal(){this.$emit("closePostModal")},removedPost(){this.closePostModal()}},computed:{loggedInUser(){return this.$store.getters.loggedInUser}},components:{postHeader:c.Z,postComments:u.Z,postLikes:d.Z,addComment:m.Z,postActions:p.Z,postTime:g.Z,postAuthor:f.Z,closeButton:v.Z}},w=h,C=e(1001),_=(0,C.Z)(w,i,n,!1,null,null,null),P=_.exports,x={data(){return{user:null,isShownFollowersModal:!1,isShownFollowingModal:!1,selectedPostIdx:null,createdTimestamp:Date.now()}},computed:{getPostsOfUser(){let s=this.$store.getters.getPosts,t=s.filter((s=>s.by.userName===this.user.userName));return t}},methods:{loadPostsOfUser(){this.$store.dispatch({type:"loadPosts"})},toggleFollowersModal(){this.isShownFollowersModal=!this.isShownFollowersModal},toggleFollowingModal(){this.isShownFollowingModal=!this.isShownFollowingModal}},async created(){const s=this.$route.params.userName,t=await a.Z.getByUserName(s);this.user=t[0],this.loadPostsOfUser()},watch:{async"$route.params.userName"(s){const t=await a.Z.getByUserName(s);this.user=t[0],this.selectedPostIdx=null}},components:{usersModal:r.Z,postModal:P}},M=x,N=(0,C.Z)(M,o,l,!1,null,null,null),k=N.exports}}]);
//# sourceMappingURL=495.718b1588.js.map