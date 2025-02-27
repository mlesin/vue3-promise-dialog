<template>
  <p>
    An example of dialogs built using this project. When you hit a button a
    function is called that opens the dialog and returns a promise, when you
    close the dialog the promise resolves with the value entered into the dialog
    and that value is printed below.
  </p>
  <button @click="onTestConfirm">Test confirm dialog</button>
  <button @click="onTestText">Test prompt text dialog</button>
  <button @click="onNestedDialog">Test nested dialogs</button>
  <button @click="onGenericDialogNumber">Test generic dialog (number)</button>
  <button @click="onGenericDialogString">Test generic dialog (string)</button>
  <div class="console">
    <div class="console-item" v-for="(text, index) in items" :key="index">
      {{ text }}
    </div>
  </div>
  <DialogWrapper :transition-attrs="{ name: 'dialog' }" />
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import DialogWrapper from "../lib/components/DialogWrapper.vue";
import { confirm, generic, nested, promptText } from "./dialogs/ts/dialogs";

export default defineComponent({
  components: { DialogWrapper },
  props: {},
  setup(props, context) {
    const items = reactive<string[]>([]);

    async function onTestConfirm() {
      if (await confirm("Do you really want to do this ?")) {
        items.push("Confirmed");
      } else {
        items.push("Not confirmed");
      }
    }

    async function onTestText() {
      let text = await promptText("Enter some text");
      if (text) {
        items.push(text);
      }
    }

    async function onNestedDialog() {
      let text = await nested("Enter some text");
      if (text) {
        items.push(text);
      }
    }

    async function onGenericDialogNumber() {
      let text = await generic(10.5);
      if (text) {
        items.push(text.toFixed(2));
      }
    }

    async function onGenericDialogString() {
      let text = await generic("");
      if (text) {
        items.push(text);
      }
    }

    return {
      onTestText,
      onTestConfirm,
      onNestedDialog,
      onGenericDialogNumber,
      onGenericDialogString,
      items,
    };
  },
});
</script>

<style scoped lang="scss">
.console {
  margin: 20px;
}
</style>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

body {
  font-family: "Roboto", sans-serif;
}
</style>
