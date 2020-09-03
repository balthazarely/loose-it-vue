import Vue from 'vue'
import { uid } from 'quasar'

const state = {
    entries: {
        'ID1': {
            weight: 250,
            date: "2020/08/25",
        },
        'ID2': {
            weight: 150,
            date: "2020/08/01",
        },
        'ID3': {
            weight: 120,
            date: "2020/08/28",
        },
    },
    goals: {
        goalWeight: 200,
        startingWeight: 250,
        goalDate: "2020/11/25",
    },
}

const mutations = {
    updateTask(state, payload) {
        Object.assign(state.entries[payload.id], payload.updates)
    },
    deleteTask(state, id) {
        Vue.delete(state.entries, id)
    },
    addTask(state, payload) {
        Vue.set(state.entries, payload.id, payload.task)
    }
}

const actions = {
    updateTask({ commit }, payload) {
        commit('updateTask', payload)
    },
    deleteTask({ commit }, id) {
        commit('deleteTask', id)
    },
    addTask({ commit }, task) {
        let taskId = uid()
        let payload = {
            id: taskId,
            task: task
        }
        commit('addTask', payload)
    }
}

const getters = {
    entries: (state) => {
        let sorted = {};
        Object
            .keys(state.entries).sort(function (a, b) {
                return new Date(state.entries[b].date) - new Date(state.entries[a].date);
            })
            .forEach(function (key) {
                sorted[key] = state.entries[key];
            });
        return sorted
    },
    sortedEntriesChart: (state) => {
        const data = Object.values(state.entries).map((x) => {
            return [x.date, x.weight]
        })
        return data
    },
    goals: (state) => {
        return state.goals
    },
    CurrentWeight: (state) => {
        let sorted = {}
        Object.keys(state.entries).sort(function (a, b) {
            return new Date(state.entries[b].date) - new Date(state.entries[a].date);
        }).forEach(function (key) {
            sorted[key] = state.entries[key];
        });
        return Object.values(sorted)[0].weight
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}