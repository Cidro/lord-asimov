<template>
    <div><component :is="widgetType" :widget="widget"></component></div>
</template>
<script>
import Row from './Row.vue';
import Column from './Column.vue';
import Field from './Field.vue';

export default {
    props: {
        widget: Object
    },
    computed: {
        widgetType: function () {
            return this.widget.type;
        }
    },
    components: {
        Row,
        Column,
        Field
    }
};
</script>
