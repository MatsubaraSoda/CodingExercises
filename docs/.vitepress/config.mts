import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "松原苏打的刷题本",
  description: "",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'LeetCode', link: 'LeetCode/1480. 一维数组的动态和.md' }
    ],

    sidebar: [
      {
        text: 'LeetCode',
        items: [
          { text: '1480. 一维数组的动态和', link: 'LeetCode/1480. 一维数组的动态和.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MatsubaraSoda/CodingExercises' }
    ]
  }
})
