<template>
  <div class="container-fluid">
    <h3 class="bg-primary text-white text-center mt-2 p-2">{{ message }}</h3>
    <table class="table table-sm table-striped table-bordered">
      <tr><th>Index</th><th>Nazwa</th><th>Akcje</th></tr>
      <tr v-for="(name, index) in names" v-bind:key="name">
        <td>{{index}}</td>
        <td>{{name}}</td>
        <td>
          <button class="btn btn-sm bg-primary text-white"
                  v-on="buttonEvents"
                  v-bind:data-name="name">
            Wybierz
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
  name: 'MyComponent',
  data: function () {
    return {
      buttonEvents: {
        click: this.handleClick,
        mousemove: this.handleMouseEvent,
        mouseleave: this.handleMouseEvent
      },
      counter: 0,
      message: "Gotowy",
      names: ["Kamizelka ratunkowa", "Kajak", "Piłka nożna", "Stadion"]
    }
  },
  methods: {
    handleClick($event) {
      let name = $event.target.dataset.name;
      this.message = `Select: ${name}`;
    },
    handleMouseEvent($event) {
      let name = $event.target.dataset.name;
      if ($event.type == "mousemove") {
        this.message = `Ruch w ${name} ${this.counter++}`
      } else {
        this.counter = 0;
        this.message = "Gotowy";
      }
    }
  }
}
</script>
