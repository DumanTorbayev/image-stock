(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,a){e.exports={head:"PhotoDetail_head__3UPvz",head__top:"PhotoDetail_head__top__2jeNP",background:"PhotoDetail_background__1DQLg",blur:"PhotoDetail_blur__2Zryt",user:"PhotoDetail_user__2RjaB",user__avatar:"PhotoDetail_user__avatar__DNY_5",user__name:"PhotoDetail_user__name__31Yyl",buttons:"PhotoDetail_buttons__3bi_a"}},15:function(e,t,a){e.exports={card:"PhotoItem_card__2EsHO",card__info:"PhotoItem_card__info__3z4yA",card__overlay:"PhotoItem_card__overlay__1V2ys",owner:"PhotoItem_owner__1Jc9N",owner__img:"PhotoItem_owner__img__3Xx-h",owner__name:"PhotoItem_owner__name__2KYpW",actions:"PhotoItem_actions__IByIU"}},20:function(e,t,a){e.exports={header:"Header_header__26D_V",header__top:"Header_header__top__M4u2y",logo:"Header_logo__2X7Sr",favorites:"Header_favorites__2NT_q"}},21:function(e,t,a){e.exports={"download-link":"DownloadLink_download-link__3As0-","detail-page":"DownloadLink_detail-page__3jOxk","photo-card":"DownloadLink_photo-card__1_PvB"}},22:function(e,t,a){e.exports={"in-favorite":"Button_in-favorite__3t2F8","detail-page":"Button_detail-page__3PCZy","photo-card":"Button_photo-card__3dhtV",active:"Button_active__2ani7"}},27:function(e,t,a){e.exports={"grid-container":"PhotoGrid_grid-container__1FlHB",grid:"PhotoGrid_grid__1cICr",column:"PhotoGrid_column__2ZqEo"}},32:function(e,t,a){e.exports={"img-container":"ResponsiveImage_img-container__FoybE",false:"ResponsiveImage_false__OVmAr"}},45:function(e,t,a){e.exports={container:"PhotoNotFound_container__2I_CF"}},79:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a(23),c=a.n(n),r=a(3),s=a(20),i=a.n(s),l=a(11),d=a(1),h=function(){return Object(d.jsx)("header",{className:i.a.header,children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:i.a.header__top,children:[Object(d.jsxs)(l.b,{to:"/",className:i.a.logo,children:[Object(d.jsx)("img",{src:"".concat("/image-stock","/img/logo.svg"),alt:""}),"ImageStock"]}),Object(d.jsxs)(l.b,{to:"/favorites",className:i.a.favorites,children:[Object(d.jsx)("img",{src:"".concat("/image-stock","/img/heart-icon.svg"),alt:""}),"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"]})]})})})},u=a(25),j=a(17),p=j.c,_=a(9),b=a(14),f=a.n(b),v=a(19),m=a(8),x=a(42),g=a.n(x).a.create({baseURL:"".concat("https://api.unsplash.com"),headers:{Authorization:"Client-ID ".concat("aSYhBi-PmFalxBwhNsyx6xPVN6zQfPblmDEaPxuG8vk")}}),O=function(e){return g.get("/photos/".concat(e.id))},w=function(e){return g.get("/photos/".concat(e.id,"/related"))},C=function(e,t){return g.get("/photos",{params:{page:e,per_page:t}})},P=a(43),N=a(77),y=(new P.a.Entity("users"),Object(m.b)("photos/fetchPhotos",function(){var e=Object(v.a)(f.a.mark((function e(t){var a,o,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.page,o=t.limit,e.prev=1,e.next=4,C(a,o);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())),I=Object(m.b)("photos/fetchRelatedPhotos",function(){var e=Object(v.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w(t);case 3:return a=e.sent,e.abrupt("return",a.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),k=Object(m.c)({name:"photoCollection",initialState:{photos:[],loading:!1,error:null,page:1,limit:15},reducers:{setPhotoPage:function(e,t){e.page=t.payload},clearPhotos:function(e){e.photos.splice(0,e.photos.length)}},extraReducers:function(e){e.addCase(y.fulfilled,(function(e,t){e.photos=N.uniqBy(e.photos.concat(t.payload),"id")})),e.addCase(I.fulfilled,(function(e,t){e.photos=t.payload}))}}),F=k.actions,B=F.setPhotoPage,H=F.clearPhotos,R=k.reducer,L=a(44),D=Object(m.b)("photo/fetchPhotoById",function(){var e=Object(v.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O(t);case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),S=Object(m.c)({name:"photo",initialState:{photo:null,loading:!1},reducers:{},extraReducers:function(e){e.addCase(D.pending,(function(e){e.loading=!0})),e.addCase(D.fulfilled,(function(e,t){e.photo=t.payload,e.loading=!1}))}});Object(L.a)(S.actions);var E=S.reducer,V="favorites",Z=function(e,t){localStorage.setItem(e,JSON.stringify(t))},M=function(e){return JSON.parse(localStorage.getItem(e))},z=Object(m.c)({name:"favorite",initialState:{photos:[],checkedId:null,removedPhotoId:null},reducers:{setFavoritesPhoto:function(e,t){e.photos=t.payload},setInFavorites:function(e,t){var a=M(V),o=a||[],n=o.findIndex((function(e){return e.id===t.payload.id}));-1!==n?(o.splice(n,1),e.removedPhotoId=e.removedPhotoId===t.payload.id?null:t.payload.id,Z(V,o)):(o.push(t.payload),Z(V,o))}}}),A=z.actions,J=A.setFavoritesPhoto,G=A.setInFavorites,Y=z.reducer,q={handleFetchPhotos:y,handleFetchRelatedPhotos:I,setPhotoPage:B,clearPhotos:H,handleFetchPhotoById:D,setFavoritesPhoto:J,setInFavorites:G},T=function(){var e=Object(j.b)();return Object(_.b)(q,e)},U=(a(79),function(){return Object(d.jsx)("div",{className:"spinner",children:Array.from({length:12}).map((function(e,t){return Object(d.jsx)("div",{},"".concat(e,"/").concat(t))}))})}),W=a(27),Q=a.n(W),X=a(47),K=a(15),$=a.n(K),ee=a(13),te=a(21),ae=a.n(te),oe=a(26),ne=a.n(oe),ce=function(e){var t,a=e.children,o=e.downloadSrc,n=e.className,c=e.detailPage,r=e.photoCard;return Object(d.jsx)("a",{className:ne()(ae.a["download-link"],n?ae.a[n]:"",(t={},Object(ee.a)(t,ae.a["detail-page"],c),Object(ee.a)(t,ae.a["photo-card"],r),t)),href:o,download:!0,target:"_blank",rel:"noreferrer",children:a})},re=a(22),se=a.n(re),ie=function(e){var t,a=e.children,o=e.className,n=e.onClick,c=e.detailPage,r=e.photoCard,s=ne()(se.a["in-favorite"],o?se.a[o]:"",(t={},Object(ee.a)(t,se.a["detail-page"],c),Object(ee.a)(t,se.a["photo-card"],r),t));return Object(d.jsx)("button",{onClick:n,className:s,children:a})},le=a(32),de=a.n(le),he=a(48);var ue=function(e){var t=e.src,a=e.alt,n=e.width,c=e.height,r=e.dataId,s=e.shadow,i=function(){var e=Object(o.useState)({w:0,h:0}),t=Object(he.a)(e,2),a=t[0],n=t[1];return Object(o.useEffect)((function(){var e=function(){n({w:window.innerWidth,h:window.innerHeight})};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),a}(),l=i.w;i.h;return Object(d.jsxs)("div",{className:de.a["img-container"],style:{maxWidth:"calc((100vh ".concat(l>576?"- 280px":"",") * ").concat(n/c,")")},children:[Object(d.jsx)("div",{style:{paddingBottom:"".concat(c/n*100,"%")}}),Object(d.jsx)("img",{className:de.a["".concat(s)],"data-id":r,src:t,alt:a})]})},je=function(e){var t=e.id,a=e.user,o=e.links,n=e.urls,c=e.alt_description,r=e.width,s=e.height,i=T().setInFavorites,h=a.name,u=a.profile_image,j=n.small,p=o.download;return Object(d.jsxs)("div",{className:$.a.card,children:[Object(d.jsxs)("div",{className:$.a.card__info,children:[Object(d.jsx)("div",{className:$.a.card__overlay}),Object(d.jsxs)("div",{className:$.a.owner,children:[Object(d.jsx)("img",{className:$.a.owner__img,src:u.large,alt:h}),Object(d.jsx)("div",{className:$.a.owner__name,children:h})]}),Object(d.jsxs)("div",{className:$.a.actions,children:[Object(d.jsx)(ie,{onClick:function(){return i({id:t,user:a,links:o,urls:n,alt_description:c,width:r,height:s})},photoCard:!0,children:Object(d.jsx)("svg",{viewBox:"0 0 23 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{d:"M13.0516 20.2443C12.1779 21.0597 10.8329 21.0597 9.95928 20.2325L9.83283 20.1143C3.79765 14.501 -0.145337 10.8257 0.00410514 6.24047C0.0730786 4.23147 1.07319 2.30521 2.69407 1.17072C5.7289 -0.956453 9.47646 0.0362259 11.4997 2.47065C13.5229 0.0362259 17.2705 -0.96827 20.3053 1.17072C21.9262 2.30521 22.9263 4.23147 22.9953 6.24047C23.1562 10.8257 19.2017 14.501 13.1665 20.138L13.0516 20.2443Z"})})}),Object(d.jsx)(l.b,{to:"/photo/".concat(t),children:Object(d.jsxs)("svg",{viewBox:"0 0 37 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.5833 4.5C21.5833 3.67157 22.2736 3 23.125 3H32.375C33.2264 3 33.9167 3.67157 33.9167 4.5V13.5C33.9167 14.3284 33.2264 15 32.375 15C31.5236 15 30.8333 14.3284 30.8333 13.5V6H23.125C22.2736 6 21.5833 5.32843 21.5833 4.5Z"}),Object(d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.62499 21C5.47643 21 6.16666 21.6716 6.16666 22.5V30H13.875C14.7264 30 15.4167 30.6716 15.4167 31.5C15.4167 32.3284 14.7264 33 13.875 33H4.62499C3.77356 33 3.08333 32.3284 3.08333 31.5V22.5C3.08333 21.6716 3.77356 21 4.62499 21Z"}),Object(d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M33.4651 3.43934C34.0672 4.02513 34.0672 4.97487 33.4651 5.56066L22.6735 16.0607C22.0714 16.6464 21.0953 16.6464 20.4932 16.0607C19.8912 15.4749 19.8912 14.5251 20.4932 13.9393L31.2849 3.43934C31.8869 2.85355 32.8631 2.85355 33.4651 3.43934Z"}),Object(d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.5068 19.9393C17.1088 20.5251 17.1088 21.4749 16.5068 22.0607L5.71512 32.5607C5.11306 33.1464 4.13693 33.1464 3.53487 32.5607C2.93281 31.9749 2.93281 31.0251 3.53487 30.4393L14.3265 19.9393C14.9286 19.3536 15.9047 19.3536 16.5068 19.9393Z"})]})}),Object(d.jsx)(ce,{downloadSrc:p,photoCard:!0,children:Object(d.jsx)("svg",{viewBox:"0 0 20 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.25 9.45837H16.5025C17.7633 9.45837 18.3867 10.9884 17.4942 11.8809L10.9917 18.3834C10.4392 18.9359 9.54668 18.9359 8.99418 18.3834L2.49168 11.8809C1.59918 10.9884 2.23668 9.45837 3.49751 9.45837H5.75001V2.37504C5.75001 1.59587 6.38751 0.958374 7.16668 0.958374H12.8333C13.6125 0.958374 14.25 1.59587 14.25 2.37504V9.45837ZM1.50001 25.0417C0.720844 25.0417 0.0833435 24.4042 0.0833435 23.6251C0.0833435 22.8459 0.720844 22.2084 1.50001 22.2084H18.5C19.2792 22.2084 19.9167 22.8459 19.9167 23.6251C19.9167 24.4042 19.2792 25.0417 18.5 25.0417H1.50001Z"})})})]})]}),Object(d.jsx)(ue,{src:j,alt:c,width:r,height:s,dataId:t,shadow:!1})]})},pe=a(45),_e=a.n(pe),be=function(e){var t=e.children;return Object(d.jsx)("div",{className:_e.a.container,children:t})},fe={default:3,1024:2,576:1},ve=function(e){var t=e.photos,a=e.children;return Object(d.jsxs)("div",{className:Q.a["grid-container"],children:[a,t?Object(d.jsx)(X.a,{breakpointCols:fe,className:Q.a.grid,columnClassName:Q.a.column,children:t.map((function(e,t){return Object(d.jsx)(je,Object(u.a)({},e),"".concat(e.id).concat(t))}))}):Object(d.jsx)(be,{children:"\u0424\u043e\u0442\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})]})},me=a(12),xe=a.n(me),ge=ie,Oe=ce,we=ue,Ce=function(e){var t=e.id,a=e.user,o=e.urls,n=e.alt_description,c=e.links,r=e.width,s=e.height,i=T().setInFavorites,l=Oe,h=ge,u=we,j=a.profile_image,p=a.name,_=o.regular,b=(o.small,c.download);return Object(d.jsxs)("div",{className:xe.a.head,children:[Object(d.jsx)("div",{className:xe.a.background,style:{backgroundImage:"url(".concat(_,")")},children:Object(d.jsx)("div",{className:xe.a.blur})}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:xe.a.head__top,children:[Object(d.jsxs)("div",{className:xe.a.user,children:[Object(d.jsx)("img",{className:xe.a.user__avatar,src:j.large,alt:""}),Object(d.jsx)("div",{className:xe.a.user__name,children:p})]}),Object(d.jsxs)("div",{className:xe.a.buttons,children:[Object(d.jsx)(h,{onClick:function(){return i({id:t,user:a,links:c,urls:o,alt_description:n,width:r,height:s})},detailPage:!0,children:Object(d.jsx)("svg",{viewBox:"0 0 23 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{d:"M13.0516 20.2443C12.1779 21.0597 10.8329 21.0597 9.95928 20.2325L9.83283 20.1143C3.79765 14.501 -0.145337 10.8257 0.00410514 6.24047C0.0730786 4.23147 1.07319 2.30521 2.69407 1.17072C5.7289 -0.956453 9.47646 0.0362259 11.4997 2.47065C13.5229 0.0362259 17.2705 -0.96827 20.3053 1.17072C21.9262 2.30521 22.9263 4.23147 22.9953 6.24047C23.1562 10.8257 19.2017 14.501 13.1665 20.138L13.0516 20.2443Z"})})}),Object(d.jsxs)(l,{downloadSrc:b,detailPage:!0,children:[Object(d.jsx)("svg",{viewBox:"0 0 20 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.25 9.45837H16.5025C17.7633 9.45837 18.3867 10.9884 17.4942 11.8809L10.9917 18.3834C10.4392 18.9359 9.54668 18.9359 8.99418 18.3834L2.49168 11.8809C1.59918 10.9884 2.23668 9.45837 3.49751 9.45837H5.75001V2.37504C5.75001 1.59587 6.38751 0.958374 7.16668 0.958374H12.8333C13.6125 0.958374 14.25 1.59587 14.25 2.37504V9.45837ZM1.50001 25.0417C0.720844 25.0417 0.0833435 24.4042 0.0833435 23.6251C0.0833435 22.8459 0.720844 22.2084 1.50001 22.2084H18.5C19.2792 22.2084 19.9167 22.8459 19.9167 23.6251C19.9167 24.4042 19.2792 25.0417 18.5 25.0417H1.50001Z"})}),"\u0421\u043a\u0430\u0447\u0430\u0442\u044c"]})]})]}),Object(d.jsx)(u,{width:r,height:s,src:_,alt:n,shadow:!0})]})]})},Pe=M,Ne=function(){window.scrollTo({top:0})},ye=function(e){return e.photoCollection},Ie=function(e){return e.photo},ke=function(){var e=p(Ie),t=e.photo,a=e.loading,n=p(ye).photos,c=T(),s=c.handleFetchPhotoById,i=c.handleFetchRelatedPhotos,l=Object(r.e)(),h=Ne;return Object(o.useEffect)((function(){s(l),i(l),h()}),[l.id]),a?Object(d.jsx)(U,{}):Object(d.jsxs)(d.Fragment,{children:[t&&Object(d.jsx)(Ce,Object(u.a)({},t)),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(ve,{photos:n,children:Object(d.jsx)("h3",{children:"\u041f\u043e\u0445\u043e\u0436\u0438\u0435 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438"})})})]})},Fe=a(46),Be=function(){var e=p(ye),t=e.photos,a=e.page,n=e.limit,c=T(),r=c.handleFetchPhotos,s=c.setPhotoPage,i=c.clearPhotos;Object(o.useEffect)((function(){i()}),[]),Object(o.useEffect)((function(){r({page:a,limit:n})}),[a,n]);return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(Fe.a,{next:function(){s(a+1)},hasMore:!0,loader:"",dataLength:t.length,scrollThreshold:.7,children:Object(d.jsx)(ve,{photos:t})})})},He=function(e){return e.favorite},Re=function(){var e=p(He),t=e.photos,a=e.removedPhotoId,n=T().setFavoritesPhoto,c=Pe;return Object(o.useEffect)((function(){n(c(V))}),[a]),Object(d.jsx)("div",{className:"container",children:t&&0!==t.length?Object(d.jsx)(ve,{photos:t}):Object(d.jsx)(be,{children:"\u041d\u0435\u0442 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0445 \u0444\u043e\u0442\u043e"})})},Le=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{}),Object(d.jsx)(r.a,{exact:!0,path:"/",children:Object(d.jsx)(Be,{})}),Object(d.jsx)(r.a,{path:"/photo/:id",children:Object(d.jsx)(ke,{})}),Object(d.jsx)(r.a,{path:"/favorites",children:Object(d.jsx)(Re,{})})]})},De=(a(80),a(81),Object(_.c)({photoCollection:R,photo:E,favorite:Y})),Se=Object(m.a)({reducer:De});c.a.render(Object(d.jsx)(l.a,{basename:"/image-stock",children:Object(d.jsx)(j.a,{store:Se,children:Object(d.jsx)(Le,{})})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.1f8bfc29.chunk.js.map