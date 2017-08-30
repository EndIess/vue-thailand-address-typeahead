<template>
  <div class="typeahead">
    <label>{{label}}</label>
    <input v-model="q" ref="input" v-on:focus="setOpen(true)" v-on:blur="setOpen(false)" class="form-control" id="district" placeholder="">
    <div class="typeahead-selector" v-bind:style="{width: this.inputWidth + 'px'}">
      <ul v-if="this.open">
        <li v-for="item in result" v-bind:key="item.district + item.amphoe" v-on:click="fillAddress(item)">
          {{item.district}} » {{item.amphoe}} » {{item.province}} » {{item.zipcode}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { searchAddressByDistrict, searchAddressByAmphoe, searchAddressByProvince, searchAddressByZipcode } from 'thai-address-database'

export default {
  name: 'Typeahead',
  props: ['label', 'type', 'query'],
  data () {
    return {
      open: false,
      q: this.query,
      inputWidth: 0
    }
  },
  watch: {
    query: function (newVal) {
      this.q = newVal
    }
  },
  computed: {
    result () {
      switch (this.type) {
      case 'd': return searchAddressByDistrict(this.q).slice(0, 5)
      case 'a': return searchAddressByAmphoe(this.q).slice(0, 5)
      case 'p': return searchAddressByProvince(this.q).slice(0, 5)
      case 'z': return searchAddressByZipcode(this.q).slice(0, 5)
      }
    }
  },
  methods: {
    fillAddress (item) {
      this.$emit('fillAddress', item.district, item.amphoe, item.province, item.zipcode)
    },
    setOpen (isOpen) {
      this.inputWidth = this.$refs.input.offsetWidth
      if (isOpen) {
        this.open = isOpen
      } else {
        setTimeout(() => {
          this.open = isOpen
        }, 400)
      }
    }
  }
}
</script>

<style scoped>
.typeahead>input:focus {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.typeahead-selector {
  position: absolute;
  z-index: 999;
}

.typeahead-selector>ul {
  width: 100%;
  border: 1px solid #eee;
  border-top: none;
  padding: 0;
  margin: 0;
}

.typeahead-selector li {
  padding: 10px 5px;
  background: #fff;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  list-style-type: none;
}

.typeahead-selector li:hover {
  background: #f5f5f5;
}
</style>
