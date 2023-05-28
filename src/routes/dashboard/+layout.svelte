<script lang="ts">
    import { page } from "$app/stores";
</script>

<section>
	<header>
		<div>
			{#if $page.url.pathname !== "/dashboard"}
				<a href="/dashboard" class="back" title="Go Back" aria-label="Go Back">
					<img src="/back.svg" alt="Go Back">
				</a>
			{/if}
		</div>
		<nav>
			<a href="/dashboard/requests" class="link">Requests</a>
			<a href="/logout" class="logout">Logout</a>
		</nav>
	</header>
	<main>
		<slot />
	</main>
</section>

<style>
	section {
		width: 100vw;
		height: 100vh;
		height: 100dvh;
		background-color: #ffffff;
	}
	header {
		width: 100%;
		height: 70px;
		background-color: #dfdfdf;
		display: flex;
		align-items: center;
		padding: 0 10px;
		justify-content: space-between;
	}

	main {
		width: 100%;
		height: calc(100% - 70px);
		overflow: hidden;
	}

	nav {
		display: flex;
		gap: 10px;
		align-items: center;
		justify-content: center;
	}

	.back {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 45px;
		height: 45px;
	}

	.back img {
		height: 90%;
	}

	.link {
		color: #000000;
		font-family: "Roboto",sans-serif;
	}

	.logout {
		width: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #000000;
		text-decoration: none;
		font-family: "Roboto",sans-serif;
		background-color: rgb(138, 138, 138);
		height: 40px;
		border-radius: 5px;

	}
</style>
