function processData(data: unknown): string {
  if (typeof data === "string") {
    return data.toUpperCase();
  } else {
    return "Not a string";
  }
}

console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"

// Error ที่เจอคือ
//data เป็น unknown และยังไม่ได้เขียนเงื่อนไขเพื่อเช็คว่า Input เป็น String ทำให้เกิด error
//แก้โดยเพิ่ม if else เช็คเงื่อนไขว่า data === "string"
