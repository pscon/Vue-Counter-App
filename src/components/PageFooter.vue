<template>
  <div class="footer">
    <div class="footerCon">
      <div class="logo">
        <a
          class="linkTag"
          href="https://ekunolapaul.netlify.app"
          target="_blank"
          >PSCON</a
        >
      </div>
      <div class="innerFooter">
        <h4>Designed by: Ekunola Paul ⓒ 2023</h4>
        <div class="socialMedia">
          <a href="https://www.github.com/pscon" target="_blank">GitHub</a>

          <a href="https://twitter.com/PSCON3" target="_blank"
            ><svg
              width="39"
              height="40"
              viewBox="0 0 39 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="19.5" cy="19.502" r="19.5" fill="white" />
              <path
                d="M27.633 15.98C27.646 16.155 27.646 16.329 27.646 16.503C27.646 21.828 23.593 27.964 16.186 27.964C13.904 27.964 11.784 27.303 10 26.155C10.324 26.192 10.636 26.205 10.973 26.205C12.786 26.2093 14.5476 25.6031 15.974 24.484C15.1334 24.4687 14.3186 24.1914 13.6432 23.6907C12.9679 23.19 12.4658 22.4909 12.207 21.691C12.456 21.728 12.706 21.753 12.968 21.753C13.329 21.753 13.692 21.703 14.029 21.616C13.1168 21.4318 12.2965 20.9373 11.7076 20.2166C11.1188 19.496 10.7977 18.5936 10.799 17.663V17.613C11.336 17.912 11.959 18.099 12.619 18.124C12.0661 17.7565 11.6127 17.258 11.2993 16.6727C10.986 16.0875 10.8223 15.4338 10.823 14.77C10.823 14.022 11.022 13.336 11.371 12.738C12.3831 13.983 13.6455 15.0015 15.0763 15.7276C16.5072 16.4537 18.0746 16.8712 19.677 16.953C19.615 16.653 19.577 16.342 19.577 16.03C19.5767 15.5009 19.6807 14.977 19.8831 14.4882C20.0854 13.9994 20.3821 13.5552 20.7562 13.1811C21.1303 12.8071 21.5744 12.5104 22.0632 12.308C22.5521 12.1057 23.076 12.0017 23.605 12.002C24.765 12.002 25.812 12.488 26.548 13.274C27.4498 13.0996 28.3145 12.7704 29.104 12.301C28.8034 13.2318 28.1738 14.0211 27.333 14.521C28.1328 14.4297 28.9144 14.2194 29.652 13.897C29.1011 14.7001 28.4185 15.4043 27.633 15.98Z"
                fill="#0EA8FF"
              />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/ekunola-paul-42712b1aa"
            target="_blank"
            ><svg
              width="39"
              height="39"
              viewBox="0 0 39 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="19.5" cy="19.5" r="19.5" fill="white" />
              <path
                d="M27.1111 12H12.8889C12.6531 12 12.427 12.0937 12.2603 12.2603C12.0937 12.427 12 12.6531 12 12.8889V27.1111C12 27.3469 12.0937 27.573 12.2603 27.7397C12.427 27.9064 12.6531 28 12.8889 28H27.1111C27.3469 28 27.573 27.9064 27.7397 27.7397C27.9064 27.573 28 27.3469 28 27.1111V12.8889C28 12.6531 27.9064 12.427 27.7397 12.2603C27.573 12.0937 27.3469 12 27.1111 12ZM16.7458 25.6329H14.3707V17.9973H16.7458V25.6329ZM15.5582 16.9547C15.1933 16.9547 14.8433 16.8097 14.5852 16.5516C14.3272 16.2936 14.1822 15.9436 14.1822 15.5787C14.1822 15.2137 14.3272 14.8637 14.5852 14.6057C14.8433 14.3476 15.1933 14.2027 15.5582 14.2027C15.9232 14.2027 16.2732 14.3476 16.5312 14.6057C16.7893 14.8637 16.9342 15.2137 16.9342 15.5787C16.9342 15.9436 16.7893 16.2936 16.5312 16.5516C16.2732 16.8097 15.9232 16.9547 15.5582 16.9547ZM25.6338 25.6329H23.2613V21.92C23.2613 21.0347 23.2453 19.896 22.0276 19.896C20.792 19.896 20.6044 20.8613 20.6044 21.8578V25.6338H18.2338V17.9982H20.5093V19.0418H20.5422C20.8578 18.4418 21.6329 17.8089 22.7858 17.8089C25.1893 17.8089 25.6329 19.3893 25.6329 21.4462V25.6329H25.6338Z"
                fill="#0072B1"
              />
            </svg>
          </a>
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
@media (max-width: 768px) {
  .footerCon {
    flex-direction: column;
  }
}
.logo {
  font-size: 1rem;
  font-family: cursive;
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

.linkTag {
  text-decoration: none;
  color: white;
  font-family: cursive;
  font-weight: light;
  letter-spacing: 2px;
  box-shadow: 1px 1px 3px black;
  padding: 5px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
}

.socialMedia {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  margin-right: 15px;
}
</style>
