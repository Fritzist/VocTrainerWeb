<script defer lang="ts">
	import { goto } from "$app/navigation";    
	import { bind } from "svelte/internal";

    export let username = "";
    let password = "";
    let passwordrepeat = "";
    let error = "";

    function register() {
        if(username == "" || password == "" || passwordrepeat == "") {
            error = "Please fill in all fields";
            setTimeout(() => {
                error = "";
            }, 5000);
            return;
        }
        if(password != passwordrepeat) {
            error = "Passwords do not match";
            setTimeout(() => {
                error = "";
            }, 5000);
            return;
        }
        if(password == passwordrepeat && username != "") {
            goto("/login");
        }
    }

</script>

<form id="form" on:submit|preventDefault={register}>
    <h3>Register</h3>
    <input id="username" placeholder="username" type="text" bind:value={username}/>
    <input id="password" type="password" placeholder="password" bind:value={password}/>
    <input id="password-repeat" type="password" placeholder="repeat password" bind:value={passwordrepeat}/>
    {#if error}<p id="error">{error}</p>{/if}
    <button >Register</button>
    <p>Already have an account? <a href="/login">Login now</a></p>
</form>

<style>
    
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        background-color: rgb(18, 9, 42);
        color: white;
        font-size: 3rem;
    }

    form input {
        padding: 10px 20px;
        font-size: 1.2rem;
        border-radius: 25px;
        background-color: transparent;
        border: 1px solid rgba(255, 255, 255, 0.234);
        color: white;
        margin-top: 15px;
        outline: none;
    }

    form button {
        outline: none;
        background-color: rgb(90, 219, 255);
        color: rgb(0, 0, 0);
        border: none;
        font-size: 1.2rem;
        padding: 10px 20px;
        width: 10rem;
        height: 55px;
        width: 200px;
        margin-top: 30px;   
        margin-bottom: 15px;
        border-radius: 25px;
        transition: all 0.3s ease;
    }

    form button:hover {
        cursor: pointer;
        background-color: rgb(3, 86, 109);
        
    }

    p {
        Font-size: 1rem;
        align-items: center;
        justify-content: center;
    }

    h3 {
        margin-bottom: 15px;
    }

    a {
        color: rgb(90, 219, 255);
        text-decoration: none;
    }

    #error {
    color: rgb(171, 68, 68);
    margin-top: 15px;
    }

</style>