<template>
    <div class="form-group">
        <input type="text" class="form-control" v-model="widget.config.text">
    </div>
</template>
<script>
export default {
    props: {
        widget: Object
    }
};
</script>
