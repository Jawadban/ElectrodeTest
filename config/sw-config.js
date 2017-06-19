module.exports = {
  cache: {
    cacheId: "electrodeTest",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "electrodeTest",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
