<script lang="ts">
    import linkedInImg from "../assets/linkedin.svg";
    import githubImg from "../assets/github.svg";
    export let top = "100%";
</script>

<footer style="top: {top};">
    <a href="https://www.linkedin.com/in/stephen-gruzin-6aba31204/" target="_blank" title="My LinkedIn">
        <div>
            <img src={linkedInImg} alt="LinkedIn Icon" />
        </div>
    </a>
    <a href="https://github.com/Stephen10121" target="_blank" title="My Github">
        <div>
            <img src={githubImg} alt="Github Icon" />
        </div>
    </a>
</footer>

<style>
    footer {
        /* position: absolute; */
        /* left: 0; */
        min-width: 100%;
        min-height: 100px;
        height: 100px;
        background-color: rgba(0, 0, 0, 0.671);
        /* background-color: red; */
        background: rgb(0,0,0);
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.671) 0%, rgba(0, 0, 0, 0.671) 72%, rgba(255,255,255,0) 100%);
        display: flex;
        padding-top: 20px;
        align-items: center;
        justify-content: center;
        gap: 100px;
    }

    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 70px;
        height: 80px;
        text-decoration: none;
        transition: filter 0.15s linear;
    }

    a:hover {
        filter: invert(0.5);
    }

    div {
        width: 30px;
        height: 30px;
    }

    img {
        color: #ffffff;
        width: 100%;
        height: 100%;
    }

    @media (min-width: 850px) {
        footer {
            position: absolute;
            left: 0;
        }
    }
</style>