# Instrument sources and limitations

## tonejs-instruments

Original six instruments: N. P. Brosowsky, https://github.com/nbrosowsky/tonejs-instruments . Samples CC BY 3.0; code MIT. See assets/LICENSE.md and assets/sample-source-info.txt. No samples from this source have been renamed as Chinese instruments.

## VSCO 2 Community Edition

https://github.com/sgossner/VSCO-2-CE and https://versilian-studios.com/vsco-community/ . Recorded by Sam Gossner and Simon Dalzell; sample cutting by Elan Hickler / Soundemote. CC0; original notice retained as assets/VSCO-LICENSE.txt. Exact downloaded paths retained in assets/download-plan.json.

Included: solo violin (Arco Vib), violin section (susVib), viola section (susvib), cello section (susvib), solo horn, solo oboe, harp. These use separate recordings, not duplicated solo voices to claim an ensemble. Sample filenames in several VSCO sublibraries use a different octave convention: their actual roots are mapped one octave above their filename octave; Solo Violin and Harp retain scientific pitch naming. Pitch checks on downloaded sustained samples established these mappings. Sparse samples and transposition do not reproduce a complete orchestra or all articulations.

## Chinese instruments

Erhu, pipa, guzheng and dizi are explicitly labelled **synthetic approximations**. Original plucked-string / harmonic synthesis code is used; no real Chinese instrument sample is bundled. Quality is experimental.

A genuine erhu source was identified: Berklee Intersectional Soundbox Archive, https://remix.berklee.edu/bisa-chinese-erhu/ , CC BY. Instrumentalist Yu Chun Chan, recording engineer Josefina Ugarte, editor Asher Deverna. Regular A4: https://remix.berklee.edu/bisa-chinese-erhu-oneshots-vibrato/7/ . Its download was blocked by the source's browser challenge, so **it has not been integrated**. No suitable redistributable pipa sample was established during this pass. Replace these approximations with verified samples in a later pass; never relabel guitar or violin samples as Chinese instruments.

## Pizzicato additions
VSCO 2 CE (CC0), same provenance as above. Solo Violin/Pizz, Violin Section/Pizz, Cello Section/pizzT. Six original WAV files listed in assets/articulation-plan.json; solo violin uses scientific octave naming, section sample roots are mapped one octave above filenames.

## MP3 encoder
lamejs 1.2.1, unmodified browser build, LGPL. Loaded locally in a separate worker. Upstream and source: https://github.com/zhuker/lamejs ; distribution: https://cdn.jsdelivr.net/npm/lamejs@1.2.1/lame.min.js . Upstream license notice retained in vendor/lame-LICENSE.txt.
