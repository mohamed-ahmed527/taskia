<template>
  <div class="parent">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-xs-12">
          <div class="seam-text">
            <h1> Seamless Team Workflow & Efficient Task Management </h1>
            <p> Do you waste time organizing sticky notes, searching your email and apps for to-dos, and figuring out what to work on first? Then you need one solution to prioritize your tasks, manage your time, and meet your deadlines. </p>
            <img src="../assets/taksia_assets/Image 6.png">
            <img src="../assets/taksia_assets/Image 9.png">
          </div>
        </div>
        <div class="col-md-6 col-xs-12">
          <div class="seam-img">
            <img src="../assets/taksia_assets/Image 7.png">
          </div>
        </div>
      </div>
      <div class="trust">
        <h2>  Trust us and feel free to try our service </h2>
        <h1> 100 000 </h1>
        <div class="photo1"> <img src="../assets/taksia_assets/michael-dam-1.png">   </div>
        <div class="photo2"> <img src="../assets/taksia_assets/azamat-zhanisov-1.png">   </div>
        <div class="photo3"> <img src="../assets/taksia_assets/michael-dam-1.png">   </div>
        <div class="photo4"> <img src="../assets/taksia_assets/azamat-zhanisov-1.png">   </div>
        <div class="photo5"> <img src="../assets/taksia_assets/azamat-zhanisov-1.png">   </div>
        <div class="photo6"> <img src="../assets/taksia_assets/michael-dam-1.png">   </div>

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
  .container{
    .row{
      .col-xs-12{
        .seam-text{
          text-align: left;
          margin-bottom: 50px;
          h1{
            margin-bottom: 50px;
            color: #1E1C24;
            font-size: 40px;
            font-weight: 600;
          }
          p{
            margin: 30px 0px;
            color: #B1AAAA;
          }
          img{
            margin-right: 20px;
          }
        }
      }
      .seam-img{
        img{
          width: 100%;
        }
      }
    }
    .trust{
      position: relative;
      margin-top: 150px;
      padding: 50px 0px;
      h2{
        position: relative;
        color: #1E1C24;
        font-weight: 600;
        font-size: 45px;
        margin-bottom: 100px;
        z-index: 100000;
      }
      h1{position: relative;
        font-family: sans-serif;
        color: #525FFB;
        font-weight: 600;
        font-size: 75px;
        margin-bottom: 70px;
        z-index: 10000;
      }
      .photo1,.photo2,.photo3,.photo4,.photo5,.photo6{
        position: absolute;
        width: 108px;
        height: 108px;
        overflow: hidden;
        border-radius: 50%;
        img{
          width: 100%;
        }
      }
      .photo1{
          width: 55px;
          height: 55px;
          top: -2%;
          left: 0%;
        }
        .photo2{
          width: 50px;
          height: 50px;
          top: 40%; 
          left: 8%;
        }
        .photo3{
          width: 60px;
          height: 60px;
         bottom: 0%;
          left: 0%; 
        }
        .photo4{
          top: 40%;
          right: 0%;
          width: 40px;
          height: 40px;
        }
        .photo5{
          top: 100%;
          right: 0%;
          width: 55px;
          height: 55px;
        }
        .photo6{
          width: 60px;
          height: 60px;
          top: 80%;
          right: 45%;
        }
    }
  }
}
@media (max-width:900px) {
  .parent .container .row .col-xs-12 .seam-text h1{
    font-size: 37px;
    margin-bottom: 30px;
  }
}
</style>
