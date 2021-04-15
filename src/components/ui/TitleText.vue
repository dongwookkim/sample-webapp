<template>
  <div class="text-left">
    <v-chip class="ma-2" color="pink" text-color="white">
      <v-icon left> mdi-label </v-icon>
      {{ text }}
    </v-chip>
  </div>
</template>

<script>
export default {
  name: 'TitleText',
  props: ['text']
}
</script>

<style lang="scss" scoped></style>
