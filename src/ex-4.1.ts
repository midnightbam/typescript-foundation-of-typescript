type User = {
  id: string;
  name: string;
  age?: number;
};

function isAdult(user: User): boolean {
  return user.age !== undefined && user.age >= 18;
}

const result = isAdult({ id: "u01", name: "John" });
console.log(result); // ควรได้ false

// Error ที่เจอคือ
//user.age เป็น optional เพราะมี ? กำหนดไว้ ใน const result = isAdult({ id: "u01", name: "John" }) นั้นไม่มีการกำหนดค่าให้ age ทำให้ age กลายเป็นค่า undefined เลยทำให้เกิด error
//แก้โดยเพิ่ม user.age !== undefined && user.age >= 18; เพื่อเช็คว่า age ไม่ใช่ undefined ด้วย
