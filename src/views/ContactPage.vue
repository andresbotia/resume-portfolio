<template>
  <v-container class="pt-10">
    <v-alert
      class="mb-4 mt-4 mr-4 ml-4"
      type="success"
      variant="outlined"
      v-show="alert"
      >Email was sent successfully!
    </v-alert>
    <v-row class="mb-6" no-gutters>
      <v-col :cols="cols[0]" class="mb-4">
        <v-card max-width="500" class="mx-auto" :border="true" rounded>
          <v-card-title class="d-flex pl-6 pt-4">
            <h3 class="font-weight-light">Contact Form</h3>
          </v-card-title>
          <v-form
            ref="contactForm"
            validate-on="submit"
            @submit.prevent="sendEmail"
            class="ma-6"
          >
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="Name"
              name="Name"
              variant="outlined"
              type="text"
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Email Address"
              variant="outlined"
              type="email"
            ></v-text-field>

            <v-text-field
              v-model="subject"
              :rules="subjectRules"
              label="Subject"
              variant="outlined"
            ></v-text-field>

            <v-textarea
              v-model="message"
              :rules="messageRules"
              label="Message"
              variant="outlined"
            ></v-textarea>

            <v-btn
              type="submit"
              block
              class="mt-2"
              text="Send Message"
              variant="outlined"
            ></v-btn>
          </v-form>
        </v-card>
      </v-col>
      <v-col :cols="cols2[0]">
        <v-card max-width="500" class="ml-4 mr-4 mx-auto" variant="flat">
          <v-card-title class="d-flex pl-6 pt-4">
            <h3 class="font-weight-light">Contact Details</h3>
          </v-card-title>
          <v-card-text class="d-flex pl-6 pt-4">
            <v-row class="mb-6" no-gutters>
              <v-chip class="ma-2" variant="text" label>
                <v-icon start icon="mdi-map-marker-outline"></v-icon>
                Deerfield Beach, Florida
              </v-chip>
              <v-chip class="ma-2" variant="text" label>
                <v-icon start icon="mdi-email"></v-icon>
                andresfbotia@gmail.com</v-chip
              >
              <v-chip class="ma-2" variant="text" label>
                <v-icon start icon="mdi-phone"></v-icon>
                786-691-6711
              </v-chip>
            </v-row>
          </v-card-text>
        </v-card></v-col
      >
    </v-row>
  </v-container>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  name: "ContactUs",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      subject: "",
      alert: false,
      nameRules: [(v) => !!v || "Name is required"],
      emailRules: [
        (v) =>
          !v ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
        (v) => !!v || "Email is required",
      ],
      messageRules: [(v) => !!v || "Message is required"],
      subjectRules: [(v) => !!v || "Subject is required"],
    };
  },
  computed: {
    cols() {
      const { xs } = this.$vuetify.display;
      return xs ? [12] : [6];
    },
    cols2() {
      const { xs } = this.$vuetify.display;
      return xs ? [12] : [6];
    },
    isLightModeOn() {
      return this.$store.state.lightMode;
    },
  },
  methods: {
    hideAlert() {
      console.log("Hide");
      window.setTimeout(() => {
        this.alert = false;
      }, 3000);
    },
    async sendEmail() {
      const { valid } = await this.$refs.contactForm.validate();

      if (valid) {
        try {
          emailjs
            .send(
              "service_ss6sz0g",
              "template_ua2zfhd",
              {
                name: this.name,
                email: this.email,
                message: this.message,
                subject: this.subject,
              },
              "wTx_el6zjGXxjB8i6"
            )
            .then(() => {
              console.log("[success]");
              this.alert = true;
              this.hideAlert();

              //Reset form field
              this.name = "";
              this.email = "";
              this.message = "";
              this.subject = "";
            });
        } catch (error) {
          console.log({ error });
        }
      }
    },
  },
};
</script>

<style scoped></style>
