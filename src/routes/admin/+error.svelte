<script lang="ts">
  import { page } from "$app/stores";
  import AdminForm from "../../components/AdminForm.svelte";
</script>

<section>
  <h1>Dashboard</h1>
  <p>{$page ? ($page.error ? $page.error.message : $page) : $page}</p>
  <AdminForm />
</section>

<style>
  section {
    width: 100%;
    height: 100vh;
    height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(16, 35, 24, 1) 64%,
      rgba(40, 88, 59, 1) 100%
    );
    gap: 10px;
  }

  p {
    color: red;
    font-family: "Roboto", sans-serif;
    font-size: 1.25rem;
  }

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
    color: #dfdfdf;
  }
</style>
