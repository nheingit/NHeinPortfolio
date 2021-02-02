module.exports = {
  purge: {
    enabled: !process.env.ROLLUP_WATCH,
    mode: 'all',
    content: ['./**/**/*.html', './**/**/*.svelte'],

    options: {
      whitelistPatterns: [/svelte-/],
      defaultExtractor: (content) =>
        [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Open sans', 'ui-sans-serif', 'system-ui'],
      serif: ['Merriweather', 'ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
    },
    
    extend: {
      backgroundImage: theme => ({
        "desktop-background": "url('/Desktop-Background.png')",
        "coding-computer": "url('/codingBackGround.svg')",
        "meImage": "url('/meImage.png')",
        "office-background": "url('/officeBackground.svg')"
      }),
      minHeight: theme => ({
        "screen/2": "50vh"
      }),
      maxHeight: theme => ({
        "1/2": "50%"
      }),
      height: theme => ({
        "screen-4/5": "80vh",
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      colors: {
      'true-blue': '#9ac9ff',
      'off-blue': '#3C8CA9',
    },
    },
  },
  variants: {
    extend: {
      textColor: ['visited'],
    },
  },
  plugins: [],
}
