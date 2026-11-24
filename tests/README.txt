t20.js – CURRENT release test (units 1–14, merged Testes, Palavras units, Verbos sound). Run: node tests/t20.js [file:///path/index.html] [screenshot-dir]
Older scripts below were written for the v15 Livro/Caderno tabs and are kept for reference.
Playwright test scripts (node). They expect the assembled page at ../passaporte-quiz.html —
change the path in the first lines to your local build output before running.
t3.js  – runs all variants with correct answers (expects 200/200)
t15.js – opens every tab and every Palavras/Verbos mode
t16.js – Easy/Hard checks (hint limit, half points, Hard without hints/accent keys)
t17-19 – layout / leftover-progress / spacing checks with screenshots
