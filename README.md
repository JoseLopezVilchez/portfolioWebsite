# Greetings!

Here's my soon-to-be personal web portfolio. It's not done yet, since I bit off far more than I could chew (as I usually do) and ended up reaching the deadline without having anything (visual) to show for my effort. I have progressed a great deal, but it's all in code right now. So come have a look!

## To check out this project

You'll need to have node installed. Once you do, navigate to the root folder and run the following:

```bash
npm i
npm run dev
```

There's currently nothing to show, however, so don't be alarmed when all it shows is a blank page.

## Building

To create a production version, run:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

However, this will have to wait for now.

## My goal

The idea is being able to create a sort of 'galaxy' background without resorting to a gif, with a ring (using gradients and round borders) and a series of elements orbiting along. Plus, I wanted to try out Svelte, thinking it'd help get this done thanks to its reactive nature. And sure, it does help, but **damn** is it also a pain in the ass to figure out how to properly structure a project to prevent it from becoming a huge spaghetti mess. And just using it in general is, too, despite being honestly quite easy. But anything becomes harder when you don't know yet how it works.

So yeah, rather than try to go for something easy and which I already knew how to make, I got myself into this mess.

## Project structure

Focus on src and what's within it. Ignore the rest, it's just scaffolding, config files, framework files, libraries and so on.

- **lib**
    - **components** : contains Svelte components for atomic design.
        - **ElypseUI.svelte** : component which creates, stores in global and keeps track of an Elypse class instance. Data received by the instance is used to make sure the visuals and logic match.
        - **ElypseUIOrbitContainer.svelte** : component which, when placed inside an ElypseUI, stores itself in its associated Elypse instance. Its intended use is to wrap whatever I need to follow an elyptic trajectory.
    - **stores** : contains data read by other files.
        - **global.ts** : global data. Duh! Holds the screen dimensions and the list of all Elypse instances created by ElypseUI components.
    - **utils** : contains logic used by other files.
        - **Axes.ts** : a very simple type. Didn't use simple objects because I **believe** they can't be passed by reference.
        - **Elypse.ts** : the engine behind elyptical movement calculations. It stores references to ElypseUIOrbitContainer instances in a list, and keeps track of their individual speed and position (angle).
    - **index.ts** : scaffolding, used to hold import statements.
- **routes** : contains the visible structure of a webpage. Each folder has its own +page file which can be used for routing. I didn't need to add any, however.
    - **+layout.svelte** : contains whichever elements should be shared by all pages. I've added a listener there to keep track of the user's window size for calculations on other areas.
    - **+page.svelte** : contains the page itself. Currently empty.
- **app.css** : scaffolding.
- **app.d.ts** : scaffolding.
- **app.html** : scaffolding.

## About me

Name's Jose Lopez Vilchez, born and raised in Linares. Got myself into programming after the pandemic, and grew fond of it. I enjoy roleplaying, cuisine (or, rather, what it produces ;P), philosophy, history, economy, politics and whatever piques my interest (of which there's a **LOT** of stuff). I've also taken an interest in blockchain technologies, and do intend to eventually get into the DeFi and Fintech sector.

Nietzschean, libertarian, objectivist, materialist, anti-idealist & realist.

## Hard skills

- C1 English (certified by Cambridge School, 199 points with 200 being C2 level)
- Java
- Kotlin
    - Android development
- Swift
    - iOS development
- Html & CSS
    - Sass
    - Tailwind
    - Flowbite (library)
- JavaScript
    - TypeScript
    - Svelte
    - React (a little)
- PHP
    - Laravel (still learning)
    - Symfony (lowest level, just started, it's being used by an old browser game I volunteered in. Hopefully I have some spare time to actually get to it!)
- Rust (begun learning in the summer of 2024, currently on pause, far too little time)
    - Slint (UI library)
- MySQL/MariaDB
- Git
- Linux (switched from Windows to Debian on my own PC just to get used to this OS and handling the CLI)
    - KVM/Qemu
- Fairly decent at architecture, among others.

## Soft skills

- Out-of-the-box thinking
- Critical thinking
- Logical and analytical skills
- Self-teaching
- Adaptability
- Creativity
- Confidence
- Initiative
- Problem-solving skills
- Passion
- Growth mentality
- Resilience
- Orderliness

## Quirks

- I don't drink, don't smoke, don't do drugs, do diet and exercise.
- Thirst for improvement, learning and intellectual stimulation. It's not a positive trait so much as it is a quirk, as it's **double-edged**. This repo is proof of such. Keep this in mind, as it can make me an insanely good pick for some projects, and a poor choice for others.
- Most people's topics tend to bore me.
- Admittedly, I'm not the best at **designing** aesthetically pleasing graphical user interfaces, though I can code them just fine. I'm slowly getting better, however. 

## Other repos

- [Old android homework](https://github.com/JoseLopezVilchez/EjerciciosAndroid1erAnyo), and my first contact with code which wasn't mine. Learning to develop on android was both a challenge and very enriching.
- [Php homework](https://github.com/JoseLopezVilchez/dam2curso_php).
- [Various old homework](https://github.com/JoseLopezVilchez/RepoEjercicios1erAnyo).
- [A small react project](https://github.com/JoseLopezVilchez/subidaNotaReact), sort of a first contact. Self taught! Our professor only gave a brief lesson a week or two after.
- [My progress in Rustlings](https://github.com/JoseLopezVilchez/rustlings_personal).
- Group projects:
    - [An unfinished mess](https://github.com/JoseLopezVilchez/TrabajoFinalMarcasYBBDD/tree/main), due to having had to work with zero documentation from our peers in the backend and a portion of it also being nonexistent.