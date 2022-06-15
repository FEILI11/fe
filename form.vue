<template>
<div id="app">
  <p>input 元素：</p>
  <input v-model="message" placeholder="编辑我……">
  <p>input 表单消息是: {{ message }}</p>
   <a href="/ff">ff</a>
  <p>textarea 元素：</p>
  <textarea v-model="message2" placeholder="多行文本输入……"></textarea>
  <p>textarea 表单消息是:</p>
  <p >{{ message2 }}</p>
  <input type="button" value="POST" id="bt" @click="fig()" />
  <div  >
  <input type="button" value="选择文件" id="bt" @click="achange()" />
  <input type="file" id="fi" @change="add()" style="display: none;" />
  <img  class="alert-box-item" v-if="sf" width="304" height="228" :src="uck" id="mag">
  <img   width="50" height="50" :src="uckk"  id="magi">
      </div>

</div>
<a :href='aa'> dderrf </a>
<p>     111111111
<router-link to="/login">Go to Home</router-link>
    <router-link to="/home">Go to About</router-link>
    </p>

    <router-view></router-view>
    <p>12545</p>

</template>
<script>
export default {
name: 'HelloW',
  data() {
     return {
       message: '',
       message2: '菜鸟教程\r\nhttps://www.runoob.com',
       uck:'',
       sf:false,
       uckk:'',
       aa:'/list'

     }
     },
     methods: {

fig:function(){

     console.log('dddddd');
     var that=this;
     var kie = document.getElementById('fi');
       var magg= kie.files[0];
       var formData = new FormData();
       formData.append('file',magg);
       var qq=formData;

  this.aaxios({
       method: 'post',
       url: 'http://localhost:8080/profile',
      // data:that.qs.stringify
    data: qq

      }).then(function (response){

     that.message=response.data;
     that.uckk="/public/"+response.data;
     console.log(that.uckk);

     }).catch(function (error) {
    console.log(error);
  });
     },
     add: function () {
     var ki = document.getElementById('fi');
       var mag= ki.files[0];
       console.log(mag);
       var reader=new FileReader();
       reader.readAsDataURL(mag);
       var that=this;
       reader.onload=function (){
       var res=reader.result;
       that.uck= res;
       that.sf=true;
       console.log('eeeeeee');
     console.log(this.uck);
       }
                },

     achange:function() {
     console.log('rrrrrrrr');
     const ki = document.getElementById('fi');
     ki.click();

     }


     }

}


</script>
<style>
.alert-box-item {
display:block;

  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left:400px;
}


</style>
