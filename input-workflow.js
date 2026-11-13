// Only the selected input method is shown. Composition and note editing remain shared.
const inputDescriptions={mic:'錄一段哼唱或口技 → 辨識 → 試聽並採用 → 下方音符區繼續修改。',keyboard:'用電腦鍵盤彈奏並錄製；採用後仍可在音符區修改。',mouse:'直接在下方音符區點選新增、拖曳改音長；左側音名可升降音。',auto:'選擇調性、可用音與曲風，再生成旋律和伴奏。已鎖定的軌道會保留。',file:'選擇 MIDI、MusicXML 或錄音檔。先檢查片段與聲部，再採用。',ai:'直接貼上 AI 回傳的完整專案 JSON；不需要另存文字檔。也可開啟本專案檔案。'};
const mainArea=document.querySelector('main'),sourceBody=document.createElement('div');sourceBody.id='inputSourceBody';
const choice=document.createElement('section');choice.id='inputMethodPanel';choice.innerHTML='<h2>01 / 選擇輸入方式</h2><div class="row"><label>這次怎麼輸入音樂？<select id="inputMethod"><option value="mic">麥克風 · 哼唱／口技</option><option value="keyboard">電腦鍵盤 · 當鋼琴彈奏</option><option value="mouse">滑鼠 · 點選音符</option><option value="auto">選音 · 自動生成</option><option value="file">匯入 · MIDI／樂譜／錄音檔</option><option value="ai">本專案 JSON · AI 貼上</option></select></label><button id="goNoteEditor">前往音符編輯</button></div><p id="inputMethodHint" class="hint"></p>';
mainArea.prepend(sourceBody);mainArea.prepend(choice);
// Move existing controls without recreating them, preserving draft state and handlers.
const storage=document.createElement('section');storage.id='projectStorage';storage.innerHTML='<h2>保留完整作品</h2><p class="hint">JSON 保存本軟體的完整設定。開啟檔案後會先帶入專案欄位，確認套用才取代作品。</p>';
storage.append($('save').closest('.row'));
const sourceDetails=$('exchange').querySelector('details');if(sourceDetails)storage.append(sourceDetails);mainArea.append(storage);
['humPanel','keyboardPanel','musicImportPanel','exchange'].forEach(id=>sourceBody.append($(id)));
$('setup').querySelector('h2').textContent='02 / 調性與伴奏';$('work').querySelector('h2').textContent='03 / 試聽、混音與音符編輯';$('mode').closest('label').hidden=true;
$('bankPanel').open=false;$('performancePanel').open=false;
const editorHeading=Array.from($('work').querySelectorAll('h3')).find(e=>e.textContent==='旋律編輯');editorHeading.parentElement.id='noteEditHeading';
function goToNoteEditor(){ $('noteEditHeading').scrollIntoView({behavior:'smooth',block:'start'}) }
function setInputMethod(method){if(!Object.hasOwn(inputDescriptions,method))method='mic';if(method!=='keyboard'){if(keyboardRecording)finishKeyboard();else releaseKeyboard();keyboardReady=false}if(method!=='mic')$('humAudio').pause();if(method!=='mic'&&humRecorder?.state==='recording'){finishHum();status('已結束錄音並保留辨識流程，切回口哼區可查看。')}$('inputMethod').value=method;const ids={mic:'humPanel',keyboard:'keyboardPanel',file:'musicImportPanel',ai:'exchange'};Object.values(ids).forEach(id=>$(id).hidden=id!==ids[method]);sourceBody.hidden=!ids[method];$('inputMethodHint').textContent=inputDescriptions[method];$('mode').value=method==='auto'?'auto':method==='mic'?'hum':'manual';$('generate').textContent=method==='auto'?'✦ 生成旋律與伴奏':'✦ 保留主旋律，生成其他伴奏';$('rule').closest('label').hidden=method!=='auto';$('goNoteEditor').textContent=method==='mouse'?'開始點選音符':'前往音符編輯'}
$('inputMethod').onchange=()=>setInputMethod($('inputMethod').value);$('goNoteEditor').onclick=goToNoteEditor;
const projectFileHandler=$('file').onchange;$('file').onchange=async e=>{await projectFileHandler(e);setInputMethod('ai');$('exchange').scrollIntoView({behavior:'smooth',block:'start'})};
for(const [id,result]of [['applyHum','humStatus'],['keyboardApply','keyboardStatus'],['applyMusicImport','musicImportStatus']]){const handler=$(id).onclick;$(id).onclick=async e=>{await handler(e);if((window.uiSourceText?window.uiSourceText($(result)):$(result).textContent).startsWith('已採用')){status('已採用輸入。下方音符可直接調整音高、長短與刪除；其他伴奏仍可另外生成。');goToNoteEditor()}}}
const loadComposition=load;load=raw=>{loadComposition(raw);setInputMethod($('inputMethod').value)};
setInputMethod('mic');
