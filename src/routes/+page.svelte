<script>
    import { Button, Heading, Li, List, Tooltip } from "flowbite-svelte";
    import androidLogo from "$lib/resources/android-logo.png";
    import cssLogo from "$lib/resources/css-logo.png";
    import debianLogo from "$lib/resources/debian-logo.png";
    import englishLogo from "$lib/resources/english-logo.png";
    import flowbiteLogo from "$lib/resources/flowbite-logo.png";
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
    import rustLogo from "$lib/resources/rust-logo.png";
    import slintLogo from "$lib/resources/slint-logo.png";
    import svelteLogo from "$lib/resources/svelte-logo.png";
    import swiftLogo from "$lib/resources/swift-logo.png";
    import tailwindLogo from "$lib/resources/tailwind-logo.png";
    import typeScriptLogo from "$lib/resources/typescript-logo.png";
    import clockwork from "$lib/resources/clockwork.jpg";
    import caminantemardenubes from "$lib/resources/caminantemardenubes.jpg";
    import rhino from "$lib/resources/rhino.jpg";
</script>

<div class="w-full grid gap-x-2 lg:gap-x-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-12">

    <div class="bg-transparent grid gap-x-2 lg:gap-x-4 grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 col-start-1 col-end-3 md:col-start-2 md:col-end-4 lg:col-start-3 lg:col-end-7 xl:col-end-11">

        <article class="col-span-full h-screen mb-4 lg:mb-8 flex justify-center">

            <div class="flex flex-col h-fit justify-self-center self-center">
                <h1 class="text-center font-sans text-4xl lg:text-6xl xl:text-8xl font-bold text-white mb-2">José López Vílchez</h1>
                <sub class="self-center w-fit font-sans text-sm lg:text-md xl:text-l 2xl:text-xl font-light text-white/75 mb-8 lg:mb-16 pb-4">
                    Soon-to-be FullStack Dev <span class="text-yellow-300">&#123</span>
                    <p class="indent-8">
                    and even sooner-to-be intern <span class="text-fuchsia-400">&#123</span>
                    </p>
                    <p class="indent-16">
                    though currently a student - and <span class="text-red-400">YOU</span> could help in this regard (*w*)
                    </p>
                    <p class="indent-8">
                    <span class="text-fuchsia-400">&#125</span>
                    </p>
                    <span class="text-yellow-300">&#125</span>
                </sub>
            </div>

        </article>

        <article class="col-span-full w-full mb-4 lg:mb-16 flex flex-col rounded-lg p-4 lg:p-8 border-solid border-[1px] border-slate-500 bg-slate-500/20 backdrop-blur-sm">

            <div class="w-full mb-8 lg:mb-16">
                <h1 class="text-center font-sans text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl font-bold text-white pb-4">Skills</h1>
                <p class="text-center font-sans text-base lg:text-lg xl:text-xl 2xl:text-2xl font-light text-white">Most were taught to me, though there's a few I taught myself. After a certain point, you can draw parallels from what you already know to hasten the learning process of new technologies.</p>
            </div>

            <div class="p-4 w-full grid gap-2 lg:gap-4 grid-cols-6 2xl:grid-cols-8 auto-rows-auto">

                <!-- I should've made a component for this, any change I make requires me to alter EVERY SINGLE ONE OF THESE -->
                <div class="rounded-lg aspect-square p-2 bg-center bg-contain bg-no-repeat" style={`background-image: url(${englishLogo})`}></div>
                <Tooltip class="p-4">C1 English level, 199 points grade, certified by Cambridge Language Assessment</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-contain bg-no-repeat" style={`background-image: url(${htmlLogo})`}></div>
                <Tooltip class="p-4">Html</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-contain bg-no-repeat" style={`background-image: url(${cssLogo})`}></div>
                <Tooltip class="p-4">Css</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-contain bg-no-repeat" style={`background-image: url(${tailwindLogo})`}></div>
                <Tooltip class="p-4">Tailwind</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-contain bg-no-repeat" style={`background-image: url(${flowbiteLogo})`}></div>
                <Tooltip class="p-4">Flowbite, a UI component library</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-contain bg-no-repeat" style={`background-image: url(${javaScriptLogo})`}></div>
                <Tooltip class="p-4">JavaScript</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-contain bg-no-repeat" style={`background-image: url(${typeScriptLogo})`}></div>
                <Tooltip class="p-4">TypeScript</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-contain bg-no-repeat" style={`background-image: url(${svelteLogo})`}></div>
                <Tooltip class="p-4">Svelte</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-contain bg-no-repeat" style={`background-image: url(${javaLogo})`}></div>
                <Tooltip class="p-4">Java</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-contain bg-no-repeat" style={`background-image: url(${kotlinLogo})`}></div>
                <Tooltip class="p-4">Kotlin</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-contain bg-no-repeat" style={`background-image: url(${androidLogo})`}></div>
                <Tooltip class="p-4">Android development</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-contain bg-no-repeat" style={`background-image: url(${swiftLogo})`}></div>
                <Tooltip class="p-4">Swift</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-contain bg-no-repeat" style={`background-image: url(${iosLogo})`}></div>
                <Tooltip class="p-4">iOS development</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-contain bg-no-repeat" style={`background-image: url(${phpLogo})`}></div>
                <Tooltip class="p-4">Php</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-contain bg-no-repeat" style={`background-image: url(${laravelLogo})`}></div>
                <Tooltip class="p-4">Laravel</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-contain bg-no-repeat" style={`background-image: url(${rustLogo})`}></div>
                <Tooltip class="p-4">Rust - far from an expert, but I've begun to check it out and am REALLY interested in this one. If there's any project you intend to develop using Rust, do count me in!</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-contain bg-no-repeat" style={`background-image: url(${slintLogo})`}></div>
                <Tooltip class="p-4">Slint, a UI toolkit for Rust - even less skilled in this one, but DAMN does this one look FINE! Very elegant syntax, and works on a heck ton of platforms (even embedded!)</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-contain bg-no-repeat" style={`background-image: url(${mysqlLogo})`}></div>
                <Tooltip class="p-4">MySQL</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-contain bg-no-repeat" style={`background-image: url(${mariadbLogo})`}></div>
                <Tooltip class="p-4">MariaDB</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-contain bg-no-repeat" style={`background-image: url(${debianLogo})`}></div>
                <Tooltip class="p-4">Debian, a linux distro - I straight up installed it on my main PC to get used to it. Screw windows!</Tooltip>
                <div class="rounded-lg aspect-square p-2 bg-center bg-contain bg-no-repeat" style={`background-image: url(${qemuLogo})`}></div>
                                
            </div>

        </article>

        <article class="col-span-full grid gap-2 lg:gap-4 grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 mb-4 lg:mb-16 border-slate-500 bg-slate-500/20 backdrop-blur-sm md:bg-transparent">

            <div class="p-2 rounded-lg aspect-[16/9] col-start-1 col-end-3 lg:col-end-4 xl:col-end-7 grid gap-2 lg:gap-4 grid-cols-2 border-solid border-[1px] border-slate-500 bg-center bg-cover" style={`background-image: url(${clockwork})`}>
                <div class="h-fit col-span-1 p-2 pb-4 lg:p-4 xl:p-8 border-solid border-[1px] border-slate-500 bg-slate-500/20 backdrop-blur-sm">
                    <Heading tag="h2" class="font-sans text-xl lg:text-2xl xl:text-4xl font-bold text-white pb-4">Technical</Heading>
                    <List tag="ul" class="space-y-1 font-sans text-base lg:text-lg xl:text-xl 2xl:text-2xl font-light text-white">
                      <Li>Orderly, structured and legible</Li>
                      <Li>Committed to code reusability and safety</Li>
                      <Li>Architecturally-minded</Li>
                    </List>
                </div>
            </div>

            <div class="p-2 rounded-lg aspect-[16/9] col-start-1 col-end-3 lg:col-start-2 lg:col-end-5 xl:col-start-3 xl:col-end-9 grid gap-2 lg:gap-4 grid-cols-2 border-solid border-[1px] border-slate-500 bg-center bg-cover" style={`background-image: url(${rhino})`}>
                <div class="h-fit col-span-1 p-2 pb-4 lg:p-4 xl:p-8 border-solid border-[1px] border-slate-500 bg-slate-500/20 backdrop-blur-sm">
                    <Heading tag="h2" class="font-sans text-xl lg:text-2xl xl:text-4xl font-bold text-white pb-4">Self-driven</Heading>
                    <List tag="ul" class="space-y-1 font-sans text-base lg:text-lg xl:text-xl 2xl:text-2xl font-light text-white">
                      <Li>Capable of self-teaching</Li>
                      <Li>Confident and resilient</Li>
                      <Li>Passionate, with a growth mentality</Li>
                    </List>
                </div>
            </div>

            <div class="p-2 rounded-lg aspect-[16/9] col-start-1 col-end-3 lg:col-end-4 xl:col-end-7 grid gap-2 lg:gap-4 grid-cols-2 border-solid border-[1px] border-slate-500 bg-center bg-cover" style={`background-image: url(${caminantemardenubes})`}>
                <div class="h-fit col-span-1 p-2 pb-4 lg:p-4 xl:p-8 border-solid border-[1px] border-slate-500 bg-slate-500/20 backdrop-blur-sm">
                    <Heading tag="h2" class="font-sans text-xl lg:text-2xl xl:text-4xl font-bold text-white pb-4">A deep thinker</Heading>
                    <List tag="ul" class="space-y-1 font-sans text-base lg:text-lg xl:text-xl 2xl:text-2xl font-light text-white">
                      <Li>Critical, logical, analytical</Li>
                      <Li>Out-of-the-box solutions</Li>
                      <Li>Creative and non-conformist</Li>
                    </List>
                </div>
            </div>

        </article>

    </div>

</div>