 <template>
    <div class="alet_container" v-if="show">
      <section class="tip_text_container">
        <div class="tip_icon">
            <span></span>
            <span></span>
        </div>
        <p class="tip_text">{{message}}</p>
        <div class="buttontip">
          <div class="cancel" @click="cancel">取消</div>
          <div class="confirm" @click="confirm">确认</div>
          <!-- <div class="cancel" @click="handleAction('cancel')">取消</div>
          <div class="confirm" @click="handleAction('confirm')">确认</div> -->
        </div>
      </section>
    </div>
</template>

<script>
export default {
  name: 'Confirm',
  data () {
    return {
      show: false,
      message: ''
    }
  },
  methods: {
    cancel () {
      this.show = false
    },
    confirm () {
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
// 宽高
@mixin wh($width, $height) {
  width: $width;
  height: $height;
}

//字体大小，颜色
@mixin sc($size, $color) {
  font-size: $size;
  color: $color;
}

@keyframes tipMove {
  0% {
    transform: scale(1);
  }
  35% {
    transform: scale(0.8);
  }
  70% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
.alet_container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 200;
}
.tip_text_container {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -6rem;
  margin-left: -6rem;
  width: 12rem;
  animation: tipMove 0.4s;
  background-color: #fff;
  border: 1px;
  padding-top: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 0.25rem;
  .tip_icon {
    @include wh(3rem, 3rem);
    border: 0.15rem solid #f79706;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    span:nth-of-type(1) {
      @include wh(0.12rem, 1.5rem);
      background-color: #f72206;
    }
    span:nth-of-type(2) {
      @include wh(0.2rem, 0.2rem);
      border: 1px;
      border-radius: 50%;
      margin-top: 0.2rem;
      background-color: #f79706;
    }
  }
  .tip_text {
    @include sc(0.8rem, #333);
    line-height: 0.9rem;
    text-align: center;
    margin-top: 0.8rem;
    padding: 0 0.4rem;
  }
  .buttontip {
    display: flex;
    flex:1;
    justify-content: space-around;
    width: 100%;
    .cancel {
      @include sc(0.8rem, #fff);
      font-weight: bold;
      margin-top: 0.8rem;
      background-color: #e7a043;
      width: 100%;
      text-align: center;
      line-height: 1.8rem;
      border: 1px;
      border-bottom-left-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
    }
    .confirm {
      @include sc(0.8rem, #fff);
      font-weight: bold;
      margin-top: 0.8rem;
      background-color: #4cd964;
      width: 100%;
      text-align: center;
      line-height: 1.8rem;
      border: 1px;
      border-bottom-left-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
    }
  }
}
</style>
