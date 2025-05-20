// در اینجا ما پیامو دریافت میکنیم
const userMessage = $json["message"]?.toLowerCase().trim();

// بررسی میکنیم بینم معتبره آیا
if (!userMessage) {
  return [
    {
      json: {
        reply: "❌ پیام شما نامعتبر هست"
      }
    }
  ];
}

// تمام دیتا های شیت رو میگیریم اینجا
const rows = $items();

// خب اینجا تو ستون اول پیدا میکنیم پیام کاربر رو
const found = rows.find(row => {
  const question = Object.values(row.json)[0];
  return question?.toLowerCase().trim() === userMessage;
});

// اینجا اگر پاسخی بود دریافتش میکنیم
const answer = found ? Object.values(found.json)[1] : null;

// و اینم در صورتیه که چیزی نبود
return [
  {
    json: {
      reply: answer && answer.trim() !== ""
        ? answer.trim()
        : "متاسفانه در این مورد اطلاعاتی ندارم، سوال دیگری بپرسید"
    }
  }
];
