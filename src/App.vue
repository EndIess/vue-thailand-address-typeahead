<template>
  <div id="app">
    <form action="#">
      <div class="row">
        <typeahead class="form-group" :label="this.addressField.district.name" :type="this.addressField.district.type" :query="this.form.address.district"
        v-on:fillAddress="fillAddress" />
        <typeahead class="form-group" :label="this.addressField.city.name" :type="this.addressField.city.type"
        :query="this.form.address.city"
        v-on:fillAddress="fillAddress" />
        <typeahead class="form-group" :label="this.addressField.province.name" :type="this.addressField.province.type" :query="this.form.address.province"
        v-on:fillAddress="fillAddress" />
        <typeahead class="form-group" :label="this.addressField.postcode.name" :type="this.addressField.postcode.type" :query="this.form.address.postcode"
        v-on:fillAddress="fillAddress" />
      </div>
    </form>
  </div>
</template>

<script>
import { ADDRESS_FIELD } from './const'
import Typeahead from './Typeahead'

export default {
  name: 'app',
  data () {
    return {
      addressField: ADDRESS_FIELD,
      form: {
        address: {
          line1: '',
          line2: '',
          district: '',
          city: '',
          province: '',
          postcode: ''
        }
      }
    }
  },
  methods: {
    fillAddress (district, amphoe, province, zipcode) {
      this.form.address.district = district
      this.form.address.city = amphoe
      this.form.address.province = province
      this.form.address.postcode = zipcode
    }
  },
  components: {
    Typeahead
  }
}
</script>

<style>
</style>
