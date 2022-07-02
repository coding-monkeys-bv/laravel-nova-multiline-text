<template>
    <ul>
        <li v-for="(item, index) in field.value" v-bind:key="item">
            <span :class="item.class">{{ item.text }}</span>
        </li>
    </ul>
</template>

<script>
export default {
    props: ['resourceName', 'field'],
}
</script>
