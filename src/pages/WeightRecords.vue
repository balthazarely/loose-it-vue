<template>
  <q-page class="q-pa-md bg-grey-2">
    <h5
      class="subtitle text-weight-light"
    >Hi Dave, you have {{ goals.goalDate | createCountdown }} days left to reach your goal!</h5>

    <div class="q-pb-md q-gutter-sm">
      <q-btn color="primary" label="Make Entry" @click="showAddTask = true" />
    </div>
    <q-dialog v-model="showAddTask">
      <AddWeightModal />
    </q-dialog>
    <Goals :goals="goals" />
    <Chart :sortedEntriesChart="sortedEntriesChart" />

    <q-card class="my-card shadow-1">
      <q-list bordered separator class="bg-white q-mt-md">
        <q-item-label header>Weight Log</q-item-label>
        <WeightEntry clickable v-for="(entry, key) in entries" :entry="entry" :id="key" :key="key" />
      </q-list>
    </q-card>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import moment from "moment";

export default {
  name: "PageIndex",
  data() {
    return {
      showAddTask: false,
    };
  },
  components: {
    Goals: require("components/Goals.vue").default,
    WeightEntry: require("components/WeightEntry/WeightEntry.vue").default,
    AddWeightModal: require("components/Modals/AddWeightModal.vue").default,
    Chart: require("components/Chart.vue").default,
  },
  computed: {
    ...mapGetters("weight", [
      "entries",
      "sortedEntriesChart",
      "goals",
      "CurrentWeight",
    ]),
  },
  filters: {
    createCountdown(value) {
      let eventdate = moment(value);
      let todaysdate = moment();
      return eventdate.diff(todaysdate, "days");
    },
  },
};
</script>
