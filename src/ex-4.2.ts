function processData(data: unknown): string {
 if (typeof data === "string") {
    return data.toUpperCase(); // ✅ แปลงเป็นตัวพิมพ์ใหญ่
  } else if (typeof data === "number") {
    return "Not a string"; // ✅ กรณีเป็นตัวเลข
  } else {
    return "Invalid input"; // 🔒 ป้องกันกรณีอื่น (ถ้ามี เช่น boolean, object, etc.)
  }
}

console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"

// Error ที่เจอคือ TypeScript ไม่อนุญาตให้เรียก method บน type 'unknown' โดยไม่เช็คชนิดก่อน
