export default {
    scrollBehavior(to, from, savedPosition) {
        console.log(savedPosition)
        // `to`와 `from`은 각각 이동할 라우트와 현재 라우트를 나타냄
        // `savedPosition`은 이전 스크롤 위치
        
        if (savedPosition) {
            // 이전 스크롤 위치가 저장되어 있으면 해당 위치로 이동
            return savedPosition; //저장된 위치가 존재하는 경우, null그렇지 않은 경우
        }
        
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
                top: 0
            }
        }   
        // 위의 경우가 아니면 페이지 상단으로 스무스하게 스크롤
        return { left: 0, top: 0, behavior: 'smooth' }
    }
}




// 이전 스크롤 위치가 저장되어 있으면 해당 위치로 이동
// 이동할 라우트에 해시가 있는 경우 해당 해시 위치로 스무스하게 스크롤
// 그 외의 경우에는 페이지 상단으로 스무스하게 스크롤

// base: 어플리케이션의 기본 URL을 설정
// linkActiveClass: 현재 라우트와 일치하는 링크에 적용할 활성 클래스를 설정
// linkExactActiveClass: 정확한 활성 라우트와 일치하는 링크에 적용할 클래스를 설정
// middleware: 미들웨어를 설정
