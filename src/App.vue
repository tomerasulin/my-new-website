<template>
  <router-view />
</template>

<style>
/* Utility Classes */
.d_none {
  display: none;
}

.d_flex {
  display: flex;
}

.container {
  max-width: 1170px;
  margin: auto;
}

a {
  color: white;
}

a:hover {
  color: #db5461;
}

.loading {
  font-size: 2rem;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Raleway', Arial, Helvetica, sans-serif;
  color: white;
  background: linear-gradient(116.82deg,
      #3d5467 0%,
      #1a232b 99.99%,
      #333333 100%);
}

</style>