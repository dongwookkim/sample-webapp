# sample-webapp



### Vue 관련 링크
- 공식사이트 : https://vuejs.org/ 
- 한글 공식 사이트 : https://kr.vuejs.org/index.html
- 가이드 : https://kr.vuejs.org/v2/guide/
- vuex : https://vuex.vuejs.org/kr/

### 개발환경 

- vue 스타일 가이드
    - https://kr.vuejs.org/v2/style-guide/index.html 


### 필수 설치 VS code Extension

- Vetur
    - .vue 파일의 코드 하이라이팅
    
- ESLint
    - 코딩 컨벤션, 문법검사 도구 - 코드 퀄리티 관리
    - 설정파일 : .eslintrc.js

- Prettier
    - 코드 스타일 적용
    - 설정파일 : .prettierrc.json
    - doc : https://prettier.io/docs/en/options.html
    
- Vue VSCode Snippets
    - vue 코드 조각 자동완성


### ESLint / Prettier

- vscode 설정 추가 (setting.json)
    - 파일저장 시점에 자동 보정.
    - setting.json 파일에 아래 옵션 추가
        ```json
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true
        },
        "editor.tabSize": 2
        ```

- prettier 설정
    - 설정 파일 : .prettierrc.json
    ```json
    {
        "singleQuote": true,
        "semi": false,
        "useTabs": false,
        "tabWidth": 2,
        "trailingComma": "all",
        "printWidth": 80,
        "bracketSpacing": true,
        "arrowParens": "avoid",
        "endOfLine": "auto"
    }
    ```
- eslint 검사 제외
    - .eslintignore 파일에 검사 제외할 경로 추가





