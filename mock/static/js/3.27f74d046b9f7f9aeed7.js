webpackJsonp([3],{CLwS:function(o,e,t){var n=t("NUpW"),r=t("OtAM");t("Mx9c")("keys",function(){return function(o){return r(n(o))}})},IKRb:function(o,e){},Mx9c:function(o,e,t){var n=t("MITN"),r=t("UusJ"),a=t("xVzf");o.exports=function(o,e){var t=(r.Object||{})[o]||Object[o],i={};i[o]=e(t),n(n.S+n.F*a(function(){t(1)}),"Object",i)}},ZLEe:function(o,e,t){o.exports={default:t("rhsp"),__esModule:!0}},rhsp:function(o,e,t){t("CLwS"),o.exports=t("UusJ").Object.keys},wHgX:function(o,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t("ZLEe"),r=t.n(n),a=t("lC5x"),i=t.n(a),u=t("J0Oq"),s=t.n(u),c=t("UeVD"),b=t("gyMJ"),l={created:function(){this.getBook()},watch:{$route:function(){this.getBook()}},methods:{update:function(){var o=this;return s()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.f)(o.bid,o.book);case 2:o.$router.push("/list");case 3:case"end":return e.stop()}},e,o)}))()},getBook:function(){var o=this;return s()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.b)(o.bid);case 2:o.book=e.sent,console.log(r()(o.book)),r()(o.book).length>0||o.$router.push("/list");case 5:case"end":return e.stop()}},e,o)}))()}},computed:{bid:function(){return this.$route.params.bid}},components:{MHeader:c.a},data:function(){return{book:{}}}},f={render:function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",{staticClass:"detail"},[t("MHeader",{attrs:{back:!0}},[o._v("图书详情")]),o._v(" "),t("div",{staticClass:"content"},[t("ul",[t("li",[t("label",{attrs:{for:"bookName"}},[o._v("书名")]),o._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:o.book.bookName,expression:"book.bookName"}],attrs:{type:"text",id:"bookName"},domProps:{value:o.book.bookName},on:{input:function(e){e.target.composing||o.$set(o.book,"bookName",e.target.value)}}})]),o._v(" "),t("li",[t("label",{attrs:{for:"bookInfo"}},[o._v("信息")]),o._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:o.book.bookInfo,expression:"book.bookInfo"}],attrs:{type:"text",id:"bookInfo"},domProps:{value:o.book.bookInfo},on:{input:function(e){e.target.composing||o.$set(o.book,"bookInfo",e.target.value)}}})]),o._v(" "),t("li",[t("label",{attrs:{for:"bookPrice"}},[o._v("价格")]),o._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.number",value:o.book.bookPrice,expression:"book.bookPrice",modifiers:{number:!0}}],attrs:{type:"number",id:"bookPrice"},domProps:{value:o.book.bookPrice},on:{input:function(e){e.target.composing||o.$set(o.book,"bookPrice",o._n(e.target.value))},blur:function(e){o.$forceUpdate()}}})]),o._v(" "),t("li",[t("button",{on:{click:o.update}},[o._v("确认修改")])])])])],1)},staticRenderFns:[]};var k=t("Z0/y")(l,f,!1,function(o){t("IKRb")},"data-v-532c8378",null);e.default=k.exports}});
//# sourceMappingURL=3.27f74d046b9f7f9aeed7.js.map