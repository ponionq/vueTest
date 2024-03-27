<template>
    <div>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/">Main</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
        </ul>
      </nav>
      <!-- 다른 구성 요소와 달리 레이아웃에는 Nuxt가 레이아웃 변경 간에 전환을 적용할 수 있도록 단일 루트 요소가 있어야 하며 이 루트 요소는 <slot />. -->
      <slot />
    </div>
</template>