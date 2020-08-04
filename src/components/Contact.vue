<template>
<transition name="slide-fade">
  <div class="con">
    <h2 id="contact"> { CONTACT } </h2>
    <div class="contact">
      <div class="main-title">
        <!-- <h1 class="title-title">intuit</h1> -->
      <form action="">
        <h3>Let's get in touch</h3>
  <!--       <p>One account for everything Intuit, including Mint. </p>
        <a href="">Learn more</a> -->
        <div class="input-group">
          <!-- <label for="name">Name</label> -->
          <input type="text" name="name" id="" placeholder="name">
          <!-- <span>Standard call, messaging or data rates may apply.</span> -->
        </div>
        <div class="input-group">
          <!-- <label for="email">Email address</label> -->
          <input type="text" name="email" id="" placeholder="e-mail address">
        </div>
        <div class="input-group">
          <!-- <label for="message">Message</label> -->
          <textarea name="message" rows="3" placeholder="message"></textarea>
        </div>
        <div id="create">
          SEND <svg class="send" viewBox="0 -75 479.9181 479">
                <path d="m135.984375 240.460938 61.519531-42.480469-53.519531-53.519531zm0 0" />
                <path d="m479.585938 5.898438c-.082032 0 0-.078126-.082032-.078126-.078125 0-.078125-.160156-.160156-.242187-.136719-.472656-.324219-.925781-.558594-1.359375-.191406-.257812-.40625-.5-.640625-.71875-.078125-.160156-.238281-.320312-.320312-.480469-.628907-.644531-1.359375-1.1875-2.160157-1.601562-.078124-.078125-.078124-.078125-.160156-.078125-.742187-.398438-1.558594-.640625-2.398437-.722656-.175781-.070313-.371094-.097657-.558594-.078126-.160156 0-.402344-.078124-.5625-.078124h-464c-3.238281-.015626-6.15625 1.953124-7.359375 4.957031-1.253906 2.980469-.5898438 6.421875 1.679688 8.722656l102.242187 102.238281 23.597656 125.519532c.648438 3.984374 4.214844 6.824218 8.242188 6.5625 1.472656-.128907 2.882812-.65625 4.078125-1.523438l.082031.082031 56-38.640625 117.757813 117.761719c1.515624 1.492187 3.554687 2.324219 5.679687 2.320313 3.085937.089843 5.921875-1.675782 7.199219-4.480469l152-312c0-.082031 0-.082031.082031-.160157.019531-.136718.046875-.269531.078125-.402343.308594-.710938.5-1.464844.5625-2.238281v-.640626c.050781-.890624-.058594-1.785156-.320312-2.640624zm-334.242188 218.320312 5.203125-61.917969 34.480469 34.558594zm310.242188-200.320312-137.839844 282.960937-159.679688-159.601563zm-314.640626 113.199218c-2.804687 1.105469-4.730468 3.714844-4.960937 6.722656l-3.039063 36.957032-11.761718-62.636719 215.683594-62.320313zm-26.640624-33.597656-87.039063-87.039062h388.160156zm0 0"/>
              </svg>
          <!-- <img class="email" src="./images/email.svg" alt=""> -->
        </div>
      </form>
    </div>
    </div>
  </div>
  </transition>
</template>

<script>
  export default {
    name: 'Touch'
  }
</script>

<style>
  /* Contact */

  .contact {
    justify-items: center;
    margin-bottom: 50px;
  }

  .contact img {
    width: 30px;
  }

  .contact p,a {
    margin: 0;
    padding: 0;
  }

  .contact a {
    text-decoration: none;
    color: rgb(26, 119, 212);
  }

  .contact p {
    color: rgb(109, 109, 109);
  }

  .main-title {
    display: grid;
    grid-gap: 10px;
    justify-items: center;
    margin-top: 50px;
  }
  .title-title {
    padding-top: 2rem;
  }

  form {
    display: grid;
    text-align: center;
    justify-items: center;
    justify-content: center;
    background-color:transparent;
    margin: 0 auto;
    font-size: 14px;
    padding: 50px 0;
    border: 3px solid var(--black);
    border-radius: 5px;
  }

  .input-group {
    display: grid;
    text-align: left;
    width: 310px;
    padding: 1rem;
    text-align: center;
  }

  .input-group input, textarea {
    font-family: 'Ubuntu', sans-serif;
    font-size: 18px;
    text-align: center;
    border: 0;
    background-color: transparent;
    border-bottom: 2px solid var(--black);
  }

  .input-group input:hover, input:focus, textarea:hover, textarea:focus {
    border-bottom: 2px solid var(--yellow);
    display: initial;
    outline: none;
  }

  ::placeholder {
    color: var(--black);
    opacity: .8; /* Firefox */
  }

  .contact h3 {
    font-size: 22px;
  }

  label {
    margin-bottom: .5rem;
    color: rgb(109, 109, 109);
  }

  #create {
    align-content: center;
    justify-content: center;
    font-family: 'Ubuntu', sans-serif;
    text-transform: uppercase;
    background: transparent;
    border: 0;
    padding: 10px 20px;
    cursor: pointer;
    transition: all ease-in-out 0.2s;
    font-size: 16px;
    display: flex;
    grid-gap: 10px;
    grid-template-columns: auto auto;
    margin-top: 1rem;
    color: var(--black);
    border-radius: 5px;
    height: 45px;
    width: 310px; 
    font-size: 16px;
    vertical-align: sub;
    fill: var(--black);
  }

  #create:hover {
    -webkit-box-shadow: -1px 1px 12px 5px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 1px 12px 5px rgba(0,0,0,0.75);
    box-shadow: -1px 1px 12px 5px rgba(0,0,0,0.75);
    transform: scale(0.9);
  /*   color: #1a6fb0;
    fill: #1a6fb0; */
    border-radius: 5px;
  }

  .send {
    width: 35px;
    align-self: center;
  }

  .send:hover {
    width: 35px;
  }

  .email {
    justify-self: left;
  }

  .form-footer {
    margin: 3rem 1rem 1rem 1rem;
    font-size: .8rem;
    font-style: italic;
  }

  .bot {
    margin-top: 3rem;
    font-size: .6rem;
  }
</style>