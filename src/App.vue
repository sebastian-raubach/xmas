<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Mountains+of+Christmas:wght@400;700&display=swap');

body {
  min-height: 100vh;
  font-family: 'Mountains of Christmas', cursive;
  color: #ffffff;
  background: #C0392B;
  background: repeating-linear-gradient(
    45deg,
    #E74C3C,
    #E74C3C 10px,
    #C0392B 10px,
    #C0392B 20px
  );
}

.christmas-bg {
  background: repeating-linear-gradient(
    45deg,
    #2ECC71,
    #2ECC71 10px,
    #27AE60 10px,
    #27AE60 20px
  );
}

.notxmas-bg {
  background: repeating-linear-gradient(
  45deg,
  #34495E,
  #34495E 10px,
  #2C3E50 10px,
  #2C3E50 20px
);
}

#mainwrap {
  padding-top: 10px;
  padding-bottom: 60px;
}

.img-center {
    display: block;
    margin-left: auto;
    margin-right: auto;
 }

.sleep-number {
  font-family: 'Montserrat', sans-serif;
  line-height: 1;
}

@media (min-width: 768px) {
  .sleep-number {
    font-size: 300px;
  }
}

@media (max-width: 767px) {
  .sleep-number {
    font-size: 150px;
  }
}

@media (max-width: 480px) {
  .sleep-number {
    font-size: 90px;
  }
}

@media (min-width: 481px) {
  .from-to-text {
    font-size: 40px;
  }
  .sleep-text {
    font-size: 80px;
  }
}

@media (max-width: 480px) {
  .from-to-text {
    font-size: 30px;
  }
  .sleep-text {
    font-size: 40px;
  }
}

@media (max-width: 480px) {
  #xmasimg {
    max-width: 200px;
  }
}
</style>
