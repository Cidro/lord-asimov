<template>
    <div class="widget-field widget-field-{{ fieldType }}">
        <component :is="fieldType" :widget="widget"></component>
    </div>
</template>
<script>
import Text from './fields/Text.vue';
import TextArea from './fields/Textarea.vue';

export default {
    props: {
        widget: Object
    },
    computed: {
        fieldType: function () {
            return this.widget.fieldType;
        }
    },
    components: {
        'fieldText': Text,
        'fieldTextarea': TextArea
    }
};
</script>
