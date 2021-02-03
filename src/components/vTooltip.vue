<template>
    <div class="tooltip-wrapper">
        <slot name="content">
            <i class="far fa-question-circle" ref="icon"></i>
        </slot>
        <div class="tooltip" ref="tooltip">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { createPopper } from "@popperjs/core";
export default {
    data() {
        return {
            tooltip: null,
        };
    },
    mounted() {
        if (this.$refs.tooltip) {
            const content = this.$slots.content && this.$slots.content[0]
            const def = this.$refs.icon
            const elm = content && content.elm
            this.tooltip = createPopper(elm || def, this.$refs.tooltip, {
                placement: "top",
                modifiers: [{ name: "offset", options: {offset: [0, 15]} }],
            });
        }
    },
    beforeDestroy() {
        if (this.tooltip) {
            this.tooltip.destroy();
            this.tooltip = null;
        }
    },
};
</script>

<style>
.tooltip-wrapper {
    display: inline;
}

.tooltip-wrapper .tooltip {
    visibility: hidden;
    background-color: #0e0e0e;
    color: rgba(255, 255, 255, 0.8);
    padding: 1em;
    border-radius: 3px;
}

.tooltip-wrapper:hover .tooltip {
    visibility: visible;
    opacity: 1;
}
</style>