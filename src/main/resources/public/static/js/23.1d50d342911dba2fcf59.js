(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{BT0m:function(t,e,a){"use strict";a.r(e);var n={data:function(){return{visible:!1,sites:this.$store.state.site,dataForm:{id:0,name:"",passkey:"",cookie:"",status:0,remark:""},dataRule:{name:[{required:!0,message:"不能为空",trigger:"blur"}],passkey:[{required:!0,message:"不能为空",trigger:"blur"}]}}},mounted:function(){console.log(this.sites),0==this.sites.length&&(console.log("查询站点"),this.getSiteList())},methods:{init:function(t){var e=this;this.dataForm.name=t||"",this.visible=!0,this.$nextTick((function(){e.$refs.dataForm.resetFields(),e.dataForm.id&&e.$http({url:e.$http.adornUrl("/api/setting/site/info/"+e.dataForm.name),method:"get",params:e.$http.adornParams()}).then((function(t){var a=t.data;a&&0===a.code&&(e.dataForm=a.data)}))}))},getSiteList:function(){var t=this;this.$http({url:"/api/all-site",method:"get"}).then((function(e){var a=e.data;a&&0===a.code?(t.sites=a.data,t.$store.commit("setSite",a.data)):(t.tableData=[],t.$message({showClose:!0,message:a.msg,type:"error"}))})).catch((function(e){t.$message({showClose:!0,message:"出错了 "+e,type:"error"})}))},dataFormSubmit:function(){var t=this;this.$refs.dataForm.validate((function(e){e&&t.$http({url:t.$http.adornUrl("/api/setting/site"),method:t.dataForm.id?"put":"post",data:t.$http.adornData(t.dataForm)}).then((function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.visible=!1,t.$emit("refreshDataList")}}):t.$message.error(a.msg)}))}))}}},i=a("KHd+"),r={name:"siteSetting",data:function(){return{dataForm:{key:""},dataList:[],dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1}},components:{AddOrUpdate:Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:t.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[a("el-form",{ref:"dataForm",attrs:{model:t.dataForm,rules:t.dataRule,"label-width":"auto"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"站点",prop:"name"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:t.dataForm.name,callback:function(e){t.$set(t.dataForm,"name",e)},expression:"dataForm.name"}},t._l(t.sites,(function(t){return a("el-option",{key:t.site,attrs:{label:t.site,value:t.site}})})),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"passkey",prop:"passkey"}},[a("el-input",{attrs:{type:"number",maxlength:"9",minlength:"1","show-word-limit":"",placeholder:"passkey"},model:{value:t.dataForm.passkey,callback:function(e){t.$set(t.dataForm,"passkey",e)},expression:"dataForm.passkey"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"cookie",prop:"cookie"}},[a("el-input",{attrs:{type:"number",maxlength:"9",minlength:"1","show-word-limit":"",placeholder:"cookie"},model:{value:t.dataForm.cookie,callback:function(e){t.$set(t.dataForm,"cookie",e)},expression:"dataForm.cookie"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-radio-group",{model:{value:t.dataForm.status,callback:function(e){t.$set(t.dataForm,"status",e)},expression:"dataForm.status"}},[a("el-radio",{attrs:{label:0}},[t._v("启用")]),t._v(" "),a("el-radio",{attrs:{label:1}},[t._v("禁用")])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"remark"}},[a("el-input",{attrs:{placeholder:"备注"},model:{value:t.dataForm.remark,callback:function(e){t.$set(t.dataForm,"remark",e)},expression:"dataForm.remark"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.dataFormSubmit()}}},[t._v("确定")])],1)],1)}),[],!1,null,null,null).exports},activated:function(){this.getDataList()},methods:{getDataList:function(){var t=this;this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/api/setting/site"),method:"get"}).then((function(e){var a=e.data;a&&0===a.code?t.dataList=a.data.list:t.dataList=[],t.dataListLoading=!1}))},selectionChangeHandle:function(t){this.dataListSelections=t},addOrUpdateHandle:function(t){var e=this;this.addOrUpdateVisible=!0,this.$nextTick((function(){e.$refs.addOrUpdate.init(t)}))},deleteHandle:function(t){var e=this,a=t?[t]:this.dataListSelections.map((function(t){return t.id}));this.$confirm("确定对[id="+a.join(",")+"]进行["+(t?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$http({url:e.$http.adornUrl("/api/setting/site"),method:"delete",data:e.$http.adornData(a,!1)}).then((function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.getDataList()}}):e.$message.error(a.msg)}))}))}}},s=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mod-config"},[a("el-form",{attrs:{inline:!0,model:t.dataForm},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getDataList()}}},[a("el-form-item",[a("el-button",{on:{click:function(e){return t.getDataList()}}},[t._v("刷新")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.addOrUpdateHandle()}}},[t._v("新增")]),t._v(" "),a("el-button",{attrs:{type:"danger",disabled:t.dataListSelections.length<=0},on:{click:function(e){return t.deleteHandle()}}},[t._v("批量删除\n      ")])],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:t.dataList,border:""},on:{"selection-change":t.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"id","header-align":"center",align:"center",label:"ID",width:"60"}}),t._v(" "),a("el-table-column",{attrs:{prop:"site","header-align":"center",align:"center",label:"站点名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"passkey","header-align":"center",align:"center",label:"passkey"}}),t._v(" "),a("el-table-column",{attrs:{prop:"cookie","header-align":"center",align:"center",label:"passkey"}}),t._v(" "),a("el-table-column",{attrs:{prop:"move","header-align":"center",align:"center",label:"移动做种"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("el-image",{staticStyle:{width:"50%",height:"50%"},attrs:{src:t.row.imgIos}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"status","header-align":"center",align:"center",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.status?a("el-tag",{attrs:{size:"small",type:"danger"}},[t._v("禁用")]):a("el-tag",{attrs:{size:"small"}},[t._v("正常")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"remark","header-align":"center",align:"center",label:"备注"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.addOrUpdateHandle(e.row.id)}}},[t._v("修改\n        ")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.deleteHandle(e.row.id)}}},[t._v("删除")])]}}])})],1),t._v(" "),t.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:t.getDataList}}):t._e()],1)}),[],!1,null,null,null);e.default=s.exports}}]);
//# sourceMappingURL=23.1d50d342911dba2fcf59.js.map