<script>
    import { Heading, Li, List, Tooltip } from "flowbite-svelte";
    import androidLogo from "$lib/resources/android-logo.png";
    import cssLogo from "$lib/resources/css-logo.png";
    import debianLogo from "$lib/resources/debian-logo.png";
    import englishLogo from "$lib/resources/english-logo.png";
    import flowbiteLogo from "$lib/resources/flowbite-logo.png";
    import gitLogo from "$lib/resources/git-logo.png";
    import htmlLogo from "$lib/resources/html-logo.png";
    import iosLogo from "$lib/resources/ios-logo.png";
    import javaLogo from "$lib/resources/java-logo.png";
    import javaScriptLogo from "$lib/resources/javascript-logo.png";
    import kotlinLogo from "$lib/resources/kotlin-logo.png";
    import laravelLogo from "$lib/resources/laravel-logo.png";
    import mariadbLogo from "$lib/resources/mariadb-logo.png";
    import mysqlLogo from "$lib/resources/mysql-logo.png";
    import phpLogo from "$lib/resources/php-logo.png";
    import qemuLogo from "$lib/resources/qemu-logo.png";
    import reactLogo from "$lib/resources/react-logo.png";
    import rustLogo from "$lib/resources/rust-logo.png";
    import slintLogo from "$lib/resources/slint-logo.png";
    import svelteLogo from "$lib/resources/svelte-logo.png";
    import swiftLogo from "$lib/resources/swift-logo.png";
    import tailwindLogo from "$lib/resources/tailwind-logo.png";
    import typeScriptLogo from "$lib/resources/typescript-logo.png";
    import napoleon from "$lib/resources/napoleoncrossing.jpg";
    import nietzsche from "$lib/resources/nietzsche.jpg";
    import thethinker from "$lib/resources/thethinker.jpg";
</script>

<div class="w-full grid gap-x-2 lg:gap-x-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-12">

    <div class="bg-transparent grid gap-x-2 lg:gap-x-4 grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 col-start-1 col-end-3 md:col-start-2 md:col-end-4 lg:col-start-3 lg:col-end-7 xl:col-end-11">

        <article class="col-span-full h-screen mb-4 lg:mb-8 flex justify-center">

            <div class="flex flex-col h-fit justify-self-center self-center">
                <h1 class="text-center font-sans text-4xl lg:text-6xl xl:text-8xl font-bold text-white mb-2">José López Vílchez</h1>
                <sub class="text-center font-sans text-base lg:text-lg xl:text-xl 2xl:text-2xl font-light text-white mb-8 lg:mb-16 ">FullStack Developer</sub>
            </div>

        </article>

        <article class="col-span-full w-full mb-4 lg:mb-16 flex flex-col bg-purple-600/20 rounded-lg p-4 lg:p-8">

            <div class="w-full mb-8 lg:mb-16">
                <h1 class="text-center font-sans text-4xl lg:text-6xl xl:text-8xl font-bold text-white">Skills</h1>
                <p class="text-center font-sans text-base lg:text-lg xl:text-xl 2xl:text-2xl font-light text-white">Most were taught to me, though there's a few I taught myself. After a certain point, you can draw parallels from what you already know to hasten the learning process of new technologies.</p>
            </div>

            <div class="w-full grid gap-2 lg:gap-4 grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 auto-rows-auto bg-violet-950/80 rounded-lg">

                <div class="rounded-lg aspect-square p-2 bg-center bg-cover" style={`background-image: url(${englishLogo})`}></div>
                <Tooltip class="p-4">C1 English level, 199 points grade, certified by Cambridge Language Assessment</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-cover" style={`background-image: url(${htmlLogo})`}></div>
                <Tooltip class="p-4">Html</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-cover" style={`background-image: url(${cssLogo})`}></div>
                <Tooltip class="p-4">Css</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-cover" style={`background-image: url(${tailwindLogo})`}></div>
                <Tooltip class="p-4">Tailwind</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-cover" style={`background-image: url(${flowbiteLogo})`}></div>
                <Tooltip class="p-4">Flowbite, a UI component library</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-cover" style={`background-image: url(${javaScriptLogo})`}></div>
                <Tooltip class="p-4">JavaScript</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-cover" style={`background-image: url(${typeScriptLogo})`}></div>
                <Tooltip class="p-4">TypeScript</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-cover" style={`background-image: url(${svelteLogo})`}></div>
                <Tooltip class="p-4">Svelte</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-cover" style={`background-image: url(${reactLogo})`}></div>
                <Tooltip class="p-4">React</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-cover" style={`background-image: url(${javaLogo})`}></div>
                <Tooltip class="p-4">Java</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-cover" style={`background-image: url(${kotlinLogo})`}></div>
                <Tooltip class="p-4">Kotlin</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-cover" style={`background-image: url(${androidLogo})`}></div>
                <Tooltip class="p-4">Android development</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-cover" style={`background-image: url(${swiftLogo})`}></div>
                <Tooltip class="p-4">Swift</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-cover" style={`background-image: url(${iosLogo})`}></div>
                <Tooltip class="p-4">iOS development</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-cover" style={`background-image: url(${phpLogo})`}></div>
                <Tooltip class="p-4">Php</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-cover" style={`background-image: url(${laravelLogo})`}></div>
                <Tooltip class="p-4">Laravel</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-cover" style={`background-image: url(${rustLogo})`}></div>
                <Tooltip class="p-4">Rust</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-cover" style={`background-image: url(${slintLogo})`}></div>
                <Tooltip class="p-4">Slint, a UI library for Rust</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-cover" style={`background-image: url(${mysqlLogo})`}></div>
                <Tooltip class="p-4">MySQL</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-cover" style={`background-image: url(${mariadbLogo})`}></div>
                <Tooltip class="p-4">MariaDB</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-cover" style={`background-image: url(${debianLogo})`}></div>
                <Tooltip class="p-4">Debian, a linux distro</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-cover" style={`background-image: url(${qemuLogo})`}></div>
                <Tooltip class="p-4">QEMU/KVM, a virtualization program</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-cover" style={`background-image: url(${gitLogo})`}></div>
                <Tooltip class="p-4">Git</Tooltip>
                                
            </div>

        </article>

        <article class="col-span-full grid gap-2 lg:gap-4 grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 mb-4 lg:mb-16">

            <div class="rounded-lg aspect-[16/9] col-start-1 col-end-3 lg:col-end-4 xl:col-end-7 grid gap-2 lg:gap-4 grid-cols-2 p-2 bg-fuchsia-900/20">
                <div class="col-span-1 p-2 lg:p-4 xl:p-8 2xl:p-16">
                    <Heading tag="h2" class="font-sans text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl font-bold text-white pb-4">Technical</Heading>
                    <List tag="ul" class="space-y-1 font-sans text-base lg:text-lg xl:text-xl 2xl:text-2xl font-light text-white">
                      <Li>Orderly, structured and legible</Li>
                      <Li>Committed to code reusability and safety</Li>
                      <Li>Architecturally-minded</Li>
                    </List>
                </div>
                <div class="rounded-lg col-span-1 bg-center bg-cover" style={`background-image: url(${thethinker})`}></div>
            </div>

            <div class="rounded-lg aspect-[16/9] col-start-1 col-end-3 lg:col-start-2 lg:col-end-5 xl:col-start-3 xl:col-end-9 grid gap-2 p-2 lg:gap-4 grid-cols-2 bg-purple-600/20">
                <div class="rounded-lg col-span-1 bg-center bg-cover" style={`background-image: url(${napoleon})`}></div>
                <div class="col-span-1 p-2 lg:p-4 xl:p-8 2xl:p-16">
                    <Heading tag="h2" class="font-sans text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl font-bold text-white pb-4">Self-driven</Heading>
                    <List tag="ul" class="space-y-1 font-sans text-base lg:text-lg xl:text-xl 2xl:text-2xl font-light text-white">
                      <Li>Capable of self-teaching</Li>
                      <Li>Confident and resilient</Li>
                      <Li>Passionate, with a growth mentality</Li>
                    </List>
                </div>
            </div>

            <div class="rounded-lg aspect-[16/9] col-start-1 col-end-3 lg:col-end-4 xl:col-end-7 grid gap-2 lg:gap-4 grid-cols-2 p-2 bg-fuchsia-900/20">
                <div class="col-span-1 p-2 lg:p-4 xl:p-8 2xl:p-16">
                    <Heading tag="h2" class="font-sans text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl font-bold text-white pb-4">A deep thinker</Heading>
                    <List tag="ul" class="space-y-1 font-sans text-base lg:text-lg xl:text-xl 2xl:text-2xl font-light text-white">
                      <Li>Critical, logical, analytical</Li>
                      <Li>Out-of-the-box solutions</Li>
                      <Li>Creative and non-conformist</Li>
                    </List>
                </div>
                <div class="rounded-lg col-span-1 bg-center bg-cover" style={`background-image: url(${nietzsche})`}></div>
            </div>

        </article>

    </div>

</div>