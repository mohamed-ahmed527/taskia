<template>
  <div class="parent">
    <div class="container">
      <nav>
        <div class="logo">
          <p> Taskia </p>
        </div>
        <button> Try Free </button>
      </nav>
      <header>
        <div class="row">
          <div class="col-md-6 col-xs-12">
            <div class="header-text">
              <h1>Task management and lists Tool</h1>
              <p>We believe that designing products and services in close
                partnership with our clients is the only way to have a real
                impact on their business. 
              </p>
              <form>
                <input placeholder="Name@company.com" type="text">
                <button> Try it free </button>
              </form>

            </div>
          </div>
          <div class="col-md-6 col-xs-12">
            <div class="header-img">
              <img src="../assets/taksia_assets/Image5.png">
            </div>
          </div>
        </div>
      </header>
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

  .container{
    nav{
      overflow: hidden;
      padding: 5px 0px;
      .logo{
        float: left;
        p{
          font-size: 28px;
          font-weight: 600;
          color: $blue1;
        }
      }
      >button{
        font-size: 17px;
        float: right;
        background: transparent;
        padding: 3px 20px;
        border-radius: 13px;
        color: $blue1;
        border: 1px solid $blue1;
        margin-top:5px;
      }
    }
    header{
      padding-top: 50px ;
      .row{
        .col-xs-12{
          .header-text{
            margin-bottom: 50px;
            text-align: left;
            h1{
              font-size: 48px;
              font-weight: 700;
              letter-spacing: 2px;
            }
            p{
              margin: 30px 0px;
              color: $grey;
            }
            input{
              width: 58%;
              margin-right: 20px;
              padding: 5px 10px;
              outline-style: none;
              border-radius: 10px;
              border: 1px solid $grey;
            }
            button{
              font-weight: 700;
              font-size: 17px;
              border: 0px;
              border-radius:24px;
              padding: 6px 25px;
              color: white;
              background-color: $blue1;
            }
          }
          .header-img{
            img{
              width: 100%;
            }
          }
        }
      }
    }
  }
}
@media (max-width:900px) {
  .parent .container header .row .col-xs-12 .header-text input{
    display: block;
    width: 70%;
    margin-bottom: 20px;
  }
  .parent .container header .row .col-xs-12 .header-text h1{
    font-size:40px;
  }
}
</style>
