<template>
  <div class="q-mb-md">
    <div class="row">
      <div class="col q-pr-xs">
        <Card>
          <div slot="title">{{CurrentWeight}} lbs.</div>
          <div slot="subtitle">Current Weight</div>
        </Card>
      </div>
      <div class="col q-pl-xs q-pr-xs">
        <Card>
          <div slot="title">{{goals.goalWeight}} lbs.</div>
          <div slot="subtitle">Goal Weight</div>
        </Card>
      </div>
      <div class="col q-pl-xs">
        <Card>
          <div slot="title">{{ goals.goalDate | formatDate }}</div>
          <div slot="subtitle">Goal Date: {{ goals.goalDate | createCountdown }} days from today</div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

import { mapGetters } from "vuex";
export default {
  name: "Goals",
  props: ["goals"],
  data() {
    return {
      // daysUntil: null,
    };
  },
  components: {
    Card: require("components/Cards/InfoCard.vue").default,
  },
  computed: {
    ...mapGetters("weight", ["CurrentWeight"]),
    // createCountdown() {
    //   this.daysUntil = moment().startOf("day").fromNow();
    // },
  },
  filters: {
    formatDate: function (value) {
      let data = moment(value).format("MMM Do, YYYY");
      return data;
    },
    createCountdown(value) {
      let eventdate = moment(value);
      let todaysdate = moment();
      return eventdate.diff(todaysdate, "days");
    },
  },
};
</script>