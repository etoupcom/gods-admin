(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[932],{78177:function(Je,pe,r){"use strict";r.r(pe),r.d(pe,{default:function(){return He}});var g=r(11849),Qe=r(71194),Ze=r(57016),Z=r(3182),Xe=r(57663),P=r(71577),qe=r(34792),B=r(48086),xe=r(93224),j=r(2824),Ce=r(94043),l=r.n(Ce),v=r(67294),D=r(43653),ye=r(81907),Fe=r(85224),je=r(57119),Se=r(2625),$=r(35348);function Ee(u){return q.apply(this,arguments)}function q(){return q=(0,Z.Z)(l().mark(function u(n){return l().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,$.Z)("/system/role/list",{method:"GET",params:(0,g.Z)({},n)}));case 1:case"end":return t.stop()}},u)})),q.apply(this,arguments)}function Be(u){return _.apply(this,arguments)}function _(){return _=(0,Z.Z)(l().mark(function u(n){return l().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,$.Z)("/system/role/created",{method:"POST",data:(0,g.Z)({},n)}));case 1:case"end":return t.stop()}},u)})),_.apply(this,arguments)}function De(u){return ee.apply(this,arguments)}function ee(){return ee=(0,Z.Z)(l().mark(function u(n){return l().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,$.Z)("/system/role/updated",{method:"POST",data:(0,g.Z)({},n)}));case 1:case"end":return t.stop()}},u)})),ee.apply(this,arguments)}function be(u){return te.apply(this,arguments)}function te(){return te=(0,Z.Z)(l().mark(function u(n){return l().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,$.Z)("/system/role/deleted",{method:"POST",data:(0,g.Z)({},n)}));case 1:case"end":return t.stop()}},u)})),te.apply(this,arguments)}function Re(){return ne.apply(this,arguments)}function ne(){return ne=(0,Z.Z)(l().mark(function u(){return l().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,$.Z)("/system/role/project"));case 1:case"end":return i.stop()}},u)})),ne.apply(this,arguments)}function we(u){return re.apply(this,arguments)}function re(){return re=(0,Z.Z)(l().mark(function u(n){return l().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,$.Z)("/system/role/permission",{method:"POST",data:(0,g.Z)({},n)}));case 1:case"end":return t.stop()}},u)})),re.apply(this,arguments)}function Te(u){return ae.apply(this,arguments)}function ae(){return ae=(0,Z.Z)(l().mark(function u(n){return l().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,$.Z)("/system/role/bind",{method:"POST",data:(0,g.Z)({},n)}));case 1:case"end":return t.stop()}},u)})),ae.apply(this,arguments)}function ke(u){return se.apply(this,arguments)}function se(){return se=(0,Z.Z)(l().mark(function u(n){return l().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,$.Z)("/system/role/clear",{method:"POST",data:(0,g.Z)({},n)}));case 1:case"end":return t.stop()}},u)})),se.apply(this,arguments)}var _e=r(43358),le=r(16317),e=r(85893),Ie=function(n){var i=n.project,t=(0,v.useState)([]),p=(0,j.Z)(t,2),F=p[0],b=p[1];return(0,v.useEffect)(function(){i&&b(i)},[]),(0,e.jsx)(le.Z,{allowClear:!0,placeholder:"\u8BF7\u9009\u62E9\u9879\u76EE",options:F,value:n.value,onChange:n.onChange})},Pe=Ie,et=r(57338),ue=r(25084),tt=r(13062),ie=r(71230),nt=r(89032),k=r(15746),rt=r(47673),M=r(4107),at=r(9715),y=r(86585),$e=function(n){var i=n.options,t=n.visible,p=n.onCancel,F=n.onCreated,b=y.Z.useForm(),R=(0,j.Z)(b,1),S=R[0],x=function(){S.validateFields().then(function(I){F(I,S)}).catch(function(I){var T=I.errorFields;T.length>0&&B.default.error("\u8BF7\u5B8C\u6210\u5FC5\u586B\u9879\u5185\u5BB9")})};return(0,e.jsx)(ue.Z,{title:"\u65B0\u5EFA\u89D2\u8272",width:450,visible:t,onClose:function(){return p(S)},maskClosable:!1,footer:(0,e.jsx)("div",{style:{textAlign:"right",marginRight:10},children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(P.Z,{onClick:function(){return p(S)},style:{marginRight:10},children:"\u5173\u95ED"}),(0,e.jsx)(P.Z,{type:"primary",onClick:x,style:{marginRight:10},children:"\u4FDD\u5B58"})]})}),children:(0,e.jsx)(y.Z,{layout:"vertical",form:S,onFinish:x,children:(0,e.jsxs)(ie.Z,{gutter:[16,16],children:[(0,e.jsx)(k.Z,{span:24,children:(0,e.jsx)(y.Z.Item,{name:"code",label:"\u89D2\u8272\u6807\u8BC6",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u89D2\u8272\u6807\u8BC6"}],children:(0,e.jsx)(M.Z,{allowClear:!0,placeholder:"\u8BF7\u586B\u5199\u89D2\u8272\u6807\u8BC6"})})}),(0,e.jsx)(k.Z,{span:24,children:(0,e.jsx)(y.Z.Item,{name:"name",label:"\u89D2\u8272\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u89D2\u8272\u540D\u79F0"}],children:(0,e.jsx)(M.Z,{allowClear:!0,placeholder:"\u8BF7\u586B\u5199\u89D2\u8272\u540D\u79F0"})})}),(0,e.jsx)(k.Z,{span:24,children:(0,e.jsx)(y.Z.Item,{name:"description",label:"\u89D2\u8272\u7B80\u4ECB",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u89D2\u8272\u7B80\u4ECB"}],children:(0,e.jsx)(M.Z.TextArea,{rows:4,placeholder:"\u8BF7\u586B\u5199\u89D2\u8272\u7B80\u4ECB"})})}),(0,e.jsx)(k.Z,{span:24,children:(0,e.jsx)(y.Z.Item,{name:"project_id",label:"\u6240\u5C5E\u9879\u76EE",children:(0,e.jsx)(le.Z,{allowClear:!0,placeholder:"\u8BF7\u9009\u62E9\u6240\u5C5E\u9879\u76EE",options:i})})})]})})})},Ae=$e,Oe=function(n){var i=n.options,t=n.visible,p=n.fields,F=n.onCancel,b=n.onUpdated,R=y.Z.useForm(),S=(0,j.Z)(R,1),x=S[0];(0,v.useEffect)(function(){Object.keys(p).length>0&&x.setFieldsValue((0,g.Z)((0,g.Z)({},p),{},{project_id:p.project_id?p.project_id:void 0}))},[p]);var w=function(){x.validateFields().then(function(T){b((0,g.Z)((0,g.Z)({},T),{},{id:p.id}),x)}).catch(function(T){var U=T.errorFields;U.length>0&&B.default.error("\u8BF7\u5B8C\u6210\u5FC5\u586B\u9879\u5185\u5BB9")})};return(0,e.jsx)(ue.Z,{title:"\u66F4\u65B0\u89D2\u8272",width:450,visible:t,onClose:F,maskClosable:!1,footer:(0,e.jsx)("div",{style:{textAlign:"right",marginRight:10},children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(P.Z,{onClick:F,style:{marginRight:10},children:"\u5173\u95ED"}),(0,e.jsx)(P.Z,{type:"primary",onClick:w,style:{marginRight:10},children:"\u4FDD\u5B58"})]})}),children:(0,e.jsx)(y.Z,{layout:"vertical",form:x,onFinish:w,children:(0,e.jsxs)(ie.Z,{gutter:[16,16],children:[(0,e.jsx)(k.Z,{span:24,children:(0,e.jsx)(y.Z.Item,{name:"code",label:"\u89D2\u8272\u6807\u8BC6",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u89D2\u8272\u6807\u8BC6"}],children:(0,e.jsx)(M.Z,{allowClear:!0,placeholder:"\u8BF7\u586B\u5199\u89D2\u8272\u6807\u8BC6"})})}),(0,e.jsx)(k.Z,{span:24,children:(0,e.jsx)(y.Z.Item,{name:"name",label:"\u89D2\u8272\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u89D2\u8272\u540D\u79F0"}],children:(0,e.jsx)(M.Z,{allowClear:!0,placeholder:"\u8BF7\u586B\u5199\u89D2\u8272\u540D\u79F0"})})}),(0,e.jsx)(k.Z,{span:24,children:(0,e.jsx)(y.Z.Item,{name:"description",label:"\u89D2\u8272\u7B80\u4ECB",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u89D2\u8272\u7B80\u4ECB"}],children:(0,e.jsx)(M.Z.TextArea,{rows:4,placeholder:"\u8BF7\u586B\u5199\u89D2\u8272\u7B80\u4ECB"})})}),(0,e.jsx)(k.Z,{span:24,children:(0,e.jsx)(y.Z.Item,{name:"project_id",label:"\u6240\u5C5E\u9879\u76EE",children:(0,e.jsx)(le.Z,{allowClear:!0,placeholder:"\u8BF7\u9009\u62E9\u6240\u5C5E\u9879\u76EE",options:i})})})]})})})},Ue=Oe,st=r(13254),ge=r(14277),lt=r(32157),Me=r(91665),Ke=function(n){var i=n.fields,t=n.visible,p=n.onCancel,F=(0,v.useState)([]),b=(0,j.Z)(F,2),R=b[0],S=b[1],x=(0,v.useState)([]),w=(0,j.Z)(x,2),I=w[0],T=w[1],U=(0,v.useState)([]),N=(0,j.Z)(U,2),K=N[0],A=N[1],G=(0,v.useState)([]),W=(0,j.Z)(G,2),Y=W[0],z=W[1],oe=(0,v.useState)(!0),J=(0,j.Z)(oe,2),Q=J[0],L=J[1];(0,v.useEffect)(function(){i&&Object.keys(i).length>0&&we({code:i.code}).then(function(O){if(O.status==="success"){var h=O.data,V=h.list,fe=h.keys,me=h.info;S(V),T(fe),A(me)}})},[i]);var ce=function(){if(K.length===0){B.default.error("\u8BF7\u9009\u62E9\u83DC\u5355\u6743\u9650");return}Te({id:i.id,permissions:K}).then(function(h){h.status==="success"&&p()})},de=function(h){console.log("onExpand",h),T(h),L(!1)},X=function(h,V){console.log("onCheck",h),A(h)},he=function(h,V){console.log("onSelect",V),z(h)};return(0,e.jsx)(ue.Z,{title:"\u7ED1\u5B9A\u83DC\u5355",width:550,visible:t,onClose:p,maskClosable:!1,footer:(0,e.jsx)("div",{style:{textAlign:"right"},children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(P.Z,{onClick:p,style:{marginRight:10},children:"\u5173\u95ED"}),(0,e.jsx)(P.Z,{type:"primary",onClick:ce,style:{marginRight:10},children:"\u4FDD\u5B58"})]})}),children:(0,e.jsx)(ie.Z,{gutter:[16,16],children:(0,e.jsx)(k.Z,{span:24,children:R&&R.length>0?(0,e.jsx)(Me.Z,{checkable:!0,expandedKeys:I,autoExpandParent:Q,checkedKeys:K,selectedKeys:Y,treeData:R,onSelect:he,onCheck:X,onExpand:de}):(0,e.jsx)(ge.Z,{image:ge.Z.PRESENTED_IMAGE_SIMPLE,description:(0,e.jsx)("span",{children:"\u6682\u65E0\u6570\u636E"})})})})})},Ve=Ke,Le=function(){var n=(0,v.useRef)(),i=(0,v.useState)(!1),t=(0,j.Z)(i,2),p=t[0],F=t[1],b=(0,v.useState)(!1),R=(0,j.Z)(b,2),S=R[0],x=R[1],w=(0,v.useState)(!1),I=(0,j.Z)(w,2),T=I[0],U=I[1],N=(0,v.useState)([]),K=(0,j.Z)(N,2),A=K[0],G=K[1],W=(0,v.useState)({}),Y=(0,j.Z)(W,2),z=Y[0],oe=Y[1],J=(0,v.useState)([]),Q=(0,j.Z)(J,2),L=Q[0],ce=Q[1],de=(0,v.useState)(),X=(0,j.Z)(de,2),he=X[0],O=X[1],h=(0,D.md)(),V=(0,D.YB)(),fe=[{title:"\u6807\u8BC6",dataIndex:"code"},{title:"\u540D\u79F0",dataIndex:"name"},{title:"\u63CF\u8FF0",dataIndex:"description"},{title:"\u6240\u5C5E\u9879\u76EE",dataIndex:"project_name",hideInSearch:!0,hideInForm:!0},{title:"\u6240\u5C5E\u9879\u76EE",key:"project_id",hideInTable:!0,dataIndex:"project_id",renderFormItem:function(s,a,f){var c=a.type,C=a.defaultRender,m=(0,xe.Z)(a,["type","defaultRender"]);if(c==="form")return null;var E=f.getFieldValue("project_id");return(0,e.jsx)(Pe,{value:E,project:L})}},{title:"\u72B6\u6001",dataIndex:"status",filters:!0,onFilter:!0,valueType:"select",valueEnum:{40:{text:"\u51BB\u7ED3",status:"Error"},80:{text:"\u6B63\u5E38",status:"Success",disabled:!0}}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"created_at",key:"created_at",valueType:"dateTime",hideInSearch:!0,sorter:function(s,a){return s.created_at-a.created_at}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"created_at",valueType:"dateRange",hideInTable:!0,width:200,search:{transform:function(s){return{startTime:s[0],endTime:s[1]}}}},{title:(0,e.jsx)(D._H,{id:"pages.searchTable.titleOption",defaultMessage:"\u64CD\u4F5C"}),dataIndex:"option",valueType:"option",render:function(s,a){return[(0,e.jsx)(D.Nv,{accessible:h.canRoleUpdated,fallback:(0,e.jsx)("a",{onClick:function(){return B.default.error("\u6CA1\u6709\u6743\u9650")},children:"-"}),children:(0,e.jsx)("a",{onClick:function(){oe(a),U(!0)},children:"\u66F4\u65B0"},"a")},"a"),(0,e.jsx)(D.Nv,{accessible:h.canRoleBind,fallback:(0,e.jsx)("a",{onClick:function(){return B.default.error("\u6CA1\u6709\u6743\u9650")},children:"-"}),children:(0,e.jsx)("a",{onClick:function(){F(!0),O(a)},children:"\u6388\u6743"})},"b"),(0,e.jsx)(D.Nv,{accessible:h.canRoleClear,fallback:(0,e.jsx)("a",{onClick:function(){return B.default.error("\u6CA1\u6709\u6743\u9650")},children:"-"}),children:(0,e.jsx)("a",{onClick:function(){ze(a.id)},children:"\u6E05\u7A7A\u6743\u9650"})},"c")]}}];(0,v.useEffect)(function(){var o=!1;return Re().then(function(s){s.status==="success"&&(o||ce(s.data.map(function(a){return{value:a.id,label:a.name}})))}),function(){o=!0}},[]);var me=function(){var s=h.canRoleCreated;return s?(0,e.jsx)(P.Z,{type:"primary",onClick:function(){return x(!0)},children:(0,e.jsx)(D._H,{id:"pages.searchTable.new",defaultMessage:"New"})},"primary"):null},Ne=function(){var s=h.canRoleDeleted;return s?(0,e.jsx)(P.Z,{danger:!0,type:"primary",onClick:(0,Z.Z)(l().mark(function a(){return l().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Ye(A);case 2:case"end":return c.stop()}},a)})),children:(0,e.jsx)(D._H,{id:"pages.searchTable.batchDeletion",defaultMessage:"Batch deletion"})}):null},Ge=function(){var o=(0,Z.Z)(l().mark(function s(a,f){var c,C,m;return l().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Be(a);case 2:c=d.sent,c.status==="success"&&(f.resetFields(),x(!1),(C=n.current)===null||C===void 0||(m=C.reloadAndRest)===null||m===void 0||m.call(C),B.default.success("\u64CD\u4F5C\u6210\u529F"));case 4:case"end":return d.stop()}},s)}));return function(a,f){return o.apply(this,arguments)}}(),We=function(){var o=(0,Z.Z)(l().mark(function s(a,f){var c,C,m;return l().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,De(a);case 2:c=d.sent,c.status==="success"&&(f.resetFields(),U(!1),(C=n.current)===null||C===void 0||(m=C.reloadAndRest)===null||m===void 0||m.call(C),B.default.success("\u64CD\u4F5C\u6210\u529F"));case 4:case"end":return d.stop()}},s)}));return function(a,f){return o.apply(this,arguments)}}(),Ye=function(){var o=(0,Z.Z)(l().mark(function s(a){return l().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:Ze.Z.confirm({icon:(0,e.jsx)(je.Z,{}),title:"\u63D0\u793A",content:"\u5220\u9664\u540E\u65E0\u6CD5\u663E\u793A\uFF0C\u786E\u5B9A\u8981\u6279\u91CF\u5220\u9664\u9009\u62E9\u9879\uFF1F",onOk:function(){be({key:a.map(function(m){return m.id})}).then(function(m){if(m.status==="success"){var E,d;G([]),(E=n.current)===null||E===void 0||(d=E.reloadAndRest)===null||d===void 0||d.call(E),B.default.success("\u64CD\u4F5C\u6210\u529F")}})}});case 1:case"end":return c.stop()}},s)}));return function(a){return o.apply(this,arguments)}}(),ze=function(){var o=(0,Z.Z)(l().mark(function s(a){return l().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:Ze.Z.confirm({icon:(0,e.jsx)(je.Z,{}),title:"\u63D0\u793A",content:"\u6E05\u7A7A\u6743\u9650\u540E\u53EF\u91CD\u65B0\u6388\u6743\uFF0C\u786E\u5B9A\u8981\u6E05\u7A7A\u6743\u9650\uFF1F",onOk:function(){return(0,Z.Z)(l().mark(function m(){var E,d,ve;return l().wrap(function(H){for(;;)switch(H.prev=H.next){case 0:return H.next=2,ke({id:a});case 2:E=H.sent,E.status==="success"&&((d=n.current)===null||d===void 0||(ve=d.reloadAndRest)===null||ve===void 0||ve.call(d),B.default.success("\u64CD\u4F5C\u6210\u529F"));case 4:case"end":return H.stop()}},m)}))()}});case 1:case"end":return c.stop()}},s)}));return function(a){return o.apply(this,arguments)}}();return(0,e.jsxs)(ye.ZP,{children:[(0,e.jsx)(Se.ZP,{headerTitle:V.formatMessage({id:"pages.searchTable.title",defaultMessage:"Enquiry form"}),actionRef:n,rowKey:"id",search:{labelWidth:120},toolBarRender:function(){return[(0,e.jsx)(me,{})]},request:function(){var o=(0,Z.Z)(l().mark(function s(a,f,c){return l().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",Ee((0,g.Z)((0,g.Z)({},a),f)));case 1:case"end":return m.stop()}},s)}));return function(s,a,f){return o.apply(this,arguments)}}(),columns:fe,rowSelection:{onChange:function(s,a){G(a)}}}),(A==null?void 0:A.length)>0&&(0,e.jsx)(Fe.Z,{extra:(0,e.jsxs)("div",{children:[(0,e.jsx)(D._H,{id:"pages.searchTable.chosen",defaultMessage:"Chosen"})," ",(0,e.jsx)("a",{style:{fontWeight:600},children:A.length})," ",(0,e.jsx)(D._H,{id:"pages.searchTable.item",defaultMessage:"\u9879"})]}),children:(0,e.jsx)(Ne,{})}),(0,e.jsx)(Ve,{fields:he,visible:p,onCancel:function(){return F(!1)}}),(0,e.jsx)(Ae,{options:L,visible:S,onCreated:Ge,onCancel:function(s){x(!1),s.resetFields()}}),z&&(0,e.jsx)(Ue,{options:L,visible:T,fields:z,onUpdated:We,onCancel:function(){return U(!1)}})]})},He=Le}}]);