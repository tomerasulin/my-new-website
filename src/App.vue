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

a {
  text-decoration: none;
}

main#home {
  width: 100%;
  height: 100vh;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#home>.about__me {
  text-align: center;
  width: 80%;
  line-height: 1.5rem;
}

#home>.about__me>h1 {
  margin: 20px 0 0;
  font-size: 36px;
  font-weight: 900;
  color: #db5461;
}

#home>.about__me>h3 {
  font-size: 28px;
  font-weight: 500;
}

#home>.about__me>h1,
#home>.about__me>h3 {
  font-style: normal;
  line-height: 42px;
  letter-spacing: 0.115em;
}

#home>.about__me p {
  font-weight: 100;
  font-size: 22px;
  padding: 2rem;
}

#home>.about__me img {
  border-radius: 50%;
  height: 232px;
  width: 232px;
}

.skills_projects_link {
  position: relative;
}

.skills_projects_link>a {
  text-transform: uppercase;
  color: white;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
}

.skills_projects_link>a:hover {
  color: #db5461;
  transition: all 0.5s ease-in-out;
}

.skills_projects_link>a:hover::after {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  margin: auto;
  text-align: center;
  content: '';
  width: 30px;
  height: 2px;
  background-color: #db5461;
  transition: background-color 0.5s ease-in-out;
}
</style>