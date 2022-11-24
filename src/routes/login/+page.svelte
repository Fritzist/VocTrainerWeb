<script lang="ts">
    function login() {
        console.log("login");
    }
</script>

<form on:submit|preventDefault={login}>
    <h3>Login</h3>
    <input id="username" placeholder="username"/>
    <input id="password" type="password" placeholder="password"/>
    <button>Login</button>
    <p>Dont have an account? <a href="/register">Regsiter here</a></p>
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


</style>