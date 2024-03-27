<template>
    <div>
        We are inside a blog
    </div>
    <div>
        post 로 id 값 <b>{{route.params.id}}</b>
    </div>
</template>
<!-- script setup >>> 내부의 코드는 컴포넌트의 인스턴스가 생성될 때마다 실행합니다. -->
<script setup> 
    const route = useRoute();
    console.log(route)
</script>