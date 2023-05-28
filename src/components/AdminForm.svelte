<script lang="ts">
    import { enhance } from "$app/forms";
    import { goto } from "$app/navigation";
  
    let isError: string | null = null;
  </script>
  
  {#if isError}
    <p>{isError}</p>
  {/if}
  <form
    action="/admin?/login"
    method="POST"
    use:enhance={() => {
      return async ({ result }) => {
        console.log(result);
        if (result.type === "redirect") {
          goto(result.location);
          return;
        }
        if (result.type === "error") {
          isError = result.error.message;
        }
      };
    }}
  >
    <input name="password" type="password" placeholder="Password" />
    <button>Submit</button>
  </form>
  
  <style>
    p {
      color: red;
      font-family: "Roboto", sans-serif;
      font-size: 1.25rem;
    }
  
    form {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      flex-direction: column;
    }
  
    input {
      border: 2px solid #dfdfdf;
      border-radius: 5px;
      background: none !important;
      padding: 10px;
      min-width: 300px;
      color: #dfdfdf;
    }
  
    @keyframes autofill {
      0%,
      100% {
        color: #666;
        background: transparent;
      }
    }
  
    @-webkit-keyframes autofill {
      0%,
      100% {
        color: #666;
        background: transparent;
      }
    }
  
    input:-webkit-autofill {
      -webkit-animation-delay: 1s; /* Safari support - any positive time runs instantly */
      -webkit-animation-name: autofill;
      -webkit-animation-fill-mode: both;
      animation-delay: 1s;
      animation-name: autofill;
      animation-fill-mode: both;
    }
  
    button {
      border: 2px solid #28583b;
      border-radius: 5px;
      background-color: #28583b;
      font-family: "Poppins", sans-serif;
      padding: 10px;
      min-width: 300px;
      cursor: pointer;
      color: white;
    }
  
    input::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #dfdfdf;
      font-family: "Roboto", sans-serif;
      opacity: 1; /* Firefox */
    }
  </style>
  