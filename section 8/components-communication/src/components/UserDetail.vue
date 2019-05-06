<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name</button>
    </div>
</template>

<script>
  import { eventBus } from '../main.js';

  export default {
    // case sensitive csak single file componenseknél működik, jobb a case insensitive
    // úgy lehet a props-t használni, mit a sima data objectet
    // meg lehet adni hogy milyen tipusú egy prop és ha nem olyat adunk akkor kapunk egy warningot
    // Object vagy Array típusok referencia szerint kerülnek átadásra, így ha megváltoztatjuk őket az eredeti is megváltozik
    props: {
      myName: {
        type: String,
        // mindenképp meg kell adni a parentben
        required: true,
        // default értéke a propnak
        // ha a típus Object vagy Array a defaultnak egy functionnak kell lennie ami az objectel tér vissza
        default: 'Max'
      },
      resetFn: Function,
      /* myName: String */
      /* myName: [String, Array]; */
      userAge: Number
    },
    methods: {
      switchName() {
        return this.myName.split("").reverse().join("");
      },
      resetName() {
        this.myName = 'Max';
        this.$emit('nameWasReset', this.myName);
      }
    },
    created() {
      eventBus.$on('ageWasEdited', (age) => {
        this.userAge = age;
      });
    },
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
