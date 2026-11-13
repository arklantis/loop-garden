/* Presentation-only localization. Raw model values and user content are never translated. */
(()=>{
let language='en';try{language=localStorage.getItem('loop-garden-language')==='zh-Hant'?'zh-Hant':'en'}catch{}
const textState=new WeakMap(),attributeState=new WeakMap(),entries=Object.entries(UI_EN).sort((a,b)=>b[0].length-a[0].length);
const skip='script,style,textarea,[contenteditable="true"],[data-i18n-skip]';
const patterns=[
 [/^辨識結果約 ([\d.]+) 拍，超過 8 小節。請縮短錄音、降低 BPM，或勾選壓縮後重新分析$/,(m,n)=>`The transcription is about ${n} beats, over 8 bars. Shorten the recording, lower BPM, or enable Fit and analyze again.`],
 [/^版本 (\d+)(.*)$/,(m,n,tail)=>`Version ${n}${translate(tail)}`],
 [/^第 (\d+) 小節$/,(m,n)=>`Bar ${n}`],
 [/^(\d+) 小節$/,(m,n)=>`${n} bars`],
 [/^來源聲部 (\d+) 目標$/,(m,n)=>`Target for source part ${n}`],
 [/^目前 (\d+) 列。/,(m,n)=>`${n} rows. `],
 [/有 (\d+) 個音在其他八度，切換上方八度可見。/,(m,n)=>`${n} notes are in other octaves; change the octave above to see them. `],
 [/整列已改為 (.+)，更新 (\d+) 個音；新增音符也沿用。/,(m,p,n)=>`Row changed to ${p}; updated ${n} notes. New notes use this pitch too.`],
 [/^(.+) · 第 ([\d.]+) 拍 · 長 ([\d.]+) 拍(.*)$/,(m,p,s,d,a)=>`${p} · Beat ${s} · Length ${d} beats${a?' · Pizzicato':''}`],
 [/^辨識 (\d+) 個音 · (\d+) 小節 · ([\d.]+) BPM/,(m,n,b,t)=>`Transcribed ${n} notes · ${b} bars · ${t} BPM`],
 [/^錄製結束：(\d+) 個音，原作品尚未變動。$/,(m,n)=>`Recording finished: ${n} notes. Your composition has not changed.`],
 [/^正在錄音 (\d+) \/ 45 秒$/,(m,n)=>`Recording ${n} / 45 seconds`],
 [/^鍵盤已啟用：A 從 (.+) 開始。按鍵位置固定，不隨 Key 自動移動。$/,(m,p)=>`Keyboard enabled: A starts at ${p}. Key positions stay fixed when the musical key changes.`],
 [/^已採用到「(.+)」並鎖定。其他聲部保留；需要新伴奏時，再按「生成新版本」。$/,(m,n)=>`Applied to ${translate(n)} and locked. Other tracks are preserved; generate again for new accompaniment.`],
 [/^已將「(.+)」換成 (.+)$/,(m,n,i)=>`Changed ${translate(n)} to ${translate(i)}`],
 [/^正在試聽：(.+) · 可按停止結束$/,(m,n)=>`Auditioning ${translate(n)} · Press Stop to finish`],
 [/^已更新「(.+)」效果；再次播放或匯出 WAV 會套用。$/,(m,n)=>`Updated effects for ${translate(n)}. Play or export audio to hear them.`],
 [/^已更新 (\d+) 個音的演奏法；其餘音符保持原設定。$/,(m,n)=>`Updated articulation for ${n} notes; other notes were preserved.`],
 [/^已套用規則節奏：(\d+) 個音。觸發機率已固定成譜，可繼續編輯。$/,(m,n)=>`Applied Euclidean rhythm: ${n} notes. Probability is baked into this editable score.`],
 [/^已讀取「(.+)」。尚未套用；按「檢查並套用專案 JSON」會取代完整作品。$/,(m,n)=>`Read “${n}”. Not applied yet. Validate and apply project JSON replaces the entire composition.`],
 [/^讀取成功：(\d+) 個聲部，約 ([\d.]+) 拍。原作品尚未變動；可選最多四個聲部與 2／4／8 小節片段。$/,(m,n,b)=>`Read ${n} parts, about ${b} beats. Your composition is unchanged. Choose up to four parts and an excerpt of 2, 4 or 8 bars.`],
 [/將採用 (\d+) 個音符，放在作品第 0 拍開始；作品共 (\d+) 個四拍小節，([\d.]+) BPM。/,(m,n,b,t)=>`Apply ${n} notes starting at beat 0; project length ${b} bars of four beats, ${t} BPM.`],
 [/只採用第 ([\d.]+)–([\d.]+) 拍；跨邊界音符會裁切。/,(m,a,b)=>`Only beats ${a}–${b} are included. Notes crossing the boundaries are trimmed.`],
 [/(\d+) 個音超出目前 C1–C8 音域，將略過。/,(m,n)=>`${n} notes outside the supported C1–C8 range will be skipped.`],
 [/ · (\d+) 音 → /,(m,n)=>` · ${n} notes → `],
 [/^(.*)樂器$/,(m,n)=>`${translate(n)} instrument`],
 [/^(.*)演奏方式$/,(m,n)=>`${translate(n)} playing style`],
 [/^(.*)音量$/,(m,n)=>`${translate(n)} volume`],
 [/ @ ([\d.]+) 拍 \/ ([\d.]+) 拍/g,(m,a,b)=>` @ beat ${a} / ${b} beats`],
 [/ · ([\d.]+) 拍 \/ ([\d.]+) 拍/g,(m,a,b)=>` · beat ${a} / ${b} beats`]
];
function translate(raw){const sourcePart=/^(.*) · (\d+) 音 → $/.exec(raw);if(sourcePart)return sourcePart[1]+' · '+sourcePart[2]+' notes → ';const trimmed=raw.trim();if(Object.hasOwn(UI_EN,trimmed))return raw.replace(trimmed,UI_EN[trimmed]);let value=raw;for(const [pattern,replacement]of patterns)value=value.replace(pattern,replacement);for(const [from,to]of entries)if(value.includes(from))value=value.split(from).join(to);return value}
window.uiTranslate=translate;
window.uiSourceText=function sourceText(el){if(el.nodeType===3){const saved=textState.get(el);return saved&&saved.output===el.data?saved.source:el.data}return Array.from(el.childNodes).map(sourceText).join('')};
function localizeText(node){if(!node.parentElement||node.parentElement.closest(skip))return;const saved=textState.get(node),source=saved&&saved.output===node.data?saved.source:node.data;if(node.parentElement.id==='musicImportFilename'&&source!=='尚未選檔')return;const output=language==='en'?translate(source):source;textState.set(node,{source,output});if(node.data!==output)node.data=output}
const attributes=['title','placeholder','aria-label','label'];
function localizeAttributes(el){if(el.closest(skip))return;let saved=attributeState.get(el);if(!saved){saved={};attributeState.set(el,saved)}for(const attr of attributes){if(!el.hasAttribute(attr))continue;const current=el.getAttribute(attr),old=saved[attr],source=old&&old.output===current?old.source:current,output=language==='en'?translate(source):source;saved[attr]={source,output};if(current!==output)el.setAttribute(attr,output)}}
function localize(root){if(root.nodeType===3)return localizeText(root);if(root.nodeType!==1&&root.nodeType!==9)return;if(root.nodeType===1){if(root.closest(skip))return;localizeAttributes(root)}const walker=document.createTreeWalker(root,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT);while(walker.nextNode()){const node=walker.currentNode;if(node.nodeType===3)localizeText(node);else localizeAttributes(node)}}
const control=document.createElement('label');control.className='language-control';control.dataset.i18nSkip='';control.innerHTML='<span>語言 / Language</span><select id="uiLanguage" aria-label="語言 / Language"><option value="zh-Hant">繁體中文</option><option value="en">English</option></select>';document.querySelector('header').append(control);
const defaultWish='保留主旋律，只改寫伴奏，讓它適合安靜的遊戲場景。';
function setLanguage(value){language=value==='en'?'en':'zh-Hant';document.documentElement.lang=language;document.querySelector('#uiLanguage').value=language;try{localStorage.setItem('loop-garden-language',language)}catch{}const wish=$('wish');if([defaultWish,UI_EN[defaultWish]].includes(wish.value))wish.value=language==='en'?UI_EN[defaultWish]:defaultWish;localize(document.documentElement)}
document.querySelector('#uiLanguage').onchange=e=>setLanguage(e.target.value);
const observer=new MutationObserver(changes=>{for(const c of changes){if(c.type==='childList')c.addedNodes.forEach(localize);else if(c.type==='characterData')localizeText(c.target);else localizeAttributes(c.target)}});
observer.observe(document.documentElement,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:attributes});
const originalPrompt=$('prompt').onclick;$('prompt').onclick=()=>{if(language!=='en')return originalPrompt();const p=project();$('exchangeText').value=`You are a music arrangement assistant. Style: ${translate(genreDefinitions[p.genre].name)}. Mood: ${translate(moodDefinitions[p.mood].name)}. Request: ${$('wish').value}\nReturn only a complete JSON project using the schema below, not executable code. Preserve format, the four tracks, track names and all locked tracks exactly. When keepInstruments is true, preserve each instrument. Do not change key, scale or BPM unless requested. Pitch is a MIDI integer 24–108. start and duration are in quarter-note beats; start >= 0, duration > 0, start + duration <= bars * 4. velocity and volume are 0–1; bpm 50–180; bars 2, 4 or 8; key 0–11; scale major, minor or custom. Use selected pitch classes for the melody; rule=core permits passing tones in the scale. Keep accompaniment in the key, or within selected notes for a custom scale. Drum pitches: 36 kick, 38 snare, 42 hi-hat. Allowed instrument IDs: ${Object.keys(instruments).join(', ')}. Preserve pan, effects and ensemble. Optional note articulation: default, arco or pizzicato, only for corresponding violin/cello sounds. Do not invent audio files.\nComplete current project:\n${JSON.stringify(p,null,2)}`;status('編曲要求已產生，請複製到你使用的 AI')};
setLanguage(language);
})();
