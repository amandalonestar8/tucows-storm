<template>
  <div v-if="visible" class="modal-overlay" @click.self="close" >
    <div class="modal-content">
        <img src="/x.svg" alt="close modal" class="closebtn" @click="close" tabindex="1"/>
        <h2>{{ modalHeader }}</h2>
      <slot></slot>
      <button @click="close">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    modalHeader: {
      type: String,
    },
  },
  methods: {
    close() {
      // Emit, event to tell the parent to close the modal
      this.$emit("close");
    },
  },
};
</script>