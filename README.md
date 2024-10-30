## 키보드 워리어의 손쉬운 리덕스!


귀찮아... 쉽게 쓰고싶어..!

thunk 함수만 잘 생성한다면 리덕스를 언제 어떤 프로젝트에서든 쉽게 구현할 수 있어요!!!

### 1. 슬라이스 생성

makeSlice 함수를 사용합시다!!
> 필수요소
- name : 문자열이어야 하며, 상태값의 이름을 정하기 때문에 unique 한 값을 할당해주세요.
- state : 초기 상태값을 할당해주시면 됩니다.
- asyncFuncs : extraReducers에 적용할 함수와 액션을 작성해주시면 됩니다.


예시
```js
import {makeSlice} from 'warriorsredx/src/create/slice';

const state = {
  userData : {
    name : '',
    nickName : '',
    email : '',
    role : 0
  },
  isAuth : false,
  isLoading : false,
  error : ''
};

const asyncFuncs = [
  {
    action : AsyncFuncName.pending,
      func : (state) => {
      state.isAuth = false;
      state.isLoading = true;
    }
  },
  {
    action : AsyncFuncName.fulfilled,
      func : (state, action) => {
        state.userData = action.payload;
        state.isAuth = true;
        state.isLoading = false;
    }
  },
  {
    action : AsyncFuncName.rejected,
      func : (state, action) => {
        state.isAuth = false;
        state.isLoading = false;
        state.error = action.error.message;
    }
  }
]

const userSlice = makeSlice('user', state)

```


