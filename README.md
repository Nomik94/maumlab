# 마음연구소 과제

---

## 사용 기술

- Typescript
- NestJS
- GraphQL
- TypeORM
- PostgreSQL

## 실행 방법

1. 코드를 복사해주세요.

```bash
$ git clone https://github.com/Nomik94/maumlab.git
```

2. 의존성 패키지를 설치해주세요.

```bash
$ yarn install
```

3. `.env` 파일을 만들어주세요.

```dotenv
NODE_ENV='dev'

DB_HOST=데이터베이스 주소        ex)'localhost'
DB_PORT=데이터베이스 포트        ex)5432
DB_USERNAME=데이터베이스 유저이름 ex)'root'
DB_PASSWORD=데이터베이스 비밀번호 ex)'1234'
DB_DATABASE=데이터베이스 이름    ex)'maumlab'
```

4. 서버를 실행해주세요.

```bash
$ yarn run start:dev
```

## 안내 사항

warn level의 로그와 error level의 로그는 /logs에 저장됩니다.
