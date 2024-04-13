<template>
    <section>
        <ul>
        <li v-for="post in posts" :key="post.id">
            <NuxtLink :to="post.id">{{ post.title }}</NuxtLink>
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
const { data: posts } = await useAsyncData('blog-list',() => queryContent('/blog')
        .only(['id', 'title'])
        .sort({ title: 1 })
        .find()
    )
console.log(posts)
</script>