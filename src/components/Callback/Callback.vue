<template>
  <section class="callback">
    <h3 class="callback__title g-bold">
      <img src="@/assets/images/svg/callback.svg">Нужна<br>консультация?
    </h3>
    <p class="callback__description">
      Мы с радостью ответим на Ваши вопросы и произведём расчет стоимости услуг, а также подготовим индивидуальное коммерческое предложение.
    </p>
    <btn :className="['g-link', 'g-btn', 'g-btn-orange']" text="Заказать звонок" />
  </section>
</template>

<script src="./Callback.js"></script>
<style lang="less">
@import "../../assets/css/settings.less";
@import "./Callback.less";
</style>
