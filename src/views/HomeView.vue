<template>
  <div class="container">
    <div id="mainwrap" :class="`col-md-8 offset-md-2 text-center ${mainClass}`">
      <img id="xmasimg" :src="imgSrc" />
      <div id="sleeps" class="sleep-number" v-if="sleepsTo">{{ sleepsTo }}</div>
      <div id="text" class="sleep-text">{{ sleepsText }}</div>

      <div class="from-to-text">
        {{ $t('pageHomeTo', { to: to }) }}
      </div>
      <div class="from-to-text">
        {{ $t('pageHomeFrom', { from: from }) }}
      </div>
    </div>
  </div>
</template>

<script>
import { loadLanguageAsync } from '@/plugins/i18n'
export default {
  data: function () {
    return {
      mainClass: null,
      sleepsTo: 0,
      imgs: ['snowman-120px.png', 'firestove-120px.png', 'bell-120px.png', 'cookie-120px.png', 'christmasstar-120px.png', 'candy-120px.png', 'ribbon-120px.png', 'stick-120px.png', 'christmas-tree-120px.png', 'rocket-120px.png', 'rudolph-120px.png', 'santacart-120px.png', 'calendarchristmas-120px.png', 'sinterclaus-120px.png'],
      img: null
    }
  },
  computed: {
    listFormatter: function () {
      return new Intl.ListFormat(this.locale.substring(0, 2), { style: 'short', type: 'conjunction' })
    },
    imgSrc: function () {
      if (this.img) {
        return require(`@/assets/img/${this.imgs[this.img]}`)
      } else {
        return null
      }
    },
    sleepsText: function () {
      return this.$tc('pageHomeSleeps', this.sleepsTo)
    },
    from: function () {
      if (this.$route.query && this.$route.query.from) {
        return this.listFormatter.format(this.toArray(this.$route.query.from))
      } else {
        return this.listFormatter.format(['?'])
      }
    },
    to: function () {
      if (this.$route.query && this.$route.query.to) {
        return this.listFormatter.format(this.toArray(this.$route.query.to))
      } else {
        return this.listFormatter.format(['?'])
      }
    },
    locale: function () {
      if (this.$route.query && this.$route.query.locale) {
        return this.$route.query.locale
      } else {
        return 'en_GB'
      }
    }
  },
  watch: {
    locale: function (newValue) {
      loadLanguageAsync(newValue)
    }
  },
  methods: {
    toArray: function (value) {
      if (Array.isArray(value)) {
        return value
      } else if (value) {
        return [value]
      } else {
        return []
      }
    }
  },
  mounted: function () {
    loadLanguageAsync(this.locale)

    const monthDaysUntil = [359, 328, 300, 269, 239, 208, 178, 147, 116, 86, 55, 25]
    const today = new Date()

    // add a day to Jan and Feb if a leap year
    let isLeap = new Date(today.getYear(), 1, 29).getMonth() === 1
    if (today.getMonth() === 11 && today.getDate() > 25) {
      isLeap = new Date((today.getYear() + 1), 1, 29).getMonth() === 1
    }
    if (isLeap) {
      monthDaysUntil[0] = 360
      monthDaysUntil[1] = 329
    }

    // set the bg
    if (today.getMonth() === 11) {
      this.mainClass = 'christmas-bg'
    } else {
      this.mainClass = 'notxmas-bg'
    }

    // set the sleeps to Xmas
    if (today.getMonth() === 11 && today.getDate() > 25) {
      this.img = 13
      this.sleepsTo = (31 - today.getDate()) + monthDaysUntil[0]
    } else {
      this.sleepsTo = monthDaysUntil[today.getMonth()] - today.getDate()
      this.img = today.getMonth()
    }

    // if ITS CHRISTMAS!!!!
    if (this.sleepsTo === 0) {
      this.img = 12
    }
  }
}
</script>
