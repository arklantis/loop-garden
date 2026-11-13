// UI text only: project IDs, pitches, imported names and user-entered text stay intact.
const UI_EN = Object.fromEntries(`
Loop Garden · 音樂實驗室|Loop Garden · Music Lab
音樂生成實驗室 / LOCAL PROTOTYPE|MUSIC LAB / LOCAL PROTOTYPE
把幾個音，種成一首曲子。|Grow a few notes into a piece of music.
音源已內建 · 不使用 AI 額度|Built-in sounds · No AI credits required
01 / 選擇輸入方式|01 / Choose your input
這次怎麼輸入音樂？|How would you like to enter music?
麥克風 · 哼唱／口技|Microphone · Humming / beatboxing
電腦鍵盤 · 當鋼琴彈奏|Computer keyboard · Play like a piano
滑鼠 · 點選音符|Mouse · Draw notes
選音 · 自動生成|Choose notes · Generate music
匯入 · MIDI／樂譜／錄音檔|Import · MIDI / score / audio
本專案 JSON · AI 貼上|Project JSON · Paste from AI
前往音符編輯|Go to note editor
開始點選音符|Start drawing notes
錄一段哼唱或口技 → 辨識 → 試聽並採用 → 下方音符區繼續修改。|Record humming or beatboxing → Transcribe → Preview and apply → Edit the notes below.
用電腦鍵盤彈奏並錄製；採用後仍可在音符區修改。|Play and record with your computer keyboard, then continue editing the notes below.
直接在下方音符區點選新增、拖曳改音長；左側音名可升降音。|Click the grid below to add notes. Drag their right edge to resize; click a row label to change its accidental.
選擇調性、可用音與曲風，再生成旋律和伴奏。已鎖定的軌道會保留。|Choose a key, available notes and style, then generate melody and accompaniment. Locked tracks are preserved.
選擇 MIDI、MusicXML 或錄音檔。先檢查片段與聲部，再採用。|Choose a MIDI, MusicXML or audio file. Review the excerpt and track mapping before applying.
直接貼上 AI 回傳的完整專案 JSON；不需要另存文字檔。也可開啟本專案檔案。|Paste the complete project JSON returned by AI, or open a project file. No separate text file is needed.
02 / 調性與伴奏|02 / Key and accompaniment
03 / 試聽、混音與音符編輯|03 / Playback, mixing and note editing
保留完整作品|Save your complete project
JSON 保存本軟體的完整設定。開啟檔案後會先帶入專案欄位，確認套用才取代作品。|JSON keeps all project settings. Opening a file fills the project field first; your work changes only when you apply it.
01 / 給音樂一個起點|01 / Start a piece
創作方式|Creation mode
哼唱／口技輸入|Humming / beatboxing
選音，自動生成節奏|Choose notes and generate rhythm
手寫旋律，保留節奏|Manual melody, preserve rhythm
曲調|Key
調式|Scale
大調|major
自然小調|natural minor
自訂選音|Custom notes
點選可用音；更換 Key 會將選音與現有旋律一起移調。|Choose available notes. Changing the key transposes the selection and existing pitched tracks.
曲風方向|Musical style
情緒|Mood
保留目前樂器|Keep current instruments
選音規則|Note selection rule
只使用選中的音|Use selected notes only
以選音為主，允許調內經過音|Prefer selected notes; allow passing tones in the key
速度|Tempo
長度|Length
音符密度|Note density
休止機率|Rest probability
循環播放|Loop playback
隨機種子（相同設定可重現）|Random seed (repeatable with the same settings)
換一個隨機種子|New random seed
✦ 生成新版本|✦ Generate a new version
✦ 生成旋律與伴奏|✦ Generate melody and accompaniment
✦ 保留主旋律，生成其他伴奏|✦ Keep melody, generate accompaniment
規則式生成，不需登入。每次生成後固定音符，播放不會偷偷改曲。|Rule-based generation requires no login. Notes stay fixed during playback unless loop variation is enabled.
電腦鍵盤 → 鋼琴鍵盤|Computer keyboard → Piano
白鍵 A S D F G H J K L ;，黑鍵 W E T Y U O P。按住發聲、放開結束；可同時按多鍵。Z／X 降／升八度。文字輸入或選單取得焦點時不攔截。|White keys: A S D F G H J K L ;. Black keys: W E T Y U O P. Hold to sustain, release to stop; chords are supported. Z / X changes octave. Text fields and menus keep normal keyboard input.
起始八度|Starting octave
C2 起|Start at C2
C3 起|Start at C3
C4 起|Start at C4
C5 起|Start at C5
錄製結果對齊半拍|Quantize recording to half-beats
● 準備錄製鍵盤|● Arm keyboard recording
■ 結束鍵盤錄製|■ Finish keyboard recording
採用到目前編輯軌道|Apply to the current track
按一下「啟用鍵盤」後即可彈奏；音色使用目前編輯軌道。|Enable the keyboard to play using the current track's instrument.
啟用鍵盤／回到演奏|Enable keyboard / Resume playing
錄製會保留音長、休止與同時發聲。第一個音開始計時，最多錄到目前設定的小節長度。|Recording preserves note lengths, rests and chords. Timing starts on the first note and ends at the current project length.
哼唱／口技 → 指定聲部|Humming / beatboxing → Track
單人清唱即可，不必知道音名。先設定大約速度；哼唱辨識音高、長短與停頓，口技辨識敲擊時間。錄音僅在本機處理，最長 45 秒。|Hum a solo melody; no note names needed. Set an approximate tempo first. Humming captures pitch, length and pauses; beatboxing captures hits. Audio is processed on this device, up to 45 seconds.
這段聲音要放在哪裡？|Which track is this recording for?
主旋律 · 辨識音高與節奏|Melody · Detect pitch and rhythm
伴奏 · 辨識單音樂句|Accompaniment · Detect a single-note phrase
低音 · 辨識單音樂句|Bass · Detect a single-note phrase
鼓節奏 · 辨識口技敲擊|Drums · Detect beatboxing hits
伴奏可先錄一條單音樂句；這版不辨識同時唱出的多音和弦。口技鼓聲分類是粗略估計，可在編輯區修正。|Record one note at a time for accompaniment; simultaneous chords are not recognized. Beatboxing drum classification is approximate and can be edited afterwards.
● 開始哼唱錄音|● Start recording
■ 結束錄音|■ Stop recording
匯入錄音|Import audio
尚未錄音。可先試用示範，了解辨識流程。|No recording yet. Try the demo to explore transcription.
對齊半拍節奏|Quantize to half-beats
修正到目前調性／自訂選音|Snap to the current key / selected notes
去掉開頭等待，保留中間休止|Trim leading silence; keep rests within the phrase
太長時壓縮至 8 小節（會改節奏）|Fit long recordings into 8 bars (changes rhythm)
辨識／重新分析|Transcribe / Analyze again
試用示範哼唱音色|Try the synthetic humming demo
▶ 試聽辨識旋律|▶ Preview transcription
採用到指定聲部|Apply to the selected track
辨識結果會先顯示在這裡，不會直接覆蓋作品。|Transcription appears here first and does not overwrite your work.
這版不自動猜速度：按目前 BPM 換算拍數；不勾節奏對齊時保留原始時間。滑音、氣音、雜音或連續同音可能需要修正。示範是合成測試聲音，不代表真人辨識準確率。|Tempo is not detected automatically: beats use the current BPM. Without quantization, original timing is retained. Slides, breath, noise and repeated pitches may need correction. The demo is synthetic and does not measure real-voice accuracy.
02 / 試聽與調整|02 / Listen and edit
▶ 播放|▶ Play
■ 停止|■ Stop
輸出格式|Export format
WAV · 完整音訊|WAV · Uncompressed audio
MP3 · 壓縮音訊|MP3 · Compressed audio
MIDI · 可編輯音符|MIDI · Editable notes
MusicXML · 樂譜|MusicXML · Sheet music
匯出檔案|Export file
準備播放|Ready to play
已停止|Stopped
播放中…|Playing…
音色試聽 · 獨奏／群奏／中國樂器|Audition sounds · Solo / section / Chinese instruments
選擇音色|Choose a sound
▶ 試聽同一段旋律|▶ Audition the same phrase
套用到目前編輯軌道|Apply to the current track
各種音色都有名稱標示；中國樂器目前是合成近似，並非真人取樣。每軌的 3／6 聲部合奏模擬是同音源疊加，不是真實群奏錄音。比較獨奏與群奏請選兩種小提琴。|Chinese instruments are synthesized approximations, not recordings. The 3/6-voice ensemble simulation layers one sound; it is not a recorded section. Compare the solo and section violin sounds to hear real samples of each.
循環變化 · 節奏工具 · 效果器|Loop variation · Rhythm tools · Effects
每輪變化（從下一輪開始，鎖定聲部不變）|Vary each loop (from the next cycle; locked tracks stay unchanged)
變化程度|Variation amount
凍結目前顯示版本|Freeze the displayed version
固定循環|Fixed loop
變化使用同一份起始譜，不會越改越遠。凍結後可直接儲存專案或匯出 WAV；WAV 只輸出目前顯示的一版。|Each variation starts from the same score. Freeze to save or export the displayed version; audio export does not record the whole evolving performance.
規則節奏（歐幾里得分布）|Euclidean rhythm
把指定數量的敲擊盡量均勻分布在每小節。套用會取代目前編輯軌道的音符；已鎖定的軌道需先解鎖。|Distribute a chosen number of hits evenly across each bar. Applying replaces notes on the current track; unlock it first if needed.
每小節格數|Steps per bar
8 格|8 steps
16 格|16 steps
敲擊數|Hits
旋轉格數|Rotation (steps)
觸發機率|Trigger probability
鼓聲|Drum sound
大鼓|Kick
小鼓|Snare
鈸|Hi-hat
目前編輯軌道的效果|Effects for the current track
左右位置|Pan
節拍延遲|Tempo delay
殘響|Reverb
效果調整會停止播放；再次播放即可聽見。延遲間隔跟隨 BPM，為附點八分音符。|Changing effects stops playback. Press Play to hear them. Delay follows the tempo at dotted-eighth intervals.
旋律編輯|Note editor
編輯軌道|Track to edit
點空格新增，再點音符刪除；拖音符右端改長短（每格十六分音符）。點右端或右鍵可選取，再用音長按鈕精確設定。左側音名可整列升降，右鍵可修改單音。空白就是休止。下方文字欄可修改精確時間。電腦鍵盤演奏與錄製請使用上方鋼琴鍵盤區。|Click an empty cell to add a note; click the note body to delete it. Drag its right edge to resize (one cell = a sixteenth note). Click the edge or right-click to select, then use the exact-length buttons. Row labels change accidentals; right-click edits individual notes. Empty space is a rest. The text editor supports precise timing.
新音長|New note length
十六分 · ¼ 拍|Sixteenth · ¼ beat
八分 · ½ 拍|Eighth · ½ beat
四分 · 1 拍|Quarter · 1 beat
二分 · 2 拍|Half · 2 beats
全音符 · 4 拍|Whole · 4 beats
套用音符修改|Apply text edits
演奏法 · 弦樂撥弦與吉他和弦|Articulation · Pizzicato and guitar chords
弦樂：只改指定片段|Strings: apply to a beat range
適用小提琴獨奏／群奏及大提琴群奏。依音符開始拍選取，不會把短音直接冒充撥弦。|For solo/section violin and section cello. Notes are selected by their start beat; pizzicato uses dedicated samples.
開始拍|Start beat
結束拍|End beat
演奏法|Articulation
撥弦 · pizzicato|Plucked · pizzicato
拉奏 · arco|Bowed · arco
跟隨音源|Use instrument default
套用片段演奏法|Apply articulation to range
木吉他：和弦指板配置與掃弦|Acoustic guitar: voicings and strumming
和弦進行（每小節一個，可輸入）|Chord progression (one chord per bar)
演奏方式|Playing style
向下掃弦|Downstroke
向上掃弦|Upstroke
上下交替掃弦|Alternating strums
分解和弦|Arpeggio
套用吉他和弦|Apply guitar chords
採用常見開放和弦或可移動橫按配置，最多六條弦；掃弦音符依序觸發。這版仍是單音取樣組合，沒有真實掃弦／滑指錄音。|Uses common open or movable barre voicings with up to six strings. Strum notes play in sequence using individual samples, not recorded strums or slides.
編輯區八度|Editor octave
顯示方式|Note display
精簡 · 8 列常用音|Compact · 8 diatonic rows
完整 · 13 列半音|Chromatic · 13 semitone rows
所選音符工具|Selected note tools
先點選一個音符|Select a note first
右鍵音符可選取；拖右端調整音長|Right-click to select; drag the right edge to resize
全音符|Whole
二分|Half
四分|Quarter
八分|Eighth
十六分|Sixteenth
選取音符時改音長；未選取時設定新音長。|Sets the selected note's length, or the length for new notes if none is selected.
降半音|Lower a semitone
升半音|Raise a semitone
減半|Halve
加倍|Double
刪除|Delete
音符右鍵選單|Note context menu
音長減半|Halve length
音長加倍|Double length
刪除音符|Delete note
音符時間軸，可左右捲動|Note timeline; scroll horizontally
音符文字編輯|Note text editor
格式：C4@0/1 → C4，從第 0 拍開始，持續 1 拍。休止以音符之間的空白時間表示。|Format: C4@0/1 means C4 starting at beat 0 for 1 beat. Gaps between notes represent rests.
匯入其他音樂檔|Import music files
選擇 MIDI（.mid／.midi）、未壓縮 MusicXML（.musicxml／.xml），或 MP3、WAV、OGG、M4A、AAC、FLAC、WebM 錄音。檔案只在本機讀取，不上傳伺服器。|Choose MIDI (.mid / .midi), uncompressed MusicXML (.musicxml / .xml), or MP3, WAV, OGG, M4A, AAC, FLAC or WebM audio. Files are read on your device, not uploaded.
選擇音樂檔案|Choose a music file
尚未選檔|No file selected
若選音訊，辨識為|Transcribe audio as
主旋律 · 哼唱|Melody · Humming
伴奏 · 單音樂句|Accompaniment · Single-note phrase
低音 · 單音樂句|Bass · Single-note phrase
鼓節奏 · 口技|Drums · Beatboxing
音訊限 45 秒／30 MB，依瀏覽器解碼能力讀取。適合單人哼唱或口技；混音歌曲不能還原完整多軌。樂譜限 5 MB；目前不讀取 .mxl 壓縮樂譜或各軟體專用工程檔。|Audio: up to 45 seconds / 30 MB, subject to browser decoding support. Best for solo humming or beatboxing; mixed songs cannot be restored as separate tracks. Scores: up to 5 MB. Compressed .mxl and proprietary DAW projects are not supported.
讀取後先預覽，採用才會修改作品。|Preview first. Your composition changes only when you apply the result.
來源開始拍（從 0 起）|Source start beat (from 0)
採用片段長度|Excerpt length
2 小節 · 8 拍|2 bars · 8 beats
4 小節 · 16 拍|4 bars · 16 beats
8 小節 · 32 拍|8 bars · 32 beats
片段放在作品第 0 拍開始。對應的軌道會被取代並鎖定；最多四個聲部，多餘聲部可另選。這版每小節固定 4 拍。|The excerpt starts at beat 0 in your project. Mapped tracks are replaced and locked. Select up to four source parts; this prototype uses four beats per bar.
採用來源速度（會影響整首作品）|Use source tempo (affects the whole composition)
採用來源調號（其餘音軌不移調）|Use source key (other tracks are not transposed)
對應到內建近似樂器|Map to similar built-in instruments
試聽採用後的作品|Preview the resulting composition
採用所選聲部與片段|Apply selected parts and excerpt
本專案專用格式／AI 複製貼上|Project format / Paste from AI
儲存專案 JSON|Save project JSON
選擇專案 JSON 檔|Open project JSON file
匯出文字譜|Export text score
這區只使用 Loop Garden 專案格式。AI 回傳的完整 JSON 可直接貼在下方，不必另存檔案。也可選擇 .json 或內含相同 JSON 的 .txt，讀取後再套用。|This section accepts Loop Garden project data only. Paste complete JSON from AI directly, or open a .json file (or .txt containing the same JSON), then apply it.
希望 AI 怎麼改？|What would you like AI to change?
產生 AI 編曲要求|Create an AI arrangement prompt
複製下方內容|Copy the text below
編曲要求會出現在這裡。也可貼入 AI 回傳的完整專案 JSON，再按匯入。|Your arrangement prompt appears here. You can also paste complete project JSON from AI, then apply it.
檢查並套用專案 JSON|Validate and apply project JSON
將要求貼到你使用的 AI，再把完整 JSON 貼回此欄。按「檢查並套用」會取代完整作品；格式錯誤則不修改。其他軟體的 JSON 不是本專案格式。|Send the prompt to your AI, then paste the complete JSON here. Validate and apply replaces the whole project; invalid data changes nothing. JSON from unrelated apps is not this project's format.
音源與原型範圍|Sound sources and prototype scope
MP3 編碼使用|MP3 encoding uses
lamejs／LAME（LGPL，原始碼）|lamejs / LAME (LGPL, source code)
授權說明|License notice
音源來源|Sample source
鍵盤與撥弦|Keys and plucked strings
管弦樂 · 弦樂|Orchestra · Strings
管弦樂 · 管樂|Orchestra · Winds and brass
中國樂器 · 合成近似|Chinese instruments · Synthesized approximations
電子合成器|Synthesizers
人聲與節奏|Voice and percussion
鋼琴|Piano
木吉他|Acoustic guitar
電貝斯|Electric bass
小提琴 · 獨奏撥弦（取樣）|Violin · Solo pizzicato (sampled)
小提琴 · 群奏撥弦（取樣）|Violin · Section pizzicato (sampled)
大提琴 · 群奏撥弦（取樣）|Cello · Section pizzicato (sampled)
小提琴 · 獨奏（取樣）|Violin · Solo (sampled)
小提琴 · 群奏（取樣）|Violin · Section (sampled)
中提琴 · 群奏（取樣）|Viola · Section (sampled)
大提琴 · 群奏（取樣）|Cello · Section (sampled)
雙簧管 · 獨奏（取樣）|Oboe · Solo (sampled)
法國號 · 獨奏（取樣）|French horn · Solo (sampled)
豎琴（取樣）|Harp (sampled)
小提琴|Violin
長笛|Flute
小號|Trumpet
二胡（合成近似）|Erhu (synthesized approximation)
琵琶（合成近似）|Pipa (synthesized approximation)
古箏（合成近似）|Guzheng (synthesized approximation)
竹笛（合成近似）|Dizi (synthesized approximation)
正弦波合成器|Sine synth
三角波合成器|Triangle synth
鋸齒波合成器|Sawtooth synth
方波合成器|Square synth
合成母音|Synthesized vowel
合成鼓|Synthesized drums
主旋律|Melody
和弦伴奏|Chord accompaniment
伴奏|Accompaniment
低音|Bass
節奏|Rhythm
音源原貌|Original sound
3 聲部合奏模擬|3-voice ensemble simulation
6 聲部合奏模擬|6-voice ensemble simulation
鎖定|Lock
環境／冥想|Ambient / Meditation
抒情／鋼琴|Ballad / Piano
流行|Pop
電子／舞曲|Electronic / Dance
爵士感|Jazz-inspired
管弦／電影感|Orchestral / Cinematic
中式五聲方向|Chinese pentatonic-inspired
平靜|Calm
明亮|Bright
憂鬱|Melancholy
緊張|Tense
A · 左側控制台|A · Controls on the left
B · 逐步工作區|B · Step-by-step layout
C · 編輯與混音優先|C · Editing and mixing first
整列切換：原音 → 升半音 → 原音|Whole row: natural → sharp → natural
整列切換：原音 → 降半音 → 原音|Whole row: natural → flat → natural
整列切換：原音 → 升半音 → 降半音 → 原音|Whole row: natural → sharp → flat → natural
拖曳改音長；點一下選取音符|Drag to resize; click to select the note
合成近似：由程式產生，先供介面與音樂測試；不代表真實樂器的錄音品質。|Synthesized approximation for interface and music testing; not a recording of the real instrument.
程式合成音色。|Algorithmically synthesized sound.
VSCO 2 CE · 真實群奏取樣（CC0），少量音高覆蓋，部分音需移調。|VSCO 2 CE · Recorded section samples (CC0). Sparse pitch coverage; some notes are transposed.
VSCO 2 CE · 真實樂器取樣（CC0）。|VSCO 2 CE · Real instrument samples (CC0).
tonejs-instruments · 真實樂器取樣（CC BY 3.0）。|tonejs-instruments · Real instrument samples (CC BY 3.0).
WAV：完整音色與效果，適合遊戲／影片。含 3 秒尾音，非無縫循環檔。|WAV: full sounds and effects for games / video. Includes a 3-second tail; not a seamless loop.
MP3：192 kbps 立體聲，檔案較小；完整音色與效果，含 3 秒尾音。|MP3: 192 kbps stereo with full sounds and effects. Smaller file, including a 3-second tail.
MIDI：多軌音符與速度，供其他編曲軟體編輯。音色使用通用近似，不含取樣與混音效果。|MIDI: multitrack notes and tempo for other music apps. Uses approximate GM instruments; samples and mixing effects are not included.
MusicXML：4/4 樂譜，保留音高、節奏、調號、休止及跨小節連音。不含原音源與混音效果；自由節奏可能需整理記譜。|MusicXML: 4/4 score with pitch, rhythm, key, rests and ties across bars. No original sounds or mixing effects; free timing may need notation cleanup.
音符已更新|Notes updated
已匯入完整譜曲，可以播放與編輯|Project loaded. Ready to play and edit.
已複製|Copied
請按 Ctrl+C 複製|Press Ctrl+C to copy
編曲要求已產生，請複製到你使用的 AI|Prompt ready. Copy it into your preferred AI chat.
正在製作 MP3…|Encoding MP3…
正在載入選用的內建音源…|Loading the selected built-in sounds…
選用音源已就緒 · 中國樂器目前為合成近似|Sounds ready · Chinese instruments are synthesized approximations
辨識完成。先試聽，確認後再採用；原作品尚未變動。|Transcription ready. Preview it before applying; your composition has not changed.
正在讀取本機錄音…|Reading the audio file locally…
正在辨識音高、音長與休止…|Detecting pitch, note lengths and rests…
尚未分析這段錄音。|This recording has not been analyzed yet.
正在試聽辨識結果；上方「停止」可結束。|Previewing the transcription. Press Stop to finish.
這次沒有可採用的辨識結果，原作品未變動。|No transcription is available. Your composition has not changed.
已切換輸入聲部，請按辨識／重新分析，或錄製新的聲音。|Target track changed. Analyze again or record new audio.
已採用輸入。下方音符可直接調整音高、長短與刪除；其他伴奏仍可另外生成。|Input applied. Edit pitch and duration or delete notes below. You can still generate accompaniment separately.
已採用鍵盤錄製並鎖定此軌；可再產生其他伴奏。|Applied keyboard recording and locked the track. You can generate accompaniment separately.
已採用所選片段，對應軌道已鎖定；未對應的軌道保留。|Applied the excerpt and locked mapped tracks. Unmapped tracks were preserved.
目前軌道已鎖定，請先解鎖再採用。|Unlock the current track before applying.
鍵盤譜目前為有音高的旋律，請先將此軌換成旋律樂器。|Keyboard notes are pitched. Choose a melodic instrument for this track first.
等待第一個按鍵；放開按鍵會記錄音長。完成後按結束。|Waiting for the first key. Release keys to capture their duration, then press Finish.
尚未錄到音符。|No notes recorded yet.
未取得麥克風權限。可在瀏覽器允許麥克風，或改用匯入錄音。|Microphone access was not granted. Allow it in your browser or import an audio file.
錄音中斷，請重新錄製|Recording interrupted. Please try again.
正在錄音 · 請哼一段旋律，完成後按「結束錄音」|Recording · Hum a phrase, then press Stop recording.
已結束錄音並保留辨識流程，切回口哼區可查看。|Recording stopped. Return to Microphone to see the transcription.
已換隨機種子；按生成新版本套用，不會立即更改作品。|New seed selected. Generate to apply it; your composition has not changed yet.
播放時從下一輪開始變化；鎖定與哼唱／手寫主旋律保留。|Variation starts on the next loop. Locked tracks and entered melodies are preserved.
已關閉每輪變化，保留目前顯示版本。|Loop variation disabled. Keeping the displayed version.
已凍結 · 可儲存或匯出|Frozen · Ready to save or export
已停止並凍結目前顯示版本。再次播放會固定重播；可儲存專案或匯出 WAV。|Stopped and froze the displayed version. Playback now repeats it unchanged; you can save or export it.
請先解鎖此軌再修改演奏法。|Unlock this track before changing articulation.
請先解鎖此軌再套用吉他和弦。|Unlock this track before applying guitar chords.
請先將目前編輯軌道設為木吉他。|Select acoustic guitar for the current track first.
這版拉奏／撥弦切換支援獨奏／群奏小提琴及群奏大提琴。|Bowed/plucked switching supports solo/section violin and section cello.
請輸入有效拍數範圍，結束拍不可超過作品長度。|Enter a valid beat range within the project length.
已套用吉他和弦與演奏順序。這是單音取樣組合，尚非真實掃弦錄音。|Applied guitar voicings and playing order using individual samples, not recorded strums.
這個軌道已鎖定，請先解鎖再套用規則節奏。|Unlock the track before applying a Euclidean rhythm.
請確認敲擊數、旋轉格數與隨機種子有效。|Check the hit count, rotation and random seed.
請輸入有效的隨機種子|Enter a valid random seed
至少選一個來源聲部與目標軌道|Map at least one source part to a target track.
每個目標軌道只能對應一個來源；請將多餘聲部設為略過。|Each target track can receive only one source. Set extra parts to Skip.
所選片段沒有可採用音符|The selected excerpt contains no usable notes.
來源速度超出 50–180 BPM；取消「採用來源速度」後，可用目前速度演奏。|Source tempo is outside 50–180 BPM. Uncheck Use source tempo to use the current tempo instead.
開始拍需落在來源範圍內|The start beat must fall within the source.
請先選檔|Choose a file first.
正在讀取本機檔案…|Reading the file locally…
音訊交由上方哼唱／口技區辨識：先試聽，再按「採用到指定聲部」。|Audio is being transcribed in the Microphone section. Preview it, then apply it to a track.
正在試聽採用後的作品；尚未修改目前專案。按「停止」可結束。|Previewing the resulting composition without changing your project. Press Stop to finish.
MIDI 使用本機近似樂器；效果器、彎音、表情控制不會完整還原。|MIDI uses similar local instruments. Effects, pitch bends and expression are not fully reproduced.
只讀取演奏音符；排版、歌詞、裝飾、反覆／跳段與效果不會完整還原。|Only performance notes are read. Layout, lyrics, ornaments, repeats/jumps and effects are not fully reproduced.
其他鼓組音色將近似對應為大鼓、小鼓或鈸。|Other percussion sounds are approximated as kick, snare or hi-hat.
來源非 4/4 拍：保留實際拍數，編輯區仍以每 4 拍分格。|The source is not in 4/4. Beat timing is preserved; the editor groups four beats per bar.
略過|Skip
格式需為 loop-garden-v1|Expected the loop-garden-v1 project format
原作品未變動。|Your composition has not changed.
作品未變動。|Your composition has not changed.
調式已更新；調內音依音階級數轉換，鼓點與節奏保留。|Scale updated. Diatonic notes follow their scale degrees; drum hits and timing are preserved.
自訂可用音。|Choose custom available notes.
更換調性會調整現有非鼓音軌。|Changing the key transposes existing pitched tracks.
左側音名固定。點音名整列切換：C/F 不降，E/B 不升，其餘可升可降；升降音以琥珀色標示。|Row labels stay fixed when scrolling. Click to cycle accidentals: C/F have no flat option, E/B no sharp option; other rows have both. Altered notes are amber.
生成時改變音符長短、和弦奏法、低音與鼓點。情緒不會自動更換 Key 或大小調。|Generation varies note lengths, chord patterns, bass and drums. Mood does not change the key or scale.
五聲方向優先使用選音中的五聲音；若完全沒有交集，保留你的選音。|Pentatonic style favors selected notes in the pentatonic scale. If none match, your selected notes are kept.
WAV 已匯出（含 3 秒效果尾音；目前顯示的一版，非專用無縫循環檔）|WAV exported with a 3-second effect tail: the displayed version, not a seamless loop.
（取樣）|(sampled)
已匯出。| exported. 
已生成：|Generated: 
 · 鎖定聲部已保留| · Locked tracks preserved
匯出失敗：|Export failed: 
匯入失敗，作品未變動：|Import failed; composition unchanged: 
無法匯入：|Unable to import: 
無法採用：|Unable to apply: 
試聽失敗：|Preview failed: 
專案讀取失敗：|Could not read project: 
無法讀取：|Could not read audio: 
無法開始錄音：|Could not start recording: 
音源載入失敗：|Could not load sound: 
無法辨識音名：|Invalid note name: 
不支援的和弦：|Unsupported chord: 
保留主旋律，只改寫伴奏，讓它適合安靜的遊戲場景。|Keep the melody and rewrite only the accompaniment for a quiet game scene.
`.trim().split('\n').map(line=>{const i=line.indexOf('|');return [line.slice(0,i),line.slice(i+1)]}));

Object.assign(UI_EN, {
  "合奏模擬疊加同一音源，與真正群奏取樣不同。": "Ensemble simulation layers the same sound; it differs from recorded section samples.",
  "未知曲風": "Unknown musical style",
  "未知情緒": "Unknown mood",
  "保留樂器設定無效": "Invalid keep-instruments setting",
  "速度或小節數超出範圍": "Tempo or bar count is outside the supported range",
  "調性設定無效": "Invalid key or scale",
  "選音無效": "Invalid note selection",
  "原型需要四個聲部": "This prototype requires four tracks",
  "合奏模擬設定無效": "Invalid ensemble setting",
  "聲部資料無效": "Invalid track data",
  "音符演奏法無效": "Invalid note articulation",
  "音符時間、音高或力度無效": "Invalid note timing, pitch or velocity",
  "音符數量超過原型限制": "Too many notes for this prototype",
  "格式錯誤：": "Invalid note format: ",
  "匯入失敗：": "Import failed: ",
  "請輸入 1–32 個和弦名稱": "Enter 1–32 chord symbols",
  "和弦指板配置（MIDI 音高，低弦至高弦）：": "Guitar voicings (low to high string): ",
  "無法辨識和弦：": "Invalid chord: ",
  "請使用小於 30 MB 的短錄音": "Use a short recording under 30 MB",
  "這版最多辨識 45 秒，請使用較短錄音": "Recordings are limited to 45 seconds; use a shorter excerpt",
  "這個瀏覽器不支援錄音，請改用匯入音檔": "Recording is not supported in this browser; import an audio file instead",
  "分析時間過長，請縮短錄音": "Analysis timed out; use a shorter recording",
  "沒有找到穩定旋律。請靠近麥克風、減少背景聲並用清楚的「嗯」或「啦」哼唱": "No stable melody found. Move closer to the microphone, reduce background noise and hum clearly.",
  "檔案上限 30 MB": "File size limit: 30 MB",
  "請先等目前的辨識或錄音結束": "Wait for the current recording or analysis to finish",
  "樂譜檔案上限 5 MB，請使用較短片段": "Score file limit: 5 MB. Use a shorter excerpt.",
  "請選 MIDI、未壓縮 MusicXML 或支援的音訊；專案 JSON 請用下方專案區。": "Choose MIDI, uncompressed MusicXML or supported audio. Use the project section for project JSON.",
  "專案檔上限 5 MB": "Project file limit: 5 MB",
  "最多讀取 64 個來源聲部": "At most 64 source parts can be read",
  "來源音符過多，請先匯出較短片段": "Too many source notes; export a shorter excerpt first",
  "音符時間資料無效": "Invalid note timing",
  "檔案沒有可匯入的音符": "No importable notes in this file",
  "MIDI 資料不完整": "Incomplete MIDI data",
  "MIDI 時間編碼無效": "Invalid MIDI time encoding",
  "不是標準 MIDI 檔案": "Not a Standard MIDI File",
  "目前支援 MIDI 格式 0／1、以拍數計時；不支援格式 2 或 SMPTE": "Supports MIDI format 0/1 with beat-based timing, not format 2 or SMPTE",
  "MIDI 軌道數過多": "Too many MIDI tracks",
  "找不到 MIDI 軌道": "MIDI track not found",
  "MIDI 軌道被截斷": "Truncated MIDI track",
  "MIDI 事件過多": "Too many MIDI events",
  "MIDI running status 無效": "Invalid MIDI running status",
  "MIDI 中繼資料被截斷": "Truncated MIDI metadata",
  "MIDI 速度無效": "Invalid MIDI tempo",
  "MIDI SysEx 被截斷": "Truncated MIDI SysEx",
  "不支援的 MIDI 系統事件": "Unsupported MIDI system event",
  "MIDI 事件資料無效": "Invalid MIDI event data",
  "這份 MIDI 有中途變速；目前僅支援固定速度，請先另存固定速度片段。": "This MIDI file changes tempo. Only constant-tempo excerpts are supported; export one first.",
  "不接受含自訂實體的 XML": "XML with custom entities is not accepted",
  "MusicXML 格式不完整": "Incomplete MusicXML",
  "目前支援未壓縮的 score-partwise MusicXML；請另存為 .musicxml": "Use uncompressed score-partwise MusicXML, saved as .musicxml",
  "MusicXML divisions 無效": "Invalid MusicXML divisions",
  "拍號無效": "Invalid time signature",
  "目前不支援同聲部各譜表不同移調或重複八度": "Per-staff transposition and octave doubling are not supported",
  "MusicXML 聲部時間無效": "Invalid MusicXML voice timing",
  "速度無效": "Invalid tempo",
  "此樂譜包含中途變速，請先另存固定速度片段": "This score changes tempo; export a constant-tempo excerpt first",
  "音符過多": "Too many notes",
  "音長無效": "Invalid note duration",
  "目前不支援微分音": "Microtonal pitches are not supported",
  "不支援的音符類型": "Unsupported note type",
  "音高無效": "Invalid pitch",
  "每輪變化設定無效": "Invalid loop variation setting",
  "隨機種子需為 1–4294967295": "Random seed must be between 1 and 4294967295",
  "循環變化程度無效": "Invalid variation amount",
  "音名列設定無效": "Invalid pitch-row setting",
  "音名升降設定無效": "Invalid row accidental",
  "音符列設定無效": "Invalid note row",
  "左右位置無效": "Invalid pan value",
  "效果器設定無效": "Invalid effects settings",
  "來源包含多個調號；只採用第一個調號，音高保留。": "Multiple key signatures found. Only the first is used; pitches are preserved.",
  "來源有演奏中換音色；每聲部使用一種近似音色。": "Instrument changes occur during playback. Each part uses one approximate sound.",
  "有未結束音符，已在軌道結尾結束。": "Unfinished notes were ended at the track boundary.",
  "裝飾音已略過。": "Grace notes were skipped.",
  "缺少鼓音對應，已使用小鼓近似。": "Missing percussion mapping; using a snare approximation.",
  "辨識器無法啟動": "Unable to start the transcription worker",
  "自訂": "custom",
  "取樣音源包括原有六種樂器，以及 VSCO 2 CE 的小提琴獨奏／群奏、中提琴群奏、大提琴群奏、法國號、雙簧管、豎琴。VSCO 取樣為 CC0。中國樂器二胡、琵琶、古箏、竹笛目前為程式合成近似，不是真實取樣。來源：N. P. Brosowsky / tonejs-instruments，原有取樣 CC BY 3.0；詳細來源、取樣音高對照與授權保存在 assets 及 SOURCES.md。鼓與「合成母音」由程式合成，母音不是錄製的真人合唱。此版用少量音高取樣移調，音色與演奏真實感仍需評估。已提供 WAV、MP3、MIDI、MusicXML 輸出。MIDI／MusicXML 使用通用音色對應，不含原音源與完整效果；專門的無縫循環匯出尚未提供。": "Samples include the original six instruments plus VSCO 2 CE solo/section violin, viola and cello sections, French horn, oboe and harp (CC0). Erhu, pipa, guzheng and dizi are original synthesized approximations, not recordings. Original tonejs-instruments samples by N. P. Brosowsky are CC BY 3.0; sources and pitch mappings are documented in assets and SOURCES.md. Drums and vowel sounds are synthesized; the vowel is not a real choir. Sparse samples are transposed between pitches, so realism remains limited. WAV, MP3, MIDI and MusicXML exports are available. MIDI/MusicXML use approximate instrument mappings without original sounds or full effects. Dedicated seamless-loop export is not available."
});
