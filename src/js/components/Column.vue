<template>
    <div class="widget-column">
        <div class="panel panel-default">
            <div class="panel-heading">
                <span class="glyphicon glyphicon-move"></span> Column
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
    methods: {
        showWidgetPicker: function () {
            this.$dispatch('showWidgetPicker', this.widget);
        }
    }
};
</script>
