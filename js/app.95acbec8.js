(()=>{var __webpack_modules__={8560:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";eval("\n// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js\nvar vue_runtime_esm = __webpack_require__(144);\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=template&id=1db2c449&\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('div', {\n    attrs: {\n      \"id\": \"app\"\n    }\n  }, [_c('router-view')], 1);\n};\nvar staticRenderFns = [];\n\n;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=1db2c449&prod&lang=scss&\n// extracted by mini-css-extract-plugin\n\n;// CONCATENATED MODULE: ./src/App.vue?vue&type=style&index=0&id=1db2c449&prod&lang=scss&\n\n// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js\nvar componentNormalizer = __webpack_require__(1001);\n;// CONCATENATED MODULE: ./src/App.vue\n\nvar script = {}\n;\n\n\n/* normalize component */\n\nvar component = (0,componentNormalizer/* default */.Z)(\n  script,\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ const App = (component.exports);\n// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js\nvar vue_router_esm = __webpack_require__(8345);\n;// CONCATENATED MODULE: ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/HomeView.vue?vue&type=template&id=743a449e&\nvar HomeViewvue_type_template_id_743a449e_render = function render() {\n  var _vm = this,\n    _c = _vm._self._c;\n  return _c('div', {\n    staticClass: \"container\"\n  }, [_c('div', {\n    class: `col-md-8 offset-md-2 text-center ${_vm.mainClass}`,\n    attrs: {\n      \"id\": \"mainwrap\"\n    }\n  }, [_c('img', {\n    attrs: {\n      \"id\": \"xmasimg\",\n      \"src\": _vm.imgSrc\n    }\n  }), _vm.sleepsTo ? _c('div', {\n    staticClass: \"sleep-number\",\n    attrs: {\n      \"id\": \"sleeps\"\n    }\n  }, [_vm._v(_vm._s(_vm.sleepsTo))]) : _vm._e(), _c('div', {\n    staticClass: \"sleep-text\",\n    attrs: {\n      \"id\": \"text\"\n    }\n  }, [_vm._v(_vm._s(_vm.sleepsText))]), _c('div', {\n    staticClass: \"from-to-text\"\n  }, [_vm._v(\" \" + _vm._s(_vm.$t('pageHomeFrom', {\n    from: _vm.from\n  })) + \" \")]), _c('div', {\n    staticClass: \"from-to-text\"\n  }, [_vm._v(\" \" + _vm._s(_vm.$t('pageHomeTo', {\n    to: _vm.to\n  })) + \" \")])])]);\n};\nvar HomeViewvue_type_template_id_743a449e_staticRenderFns = [];\n\n// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js\nvar es_array_push = __webpack_require__(7658);\n// EXTERNAL MODULE: ./node_modules/vue-i18n/dist/vue-i18n.esm.js\nvar vue_i18n_esm = __webpack_require__(7152);\n// EXTERNAL MODULE: ./src/plugins/i18n/de_DE.json\nvar de_DE = __webpack_require__(7980);\n// EXTERNAL MODULE: ./src/plugins/i18n/en_GB.json\nvar en_GB = __webpack_require__(8034);\n// EXTERNAL MODULE: ./src/plugins/i18n/zh_CN.json\nvar zh_CN = __webpack_require__(9051);\n;// CONCATENATED MODULE: ./src/plugins/i18n.js\n\n\n\n\n\n\nvue_runtime_esm/* default.use */.ZP.use(vue_i18n_esm/* default */.Z);\nconst messages = {\n  en_GB: en_GB,\n  de_DE: de_DE,\n  zh_CH: zh_CN\n};\nconst i18n = new vue_i18n_esm/* default */.Z({\n  locale: 'en_GB',\n  fallbackLocale: 'en_GB',\n  messages: messages\n});\nconst loadedLanguages = ['en_GB'];\nfunction setI18nLanguage(lang) {\n  i18n.locale = lang;\n  let htmlTag = lang;\n  const underscoreIndex = lang.indexOf('_');\n  if (underscoreIndex !== -1) {\n    htmlTag = lang.substring(0, underscoreIndex);\n  }\n  document.querySelector('html').setAttribute('lang', htmlTag);\n  return lang;\n}\nfunction loadLanguageAsync(lang) {\n  // If the same language\n  if (i18n.locale === lang) {\n    return Promise.resolve(setI18nLanguage(lang));\n  }\n\n  // If the language was already loaded\n  if (loadedLanguages.includes(lang)) {\n    return Promise.resolve(setI18nLanguage(lang));\n  }\n\n  // If the language hasn't been loaded yet\n  return __webpack_require__(8420)(`./${lang}.json`).then(messages => {\n    i18n.setLocaleMessage(lang, messages.default);\n    loadedLanguages.push(lang);\n    return setI18nLanguage(lang);\n  });\n}\n;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/views/HomeView.vue?vue&type=script&lang=js&\n\n/* harmony default export */ const HomeViewvue_type_script_lang_js_ = ({\n  data: function () {\n    return {\n      mainClass: null,\n      sleepsTo: 0,\n      imgs: ['snowman-120px.png', 'firestove-120px.png', 'bell-120px.png', 'cookie-120px.png', 'christmasstar-120px.png', 'candy-120px.png', 'ribbon-120px.png', 'stick-120px.png', 'christmas-tree-120px.png', 'rocket-120px.png', 'rudolph-120px.png', 'santacart-120px.png', 'calendarchristmas-120px.png', 'sinterclaus-120px.png'],\n      img: null\n    };\n  },\n  computed: {\n    listFormatter: function () {\n      return new Intl.ListFormat(this.locale.substring(0, 2), {\n        style: 'short',\n        type: 'conjunction'\n      });\n    },\n    imgSrc: function () {\n      if (this.img) {\n        return __webpack_require__(5459)(`./${this.imgs[this.img]}`);\n      } else {\n        return null;\n      }\n    },\n    sleepsText: function () {\n      return this.$tc('pageHomeSleeps', this.sleepsTo);\n    },\n    from: function () {\n      if (this.$route.query && this.$route.query.from) {\n        return this.listFormatter.format(this.toArray(this.$route.query.from));\n      } else {\n        return this.listFormatter.format(['?']);\n      }\n    },\n    to: function () {\n      if (this.$route.query && this.$route.query.to) {\n        return this.listFormatter.format(this.toArray(this.$route.query.to));\n      } else {\n        return this.listFormatter.format(['?']);\n      }\n    },\n    locale: function () {\n      if (this.$route.query && this.$route.query.locale) {\n        return this.$route.query.locale;\n      } else {\n        return 'en_GB';\n      }\n    }\n  },\n  watch: {\n    locale: function (newValue) {\n      loadLanguageAsync(newValue);\n    }\n  },\n  methods: {\n    toArray: function (value) {\n      if (Array.isArray(value)) {\n        return value;\n      } else if (value) {\n        return [value];\n      } else {\n        return [];\n      }\n    }\n  },\n  mounted: function () {\n    loadLanguageAsync(this.locale);\n    const monthDaysUntil = [359, 328, 300, 269, 239, 208, 178, 147, 116, 86, 55, 25];\n    const today = new Date();\n\n    // add a day to Jan and Feb if a leap year\n    let isLeap = new Date(today.getYear(), 1, 29).getMonth() === 1;\n    if (today.getMonth() === 11 && today.getDate() > 25) {\n      isLeap = new Date(today.getYear() + 1, 1, 29).getMonth() === 1;\n    }\n    if (isLeap) {\n      monthDaysUntil[0] = 360;\n      monthDaysUntil[1] = 329;\n    }\n\n    // set the bg\n    if (today.getMonth() === 11) {\n      this.mainClass = 'christmas-bg';\n    } else {\n      this.mainClass = 'notxmas-bg';\n    }\n\n    // set the sleeps to Xmas\n    if (today.getMonth() === 11 && today.getDate() > 25) {\n      this.img = 13;\n      this.sleepsTo = 31 - today.getDate() + monthDaysUntil[0];\n    } else {\n      this.sleepsTo = monthDaysUntil[today.getMonth()] - today.getDate();\n      this.img = today.getMonth();\n    }\n\n    // if ITS CHRISTMAS!!!!\n    if (this.sleepsTo === 0) {\n      this.img = 12;\n    }\n  }\n});\n;// CONCATENATED MODULE: ./src/views/HomeView.vue?vue&type=script&lang=js&\n /* harmony default export */ const views_HomeViewvue_type_script_lang_js_ = (HomeViewvue_type_script_lang_js_); \n;// CONCATENATED MODULE: ./src/views/HomeView.vue\n\n\n\n\n\n/* normalize component */\n;\nvar HomeView_component = (0,componentNormalizer/* default */.Z)(\n  views_HomeViewvue_type_script_lang_js_,\n  HomeViewvue_type_template_id_743a449e_render,\n  HomeViewvue_type_template_id_743a449e_staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ const HomeView = (HomeView_component.exports);\n;// CONCATENATED MODULE: ./src/router/index.js\n\n\n\nvue_runtime_esm/* default.use */.ZP.use(vue_router_esm/* default */.ZP);\nconst routes = [{\n  path: '/',\n  name: 'home',\n  component: HomeView\n}];\nconst router = new vue_router_esm/* default */.ZP({\n  routes\n});\n/* harmony default export */ const src_router = (router);\n;// CONCATENATED MODULE: ./src/main.js\n\n\n\n\nvue_runtime_esm/* default.config.productionTip */.ZP.config.productionTip = false;\nnew vue_runtime_esm/* default */.ZP({\n  router: src_router,\n  i18n: i18n,\n  render: h => h(App)\n}).$mount('#app');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVMsR0FBRyxzQ0FBVTtBQUMxQixFQUFFLHNDQUFNO0FBQ1IsRUFBRSw0Q0FBTTtBQUNSLEVBQUUscURBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtDQUFlLGtCQUFTOztBQ2xCSDtBQUNhO0FBQ1M7QUFFM0MzQyx1Q0FBTyxDQUFDNEMsOEJBQVMsQ0FBQztBQUVsQixNQUFNRSxNQUFNLEdBQUcsQ0FDYjtFQUNFQyxJQUFJLEVBQUUsR0FBRztFQUNUQyxJQUFJLEVBQUUsTUFBTTtFQUNaQyxTQUFTLEVBQUVKLFFBQVFBO0FBQ3JCLENBQUMsQ0FDRjtBQUVELE1BQU1LLE1BQU0sR0FBRyxJQUFJTiw4QkFBUyxDQUFDO0VBQzNCRTtBQUNGLENBQUMsQ0FBQztBQUVGLGlEQUFlSSxNQUFNLEU7O0FDbEJBO0FBQ007QUFDRTtBQUNXO0FBRXhDbEQseUVBQXdCLEdBQUcsS0FBSztBQUVoQyxJQUFJQSwrQkFBRyxDQUFDO0VBQ05rRCxNQUFNO0VBQ054QyxJQUFJO0VBQ0o1QixNQUFNLEVBQUV3RSxDQUFDLElBQUlBLENBQUMsQ0FBQ0gsR0FBRztBQUNwQixDQUFDLENBQUMsQ0FBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NocmlzdG1hcy8uL3NyYy9BcHAudnVlPzkxYTAiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLy4vc3JjL0FwcC52dWU/Y2E1NiIsIndlYnBhY2s6Ly9jaHJpc3RtYXMvLi9zcmMvQXBwLnZ1ZT8wOGU1Iiwid2VicGFjazovL2NocmlzdG1hcy8uL3NyYy9BcHAudnVlPzBlNDAiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLy4vc3JjL3ZpZXdzL0hvbWVWaWV3LnZ1ZT80M2QwIiwid2VicGFjazovL2NocmlzdG1hcy8uL3NyYy9wbHVnaW5zL2kxOG4uanM/ZGViMiIsIndlYnBhY2s6Ly9jaHJpc3RtYXMvc3JjL3ZpZXdzL0hvbWVWaWV3LnZ1ZT85NTg0Iiwid2VicGFjazovL2NocmlzdG1hcy8uL3NyYy92aWV3cy9Ib21lVmlldy52dWU/MmEwNyIsIndlYnBhY2s6Ly9jaHJpc3RtYXMvLi9zcmMvdmlld3MvSG9tZVZpZXcudnVlP2FhZTIiLCJ3ZWJwYWNrOi8vY2hyaXN0bWFzLy4vc3JjL3JvdXRlci9pbmRleC5qcz81YWE0Iiwid2VicGFjazovL2NocmlzdG1hcy8uL3NyYy9tYWluLmpzP2ZiZWEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpe3ZhciBfdm09dGhpcyxfYz1fdm0uX3NlbGYuX2M7cmV0dXJuIF9jKCdkaXYnLHthdHRyczp7XCJpZFwiOlwiYXBwXCJ9fSxbX2MoJ3JvdXRlci12aWV3JyldLDEpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/Y2xvbmVkUnVsZVNldC0yMi51c2VbMF0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMjIudXNlWzFdIS4uL25vZGVfbW9kdWxlcy9AdnVlL3Z1ZS1sb2FkZXItdjE1L2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtMjIudXNlWzJdIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0yMi51c2VbM10hLi4vbm9kZV9tb2R1bGVzL0B2dWUvdnVlLWxvYWRlci12MTUvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWRiMmM0NDkmcHJvZCZsYW5nPXNjc3MmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWRiMmM0NDkmXCJcbnZhciBzY3JpcHQgPSB7fVxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWRiMmM0NDkmcHJvZCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9AdnVlL3Z1ZS1sb2FkZXItdjE1L2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKXt2YXIgX3ZtPXRoaXMsX2M9X3ZtLl9zZWxmLl9jO3JldHVybiBfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjb250YWluZXJcIn0sW19jKCdkaXYnLHtjbGFzczpgY29sLW1kLTggb2Zmc2V0LW1kLTIgdGV4dC1jZW50ZXIgJHtfdm0ubWFpbkNsYXNzfWAsYXR0cnM6e1wiaWRcIjpcIm1haW53cmFwXCJ9fSxbX2MoJ2ltZycse2F0dHJzOntcImlkXCI6XCJ4bWFzaW1nXCIsXCJzcmNcIjpfdm0uaW1nU3JjfX0pLChfdm0uc2xlZXBzVG8pP19jKCdkaXYnLHtzdGF0aWNDbGFzczpcInNsZWVwLW51bWJlclwiLGF0dHJzOntcImlkXCI6XCJzbGVlcHNcIn19LFtfdm0uX3YoX3ZtLl9zKF92bS5zbGVlcHNUbykpXSk6X3ZtLl9lKCksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwic2xlZXAtdGV4dFwiLGF0dHJzOntcImlkXCI6XCJ0ZXh0XCJ9fSxbX3ZtLl92KF92bS5fcyhfdm0uc2xlZXBzVGV4dCkpXSksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiZnJvbS10by10ZXh0XCJ9LFtfdm0uX3YoXCIgXCIrX3ZtLl9zKF92bS4kdCgncGFnZUhvbWVGcm9tJywgeyBmcm9tOiBfdm0uZnJvbSB9KSkrXCIgXCIpXSksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiZnJvbS10by10ZXh0XCJ9LFtfdm0uX3YoXCIgXCIrX3ZtLl9zKF92bS4kdCgncGFnZUhvbWVUbycsIHsgdG86IF92bS50byB9KSkrXCIgXCIpXSldKV0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFZ1ZUkxOG4gZnJvbSAndnVlLWkxOG4nXG5cbmltcG9ydCBkZURFIGZyb20gJ0AvcGx1Z2lucy9pMThuL2RlX0RFLmpzb24nXG5pbXBvcnQgZW5HQiBmcm9tICdAL3BsdWdpbnMvaTE4bi9lbl9HQi5qc29uJ1xuaW1wb3J0IHpoQ04gZnJvbSAnQC9wbHVnaW5zL2kxOG4vemhfQ04uanNvbidcblxuVnVlLnVzZShWdWVJMThuKVxuXG5jb25zdCBtZXNzYWdlcyA9IHtcbiAgZW5fR0I6IGVuR0IsXG4gIGRlX0RFOiBkZURFLFxuICB6aF9DSDogemhDTlxufVxuXG5leHBvcnQgY29uc3QgaTE4biA9IG5ldyBWdWVJMThuKHtcbiAgbG9jYWxlOiAnZW5fR0InLFxuICBmYWxsYmFja0xvY2FsZTogJ2VuX0dCJyxcbiAgbWVzc2FnZXM6IG1lc3NhZ2VzXG59KVxuXG5jb25zdCBsb2FkZWRMYW5ndWFnZXMgPSBbJ2VuX0dCJ11cblxuZnVuY3Rpb24gc2V0STE4bkxhbmd1YWdlIChsYW5nKSB7XG4gIGkxOG4ubG9jYWxlID0gbGFuZ1xuXG4gIGxldCBodG1sVGFnID0gbGFuZ1xuICBjb25zdCB1bmRlcnNjb3JlSW5kZXggPSBsYW5nLmluZGV4T2YoJ18nKVxuICBpZiAodW5kZXJzY29yZUluZGV4ICE9PSAtMSkge1xuICAgIGh0bWxUYWcgPSBsYW5nLnN1YnN0cmluZygwLCB1bmRlcnNjb3JlSW5kZXgpXG4gIH1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLnNldEF0dHJpYnV0ZSgnbGFuZycsIGh0bWxUYWcpXG4gIHJldHVybiBsYW5nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTGFuZ3VhZ2VBc3luYyAobGFuZykge1xuICAvLyBJZiB0aGUgc2FtZSBsYW5ndWFnZVxuICBpZiAoaTE4bi5sb2NhbGUgPT09IGxhbmcpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNldEkxOG5MYW5ndWFnZShsYW5nKSlcbiAgfVxuXG4gIC8vIElmIHRoZSBsYW5ndWFnZSB3YXMgYWxyZWFkeSBsb2FkZWRcbiAgaWYgKGxvYWRlZExhbmd1YWdlcy5pbmNsdWRlcyhsYW5nKSkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2V0STE4bkxhbmd1YWdlKGxhbmcpKVxuICB9XG5cbiAgLy8gSWYgdGhlIGxhbmd1YWdlIGhhc24ndCBiZWVuIGxvYWRlZCB5ZXRcbiAgcmV0dXJuIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImxhbmctW3JlcXVlc3RdXCIgKi9gQC9wbHVnaW5zL2kxOG4vJHtsYW5nfS5qc29uYCkudGhlbihtZXNzYWdlcyA9PiB7XG4gICAgaTE4bi5zZXRMb2NhbGVNZXNzYWdlKGxhbmcsIG1lc3NhZ2VzLmRlZmF1bHQpXG4gICAgbG9hZGVkTGFuZ3VhZ2VzLnB1c2gobGFuZylcbiAgICByZXR1cm4gc2V0STE4bkxhbmd1YWdlKGxhbmcpXG4gIH0pXG59XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8ZGl2IGlkPVwibWFpbndyYXBcIiA6Y2xhc3M9XCJgY29sLW1kLTggb2Zmc2V0LW1kLTIgdGV4dC1jZW50ZXIgJHttYWluQ2xhc3N9YFwiPlxuICAgICAgPGltZyBpZD1cInhtYXNpbWdcIiA6c3JjPVwiaW1nU3JjXCIgLz5cbiAgICAgIDxkaXYgaWQ9XCJzbGVlcHNcIiBjbGFzcz1cInNsZWVwLW51bWJlclwiIHYtaWY9XCJzbGVlcHNUb1wiPnt7IHNsZWVwc1RvIH19PC9kaXY+XG4gICAgICA8ZGl2IGlkPVwidGV4dFwiIGNsYXNzPVwic2xlZXAtdGV4dFwiPnt7IHNsZWVwc1RleHQgfX08L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImZyb20tdG8tdGV4dFwiPlxuICAgICAgICB7eyAkdCgncGFnZUhvbWVGcm9tJywgeyBmcm9tOiBmcm9tIH0pIH19XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmcm9tLXRvLXRleHRcIj5cbiAgICAgICAge3sgJHQoJ3BhZ2VIb21lVG8nLCB7IHRvOiB0byB9KSB9fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGxvYWRMYW5ndWFnZUFzeW5jIH0gZnJvbSAnQC9wbHVnaW5zL2kxOG4nXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWFpbkNsYXNzOiBudWxsLFxuICAgICAgc2xlZXBzVG86IDAsXG4gICAgICBpbWdzOiBbJ3Nub3dtYW4tMTIwcHgucG5nJywgJ2ZpcmVzdG92ZS0xMjBweC5wbmcnLCAnYmVsbC0xMjBweC5wbmcnLCAnY29va2llLTEyMHB4LnBuZycsICdjaHJpc3RtYXNzdGFyLTEyMHB4LnBuZycsICdjYW5keS0xMjBweC5wbmcnLCAncmliYm9uLTEyMHB4LnBuZycsICdzdGljay0xMjBweC5wbmcnLCAnY2hyaXN0bWFzLXRyZWUtMTIwcHgucG5nJywgJ3JvY2tldC0xMjBweC5wbmcnLCAncnVkb2xwaC0xMjBweC5wbmcnLCAnc2FudGFjYXJ0LTEyMHB4LnBuZycsICdjYWxlbmRhcmNocmlzdG1hcy0xMjBweC5wbmcnLCAnc2ludGVyY2xhdXMtMTIwcHgucG5nJ10sXG4gICAgICBpbWc6IG51bGxcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgbGlzdEZvcm1hdHRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG5ldyBJbnRsLkxpc3RGb3JtYXQodGhpcy5sb2NhbGUuc3Vic3RyaW5nKDAsIDIpLCB7IHN0eWxlOiAnc2hvcnQnLCB0eXBlOiAnY29uanVuY3Rpb24nIH0pXG4gICAgfSxcbiAgICBpbWdTcmM6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLmltZykge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShgQC9hc3NldHMvaW1nLyR7dGhpcy5pbWdzW3RoaXMuaW1nXX1gKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICB9LFxuICAgIHNsZWVwc1RleHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiR0YygncGFnZUhvbWVTbGVlcHMnLCB0aGlzLnNsZWVwc1RvKVxuICAgIH0sXG4gICAgZnJvbTogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMuJHJvdXRlLnF1ZXJ5ICYmIHRoaXMuJHJvdXRlLnF1ZXJ5LmZyb20pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdEZvcm1hdHRlci5mb3JtYXQodGhpcy50b0FycmF5KHRoaXMuJHJvdXRlLnF1ZXJ5LmZyb20pKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdEZvcm1hdHRlci5mb3JtYXQoWyc/J10pXG4gICAgICB9XG4gICAgfSxcbiAgICB0bzogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMuJHJvdXRlLnF1ZXJ5ICYmIHRoaXMuJHJvdXRlLnF1ZXJ5LnRvKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3RGb3JtYXR0ZXIuZm9ybWF0KHRoaXMudG9BcnJheSh0aGlzLiRyb3V0ZS5xdWVyeS50bykpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0Rm9ybWF0dGVyLmZvcm1hdChbJz8nXSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGxvY2FsZTogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMuJHJvdXRlLnF1ZXJ5ICYmIHRoaXMuJHJvdXRlLnF1ZXJ5LmxvY2FsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy4kcm91dGUucXVlcnkubG9jYWxlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ2VuX0dCJ1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBsb2NhbGU6IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgbG9hZExhbmd1YWdlQXN5bmMobmV3VmFsdWUpXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgdG9BcnJheTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBbdmFsdWVdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gW11cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICBsb2FkTGFuZ3VhZ2VBc3luYyh0aGlzLmxvY2FsZSlcblxuICAgIGNvbnN0IG1vbnRoRGF5c1VudGlsID0gWzM1OSwgMzI4LCAzMDAsIDI2OSwgMjM5LCAyMDgsIDE3OCwgMTQ3LCAxMTYsIDg2LCA1NSwgMjVdXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpXG5cbiAgICAvLyBhZGQgYSBkYXkgdG8gSmFuIGFuZCBGZWIgaWYgYSBsZWFwIHllYXJcbiAgICBsZXQgaXNMZWFwID0gbmV3IERhdGUodG9kYXkuZ2V0WWVhcigpLCAxLCAyOSkuZ2V0TW9udGgoKSA9PT0gMVxuICAgIGlmICh0b2RheS5nZXRNb250aCgpID09PSAxMSAmJiB0b2RheS5nZXREYXRlKCkgPiAyNSkge1xuICAgICAgaXNMZWFwID0gbmV3IERhdGUoKHRvZGF5LmdldFllYXIoKSArIDEpLCAxLCAyOSkuZ2V0TW9udGgoKSA9PT0gMVxuICAgIH1cbiAgICBpZiAoaXNMZWFwKSB7XG4gICAgICBtb250aERheXNVbnRpbFswXSA9IDM2MFxuICAgICAgbW9udGhEYXlzVW50aWxbMV0gPSAzMjlcbiAgICB9XG5cbiAgICAvLyBzZXQgdGhlIGJnXG4gICAgaWYgKHRvZGF5LmdldE1vbnRoKCkgPT09IDExKSB7XG4gICAgICB0aGlzLm1haW5DbGFzcyA9ICdjaHJpc3RtYXMtYmcnXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWFpbkNsYXNzID0gJ25vdHhtYXMtYmcnXG4gICAgfVxuXG4gICAgLy8gc2V0IHRoZSBzbGVlcHMgdG8gWG1hc1xuICAgIGlmICh0b2RheS5nZXRNb250aCgpID09PSAxMSAmJiB0b2RheS5nZXREYXRlKCkgPiAyNSkge1xuICAgICAgdGhpcy5pbWcgPSAxM1xuICAgICAgdGhpcy5zbGVlcHNUbyA9ICgzMSAtIHRvZGF5LmdldERhdGUoKSkgKyBtb250aERheXNVbnRpbFswXVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNsZWVwc1RvID0gbW9udGhEYXlzVW50aWxbdG9kYXkuZ2V0TW9udGgoKV0gLSB0b2RheS5nZXREYXRlKClcbiAgICAgIHRoaXMuaW1nID0gdG9kYXkuZ2V0TW9udGgoKVxuICAgIH1cblxuICAgIC8vIGlmIElUUyBDSFJJU1RNQVMhISEhXG4gICAgaWYgKHRoaXMuc2xlZXBzVG8gPT09IDApIHtcbiAgICAgIHRoaXMuaW1nID0gMTJcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdGhyZWFkLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL0B2dWUvdnVlLWxvYWRlci12MTUvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RocmVhZC1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNDAudXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9AdnVlL3Z1ZS1sb2FkZXItdjE1L2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZVZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Ib21lVmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzQzYTQ0OWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSG9tZVZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Ib21lVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9AdnVlL3Z1ZS1sb2FkZXItdjE1L2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd2dWUtcm91dGVyJ1xuaW1wb3J0IEhvbWVWaWV3IGZyb20gJ0Avdmlld3MvSG9tZVZpZXcudnVlJ1xuXG5WdWUudXNlKFZ1ZVJvdXRlcilcblxuY29uc3Qgcm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJy8nLFxuICAgIG5hbWU6ICdob21lJyxcbiAgICBjb21wb25lbnQ6IEhvbWVWaWV3XG4gIH1cbl1cblxuY29uc3Qgcm91dGVyID0gbmV3IFZ1ZVJvdXRlcih7XG4gIHJvdXRlc1xufSlcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyXG4iLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBBcHAgZnJvbSAnQC9BcHAudnVlJ1xuaW1wb3J0IHJvdXRlciBmcm9tICdAL3JvdXRlcidcbmltcG9ydCB7IGkxOG4gfSBmcm9tICdAL3BsdWdpbnMvaTE4bi5qcydcblxuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2VcblxubmV3IFZ1ZSh7XG4gIHJvdXRlcixcbiAgaTE4bixcbiAgcmVuZGVyOiBoID0+IGgoQXBwKVxufSkuJG1vdW50KCcjYXBwJylcbiJdLCJuYW1lcyI6WyJyZW5kZXIiLCJfdm0iLCJfYyIsIl9zZWxmIiwiYXR0cnMiLCJzdGF0aWNSZW5kZXJGbnMiLCJzdGF0aWNDbGFzcyIsImNsYXNzIiwibWFpbkNsYXNzIiwiaW1nU3JjIiwic2xlZXBzVG8iLCJfdiIsIl9zIiwiX2UiLCJzbGVlcHNUZXh0IiwiJHQiLCJmcm9tIiwidG8iLCJWdWUiLCJWdWVJMThuIiwiZGVERSIsImVuR0IiLCJ6aENOIiwidXNlIiwibWVzc2FnZXMiLCJlbl9HQiIsImRlX0RFIiwiemhfQ0giLCJpMThuIiwibG9jYWxlIiwiZmFsbGJhY2tMb2NhbGUiLCJsb2FkZWRMYW5ndWFnZXMiLCJzZXRJMThuTGFuZ3VhZ2UiLCJsYW5nIiwiaHRtbFRhZyIsInVuZGVyc2NvcmVJbmRleCIsImluZGV4T2YiLCJzdWJzdHJpbmciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJsb2FkTGFuZ3VhZ2VBc3luYyIsIlByb21pc2UiLCJyZXNvbHZlIiwiaW5jbHVkZXMiLCJ0aGVuIiwic2V0TG9jYWxlTWVzc2FnZSIsImRlZmF1bHQiLCJwdXNoIiwiZGF0YSIsImltZ3MiLCJpbWciLCJjb21wdXRlZCIsImxpc3RGb3JtYXR0ZXIiLCJzdHlsZSIsInR5cGUiLCJ3YXRjaCIsIm1ldGhvZHMiLCJ0b0FycmF5IiwibW91bnRlZCIsImlzTGVhcCIsIm1vbnRoRGF5c1VudGlsIiwiVnVlUm91dGVyIiwiSG9tZVZpZXciLCJyb3V0ZXMiLCJwYXRoIiwibmFtZSIsImNvbXBvbmVudCIsInJvdXRlciIsIkFwcCIsImNvbmZpZyIsInByb2R1Y3Rpb25UaXAiLCJoIiwiJG1vdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8560\n")},5459:(e,n,s)=>{var Q={"./bell-120px.png":8049,"./calendarchristmas-120px.png":4719,"./candy-120px.png":2563,"./christmas-tree-120px.png":1626,"./christmasstar-120px.png":8122,"./cookie-120px.png":343,"./firestove-120px.png":1316,"./ribbon-120px.png":1919,"./rocket-120px.png":3136,"./rudolph-120px.png":1753,"./santacart-120px.png":9231,"./sinterclaus-120px.png":5245,"./snowman-120px.png":338,"./stick-120px.png":4199};function t(e){var n=c(e);return s(n)}function c(e){if(!s.o(Q,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return Q[e]}t.keys=function(){return Object.keys(Q)},t.resolve=c,e.exports=t,t.id=5459},8420:(e,n,s)=>{var Q={"./de_DE.json":7980,"./en_GB.json":8034,"./zh_CN.json":9051};function t(e){return Promise.resolve().then((()=>{if(!s.o(Q,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}var t=Q[e];return s.t(t,19)}))}t.keys=()=>Object.keys(Q),t.id=8420,e.exports=t},8049:(e,n,s)=>{"use strict";e.exports=s.p+"img/bell-120px.7a8ed987.png"},4719:(e,n,s)=>{"use strict";e.exports=s.p+"img/calendarchristmas-120px.e120619a.png"},2563:(e,n,s)=>{"use strict";e.exports=s.p+"img/candy-120px.2b33ca6a.png"},1626:(e,n,s)=>{"use strict";e.exports=s.p+"img/christmas-tree-120px.e9e3e044.png"},8122:(e,n,s)=>{"use strict";e.exports=s.p+"img/christmasstar-120px.0fd4d379.png"},343:(e,n,s)=>{"use strict";e.exports=s.p+"img/cookie-120px.387bbfa5.png"},1316:(e,n,s)=>{"use strict";e.exports=s.p+"img/firestove-120px.81da7af3.png"},1919:(e,n,s)=>{"use strict";e.exports=s.p+"img/ribbon-120px.6277f293.png"},3136:(e,n,s)=>{"use strict";e.exports=s.p+"img/rocket-120px.30c46d53.png"},1753:(e,n,s)=>{"use strict";e.exports=s.p+"img/rudolph-120px.cb35d27c.png"},9231:(e,n,s)=>{"use strict";e.exports=s.p+"img/santacart-120px.9a717b61.png"},5245:(e,n,s)=>{"use strict";e.exports=s.p+"img/sinterclaus-120px.2428279e.png"},338:(e,n,s)=>{"use strict";e.exports=s.p+"img/snowman-120px.d93e0ef1.png"},4199:(e,n,s)=>{"use strict";e.exports=s.p+"img/stick-120px.fa90d239.png"},7980:e=>{"use strict";e.exports=JSON.parse('{"pageHomeFrom":"Von {from}","pageHomeSleeps":"Ho, Ho, Ho, es ist Weihnachten!!! | mal schlafen bis Weihnachten. | mal schlafen bis Weihnachten.","pageHomeTo":"An {to}"}')},8034:e=>{"use strict";e.exports=JSON.parse('{"pageHomeFrom":"From {from}","pageHomeSleeps":"Ho, Ho, Ho, it\'s Christmas!!! | Sleep Until Christmas. | Sleeps Until Christmas.","pageHomeTo":"To {to}"}')},9051:e=>{"use strict";e.exports=JSON.parse('{"pageHomeFrom":"从 {from}","pageHomeSleeps":"Ho, Ho, Ho, 今天是圣诞节!!! | 睡到圣诞节。 | 睡到圣诞节。","pageHomeTo":"至 {to}"}')}},__webpack_module_cache__={};function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;var s=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](s,s.exports,__webpack_require__),s.exports}__webpack_require__.m=__webpack_modules__,(()=>{var e=[];__webpack_require__.O=(n,s,Q,t)=>{if(!s){var c=1/0;for(i=0;i<e.length;i++){for(var[s,Q,t]=e[i],l=!0,F=0;F<s.length;F++)(!1&t||c>=t)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](s[F])))?s.splice(F--,1):(l=!1,t<c&&(c=t));if(l){e.splice(i--,1);var B=Q();void 0!==B&&(n=B)}}return n}t=t||0;for(var i=e.length;i>0&&e[i-1][2]>t;i--)e[i]=e[i-1];e[i]=[s,Q,t]}})(),(()=>{var e,n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;__webpack_require__.t=function(s,Q){if(1&Q&&(s=this(s)),8&Q)return s;if("object"===typeof s&&s){if(4&Q&&s.__esModule)return s;if(16&Q&&"function"===typeof s.then)return s}var t=Object.create(null);__webpack_require__.r(t);var c={};e=e||[null,n({}),n([]),n(n)];for(var l=2&Q&&s;"object"==typeof l&&!~e.indexOf(l);l=n(l))Object.getOwnPropertyNames(l).forEach((e=>c[e]=()=>s[e]));return c["default"]=()=>s,__webpack_require__.d(t,c),t}})(),(()=>{__webpack_require__.d=(e,n)=>{for(var s in n)__webpack_require__.o(n,s)&&!__webpack_require__.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}})(),(()=>{__webpack_require__.e=()=>Promise.resolve()})(),(()=>{__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{__webpack_require__.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n)})(),(()=>{__webpack_require__.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{__webpack_require__.p=""})(),(()=>{var e={143:0};__webpack_require__.O.j=n=>0===e[n];var n=(n,s)=>{var Q,t,[c,l,F]=s,B=0;if(c.some((n=>0!==e[n]))){for(Q in l)__webpack_require__.o(l,Q)&&(__webpack_require__.m[Q]=l[Q]);if(F)var i=F(__webpack_require__)}for(n&&n(s);B<c.length;B++)t=c[B],__webpack_require__.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return __webpack_require__.O(i)},s=self["webpackChunkchristmas"]=self["webpackChunkchristmas"]||[];s.forEach(n.bind(null,0)),s.push=n.bind(null,s.push.bind(s))})();var __webpack_exports__=__webpack_require__.O(void 0,[998],(()=>__webpack_require__(8560)));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();