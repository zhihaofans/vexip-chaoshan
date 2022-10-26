<script setup lang="ts">
import { ref } from 'vue'
// 在 typescript 时可以使用辅助函数来帮助类型推导
import { defineColumns } from 'vexip-ui'
const dictData = { 松鱼: '大头鱼', 菜头: '萝卜' }
const columns = ref(
  defineColumns([
    {
      name: '词语',
      key: 'word'
    },
    {
      name: '意义',
      key: 'meaning'
    }
  ])
)
const data = ref([])
const searchKey = ref('')
const inputStatus = ref('')
const inputPlaceholder = ref('输入你想搜索的词')
function search() {
  console.log(searchKey.value)
  if (searchKey.value.length > 0) {
    data.value = Object.keys(dictData)
      .filter(key => key.includes(searchKey.value))
      .map(key => {
        return {
          word: key,
          meaning: dictData[key]
        }
      })
    if (data.value.length === 0) {
      inputStatus.value = 'error'
      inputPlaceholder.value = '找不到你想搜索的关键词'
    } else {
      inputStatus.value = ''
      inputPlaceholder.value = '输入你想搜索的词'
    }
  } else {
    inputStatus.value = 'error'
    inputPlaceholder.value = '找不到你想搜索的关键词'
  }
}
</script>

<template>
  <Card class="login">
    <Row class="login__sign" justify="center" align="middle">
      <Linker to="/">
        <img src="/vexip-ui.svg" class="login__logo" alt="Vexip UI Logo" />
      </Linker>
      <H1 style="margin: 0"> 潮汕用词搜索 </H1>
      <Input
        v-model:value="searchKey"
        v-model:state="inputStatus"
        v-model:placeholder="inputPlaceholder"
        style="max-width: 420px"
      >
        <template #after-action>
          <Button id="button_search" type="primary" @click="search"> 搜索 </Button>
        </template>
      </Input>
    </Row>
    <Row class="login__sign" justify="center" align="middle">
      <Table :columns="columns" :data="data"></Table>
    </Row>
    <div class="login__tip">
      <Divider> v0.0.1 </Divider>
    </div>
  </Card>
</template>

<style lang="scss">
.login {
  max-width: 480px;
  padding: 10px;

  &__sign {
    user-select: none;
  }

  &__logo {
    height: 6em;
    padding: 1em;
    will-change: filter;
  }

  &__form {
    padding: 20px;
  }

  &__tip {
    padding: 0 20px;
  }
}
</style>
