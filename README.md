# Vuejs-thailand-address-typeahead

This project fork from
[jquery.Thailand.js](https://github.com/earthchie/jquery.Thailand.js)

## Demo
TODO

## Dependencies
- [thai-address-database](https://github.com/Sellsuki/thai-address-database)

## Installation
```
$ yarn add vue-thailand-address-typeahead
```

## Usage
```js
<template>
  <form>
    <div>
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
</template>
<script>
  import { ADDRESS_FIELD } from 'vue-thailand-address-typeahead/src/const'
  import Typeahead from 'vue-thailand-address-typeahead/src/Typeahead'

  export default {
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
```

## Todo

 - [ ] Storybook
 - [ ] Test
 - [ ] Add code coverage report

## License
WTFPL 2.0 http://www.wtfpl.net/
