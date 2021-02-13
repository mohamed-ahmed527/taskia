<template>
  <div class="parent">
    <div class="container">
      <h1> Get better work done </h1>
      <p> See why millions of people across 195 <br>  countries use Dash.</p>
      <input placeholder="Name@Company.com">
      <button> Try it free </button>
    </div>
  </div>
</template>
<script>
export default {
  name:"parent"
}
</script>
<style lang="scss" scoped>
.parent{
  padding: 50px;
  margin-top: 150px;
  margin-bottom:10px;
  .container{
      h1{
      color: #1E1C24;
      font-size: 42px;
      font-weight: 600;
    }
    p{
      margin: 30px 0px;
      color: #B1AAAA;
    }
    input{
      width: 30%;
      margin-right: 20px;
      padding: 5px 10px;
      outline-style: none;
      border-radius: 10px;
      border: 1px solid #B1AAAA;
    }
    button{
      font-weight: 700;
      font-size: 17px;
      border: 0px;
      border-radius: 24px;
      padding: 6px 25px;
      color: white;
      background-color: #525FFB;
    }
  }
}
@media (max-width:900px) {
  .parent .container input{
    display: block;
    width: 70%;
    margin: auto;
    margin-bottom: 20px;
  }
  .parent{
    padding: 0px;
  }
  .parent .container .trust h2{
    font-size: 37px;
  }
  .parent .container .trust h1{
    font-size: 65px;
  }
}
</style>
