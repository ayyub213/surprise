// ===== ELEMENTS =====
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const countdownEl = document.getElementById("countdown");
const music = document.getElementById("music");

// ===== YOUR BIRTHDAY MESSAGE =====
const text = `happyyy birthdaayyy babbyyyy kaisaa laga mera surpriseee yhi bana rhe the itne dino se bdi mushkil se bana Khair apke liye kch bhiii muuuaaaahhhh happyyy birthdaayyy babbyyyy muuuaaaahhhh aabb tohhh aaapp bdiii hooo gyiiii pr hmse choti hi hooo koiii nhiii muuaaaaaaahhhh kitniii pyaaarrriii hoooo meri life meii jbse aayiii hooo life msttt krdiiii aapke saathhh saarii lifee rhengeee hmesha hmesha jaaannn meriii abhi mere paas itne money nhi ki apke liye bde gifts laaye pr jitna kr skte hai utna kr rhe baaddd meiii dekhnaaaaa raattt koo aiseee aiseee surprise dengeee birthdayy prr khush hoo jaaogiii. Jaaannn merriiii. Apkeee saathhh jb tk rhenge jb tk khtm nhi ho jaate uske baad bhi jannat mei bhi saath rhenge biwi bn jaaogii naaaaa. Mini versionss bhiii banayenge apkee saathhh pyaare pyaare. Phir sb saathhh mei ghuma jayegaaa. Aaap itniii happyyy krdiii. Thankss yusraaa hmeee itnaa supporttt krneee kee liyeeeee hmesha mere saath rehne ke liyee hme kbhi rone naa dene ke liyeee hme khush rkhnee ke liyeee hmeee itnaa pyaar deneee ke liyeeee. Apkee saaathh hmeshaa rhengee jaaann. Muuuuuuaaaaaahhhhh. Muuaaaaaaahh. Last time happyyyy birthdaayyy babbbyyyyyyy`;

// ===== TYPING EFFECT =====
let i = 0;
function startTyping() {
  const msg = document.getElementById("message");
  if (i < text.length) {
    msg.innerHTML += text.charAt(i);
    i++;
    setTimeout(startTyping, 35);
  }
}

// ===== TIME LOGIC =====
const now = new Date();

// Midnight at START of today (00:00)
const todayMidnight = new Date();
todayMidnight.setHours(0, 0, 0, 0);

// If it's already her birthday → unlock instantly
if (now >= todayMidnight) {
  page1.classList.add("hidden");
  page2.classList.remove("hidden");
  startTyping();
  music.play().catch(() => {});
} else {
  // Countdown till midnight
  function updateCountdown() {
    const diff = todayMidnight - new Date();

    if (diff <= 0) {
      page1.classList.add("hidden");
      page2.classList.remove("hidden");
      startTyping();
      music.play().catch(() => {});
      clearInterval(timer);
      return;
    }

    const h = Math.floor(diff / (1000 * 60 * 60));
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    countdownEl.textContent =
      String(h).padStart(2, "0") + ":" +
      String(m).padStart(2, "0") + ":" +
      String(s).padStart(2, "0");
  }

  const timer = setInterval(updateCountdown, 1000);
  updateCountdown();
}
