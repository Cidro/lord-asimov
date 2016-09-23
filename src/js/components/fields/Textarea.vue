<template>
    <div class="form-group">
        <textarea class="form-control" v-model="widget.config.text"></textarea>
    </div>
</template>
<script>
export default {
    props: {
        widget: Object
    }
};
</script>
