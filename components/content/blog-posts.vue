<template>
    <section class="not-prose font-mono">
        <div class="column text-gray-400 text-sm">
            <div>date</div>
            <div>title</div>
        </div>

        <ul>
            <li v-for="post in posts" :key="post._path">
                <NuxtLink :to="post._path" class="column hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div :class="{ 'text-white dark:text-gray-900': !post.displayYear, 'text-gray-400 dark:text-gray-500': post.displayYear }">
                    {{ post.year }}</div>
                    <div>{{ post.title }}</div>
                </NuxtLink>
            </li>
        </ul>
    </section>
</template>

<script setup>
// sort 알파벳순
//https://content.nuxt.com/composables/query-content#wherequery
//.limit(5) : 보여질 갯 수 옵션

//.only 필드의 하위 집합 https://content.nuxt.com/composables/query-content#onlykeys
//findOne() :첫 번째로 일치하는 콘텐츠

// queryContent : 페이지와 구성요소에서 쿼리를 컴포저블로 래핑 하여 첫 번째 로드 시 중복 가져오기
const { data } = await useAsyncData('blog-list',() => queryContent('/blog')
        .where({ _path: { $ne: '/blog' } })
        .only(['_path', 'title','publishedAt'])
        .sort({ publishedAt: -1 })
        .find()
    )
const posts = computed(() => {
    if (!data.value) {
        return []
    }
    const result = []
    let lastYear = null
    for (const post of data.value) {
        const year = new Date(post.publishedAt).getFullYear()
        const displayYear = year !== lastYear
        post.displayYear = displayYear
        post.year = year
        result.push(post)
        lastYear = year
    }
    return result
})

console.log(posts)
</script>

<style scoped>
.column {
  @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700
}
</style>