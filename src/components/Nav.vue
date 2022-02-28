<script></script>
<template>
  <div>
    <nav class="nav">
      <div class="brand">
        <RouterLink to="/">
          <img src="../assets/logo.png" alt="" />
        </RouterLink>
      </div>
      <div class="menu">
        <RouterLink to="/about">metro</RouterLink>
        <RouterLink to="/about">cercania</RouterLink>
        <RouterLink to="/about">carsharing</RouterLink>
      </div>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style>
.nav {
  background-color: #091e42;
  padding: 1rem;
  margin: 0;
  display: flex;
  justify-content: space-between;
}
a {
  margin: 3rem;
  text-decoration: none;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.06em;
  text-transform: lowercase;
  color: #ffffff;
}
</style>
