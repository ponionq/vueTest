<template>
    <div>Projects</div>
    <section v-if="pending">Loading...</section>
    <section v-else-if="error">Something went wrong... Try again!</section>
    <section v-else>
        <ul class="grid grid-cols-1 gap-4">
            <!-- v-for="repository (변수 명) in repos" 데이터 갯 수 -->
            <li v-for="repository in repos" :key="repository.id"
                class="border border-gray-200 rounded-sm p-4 hover:bg-gray-100 font-mono">
                <a :href="repository.html_url" target="_blank">
                <div class="flex items-center justify-between text-sm">
                    <div class="font-semibold">{{ repository.name }}</div>
                    <div>{{ repository.stargazers_count }} ★</div>
                </div>
                <p class="text-sm">
                    {{ repository.description }}
                </p>
                </a>
            </li>
        </ul>
    </section>
</template>

<script setup>
// useFetch  구성 요소 설정 기능에서 데이터 가져오기를 처리하는 가장 간단한 방법입니다.
// 두 가지 useFetch모두 useAsyncData마지막 섹션에서 자세히 설명할 공통 옵션 및 패턴 세트를 공유합니다.
//data, pending, error, refresh
// data: 전달된 비동기 함수의 결과입니다.
// pending: 데이터를 아직 가져오는 중인지 여부를 나타내는 부울입니다.
// refresh/ execute: 함수에서 반환된 데이터를 새로 고치는 데 사용할 수 있는 함수입니다 handler.
// error: 데이터 가져오기에 실패한 경우 오류 개체입니다.
// status: 데이터 요청 상태를 나타내는 문자열( "idle", "pending", "success", "error").

    const { error, pending, data } = await useFetch('https://api.github.com/users/piotr-jura-udemy/repos');
    console.log(data,'data');
    const repos = computed(
        () => data.value.filter(repo => repo.description)
        .sort((a, b) => b.stargazers_count - a.stargazers_count) // 별점이 제일 높은 것 부터 
    )
</script>