# 👩‍💻Daily Scrum

### 0526

📍 오늘 한 일<br/>

1. Reactstrap 사용 방법 공부 및 적용
2. navbar toggle 부분 구현
3. main logo부분 구현

📍 아쉬웠던 점 <br/>

- 라이브러리를 직접 찾아서 적용하는 것이 처음이다보니 시간이 오래 걸리는 것이 느껴졌다<br/>
- 스타일 관련 라이브러리를 정함에 있어 Reactstrap이 편리하긴 하지만 다양한 스타일을 적용하기에는 한계가 있는 것 같아서 다양한 라이브러리를 접해볼 수 있도록 더 찾아볼 예정이다.

📍 내일 할 일<br/>: search, 장바구니 탭 구현

### 0527

📍 오늘 한 일<br/>

1. 파일 구조 및 routing 수정
2. faker.js 연습 및 적용
3. 플로우 과제 코드 리뷰

📍 아쉬웠던 점 <br/>

- 깃허브 풀을 받아오면서 파일이 자꾸 날아가서 제대로 복구하고 완전히 병합하는데 시간이 너무 오래 걸렸다.<br/>
- routing 파일을 수정할 때에도 시간을 많이 잡아 먹은 것 같아 아쉽다.

📍 내일 할 일<br/>: faker.js를 이용한 게시글 상세 페이지 구현

### 0528

📍 오늘 한 일<br/>

1. navbar 클릭 시 각 상품 목록 페이지로 이동하도록 구현
2. faker.js 이용한 목데이터 생성 함수 구현
3. footer & img 오류 수정

📍 아쉬웠던 점 <br/>

- img파일을 public에만 넣어두었더니 상세 페이지 구현 시 파일 경로에 오류가 생길 수 있다는 사실을 알게 되었다.<br/>
- footer 위치 설정 같은 기본적인 사항 때문에 시간을 잡아먹은 것 같아 아쉽다.

📍 내일 할 일<br/>: tailwindcss를 사용한 상품 목록 페이지 UI 만들기, faker.js로 생성한 상품 목데이터 사용하여 상품 목록 페이지 상세 구현

### 0529

📍 오늘 한 일<br/>

1. tailwindcss 적용 시도했으나 실패
2. Grommet 사용하여 grid UI 구현
3. faker.js로 생성한 목데이터로 상품 목록 페이지 구현
4. 장바구니, Main Logo routing 구현
5. 상품 목록 페이지에서 상품 클릭 시 해당 상품 상세 페이지로 이동하도록 routing 구현

📍 아쉬웠던 점 <br/>

- tailwindcss에 미리 구현된 템플릿이 많은 것 같아 사용을 시도했으나 postcss.config.js, webpack.conficg.js 등 아직 이해할 수 없는 파일까지 건드려야 한다는 사실을 깨닫고 포기했다.<br/>
- 아직 전역 상태 관리 등을 제대로 고려하지 않고 상품 목록/상품 상세 페이지를 구현하고 있어서 기능을 완전히 구현하고 나면 로직 분리를 시도해보아야 할 것 같다.

📍 내일 할 일<br/>: 상품 상세 페이지 개략적인 UI 구현, 상품 목록 페이지 로직 분리하여 상품 목록 페이지 UI를 하나의 컴포넌트로 관리하기

### 0530

📍 오늘 한 일<br/>

1. Grommet 사용하여 상품 상세 페이지 UI 구현
2. 목데이터 받아와서 상품 상세 페이지 내부 콘텐츠 구현 (상품 상세 정보, 리뷰 게시판)

📍 아쉬웠던 점 <br/>

- faker.js로 생성한 목데이터로 기능을 구현하려다보니 평소 보다 로직 짜기가 복잡한 것 같다.

📍 내일 할 일<br/>: 상품 상세 페이지 기능 구현 마무리, 상품 목록 페이지/상세 페이지 전체 카테고리에 적용

### 0531

📍 오늘 한 일<br/>

1. 하나의 카테고리에서만 접근 가능하던 상품 목록 페이지, 상품 전체 페이지 전체에서 접근 가능하도록 함
2. 상품 상세 페이지에 댓글 추가(모달) 기능 구현
3. 전체 프로젝트 코드 취합

📍 아쉬웠던 점 <br/>

- 댓글 추가 기능을 구현함에 있어 이미 state로 담아준 product의 comments를 어떻게 관리해야 할 지 로직을 못짜서 결국 새로운 faker 데이터를 받아오는 방식으로 구현 방향성을 틀었다. 이미 구현된 상품 정보 내의 댓글 정보를 사용할 수 있는 방법을 알았다면 코드를 더 깔끔하게 짤 수 있었을 것 같다.

📍 내일 할 일<br/>: 토이 프로젝트 코드 리뷰, 코드 개선, 주말 강의 복습 후 과제

### 0601

📍 오늘 한 일<br/>

1. 상품 상세 페이지 리뷰 게시판 페이지네이션 구현
2. 메인 페이지 버튼 routing 구현
3. 토이 프로젝트 readme.md 수정
4. 주말 강의 복습 (프로젝트 구현을 모두 완료한 후 진행하였습니다.)

📍 아쉬웠던 점 <br/>

- readme.md에 구현 결과를 적용하면 좋겠다는 생각이 들어서 부족하지만 영상을 추가해보았다. 다음에는 시간을 조금 더 들여서 readme 파일을 꾸며 프로젝트를 더 한 눈에 알아보기 쉽게 만들면 좋을 것 같다.
- 강의를 복습하면서 이번 프로젝트에 redux를 제대로 적용하지 못해 아쉽다는 생각이 들었다. redux로 과제를 마무리한 후, 프로젝트 코드를 리팩토링 해보면 좋을 것 같다.

📍 내일 할 일<br/>: 주말 강의 마무리 후 과제하기, 프로젝트 코드 리팩토링

### 0602

📍 오늘 한 일<br/>

1. redux, msw 부분 강의 복습 및 정리
2. redux 사용하여 토이 프로젝트 코드 리팩토링 (다른 부분도 추가 수정)
3. 리액트 특별 세션 수강

📍 아쉬웠던 점 <br/>

- 특별 세션 강의를 다시 들을지 아직 손에 익지 않은 redux로 코드를 짜볼지 고민하다가 토이 프로젝트 코드를 redux를 사용하여 리팩토링 하기로 결정하고 코드를 수정해보았다. 시간에 쫓기며 코드를 짤 때는 몰랐는데 가독성이 좋지 않게 코드를 짠 부분이 많은 것 같다는 생각이 들었다.
- nav bar 관련 context를 사용한 부분은 로직이 복잡해서 redux로 수정하는데 실패했다. 강사님께 여쭤보고 로직을 더 고민해보아야 할 것 같다.

📍 내일 할 일<br/>: 프로젝트 코드 리팩토링 마무리, 특별 세션 내용 복습 및 토이 프로젝트 코드 리뷰

### 0603

📍 오늘 한 일<br/>

1. 3조 토이 프로젝트 코드 리뷰 및 회고
2. 0603 강의 내용 복습 및 코드 흐름 정리

📍 토이 프로젝트 회고 <br/>

- tailwindcss 실패했음
  - 아직 새로운 라이브러리를 적용하는 것에 미숙하다는 것이 느껴졌다. 다음 프로젝트를 진행할 때에는 이번 프로젝트에서 써보지 않은 라이브러리들을 새롭게 적용해보면서 접해보지 않은 라이브러리도 빠르게 익숙해질 수 있도록 노력해보아야 할 것 같다.
- 아직 코드를 가독성 있게 짜고 있지 못한 것 같음
  - 시간에 쫓겨 코드를 짜다보니 로직 분리 같은 것들이 제대로 이루어지지 않아 개선해야 할 것 같고, 다른 팀원분들께서 제 코드를 봤을 때에도 이해하시기 쉽도록 주석 사용 등을 더 적극적으로 해야 할 것 같다.
- 전역 상태에 대한 이해가 부족한 것 같음
  - 아직 useContext, useReducer, 더 나아가 redux에 대한 이해가 완전하지 못해 비즈니스 로직을 분리할 수 있었음에도 지저분하게 코드를 짠 부분이 있는 것 같다. 강의에서 다룬 부분이 아니더라도 이를 이용한 코드를 더 짜봄으로써 전역으로 상태를 관리했을 때에는 어떻게 로직을 짜면 좋은지 더 연구해보아야 할 것 같다.

📍 내일 할 일<br/>: React 특별 세션 강의 복습 마무리하여 새로 시작될 플로우에 차질 생기지 않게 하기

### 0604

📍 오늘 한 일<br/>

1. rtx 특별 세션 강의 복습 후 과제 풀이

📍 아쉬웠던 점 <br/>

- 플로우를 진행하기 전 rtx, msw, axios 관련 로직을 확실히 알아두어야 할 것 같아 강의를 다시 복습하고 과제를 제대로 풀어보려고 한다.
- 빠르게 특별 세션 및 강의 복습을 마무리하고 주말 강의 과제를 풀이해보아야 할 것 같다.

📍 내일 할 일<br/>: 두 번째 특별 세션 복습 후 특별 세션 과제

### 0605

📍 오늘 한 일<br/>

1. 두 번째 특별 세션 복습 강의 복습 및 정리

📍 아쉬웠던 점 <br/>

- 완전히 코드를 이해하고 과제에 적용할 수 있도록 꼼꼼하게 강의를 듣고 있는데 막히는 부분이 새로운 진도 부분이 아니라 비동기 함수에 관련된 부분이라는 생각이 들었다. 비동기 함수에 관한 복습이 필요할 것 같다.

📍 내일 할 일<br/>: 두 번째 특별 세션 복습 복습 마무리 후 특별 세션 과제

### 0606

📍 오늘 한 일<br/>

1. rtk 사용해서 추가, 수정, 삭제 구현 완료. 해당 코드 thunk 사용해서 수정 시도

📍 아쉬웠던 점 <br/>

- rtk를 사용하여 코드를 구현하는 것까지는 어느 정도 흐름을 이해하면서 하고 있다고 생각했는데, thunk로 로직을 구현하기 시작하니 제대로 이해하지 못하고 코드를 치고 있다는 느낌이 들었다.

📍 내일 할 일<br/>: 특별 세션 과제 마무리, 주말 강의 복습

### 0607

📍 오늘 한 일<br/>

1. 특별 세션 과제 마무리, 주말 강의 복습 중

📍 아쉬웠던 점 <br/>

- 몇 시간 동안 과제를 붙잡고 있었는데 결국 수정은 thunk를 사용하여 구현하는 데 실패했다. 주말 강의 복습/과제 마무리 후 시간이 남으면 다시 시도해보아야겠다.

📍 내일 할 일<br/>: 주말 강의 복습 마무리 후 과제 풀이

### 0608

📍 오늘 한 일<br/> 1.주말 강의 복습 (필기 노트 주소 첨부)
<br/>
https://gentle-tin-2c4.notion.site/D11-12-7c140562a3b049f0aa06fbd702d21c30?pvs=4 <br/>
📍 아쉬웠던 점 <br/>

- 평소에는 강의 복습을 최대한 짧게 끝내고 과제를 바로 해보면서 이해를 하는 편인데, 이번에는 강의 복습에 시간을 거의 다 잡아 먹었고 그럼에도 진도가 더딘 것 같아 속상하다. 시간 안에 과제를 완벽하게 구현하지 못하더라도 최대한 풀어보고, 조원분들의 코드를 보면서 조금 더 연구해보아야 할 것 같다.

📍 내일 할 일<br/>: 주말 강의 복습 마무리 후 과제 풀이

### 0609

📍 오늘 한 일<br/> 1.주말 강의과제 풀이
<br/>
📍 아쉬웠던 점 <br/>

- 시간 내에 과제를 마무리하지 못할까봐 걱정했는데 복습을 오래한 만큼 과제는 빠르게 끝난 것 같아서 다행이다. 다만, 급하게 코드를 짜다보니 더 효율적으로 로직 분리를 할 수 있는 부분을 생각하지 못했다는 사실을 팀원분들의 코드를 보면서 알게 되어서 시간을 들여 코드들을 리팩토링 해볼 예정이다.

📍 내일 할 일<br/>: 강의 복습, 코드 리팩토링
