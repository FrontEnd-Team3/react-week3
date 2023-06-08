# <데일리 스크럼> 6/8

📕 오늘 한 일

특별 세션 강의 다시 듣고 정리
-> rtk 사용해서 rtktodo 만들기 정리
-> msw사용해서 데이터 가져오고 사용하는 방법 정리
-> thunk부분 강의 듣고도 이해가 안가서 https://redux-advanced.vlpt.us/2/01.html 와 같은 자료 찾아서 공부중
   (내일까지 찾아보면서 공부하고 안되면 강사님께 이메일 보내기)

📕 개선해야할 부분 & 진행 중인 사항

1. 페이지네이션 구현 못한거
2. Redux 부족하고 -> 개선 진행중
3. React 기본적인 부분 부족 -> 개선 진행중
4. 시간분배 못한 부분

📕 내일 할 일
1. reducer폴더의 todo.js에 조회 삭제 수정 구현하기
2. 주말 과제 
todo 커스텀훅화 시켜서 관심사 분리하기 (SOC -> DI 중 하나)
단, props drilling 해결을 위해 전역 상태 관리를 도입할 수 있음 (optional)
access token 관심사 분리
api call에 대한 관심사 분리
delete, update

   📌 HINT
1) axios.delete('/todo/3')

2) axios.put('/todo/3', {content, state}) -> fetch가 아니기 때문에 state 변화 없더라도 무조건 같이 보내주어야 함

