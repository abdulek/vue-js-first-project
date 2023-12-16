<template>
    <img class="logo" alt="main logo" src="../assets/main-logo.jpg" id="main-logo" >
    <h1>Sign In</h1>
    <div class="sign-in">
        <input type="text" name="username" id="username" placeholder="Enter User Name:" class="form-control" v-model="username" required/>
        <input type="password" name="password" id="password" placeholder="Enter Password:" class="form-control" v-model="password" required/>
        <button v-on:click="signIn()">Sign In </button><br/>
        <router-link to="/sign-up">Sign up</router-link>
    </div>
</template>

<script>
import axios from 'axios';
export default{
    name:'SignIn',
    data(){
        return {
            username:'',
            password:''
        }
    },
    methods:{
        async signIn(){
            let result = await axios.post('http://127.0.0.1:8000/api/login',{
                username:this.username,
                password:this.password
            });
            if(result.status==200){
                let response = result.data;
                if(response.status=='success'){
                    alert('Login Successfully');
                    localStorage.setItem('user-info',JSON.stringify(result.data.user));
                    this.$router.push({name:'Home'});
                }else{
                    alert(response.message);
                }
            }else{
                alert('Login Failure');
            }
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:'Home'});
        }
    }
}
</script>
<style>
    img#main-logo{
    width: 250px;
    }
    .sign-in input{
        width: 300px;
        height: 40px;
        padding-left: 20px;
        display: block;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left: auto;
        border: 1px solid skyblue;
    }
    .sign-in button{
        width: 320px;
        height: 40px;
        border: 1px solid skyblue;
        background-color: skyblue;
        color: white;
        cursor: pointer;
        margin-bottom: 10px;
    }
</style>
