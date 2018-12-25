import Head from 'next/head';

export default () =>
  <section>
    <style global jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,500&subset=japanese');

      html, body {
        width: 100%;
        height: 100%;
        position: relative;
      }

      html {
        font-family: 'Noto Sans JP', sans-serif;
        font-size: 10px;
        font-weight: 400;
        transition: 0.2s;
      }

      body {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        color: #37474f;
        background-color: #eceff1;
        font-size: 100%;
      }

      body > div:first-of-type {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90%;
      }

      a {
        color: #03a9f4;
        text-decoration: underline;
        transition: color 0.2s ease-in-out;
      }

      a:visited {
        color: inherit;
      }

      a:active,
      a:focus,
      a:hover {
        color: #4fc3f7;
        text-decoration: none;
      }

      section {
        display: inline-block;
        margin: 5%;
        text-align: left;
      }

      h1 {
        margin: 0;
        font-weight: 700;
        font-size: 4.8rem;
      }

      p {
        margin: 1em 0;
        font-size: 1.6rem;
      }
    `}</style>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>nagomu.me</title>
    </Head>
    <h1>nagomu.me</h1>
    <p>Ruby, JS, CSS, HTML などを書いてます。<br />
    <a href="https://twitter.com/home?status=@nagomu%20:%20">&#8594; Message (via Twitter)</a></p>
  </section>
