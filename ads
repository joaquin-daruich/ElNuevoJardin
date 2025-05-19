[33mcommit dfedf91ddfd9bc08ca65956cef3b0b2651e3c4a6[m[33m ([m[1;36mHEAD[m[33m -> [m[1;32mmain[m[33m)[m
Author: joaquin-daruich <joaquindaruichh@gmail.com>
Date:   Sun May 18 21:55:05 2025 -0300

    ahora saque todo de vuelta

 ...jard\303\255n_de_las_Delicias,_de_El_Bosco.jpg" | Bin [31m14344176[m -> [32m0[m bytes
 autentificarBlogger.py                             |  64 [31m--[m
 bulma.png                                          | Bin [31m933257[m -> [32m0[m bytes
 bulma2.png                                         | Bin [31m868624[m -> [32m0[m bytes
 bulma3.png                                         | Bin [31m842672[m -> [32m0[m bytes
 cambio.png                                         | Bin [31m729858[m -> [32m0[m bytes
 generarLink.py                                     | 169 [31m------[m
 imagenes_procesadas/bulma!.png                     | Bin [31m998636[m -> [32m0[m bytes
 imagenes_procesadas/bulma2!.png                    | Bin [31m919153[m -> [32m0[m bytes
 imagenes_procesadas/bulma3!.png                    | Bin [31m915819[m -> [32m0[m bytes
 imagenes_procesadas/cambio!.png                    | Bin [31m796080[m -> [32m0[m bytes
 imagenes_procesadas/es esta!.png                   | Bin [31m784510[m -> [32m0[m bytes
 imagenes_procesadas/imagen_transformada.jpg        | Bin [31m1499682[m -> [32m0[m bytes
 imagenes_procesadas/krilinModi.gif                 | Bin [31m3184201[m -> [32m0[m bytes
 imagenes_procesadas/krillin-quieto!.gif            | Bin [31m43509[m -> [32m0[m bytes
 "imagenes_procesadas/se\303\261alar2.png"          | Bin [31m680857[m -> [32m0[m bytes
 pixai.py                                           | 235 [31m-------[m
 prueba.py                                          | 674 [31m---------------------[m
 rule34.py                                          |  61 [31m--[m
 "se\303\261alar.png"                               | Bin [31m629647[m -> [32m0[m bytes
 20 files changed, 1203 deletions(-)

[33mcommit 89fa3e7630f5e1d781f627a2714f7069f7113652[m
Author: joaquin-daruich <joaquindaruichh@gmail.com>
Date:   Sun May 18 21:52:55 2025 -0300

    bueno ahora si no hay nada

 tokens/README.md               |   12 [31m-[m
 tokens/client_secret.json      |    1 [31m-[m
 tokens/netlify.toml            |    6 [31m-[m
 tokens/package-lock.json       | 3701 [31m----------------------------------------[m
 tokens/package.json            |   33 [31m-[m
 tokens/sesion-iniciada.session |  Bin [31m28672[m -> [32m0[m bytes
 tokens/token.json              |    1 [31m-[m
 7 files changed, 3754 deletions(-)

[33mcommit a1cc634783ed97a71525cc6d156a15e1ce363639[m
Author: joaquin-daruich <joaquindaruichh@gmail.com>
Date:   Sun May 18 21:52:13 2025 -0300

    ya no hay tokens ni acortadores

 README.md => tokens/README.md                             |   0
 client_secret.json => tokens/client_secret.json           |   0
 netlify.toml => tokens/netlify.toml                       |   0
 package-lock.json => tokens/package-lock.json             |   0
 package.json => tokens/package.json                       |   0
 sesion-iniciada.session => tokens/sesion-iniciada.session | Bin
 token.json => tokens/token.json                           |   0
 7 files changed, 0 insertions(+), 0 deletions(-)

[33mcommit 34647cbb9d56271a83901ae1456ecec596623ea2[m
Author: joaquin-daruich <joaquindaruichh@gmail.com>
Date:   Sun May 18 21:50:26 2025 -0300

    fok acortadores

 ...jard\303\255n_de_las_Delicias,_de_El_Bosco.jpg" | Bin [31m0[m -> [32m14344176[m bytes
 autentificarBlogger.py                             |  64 [32m++[m
 bulma.png                                          | Bin [31m0[m -> [32m933257[m bytes
 bulma2.png                                         | Bin [31m0[m -> [32m868624[m bytes
 bulma3.png                                         | Bin [31m0[m -> [32m842672[m bytes
 cambio.png                                         | Bin [31m0[m -> [32m729858[m bytes
 client_secret.json                                 |   1 [32m+[m
 es esta.png                                        | Bin [31m0[m -> [32m725070[m bytes
 generarLink.py                                     | 169 [32m++++++[m
 krillin-quieto.gif                                 | Bin [31m0[m -> [32m40638[m bytes
 krillin.gif                                        | Bin [31m0[m -> [32m1999313[m bytes
 package-lock.json                                  |  86 [32m++[m[31m-[m
 package.json                                       |   2 [32m+[m[31m-[m
 pixai.py                                           | 235 [32m+++++++[m
 prueba.py                                          | 674 [32m+++++++++++++++++++++[m
 rule34.py                                          |  61 [32m++[m
 sesion-iniciada.session                            | Bin [31m0[m -> [32m28672[m bytes
 "se\303\261alar.png"                               | Bin [31m0[m -> [32m629647[m bytes
 src/Inicio.jsx                                     |  24 [32m+[m[31m-[m
 token.json                                         |   1 [32m+[m
 20 files changed, 1308 insertions(+), 9 deletions(-)

[33mcommit 46728595a3ba91c954711f75d34c6506a3168e13[m[33m ([m[1;31morigin/main[m[33m)[m
Author: joaquin-daruich <joaquindaruichh@gmail.com>
Date:   Fri May 16 14:12:10 2025 -0300

    Subir imágenes generadas y procesadas automáticamente

 imagenes_procesadas/bulma!.png              | Bin [31m1002808[m -> [32m998636[m bytes
 imagenes_procesadas/bulma2!.png             | Bin [31m913634[m -> [32m919153[m bytes
 imagenes_procesadas/bulma3!.png             | Bin [31m886075[m -> [32m915819[m bytes
 imagenes_procesadas/cambio!.png             | Bin [31m791049[m -> [32m796080[m bytes
 imagenes_procesadas/es esta!.png            | Bin [31m776465[m -> [32m784510[m bytes
 imagenes_procesadas/imagen_transformada.jpg | Bin [31m1542421[m -> [32m1499682[m bytes
 imagenes_procesadas/krillin-quieto!.gif     | Bin [31m42907[m -> [32m43509[m bytes
 "imagenes_procesadas/se\303\261alar2.png"   | Bin [31m693785[m -> [32m680857[m bytes
 8 files changed, 0 insertions(+), 0 deletions(-)

[33mcommit 0e2ed7cbb2a449b5d079986111390426fffe02b2[m
Author: joaquin-daruich <joaquindaruichh@gmail.com>
Date:   Fri May 16 14:08:07 2025 -0300

    Subir imágenes generadas y procesadas automáticamente

 imagenes_procesadas/bulma!.png              | Bin [31m979912[m -> [32m1002808[m bytes
 imagenes_procesadas/bulma2!.png             | Bin [31m922816[m -> [32m913634[m bytes
 imagenes_procesadas/bulma3!.png             | Bin [31m904535[m -> [32m886075[m bytes
 imagenes_procesadas/cambio!.png             | Bin [31m780240[m -> [32m791049[m bytes
 imagenes_procesadas/es esta!.png            | Bin [31m778647[m -> [32m776465[m bytes
 imagenes_procesadas/imagen_transformada.jpg | Bin [31m1488076[m -> [32m1542421[m bytes
 imagenes_procesadas/krillin-quieto!.gif     | Bin [31m43539[m -> [32m42907[m bytes
 "imagenes_procesadas/se\303\261alar2.png"   | Bin [31m722538[m -> [32m693785[m bytes
 8 files changed, 0 insertions(+), 0 deletions(-)

[33mcommit 7f0a68257f3866440a4f1ef3f12796ceae233623[m
Author: joaquin-daruich <joaquindaruichh@gmail.com>
Date:   Fri May 16 13:48:41 2025 -0300

    Subir imágenes generadas y procesadas automáticamente

 imagenes_procesadas/bulma!.png              | Bin [31m1008885[m -> [32m979912[m bytes
 imagenes_procesadas/bulma2!.png             | Bin [31m939534[m -> [32m922816[m bytes
 imagenes_procesadas/bulma3!.png             | Bin [31m907341[m -> [32m904535[m bytes
 imagenes_procesadas/cambio!.png             | Bin [31m769680[m -> [32m780240[m bytes
 imagenes_procesadas/es esta!.png            | Bin [31m772544[m -> [32m778647[m bytes
 imagenes_procesadas/imagen_transformada.jpg | Bin [31m1544429[m -> [32m1488076[m bytes
 imagenes_procesadas/krillin-quieto!.gif     | Bin [31m43111[m -> [32m43539[m bytes
 "imagenes_procesadas/se\303\261alar2.png"   | Bin [31m709876[m -> [32m722538[m bytes
 8 files changed, 0 insertio