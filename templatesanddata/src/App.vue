<template>
  <div class="container-fluid">
    <div id="outer-element" class="bg-primary p-4 text-white h3" v-on:click="handleClick">
      Element zewnętrzny
      <div id="middle-element" class="bg-secondary p-4" v-on:click="handleClick">
        Element pośredni
        <div id="inner-element" class="bg-info  p-4"
             v-on:click="handleClick">
          Element wewnętrzny
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'MyComponent',
  methods: {
    handleClick($event) {
      console.log(`handleClick target: ${$event.target.id}`
      + ` currentTarget: ${$event.currentTarget.id}`);
    }
  }
}
</script>
