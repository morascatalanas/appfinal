<template>
  <div class="form">
    <form @submit="onSubmit" @reset="onReset" v-if="show">
      <fieldset class="container-fieldset">
        <legend>Form</legend>

        <div>
          <label for="first-name"> Player's First Name: </label>
          <input type="text" name="first-name" id="first-name" class="input-field" required />

          <label for="last-name"> Last Name: </label>
          <input type="text" name="last-name" id="last-name" class="input-field" required/>

          <label for="street-address"> Street Address: </label>
          <input type="text" name="street-address" id="street-address" class="input-field" required/>

          <label for="city"> City: </label>
          <input type="text" name="city" id="city" class="input-field" required />

          <label for="zip-code"> Zip Code: </label>
          <input type="number" name="zip-code" id="zip-code" class="input-field" required />

          <label for="birth-date"> Birth Date: </label>
          <input type="date" name="birth-date" id="birth-date" class="input-field" required />
          
        </div>
        <fieldset  >
          <p>Gender:</p>
          <label>
            <input type="radio" name="gender" id="female" value="Female" />
            Female 
          </label>
          <label>
            <input type="radio" name="gender" id="male" value="Male" /> Male
          </label>
  
        </fieldset>

        <div>
          <label for="grade">Grade:
            <select name="grade" id="grade" class="input-field" >
              <option value="pre-school">Pre-School</option>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
              <option value="4th">4th</option>
              <option value="5th">5th</option>
            </select>
          </label>

          <label for="parent">Parent/Guardian:
            <input type="text" name="parent" id="parent" class="input-field" required/>
          </label>
          <label for="phone-number">
            Contact Phone:
            <input type="tel" name="phone-number" id="phone-number" class="input-field" required/>
          </label>
          <label for="mail-contact"
            >Mail:
            <input type="email" name="mail-contact" id="mail-contact" class="input-field" required/>
          </label>
        </div>

        <fieldset>
          <legend>Which elementary schools do you live near?</legend>
          <fieldset>
            <label for="first-closest-school"
              >First Closest School:
              <select
                name="first-closest-school"
                id="first-closest-school"
                class="input-field"
              >
                <option value="AJ-Katzenmaier">AJ Katzenmaier</option>
                <option value="Greenbay">Greenbay</option>
                <option value="Howard-A-Yeager">Howard A Yeager</option>
                <option value="Marjorie-P-Hart">Marjorie P Hart</option>
                <option value="North-Elementary">North Elementary</option>
                <option value="South-Elementary">South Elementary</option>
              </select>
            </label>
          </fieldset>
          <fieldset>
            <label for="second-closest-school"
              >Second Closest School:
              <select
                name="second-closest-school"
                id="second-closest-school"
                class="input-field"
              >
                <option value="AJ-Katzenmaier">AJ Katzenmaier</option>
                <option value="Greenbay">Greenbay</option>
                <option value="Howard-A-Yeager">Howard A Yeager</option>
                <option value="Marjorie-P-Hart">Marjorie P Hart</option>
                <option value="North-Elementary">North Elementary</option>
                <option value="South-Elementary">South Elementary</option>
              </select>
            </label>
          </fieldset>
        </fieldset>
        <fieldset class="position">
          <legend >Position</legend>
          <fieldset>
            <legend class="tiny-legend">
             What position(s) do you normally play? (check  all that apply)
            </legend>
            <label>
              <input
                type="checkbox"
                name="position-normaly-played"
                value="forward"
              />Fordward
            </label>
            <label>
              <input
                type="checkbox"
                name="position-normaly-played"
                value="defense"
              />Defense
            </label><br>
            <label>
              <input
                type="checkbox"
                name="position-normaly-played"
                value="midfield"
              />Midfield
            </label>
            <label>
              <input
                type="checkbox"
                name="position-normaly-played"
                value="goalkeeper"
              />Goalkeeper
            </label>
          </fieldset>
          <fieldset>
            <legend class="tiny-legend">
              <strong>What position(s) do you want to play?</strong> 
            </legend>

            <label>
              <input
                type="checkbox"
                name="position-wanted"
                value="forward"
              />Fordward
            </label>
            <label>
              <input
                type="checkbox"
                name="position-wanted"
                value="defense"
              />Defense
            </label> <br>
            <label>
              <input
                type="checkbox"
                name="position-wanted"
                value="midfield"
              />Midfield
            </label>
            <label>
              <input
                type="checkbox"
                name="position-wanted"
                value="goalkeeper"
              />Goalkeeper
            </label>
          </fieldset>
        </fieldset>
        <fieldset class="uniform">
          <legend>Uniform</legend>
          <label for="uniform">
            <input type="radio" name="uniform" id="uniform" />Already Have a
            Uniform
          </label>
<br>
          <label for="jersey-size">
            Jersey Size:
            <select name="jersey-size" id="jersey-size" class="input-field">
              <option value="youth-small">Youth Small</option>
              <option value="youth-medium">Youth Medium</option>
              <option value="youth-large">Youth Large</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="extra-large">Extra Large</option>
            </select>
          </label>
          <label for="shorts-size">
            Shorts Size:
            <select name="shorts-size" id="shorts-size" class="input-field">
              <option value="youth-small">Youth Small</option>
              <option value="youth-medium">Youth Medium</option>
              <option value="youth-large">Youth Large</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="extra-large">Extra Large</option>
            </select>
          </label>
        </fieldset>
        <fieldset id="permission">
          <legend>Permission to Play</legend>
          <p>
            I, the parent or guardian of the minor registrant, agree that the
            registrant and I will abide by all the rules of the Northside Youth
            Soccer League (NYSL). In recognizing the possibility of physical
            injury associated with soccer and in consideration for the “League”
            accepting the registrant for its soccer programs and activities, I
            hereby release, discharge, and/or otherwise indemnify NYSL, their
            employees and associated personnel and volunteers, including the
            facilities used for practices and games, against any claim by or on
            behalf of the registrant as a result of the registrant’s
            participation in the program and/or being transported to or from
            NYSL sponsored activities, which transportation. By entering my name
            below, I hereby agree and authorize the above. In addition, by
            entering my name below, I also acknowledge that I have read the
            cancellation policy and agree to its terms.
          </p>
          <label
            >Parent/Guardian Signature:
            <input type="text" name="signature" class="input-field" required/>
          </label>
          <label
            >Date:
            <input type="date" name="date" class="input-field" required/>
          </label>
        </fieldset>
      </fieldset>
      
     <label>
      <input class= "submit" type="submit" value="Submit" id="submit" >
      </label>


    </form>
  </div>
</template>

<script>
 export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style lang="scss" >
.form{
    margin: 5%;
    padding-bottom: 15%;
}

input{
    display: block;
    background-color: #1CAF6C ;
    color: antiquewhite; 
    border-radius: 1vh;
}
select{
      background-color: #1CAF6C ;
    border-radius: 1vh;
    color: antiquewhite; 
}

.submit{
margin:1rem
}
 legend{
   font-weight: 500;
 }
 .tiny-legend {
    font-weight:300;
}
</style>