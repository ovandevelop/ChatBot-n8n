<script>
  async function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim();
    if (!message) return;
    const chat = document.getElementById("chatbox");
    const userMsg = document.createElement("div");
    userMsg.className = "user";
    userMsg.innerText = "ADMIN : " + message;
    chat.appendChild(userMsg);
    chat.scrollTop = chat.scrollHeight;
    input.value = "";
    
    try {
      const response = await fetch("آدرس وب هوک یعنی اولین نود n8n", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: message })
      });
      
      const data = await response.json();
      const botMsg = document.createElement("div");
      botMsg.className = "bot";
      botMsg.innerText = "پاسخ: " + (data.reply || "پاسخی دریافت نشد.");
      chat.appendChild(botMsg);
      chat.scrollTop = chat.scrollHeight;
    } catch (err) {
      const errMsg = document.createElement("div");
      errMsg.className = "bot";
      errMsg.style.color = "red";
      errMsg.innerText = "خطا : ارتباط برقرار نشد.";
      chat.appendChild(errMsg);
    }
  }
</script>
