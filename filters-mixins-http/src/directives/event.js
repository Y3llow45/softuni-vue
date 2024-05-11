import Vue from 'vue';

/* Vue.directive('event', function (el, binding) {
  console.log(binding.arg);
  el.addEventListener(binding.arg, binding.expression)
}); */

Vue.directive('event', {
  bind(el, binding) {
    el.addEventListener(binding.arg, binding.value);
  },
  unbind(el, binding) {
    el.removeEventListener(binding.arg, binding.value);
  }
});
