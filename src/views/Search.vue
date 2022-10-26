<script setup lang="ts">
import { reactive } from 'vue'

interface Model {
  username: string,
  password: string
}

const model = reactive({} as Model)

const providedProps = {
  button: {
    size: 'large'
  },
  input: {
    size: 'large',
    clearable: true
  }
}
</script>

<template>
  <div style="max-width: 320px;">
    <Card title="Never">
      <p>卡片的内容</p>
      <p>卡片的内容</p>
      <p>卡片的内容</p>
    </Card>
    <br />
    <Card title="Hover">
      <p>卡片的内容</p>
      <p>卡片的内容</p>
      <p>卡片的内容</p>
    </Card>
    <br />
    <Card title="Always">
      <p>卡片的内容</p>
      <p>卡片的内容</p>
      <p>卡片的内容</p>
    </Card>
		</div>
</template>

<style lang="scss">

</style>
