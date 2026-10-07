AI Log
This file records every time AI was used on this project: the prompt, what the AI produced, and what we kept, changed or threw away.

Tool: Perplexity Computer (AI assistant)

Used by: Margarita Nikulina

Date: 7 October 2026

Commit tag: AI-assisted commits are marked [ai]; all other work is [manual]

1. Mobile navbar hidden behind the hero (home page)
   Time: 15:14

Prompt

there is an issue and the mobile navbar hides behind the hero page on the main page when I click on the burger menu on the mobile version, why?

What the AI produced

Found the cause: a z-index conflict. .hero in hero.css has position: relative; z-index: 20;, while .mobile-nav-container in styles.css had z-index: 1. The hero was drawn on top of the open menu.

Explained why it only happened on the home page: hero.css is only loaded in index.html.

Suggested three fixes:

Raise the menu's z-index above 20 (it suggested 100).

Or remove z-index: 20 from .hero.

Optional: use position: fixed; inset: 0; so the menu covers the screen even after scrolling.

What I kept / changed / threw away

Kept: the explanation of the cause. I fixed the code myself.

Changed: I set .mobile-nav-container to z-index: 60 instead of 100, which works because it is still higher than 20.

Threw away: removing the hero's z-index, and the position: fixed suggestion. The menu still uses position: absolute.

My own extra change: I also set .container to z-index: 60. The AI later pointed out that this has no effect, because .container has no position set.

Commit: [ai]Fix the bug with the mobile nav bar, merged in PR #58

2. Burger menu not working on the Events page
   Time: 15:20

Prompt

also now it does nothing when I try to open hamburger menu on the events section, why?

What the AI produced

Found the cause: events.html never loaded script.js, so nothing was listening for clicks on the burger icon. ourfood.html was missing it too.

Fix: add <script src="script.js"></script> just before </body>.

Also found a related bug: on events.html, the mobile "OPEN HOURS" link points to #openinghours-anchor-link, which only exists on the home page. The suggested fix was index.html#openinghours-anchor-link.

What I kept / changed / threw away

Kept: added <script src="script.js"></script> to events.html.

Not done yet: the "OPEN HOURS" link fix on events.html. It is in the README to-do list.

Not done yet: ourfood.html has no mobile menu at all yet, so there is nothing for the script to control.

3. "Still behind the main page" after deploying
   Time: 15:25

Prompt

I deployed it and changed it and still the mobile nav bar is behind the main page!
(with an updated project zip attached)

What the AI produced

Checked the updated code and confirmed the fix was merged into main.

Tested the local files and the live GitHub Pages site on a phone-sized screen (390px). The menu opened in front of the hero in both cases.

Explained the real cause: browser caching. GitHub Pages sends files with cache-control: max-age=600, so the phone was still using the old styles.css for up to 10 minutes.

Suggested opening the site in a private tab, waiting about 10 minutes, or doing a hard refresh.

Pointed out that z-index on .container does nothing and should be reverted.

What I kept / changed / threw away

Kept: the caching explanation. No code change was needed; the fix was already live.

Not done yet: reverting the unused z-index on .container. It is in the README to-do list.

4. Writing the README
   Time: 15:31

Prompt

Please write me a good README file for this projecty

What the AI produced

A complete README.md covering: a project description, a live site link, a pages table, features, tech stack, file structure, how to run it locally, how the mobile menu works, design tokens, team workflow, known issues, team members and license.

While reading the code, it found that index.html links to a home.css file that doesn't exist. It added this to the known issues list.

What I kept / changed / threw away:

I read the file and understood it and pushed it into the repository
