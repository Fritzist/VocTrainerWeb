<script lang="ts">
	import { goto } from "$app/navigation";

    import { username } from "$lib/store";
    import { password } from "$lib/store";
    let name = $username;
    let pass = $password;
    
    

</script>


<body>
    <h1>Profile</h1>
    <p>Username: {name}</p>
    <p>Password: {pass}</p>
    <button on:click={() => goto("/login")}>Logout</button>
</body>
<style>
    
    body {
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

    button {
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
    button:hover {
        cursor: pointer;
        background-color: rgb(3, 86, 109);
        
    }
</style>