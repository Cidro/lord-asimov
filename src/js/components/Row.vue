<template>
    <div class="widget-row">
        <div class="panel panel-default">
            <div class="panel-heading">
                Row
            </div>
            <div class="panel-body">
                <widget v-for="child in widget.children" track-by="$index" :widget="child"></widget>
            </div>
            <div class="panel-footer text-center">
                <button v-on:click="showWidgetPicker" class="btn btn-xs btn-default">
                    <span class="glyphicon glyphicon-plus"></span>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        widget: Object
    },
    ready() {
        this.$dispatch('addDragulaContainer', this.$el.querySelector('.panel-body'));
    },
    destroyed() {
        this.$dispatch('removeDragulaContainer', this.$el.querySelector('.panel-body'));
    },
    methods: {
        showWidgetPicker() {
            this.$dispatch('showWidgetPicker', this.widget);
        }
    }
};
</script>
