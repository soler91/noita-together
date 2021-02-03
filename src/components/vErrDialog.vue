<template>
    <transition name="err-dialog">
        <div class="err-dialog-mask">
            <div class="err-dialog-wrapper">
                <div class="err-dialog-container">
                    <div class="err-dialog-header">
                        <slot name="header"></slot>
                    </div>

                    <div class="err-dialog-body">
                        <slot name="body"></slot>
                    </div>

                    <div class="err-dialog-footer">
                        <slot name="footer"> </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "vErrDialog",
};
</script>

<style>
.err-dialog-mask {
    position: fixed;
    z-index: 9995;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
}

.err-dialog-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.err-dialog-container {
    max-width: 80%;
    margin: 0px auto;
    padding: 1.2em 1.3em;
    background-color: rgb(37, 37, 37);
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    display: flex;
    flex-flow: column;
}

.err-dialog-header h1 {
    margin-top: 0;
}

.err-dialog-body {
    display: flex;
    flex-flow: row wrap;
    margin: 20px 0;
}

.err-dialog-footer {
    display: flex;
}

/*
   * The following styles are auto-applied to elements with
   * transition="err-dialog" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the err-dialog transition by editing
   * these styles.
   */

.err-dialog-enter {
    opacity: 0;
}

.err-dialog-leave-active {
    opacity: 0;
}

.err-dialog-enter .err-dialog-container,
.err-dialog-leave-active .err-dialog-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>