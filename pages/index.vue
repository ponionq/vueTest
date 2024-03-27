<template>
	<div>
		메인
	</div>
</template>

<script setup>
useSeoMeta({
  title: '메인',
  description: 'nuxt 공부 메인페이지',
  ogTitle: '메인페이지',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '트위치 Main Page',
  twitterDescription: '트위치 Main Page',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})
useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>