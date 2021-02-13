<template>
  <div class="parent">
    <div class="container">
      <h1> Featured Service that We Provide </h1>
      <div class="row">
        <div class="col-md-4 col-xs-12">
          <div class="service1">
            <img  src="../assets/taksia_assets/day77-pocket-knief.png">
            <h1>Keep tasks in one place</h1>
            <p> Save time, avoid losing work and information, delegate, and track tasks to stay on schedule </p>
          </div>
        </div>
        <div class="col-md-4 col-xs-12">
          <div  style="color:black ; background-color:#E9F0FF" class="service1">
            <img  src="../assets/taksia_assets/day78-wallet.png">
            <h1>Keep tasks in one place</h1>
            <p> Save time, avoid losing work and information, delegate, and track tasks to stay on schedule </p>
          </div>
        </div>
        <div class="col-md-4 col-xs-12">
          <div style="color:black ; background-color:#FFE7AA" class="service1">
            <img  src="../assets/taksia_assets/day80-tea.png">
            <h1>Keep tasks in one place</h1>
            <p> Save time, avoid losing work and information, delegate, and track tasks to stay on schedule </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name:"parent"
}
</script>
<style lang="scss" scoped>
$grey:#B1AAAA;
$blue1:#525FFB;
.parent{
  margin-top: 150px;
  .container{
    >h1{
      margin-bottom: 50px;
      color: #1E1C24;
      font-size: 42px;
      font-weight: 600;
    }
    .row{
      .col-xs-12{
        .service1{
          margin-bottom: 50px;
          padding: 10px 40px;
          background-color: $blue1;
          text-align: center;
          color: white;
          font-family: system-ui;
          border-radius: 15px;

          img{
            display: block;
            width: 90%;
            margin: auto;
          }
          h1{
            font-size: 35px;
            font-weight: 600;
            margin-bottom: 25px;
          }
          p{
            
          }
        }
      }
    }
  }
}
@media (max-width:900px) {
  .parent .container > h1{
    font-size: 39px;
  }
  .parent .container .row .col-xs-12 .service1 h1{
    font-size: 32px;
  }
}
</style>
