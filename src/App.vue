<template>
  <div class="container">
    <h0><b>New Student</b></h0>
    <div class="columns">

      <!--Image --> 
      <div class="column">
        <img src="../src/assets/student.png" />
      </div>
      
      <!-- Start of first column --> 
      <div class="column">
        <section>
            <b-field label="Name">
                <b-input v-model="name"></b-input>
            </b-field>

            <b-field label="Phone Number">
                <b-input type="PhoneNumber"
                    value="">
                </b-input>
            </b-field>

            <b-field label="Source">
                <b-input type="Source"
                    value="">
                </b-input>
            </b-field>
            <b-field label="Native Language (Auto-complete)">
                <b-autocomplete
                    v-model="NativeLanguage"
                    ref="autocomplete"
                    :data="filteredDataArray"
                    placeholder="e.g. Bengali"
                    @select="option => selected = option">
                    <template slot="header">
                        <a @click="showAddLanguage">
                            <span> Add new... </span>
                        </a> 
                    </template>
                    <template slot="empty">No results for {{name}}</template>
                </b-autocomplete>
            </b-field>
            
    
            <b-field label="Notes">
                <b-input maxlength="200" type="textarea" placeholder="Optional"></b-input>
            </b-field>

        </section>
      </div>
      <!-- Start of second column --> 
      <div class="column is-half">
        <section>
            <b-field label="English Proficiency">
                <b-select placeholder="Select one">
                  <option value = "1">A little</option>
                  <option value = "2">More than a little</option>
                  <option value = "3">A truckload</option>
                  <option value = "4">I should be teaching</option>
                </b-select>
            </b-field>
        </section>
      </div>         
    </div>
    <!-- Button -->
    <div class="buttons">
      <b-button class="dark-blue" expanded @click="clickMe">Create Student</b-button>
    </div>
  </div>      
</template>


<script>

export default {
  name: 'App',

  data() {
      return {
          data: [
              'Bengali',
              'English',
              'Mandarin',
              'Russian',
              'Indonesian',
              'Urdu',
              'Tamil'
          ],
          NativeLanguage: '',
          selected: null
      }
  },

  computed: {
    filteredDataArray() {
        return this.data.filter((option) => {
            return option
              .toString()
              .toLowerCase()
              .indexOf(this.NativeLanguage.toLowerCase()) >= 0
            })
    }
  },



  methods: {
    clickMe(){
      this.$buefy.notification.open('Student created!')
    },
    showAddLanguage() {
        this.$buefy.dialog.prompt({
          message: `Add new language`,
          inputAttrs: {
            placeholder: 'e.g. Italian',
            maxlength: 20,
            value: this.name
          },
          confirmText: 'Add',
          onConfirm: (value) => {
            this.data.push(value)
            this.$refs.autocomplete.setSelected(value)
          }
        })
    }
  }
}
</script>

<style>


select {
  width: 264px;
}


button.button.dark-blue.is-fullwidth{
  background-color: #3C4F76;
  color: white; 
}


.label {
  color: #59666E !important;
}

b {
  font-size: 30px;
}


html {
  background-color: #F3F7FA !important;
}

.container {
  padding: 20px;
  background-color: white;
}


.column.is-half {
  flex: auto;
}
</style>
