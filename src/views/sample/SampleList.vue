<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">title</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in samples" :key="item.id">
          <td><title-text :text="item.title"></title-text></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import TitleText from '@/components/ui/TitleText.vue'

export default {
  components: { TitleText },
  computed: {
    samples() {
      return this.$store.state.sample.samples
    },
  },
  methods: {
    fetchSampleData() {
      this.$store.dispatch('sample/fetchData')
    },
  },
  created() {
    this.fetchSampleData()
  },
}
</script>

<style lang="scss" scoped></style>
