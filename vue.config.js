module.exports = {
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