module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/sw-library/'
  : '/',
    css: {
      loaderOptions: {
        sass: {
          additionalData: `
            @import "@/assets/scss/_font-import.scss";
            @import "@/assets/scss/_variables.scss";
            @import "@/assets/scss/_global.scss";
            `
        }
      }
    }
  }