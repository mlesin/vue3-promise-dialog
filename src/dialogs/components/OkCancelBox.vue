<template>
  <Box>
    <form class="box" onsubmit="return false">
      <div class="header">
        <slot name="header"></slot>
      </div>
      <div class="body">
        <slot name="body"></slot>
      </div>
      <div class="footer">
        <button
          type="button"
          class="p-button-raised"
          style="margin-right: 10px"
          @click="closeDialog(null)"
        >
          {{ cancelLabel }}
        </button>
        <button
          type="submit"
          class="p-button-raised"
          @click="closeDialog()"
          :disabled="!valid"
        >
          {{ okLabel }}
        </button>
      </div>
    </form>
  </Box>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Box from "./Box.vue";
import { closeDialog } from "../../../lib/index";

export default defineComponent({
  components: { Box },
  props: {
    valid: {
      type: Boolean,
      default: true,
    },
    okLabel: {
      type: String,
      default: "OK",
    },
    cancelLabel: {
      type: String,
      default: "CANCEL",
    },
  },
  setup(props, context) {
    return {
      closeDialog,
    };
  },
});
</script>

<style scoped lang="scss">
.box {
  .header {
    color: white;
    background-color: var(--primary-color);
    display: flex;
    align-items: center;
    height: 50px;
    padding: 10px;
    font-size: 20px;
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.03);
    border-top: 1px solid rgba(0, 0, 0, 0.06);
  }
}
</style>
