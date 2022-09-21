// 생성자 함수
// 두가지의 작성방식 지원

// 예제
function OldConstructor(id, name, type) {
  this.id = id;
  this.name = name;
  this.type = type;
}
const oldinstance = new OldConstructor(1, "이상해씨", "풀");
console.log(oldinstance);

// ----------------------------------------------------------------

class NewConstructor {
  constructor(id, name, type) {
    this.id = id;
    this.name = name;
    this.type = type;
  }
}

const newInstance = new NewConstructor(4, "파이리", "불");
console.log(newInstance);

class pocketmon extends NewConstructor {
  constructor(id, name, type, pocket) {
    super(id, name, type);
    this.pocket = pocket;
  }
}

const newPocket = new pocketmon(1, "꼬부기", "물", "포켓몬이다");

console.log(newPocket);
