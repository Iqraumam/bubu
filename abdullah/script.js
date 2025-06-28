// ✨ Your 100 reasons list ✨
const reasons = [
  "“I love how your smile lights up my day bubu.💋”",
  "“I love your voice when you first wake up my kuchikoo.💋”",
  "“I love the way you hold my hand so perfectly.💋”",
  "“I love how you always make me laugh when I least expect it.💋”",
  "“I love your eyes that look at me like I’m your whole world.💋”",
  "“I love the way you calm me when I overthink everything.💋”",
  "“I love the way you listen to me even when I ramble.💋”",
  "“I love how you never give up on me💋.”",
  "“I love the way you softly say my name💋.”",
  "“I love your hugs that make me feel safe like home💋.”",
  "“I love the way you get excited when you talk about something you love.💋”",
  "“I love how you remember tiny details about me.💋💋”",
  "“I love the way you whisper ‘I love you’ at the most random moments.💋💋💋”",
  "“I love the way you always check in on me.💋”",
  "“I love how you make me feel like the most special person in the world.💋”",
  "“I love the way you stay patient with me even when I’m stubborn.💋💋💋💋”",
  "“I love how you always know exactly what to say to cheer me up.💋💋💋”",
  "“I love your goofy laugh when something really cracks you up.💋💋💋”",
  "“I love the way you hold me when I’m sad.💋💋💋”",
  "“I love how you support my dreams like they’re your own.💋💋”",
  "“I love how you look at me like I’m magic.💋💋💋”",
  "“I love how you always make time for me no matter how busy you are.💋💋💋”",
  "“I love how you sing when you think nobody is listening.💋💋💋”",
  "“I love the way you spoil me with love, not things💋💋💋.”",
  "“I love your sleepy voice when you answer my late-night calls.💋💋💋”",
  "“I love the way you laugh at your own jokes💋💋💋”",
  "“I love how you respect me and my boundaries💋💋💋.”",
  "“I love how you always tell me to take care of myself💋💋💋.”",
  "“I love how you never forget to say good morning and good night💋💋💋.”",
  "“I love the way you hold my face and look into my eyes.💋💋💋”",
  "“I love how you always reassure me when I doubt myself.💋💋💋”",
  "“I love how you remember the small dates that matter to me💋💋💋.”",
  "“I love how you playfully tease me just to make me smile.💋💋💋”",
  "“I love how you randomly send me cute texts just because.💋💋💋”",
  "“I love the way you take care of me when I’m not feeling well💋💋💋.”",
  "“I love how you never fail to remind me how much I’m loved💋💋💋.”",
  "“I love the way you get jealous in the cutest way possible💋💋💋.”",
  "“I love how you always hold my hand in public💋💋💋.”",
  "“I love how we laugh until our stomachs hurt💋💋💋.”",
  "“I love the way you smile when you see me💋💋💋.”",
  "“I love how you make boring things so much fun💋💋💋.”",
  "“I love how you’re not afraid to be goofy with me💋💋💋.”",
  "“I love the way you look at me when you think I’m not noticing💋💋💋.”",
  "“I love the way you say ‘mine’ when you hug me tight💋💋💋.”",
  "“I love how your voice instantly makes me feel better💋💋💋”",
  "“I love how you get excited for our little plans.💋💋💋”",
  "“I love how you care about my feelings so deeply.💋💋💋”",
  "“I love the way you trust me with your secrets💋💋💋.”",
  "“I love how you always motivate me to be better💋💋💋.”",
  "“I love the way you randomly say ‘I’m lucky to have you💋💋💋.’”",
  "“I love how you let me be completely myself around you💋💋💋.”",
  "“I love the way you protect me without even realizing it💋💋💋.”",
  "“I love how you remember my favorite things💋💋💋.”",
  "“I love the way you say ‘I miss you’ even if we just talked💋💋💋.”",
  "“I love how you plan surprises just to see me smile💋💋💋.”",
  "“I love the way you hold me tighter when I try to leave.💋💋💋”",
  "“I love how you never let me face anything alone💋💋💋.”",
  "“I love how your hugs melt away all my stress💋💋💋.”",
  "“I love the way you wink at me just to make me blush💋💋💋.”",
  "“I love how we can talk about anything and everything💋💋💋.”",
  "“I love the way you laugh at my silliness💋💋💋.”",
  "“I love how you call me cute names that no one else does💋💋💋.”",
  "“I love how you always remind me to eat and rest💋💋💋.”",
  "“I love the way you look into my eyes like you see my soul💋💋💋.”",
  "“I love how you celebrate my tiniest achievements💋💋💋.”",
  "“I love how you never get tired of hearing about my day💋💋💋.”",
  "“I love how your presence alone makes me feel better💋💋💋.”",
  "“I love how you hold my waist when we walk together💋💋💋.”",
  "“I love the way you play with my hair when I’m close to you💋💋💋.”",
  "“I love how you make me feel safe, always💋💋💋.”",
  "“I love how you’re the first person I want to tell everything to.💋💋💋”",
  "“I love the way you remember my favorite songs💋💋💋.”",
  "“I love how you love me even when I’m moody💋💋💋.”",
  "“I love the way you randomly kiss my forehead💋💋💋.”",
  "“I love how you cheer me up when I overthink💋💋💋.”",
  "“I love how your laughter becomes my favorite sound💋💋💋.”",
  "“I love how you stay up just to talk to me when I can't sleep.”",
  "“I love the way you get flustered when I compliment you.”",
  "“I love how you always make me feel like I belong.”",
  "“I love the way you giggle when I do something silly.”",
  "“I love how you care about my happiness like it’s your own💋💋💋.”",
  "“I love how you always listen even when you’re tired💋💋💋.”",
  "“I love the way you squeeze my hand when i get nervous💋💋💋.”",
  "“I love how you never let me go to sleep sad💋💋💋.”",
  "“I love how your voice can calm my anxiety instantly💋💋💋.”",
  "“I love how you always check if I got home safely💋💋💋.”",
  "“I love how you never let me doubt your love💋💋💋.”",
  "“I love the way you smile at your phone when you text me💋💋💋.”",
  "“I love how you send me memes just to make me laugh💋.”",
  "“I love the way you say ‘I’m proud of you’ when I need it most💋.”",
  "“I love how you never let me forget how loved I am.💋”",
  "“I love the way you comfort me with just a few words💋.”",
  "“I love how you make me believe in forever.💋”",
  "“I love how you always remind me that I deserve the best.💋”",
  "“I love the way you make me laugh even when I’m crying💋.”",
  "“I love how you show me that love can be gentle.”",
  "“I love how you never run out of ways to make me feel special💋💋💋.”",
  "“I love how your love feels like home💋💋💋.”",
  "“I love how you make me feel like the luckiest person alive💋💋💋.”",
  "“I love the way you simply exist and make my entire world brighter💋💋💋.”",
  "“I love you for being YOU. 💖”"
];

let day = 100;

const countdown = document.getElementById("countdown");
const reasonTitle = document.getElementById("reason-title");
const reasonText = document.getElementById("reason-text");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

function updateContent() {
  if (day === 0) {
    // Happy Birthday Page
    countdown.innerHTML = "🎂💖 Happy Birthday My Love 💖🎂";
    reasonTitle.innerHTML = "💝 You’ve reached the last day 💝";
    reasonText.innerHTML = "“Wishing you the happiest birthday Abdullah ever. Thank you for being the most wonderful person in my life. I love you endlessly. this is all i could do while sitting at my place for you ik its a very small thing but i hope u will like it . My love my babyboo 💋💋🥰🎉”";
    nextBtn.style.display = "none";
    prevBtn.style.display = "block";
  } else {
    countdown.innerHTML = `💖 ${day} Day${day === 1 ? '' : 's'} Left Until Your Birthday 💖`;
    reasonTitle.innerHTML = `Reason #${101 - day}`;
    reasonText.innerHTML = reasons[101 - day - 1] || "“Reason coming soon...”";
    nextBtn.style.display = day > 0 ? "block" : "none";
    prevBtn.style.display = day < 100 ? "block" : "none";
  }
}

nextBtn.addEventListener("click", () => {
  if (day > 0) {
    day--;
    updateContent();
  }
});

prevBtn.addEventListener("click", () => {
  if (day < 100) {
    day++;
    updateContent();
  }
});

updateContent();
