# Aplos Dictionary


**Aplos Dictionary** is a simple sveltekit app that can be used to learn, pronounce, and look up new words.
It is a Dictionary app that mixes IPA (_International Phonetic Alphabet_) and word list.

# project struture explains it self:
```
.
├── package.json
├── package-lock.json
├── postcss.config.js
├── prisma
│   └── schema.prisma
├── README.md
├── src
│   ├── app.css
│   ├── app.html
│   ├── hooks.server.js
│   ├── index.test.js
│   ├── lib
│   │   ├── assets
│   │   │   ├── audioicon.svg
│   │   │   ├── audio.svg
│   │   │   ├── confirmation.html
│   │   │   ├── Icon.svg
│   │   │   ├── Vector.svg
│   │   │   └── wordalchemy.svg
│   │   ├── components
│   │   │   ├── Body
│   │   │   │   ├── Searchbar.svelte
│   │   │   │   ├── tableipa.svelte
│   │   │   │   └── __test__
│   │   │   │       └── search.test.js
│   │   │   ├── Header
│   │   │   │   ├── AuthButtons.svelte
│   │   │   │   ├── Mobileheader.svelte
│   │   │   │   ├── Navbar.svelte
│   │   │   │   └── Theme
│   │   │   │       └── SelecTheme.svelte
│   │   │   ├── Result
│   │   │   │   └── Meaningresult
│   │   │   │       └── Meaning.svelte
│   │   │   └── UI
│   │   │       ├── cat.json
│   │   │       ├── error404.json
│   │   │       ├── humberger.svelte
│   │   │       ├── Moon.svelte
│   │   │       └── Sun.svelte
│   │   ├── data.js
│   │   ├── index.js
│   │   └── server
│   │       ├── auth
│   │       │   └── utils.js
│   │       └── prisma.js
│   └── routes
│       ├── api
│       │   ├── auth
│       │   │   ├── logout
│       │   │   │   └── +server.js
│       │   │   └── nothing
│       │   ├── collections
│       │   │   └── +server.js
│       │   └── words
│       │       └── +server.js
│       ├── collections
│       │   ├── +page.server.js
│       │   └── +page.svelte
│       ├── confirm
│       │   ├── error
│       │   │   └── +page.svelte
│       │   ├── success
│       │   │   └── +page.svelte
│       │   └── [verificationToken]
│       │       └── +page.server.js
│       ├── dashboard
│       │   ├── admins
│       │   │   ├── +page.server.js
│       │   │   └── +page.svelte
│       │   ├── +page.server.js
│       │   └── +page.svelte
│       ├── Definition
│       │   └── [word]
│       │       ├── +error.svelte
│       │       ├── funchelper.js
│       │       ├── +page.server.js
│       │       └── +page.svelte
│       ├── +error.svelte
│       ├── forgotpass
│       │   ├── error
│       │   │   └── +page.svelte
│       │   ├── +page.server.js
│       │   ├── +page.svelte
│       │   └── [resetPassToken]
│       │       ├── +page.server.js
│       │       └── +page.svelte
│       ├── Ipa
│       │   └── +page.svelte
│       ├── +layout.server.js
│       ├── +layout.svelte
│       ├── login
│       │   ├── +page.server.js
│       │   └── +page.svelte
│       ├── +page.svelte
│       ├── register
│       │   ├── +page.server.js
│       │   └── +page.svelte
│       └── test
│           ├── +page.server.js
│           └── +page.svelte
├── static
│   ├── favicon.png
│   └── Icon.svg
├── svelte.config.js
├── tailwind.config.js
└── vite.config.js
```

# Contributors

<a href="https://github.com/div-styl/WordAlchemy/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=div-styl/WordAlchemy" />
</a>
