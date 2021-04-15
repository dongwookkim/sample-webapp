<template>
  <v-card class="mx-auto my-12" max-width="800">
    <sample-top />
    <sample-list />
  </v-card>
</template>

<script>
import SampleList from './SampleList'
import SampleTop from './SampleTop'
export default {
  components: { SampleTop, SampleList },
  data() {
    return {
      key: ''
    }
  },
  methods: {
    getSampleData() {}
  }
}
</script>

<style lang="scss" scoped></style>
