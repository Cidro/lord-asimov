<template>
    <div class="row">
        <div class="col-sm-6">
            <div class="lord-asimov">
                <div class="panel panel-default">
                    <div v-if="widget.children.length" class="panel-body">
                        <widget v-for="widget in widget.children" track-by="$index" :widget="widget"></widget>
                    </div>
                    <div class="panel-footer text-center">
                        <button v-on:click="showWidgetPicker" class="btn btn-default">
                            <span class="glyphicon glyphicon-plus"></span>
                        </button>
                    </div>
                </div>
                <modal :show.sync="pickingWidget" class="lord-asimov-modal">
                    <div slot="modal-header" class="modal-header">
                        Pick a Widget
                    </div>
                    <div slot="modal-body" class="modal-body">
                        <div class="row">
                            <div v-for="widget in availableWidgets" class="col-sm-3">
                                <button v-on:click="pickWidget(widget)" class="btn btn-default">{{ widget.title }}</button>
                            </div>
                        </div>
                    </div>
                    <div slot="modal-footer" class="modal-footer">
                        <button type="button" class="btn btn-default" v-on:click='pickingWidget = false'>Cancel</button>
                    </div>
                </modal>
            </div>
        </div>
        <div class="col-sm-6">
            <pre>{{ widget | json }}</pre>
        </div>
    </div>
</template>
<script>
/* global VueStrap, dragula */

export default {
    props: {
        widget: {
            type: Object,
            default: function () {
                return {
                    type: 'lord-asimov',
                    title: 'Lord Asimov',
                    children: []
                };
            }
        },
        availableWidgets: {
            type: Array,
            default: function () {
                return [{
                    type: 'row',
                    title: 'Row',
                    children: [],
                    config: {}
                }, {
                    type: 'column',
                    title: 'Column',
                    children: [],
                    config: {}
                }, {
                    type: 'field',
                    fieldType: 'fieldText',
                    title: 'Field Text',
                    children: [],
                    config: {}
                }, {
                    type: 'field',
                    fieldType: 'fieldTextarea',
                    title: 'Field Text Area',
                    children: [],
                    config: {}
                }];
            }
        },
        pickingWidget: Boolean
    },
    data() {
        return {
            drake: null
        };
    },
    ready() {
        this.drake = dragula({
            moves: this.handleDragulaMoves
        });
    },
    components: {
        'modal': VueStrap.modal
    },
    methods: {
        showWidgetPicker() {
            this.$dispatch('showWidgetPicker', this.widget);
        },
        pickWidget(widget) {
            this.$dispatch('widgetPicked', widget);
        },
        makeWidget(type) {
            var fieldType = null;
            if (typeof type !== 'string') {
                fieldType = type.fieldType;
                type = type.type;
            }
            for (var w in this.availableWidgets) {
                if (this.availableWidgets[w].type === type &&
                    (fieldType == null || (
                        this.availableWidgets[w].fieldType &&
                        this.availableWidgets[w].fieldType === fieldType))) {
                    return JSON.parse(JSON.stringify(this.availableWidgets[w]));
                }
            }
        },
        adjustWidgetNesting(parentType, child) {
            var fixedNesting = null;
            if (parentType === 'lord-asimov' && child.type !== 'row') {
                fixedNesting = this.makeWidget('row');
                fixedNesting.children.push(this.adjustWidgetNesting('row', child));
                return fixedNesting;
            }
            if (parentType === 'row' && child.type !== 'column') {
                fixedNesting = this.makeWidget('column');
                fixedNesting.children.push(this.adjustWidgetNesting('column', child));
                return fixedNesting;
            }
            return child;
        },
        handleDragulaMoves(el, source, handle, sibling) {
            return handle.classList.contains('glyphicon-move');
        }
    },
    events: {
        showWidgetPicker(widget) {
            this.pickerTarget = widget;
            this.pickingWidget = true;
        },
        widgetPicked: function (widget) {
            this.pickingWidget = false;
            var newWidget = this.adjustWidgetNesting(this.pickerTarget.type, this.makeWidget(widget));
            this.pickerTarget.children.push(newWidget);
        },
        addDragulaContainer: function (container) {
            this.drake.containers.push(container);
        }
    }
};
</script>
