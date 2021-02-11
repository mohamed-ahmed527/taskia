<template>
  <div class="parent">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-xs-12">
          <div class="why-img">
            <img src="../assets/taksia_assets/Image8.png"/>
          </div>
        </div>
        <div class="col-md-6 col-xs-12">
          <div class="why-text">
            <h1> Why do you need task management software? </h1>
            <p> Do you waste time organizing sticky notes, searching your email and apps for to-dos, and figuring out what to work on first? Then you need one solution to prioritize your tasks, manage your time, and meet your deadlines. </p>
            <button> Learn More </button>
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
.parent{
  margin-top: 150px;
  margin-bottom: 150px;
  .container{
    .row{
      .col-xs-12{
        .why-img{
          margin-bottom: 50px;
          img{
            display: block;
            width: 100%;
          }
        }
        .why-text{
          text-align: left;
          h1{
            margin-bottom: 50px;
            color: #1E1C24;
            font-size: 42px;
            font-weight: 600;
          }
          p{
            margin: 30px 0px;
            color: #B1AAAA;
          }
          button{
            display: block;
            font-weight: 700;
            font-size: 17px;
            border: 0px;
            border-radius: 24px;
            padding: 8px 25px;
            color: white;
            background-color: #525FFB;
          }
        }
        
      }
    }
  }
}
</style>