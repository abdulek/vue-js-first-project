<template>
    <img class="logo" alt="main logo" src="../assets/main-logo.jpg" id="main-logo" >
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" name="name" id="name" placeholder="Enter Name:" class="form-control" v-model="name"/>
        <input type="text" name="username" id="username" placeholder="Enter User Name:" class="form-control" v-model="username"/>
        <input type="text" name="email" id="email" placeholder="Enter Email:" class="form-control" v-model="email"/>
        <input type="password" name="password" id="password" placeholder="Enter Password:" class="form-control" v-model="password"/>
        <input type="number" name="mobile" id="mobile" placeholder="Enter Mobile:" class="form-control" v-model="mobile"/>
        <button v-on:click="signUp">Sign Up </button>
        <br/>
        <router-link to="/sign-in">Sign in</router-link>
    </div>
</template>

<script>
import axios from 'axios';
export default{
    name:'SignUp',
    data(){
        return {
            name:'',
            username:'',
            email:'',
            password:'',
            mobile:''
        }
    },
    methods:{
        async signUp(){
            let result = await axios.post('http://127.0.0.1:8000/api/register',{
                name:this.name,
                username:this.username,
                email:this.email,
                password:this.password,
                mobile:this.mobile
            });
            if(result.status==200){
                alert('Register Successfully');
                localStorage.setItem('user-info',JSON.stringify(result.data.user));
                this.$router.push({name:'Home'});
            }else{
                alert('Register Failure');
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
    .register input{
        width: 300px;
        height: 40px;
        padding-left: 20px;
        display: block;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left: auto;
        border: 1px solid skyblue;
    }
    .register button{
        width: 320px;
        height: 40px;
        border: 1px solid skyblue;
        background-color: skyblue;
        color: white;
        cursor: pointer;
        margin-bottom: 10px;
    }
</style>
