<template>
  <v-container fluid>
    <v-row class="flex-column" align="center">
      <v-col cols="6" xl="4">
        <v-form>
          <v-text-field placeholder="Type your message"
                        v-model="message"
                        counter="500"
                        :error-messages="messageErrors"
                        @input="$v.message.$touch()"
                        @blur="$v.message.$touch()"/>
          <v-text-field placeholder="Image URL"
                        v-model="imageUrl"
                        :error-messages="imageUrlErrors"
                        @input="$v.imageUrl.$touch()"
                        @blur="$v.imageUrl.$touch()"/>
          <v-btn class="float-right" @click="submit">
            Publish
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
import { SUBMIT_ITEM } from '@/store/actions/feedActions';
import { validationMixin } from 'vuelidate';
import { required, maxLength } from 'vuelidate/lib/validators';

export default {
  name: 'AddFeedItem',
  mixins: [validationMixin],
  data() {
    return {
      message: '',
      imageUrl: '',
    };
  },
  validations: {
    message: { required, maxLength: maxLength(500) },
    imageUrl: { required },
  },
  computed: {
    messageErrors() {
      const errors = [];
      if (!this.$v.message.$dirty) {
        return errors;
      }
      if (!this.$v.message.maxLength) {
        errors.push('Message must be at most 500 characters long');
      }
      if (!this.$v.message.required) {
        errors.push('Message is required.');
      }
      return errors;
    },
    imageUrlErrors() {
      const errors = [];
      if (!this.$v.imageUrl.$dirty) {
        return errors;
      }
      if (!this.$v.imageUrl.required) {
        errors.push('Image URL is required');
      }
      return errors;
    },
  },
  methods: {
    ...mapActions([SUBMIT_ITEM]),
    submit() {
      this[SUBMIT_ITEM](
        {
          id: Math.floor(Math.random() * 10000),
          text: this.message,
          image: this.imageUrl,
          datetime: (new Date()).getTime() / 1000,
        },
      );
    },
  },
};
</script>

<style scoped>

</style>
