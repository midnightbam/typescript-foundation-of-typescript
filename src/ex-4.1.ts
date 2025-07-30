type User = {
  id: string;
  name: string;
  age?: number;
};

function isAdult(user: User): boolean {
  if (user.age === undefined) {
    return false
  }
  else {
    return user.age >= 18;
}
}

const result = isAdult({ id: "u01", name: "John" });
console.log(result); // ควรได้ false

// Error ที่เจอคือ
// เพราะไม่ได้ระบุอายุ
