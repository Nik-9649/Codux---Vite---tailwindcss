
import {
    BeakerIcon,
    BookmarkIcon,
    CakeIcon,
    ChevronDownIcon,
    CubeTransparentIcon,
    FilmIcon,
    PhoneXMarkIcon,
    LockClosedIcon,
    Bars3Icon,
    PencilIcon,
    PhotoIcon,
} from "@heroicons/react/24/outline";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";

import styles from "./app.module.css";

const features = [
    {
        name: "Vite",
        description:
            "Faster and leaner development experience for modern web projects.",
        logo: CubeTransparentIcon,
        docs: "https://vitejs.dev/",
    },
    {
        name: "React",
        description: "JavaScript library for building user interfaces.",
        logo: PencilIcon,
        docs: "https://reactjs.org/",
    },
    {
        name: "TypeScript",
        description:
            "Strongly typed programming language that builds on JavaScript.",
        logo: BookmarkIcon,
        docs: "https://www.typescriptlang.org/",
    },
    {
        name: "Tailwind with JIT",
        description: "A utility-first CSS framework packed with classes.",
        logo: PhotoIcon,
        docs: "https://tailwindcss.com/",
    },
    {
        name: "Jest",
        description: "Testing Framework with a focus on simplicity.",
        logo: QuestionMarkCircleIcon,
        docs: "https://jestjs.io/",
    },
    {
        name: "CSS Modules",
        description:
            "CSS file in which all class names and animation names are scoped locally by default.",
        logo: LockClosedIcon,
        docs: "https://github.com/css-modules/css-modules",
    },
    {
        name: "ESLint",
        description: "Find and fix problems in your JavaScript code.",
        logo: BeakerIcon,
        docs: "https://eslint.org/",
    },
    {
        name: "Prettier",
        description: "An opinionated code formatter.",
        logo: Bars3Icon,
        docs: "https://prettier.io/",
    },
    {
        name: "Husky",
        description:
            "Lint your commit messages, run tests, lint code, etc... when you commit or push.",
        logo: CakeIcon,
        docs: "https://github.com/typicode/husky",
    },
    {
        name: "Commit-lint",
        description: "Helps your team adhering to a commit convention.",
        logo: FilmIcon,
        docs: "https://github.com/conventional-changelog/commitlint",
    },
    {
        name: "Atomic design",
        description:
            "We’re not designing pages, we’re designing systems of components.",
        logo: PhoneXMarkIcon,
        docs: "https://bradfrost.com/blog/post/atomic-web-design/",
    },
    {
        name: "Absolute imports",
        description:
            "Import resource using its full path from the project’s src folder.",
        logo: ChevronDownIcon,
        docs: "https://github.com/vitejs/vite/issues/88#issuecomment-762415200",
    },
];

const App = (): JSX.Element => {
    return (
        <main className={styles.main}>
        <div className="post-component">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                  alt="Party"
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl text-white">
                Post Title: 
              </h2>
              <p className="mt-4 text-gray-600">
                <span className="text-slate-300">
                  <span className="font-bold text-white">Artist: </span>
                  Artist Name
                </span>
                <br />
                <span className="text-slate-300">Artist Email</span>
                <br />
                <span className="text-slate-300">
                  <span className="font-bold text-white">Report Reason: </span>
                  Report Reason
                </span>
                <br />
                <span className="text-slate-300">
                  <span className="font-bold text-white">Description: </span>
                  Report Description
                </span>
              </p>
              <button
                
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Dismiss
              </button>
              <button
                
                className="mt-8 inline-block rounded bg-red-600 px-12 py-3 mx-2 text-sm font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Delete Post
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
        </main>
    );
};

export default App;
