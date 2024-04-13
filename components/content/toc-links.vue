<template>
    <ul>
        <li v-for="link in links" :key="link.id">
            <NuxtLink :to="{ path: route.path, hash: `#${link.id}` }" :class="{ 'ml-4': level }">
            {{ link.text }}
            </NuxtLink>
            <TocLinks :links="link.children" :level="level + 1" />
        </li>
    </ul>
</template>

<script setup>
//vue3
    const route = useRoute()
    // props
    defineProps({
        links: Array,
        level: {
            type: Number,
            default: 0
        }
    })

//vue2 예제
// export default{
// props: {
//   title: String,
//   likes: Number,
//   isPublished: Boolean,
//   commentIds: Array,
//   author: Object,
//   callback: Function,
// }
</script>