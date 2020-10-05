const { default: svelte } = require('rollup-plugin-svelte');
const sveltePreprocess=require('svelte-preprocess');
module.exports.preprocess=sveltePreprocess({
  scss:true,
  postcss:{
    plugins:[require('autoprefixer')]
  }
})