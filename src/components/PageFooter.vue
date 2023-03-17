<template>
  <div class="footer">
    <div class="footerCon">
      <div class="logo">Counter App</div>
      <div class="innerFooter">
        <h4>Designed by: Ekunola Paul ⓒ 2023</h4>
        <div class="socialMedia">
          <a href="https://www.github.com/pscon">GitHub</a>

          <a href="https://www.twitter.com/pscon">Twitter</a>

          <a href="https://www.linkedin.com/in/pscon">LinkedIn</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageFooter",
};
</script>
<style>
.footer {
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #6568f4;
  color: white;
  width: 100%;
  padding: 16px;
  margin: 0 auto;
  box-shadow: 1px 1px 3px #555;
}
.footerCon {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;
}
.logo {
  font-size: 1rem;
  font-family: secFont;
  font-weight: light;
  letter-spacing: 2px;
  margin-left: 15px;
}
.innerFooter {
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  margin-right: 15px;
}

.innerFooter h4 {
  font-family: cursive;
  font-weight: bolder;
}

.socialMedia {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  margin-right: 15px;
}
</style>
