<template>
    <PanelItem :index="index" :field="field">
        <template #value>
            <ul>
                <li v-for="(item, index) in field.value" v-bind:key="item">
                    <span :class="item.class">{{ item.text }}</span>
                </li>
            </ul>
        </template>
    </PanelItem>
</template>

<script>
export default {
    props: ['index', 'resource', 'resourceName', 'resourceId', 'field'],
}
</script>
