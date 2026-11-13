# Third-party notices

The root MIT license does not relicense the following materials.

| Material | License | Attribution and source |
| --- | --- | --- |
| Original six sampled instruments from tonejs-instruments | CC BY 3.0 | N. P. Brosowsky; [upstream](https://github.com/nbrosowsky/tonejs-instruments). Original contributor information: `assets/sample-source-info.txt`; upstream notice: `assets/LICENSE.md`. |
| VSCO 2 Community Edition samples | CC0 | Sam Gossner and Simon Dalzell; sample cutting by Elan Hickler / Soundemote. [Upstream](https://github.com/sgossner/VSCO-2-CE); `assets/VSCO-LICENSE.txt`. |
| lamejs 1.2.1 / LAME MP3 encoder | LGPL-3.0 (lamejs package metadata) | [lamejs source](https://github.com/zhuker/lamejs), [LAME](https://lame.sourceforge.net/). Unmodified `vendor/lame.min.js`, upstream notice `vendor/lame-LICENSE.txt`, license texts `vendor/LGPL-3.0.txt` and `vendor/GPL-3.0.txt`. |

The matching npm source distribution is included as `vendor/lamejs-1.2.1-source.tgz`, including JavaScript source and build files. It comes from https://registry.npmjs.org/lamejs/-/lamejs-1.2.1.tgz (SHA-1: `0f92d38729213f106d4a19ded20821da7e89c8e4`). The encoder is loaded as a separate script by `mp3-worker.js`; you can replace that script with a compatible modified build. Loop Garden adds no restriction on modifying or debugging this LGPL component.

CC BY 3.0 terms: https://creativecommons.org/licenses/by/3.0/ . Preserve appropriate sample credit when distributing music that uses those recordings. Exported audio is not automatically free of sample-license obligations. Chinese instrument approximations, drums and synthetic vowels use original synthesis code, not recorded Chinese instruments or a human choir.

See `SOURCES.md` for sample selection and pitch-mapping details.
