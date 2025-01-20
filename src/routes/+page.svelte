<script>
    import { Heading, Img, Li, List, Tooltip } from "flowbite-svelte";
</script>

<div class="w-full grid gap-x-2 lg:gap-x-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-12">

    <div class="bg-transparent grid gap-x-2 lg:gap-x-4 grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 col-start-1 col-end-3 md:col-start-2 md:col-end-4 lg:col-start-3 lg:col-end-7 xl:col-end-11">

        <article class="col-span-full h-screen mb-4 lg:mb-8 flex justify-center">

            <div class="flex flex-col h-fit justify-self-center self-center">
                <h1 class="text-center font-sans text-4xl lg:text-6xl xl:text-8xl font-bold text-white mb-2">José López Vílchez</h1>
                <sub class="text-center font-sans text-base lg:text-lg xl:text-xl font-light text-white mb-8 lg:mb-16">FullStack Developer</sub>
            </div>

        </article>

        <article class="col-span-full w-full mb-4 lg:mb-16 flex flex-col bg-purple-600/20 rounded-lg p-4 lg:p-8">

            <div class="w-full mb-8 lg:mb-16">
                <h1 class="text-center font-sans text-4xl lg:text-6xl xl:text-8xl font-bold text-white">Skills</h1>
                <p class="text-center font-sans text-base lg:text-lg xl:text-xl font-light text-white">Most were taught to me, though there's a few I taught myself. After a certain point, you can draw parallels from what you already know to hasten the learning process of new technologies.</p>
            </div>

            <div class="w-full grid gap-2 lg:gap-4 grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 auto-rows-auto bg-violet-950/80 rounded-lg">

                <img src="src/resources/english-logo.png" class="rounded-lg aspect-square p-2" alt=""/>
                <Tooltip class="p-4">C1 English level, 199 points grade, certified by Cambridge Language Assessment</Tooltip>
                <img src="src/resources/html-logo.png" class="rounded-lg aspect-square p-2" alt=""/>
                <Tooltip class="p-4">Html</Tooltip>
                <img src="src/resources/css-logo.png" class="rounded-lg aspect-square p-2" alt=""/>
                <Tooltip class="p-4">Css</Tooltip>
                <img src="src/resources/tailwind-logo.png" class="rounded-lg aspect-square p-2" alt=""/>
                <Tooltip class="p-4">Tailwind</Tooltip>
                <img src="src/resources/flowbite-logo.png" class="rounded-lg aspect-square p-2" alt=""/>
                <Tooltip class="p-4">Flowbite, a UI component library</Tooltip>
                <img src="src/resources/javascript-logo.png" class="rounded-lg aspect-square p-2" alt=""/>
                <Tooltip class="p-4">JavaScript</Tooltip>
                <img src="src/resources/typescript-logo.png" class="rounded-lg aspect-square p-2" alt=""/>
                <Tooltip class="p-4">TypeScript</Tooltip>
                <img src="src/resources/svelte-logo.png" class="rounded-lg aspect-square p-2" alt=""/>
                <Tooltip class="p-4">Svelte</Tooltip>
                <img src="src/resources/react-logo.png" class="rounded-lg aspect-square p-2" alt=""/>
                <Tooltip class="p-4">React</Tooltip>
                <img src="src/resources/java-logo.png" class="rounded-lg aspect-square p-4" alt=""/>
                <Tooltip class="p-4">Java</Tooltip>
                <img src="src/resources/kotlin-logo.png" class="rounded-lg aspect-square p-2" alt=""/>
                <Tooltip class="p-4">Kotlin</Tooltip>
                <img src="src/resources/android-logo.png" class="rounded-lg aspect-square p-2" alt=""/>
                <Tooltip class="p-4">Android development</Tooltip>
                <img src="src/resources/swift-logo.png" class="rounded-lg aspect-square p-2" alt=""/>
                <Tooltip class="p-4">Swift</Tooltip>
                <img src="src/resources/ios-logo.png" class="rounded-lg aspect-square p-4" alt=""/>
                <Tooltip class="p-4">iOS development</Tooltip>
                <img src="src/resources/php-logo.png" class="rounded-lg aspect-square p-2" alt=""/>
                <Tooltip class="p-4">Php</Tooltip>
                <img src="src/resources/laravel-logo.png" class="rounded-lg aspect-square p-2" alt=""/>
                <Tooltip class="p-4">Laravel</Tooltip>
                <img src="src/resources/rust-logo.png" class="rounded-lg aspect-square p-2" alt=""/>
                <Tooltip class="p-4">Rust</Tooltip>
                <img src="src/resources/slint-logo.png" class="rounded-lg aspect-square p-2" alt=""/>
                <Tooltip class="p-4">Slint, a UI library for Rust</Tooltip>
                <img src="src/resources/mysql-logo.png" class="rounded-lg aspect-square p-2" alt=""/>
                <Tooltip class="p-4">MySQL</Tooltip>
                <img src="src/resources/mariadb-logo.png" class="rounded-lg aspect-square p-2" alt=""/>
                <Tooltip class="p-4">MariaDB</Tooltip>
                <img src="src/resources/debian-logo.png" class="rounded-lg aspect-square p-4" alt=""/>
                <Tooltip class="p-4">Debian, a linux distro</Tooltip>
                <img src="src/resources/qemu-logo.png" class="rounded-lg aspect-square p-2" alt=""/>
                <Tooltip class="p-4">QEMU/KVM, a virtualization program</Tooltip>
                <img src="src/resources/git-logo.png" class="rounded-lg aspect-square p-2" alt=""/>
                <Tooltip class="p-4">Git</Tooltip>
                                
            </div>

        </article>

        <article class="col-span-full grid gap-2 lg:gap-4 grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 mb-4 lg:mb-16">

            <div class="rounded-lg aspect-[16/9] col-start-1 col-end-3 lg:col-end-4 xl:col-end-7 grid gap-2 lg:gap-4 grid-cols-2 p-2 bg-fuchsia-900/20">
                <div class="col-span-1 p-2">
                    <Heading tag="h2" class="font-sans text-xl lg:text-2xl xl:text-4xl font-bold text-white pb-4">Technical</Heading>
                    <List tag="ul" class="space-y-1 font-sans text-base lg:text-lg xl:text-xl font-light text-white">
                      <Li>Orderly, structured and legible</Li>
                      <Li>Committed to code reusability and safety</Li>
                      <Li>Architecturally-minded</Li>
                    </List>
                </div>
                <div class="rounded-lg col-span-1 bg-center bg-cover bg-[url('src/resources/thethinker.jpg')]"></div>
            </div>

            <div class="rounded-lg aspect-[16/9] col-start-1 col-end-3 lg:col-start-2 lg:col-end-5 xl:col-start-3 xl:col-end-9 grid gap-2 p-2 lg:gap-4 grid-cols-2 bg-purple-600/20">
                <div class="rounded-lg col-span-1 bg-center bg-cover bg-[url('src/resources/napoleoncrossing.jpg')]"></div>
                <div class="col-span-1 p-2">
                    <Heading tag="h2" class="font-sans text-xl lg:text-2xl xl:text-4xl font-bold text-white pb-4">Self-driven</Heading>
                    <List tag="ul" class="space-y-1 font-sans text-base lg:text-lg xl:text-xl font-light text-white">
                      <Li>Capable of self-teaching</Li>
                      <Li>Confident and resilient</Li>
                      <Li>Passionate, with a growth mentality</Li>
                    </List>
                </div>
            </div>

            <div class="rounded-lg aspect-[16/9] col-start-1 col-end-3 lg:col-end-4 xl:col-end-7 grid gap-2 lg:gap-4 grid-cols-2 p-2 bg-fuchsia-900/20">
                <div class="col-span-1 p-2">
                    <Heading tag="h2" class="font-sans text-xl lg:text-2xl xl:text-4xl font-bold text-white pb-4">A deep thinker</Heading>
                    <List tag="ul" class="space-y-1 font-sans text-base lg:text-lg xl:text-xl font-light text-white">
                      <Li>Critical, logical, analytical</Li>
                      <Li>Out-of-the-box solutions</Li>
                      <Li>Creative and non-conformist</Li>
                    </List>
                </div>
                <div class="rounded-lg col-span-1 bg-center bg-cover bg-[url('src/resources/nietzsche.jpg')]"></div>
            </div>

        </article>

    </div>

</div>